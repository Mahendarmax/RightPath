import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSurahVerses, surahs } from '../data/quranData'
import { useSettings } from '../context/SettingsContext'
import './VerseView.css'

// Memoized scroll to top button
const ScrollToTopButton = memo(() => {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  
  return (
    <button 
      className="scroll-to-top"
      onClick={handleClick}
      title="Scroll to top"
    >
      ↑
    </button>
  )
})

ScrollToTopButton.displayName = 'ScrollToTopButton'

// Memoized Verse Card Component
const VerseCard = memo(({ 
  verse, 
  index, 
  showArabic, 
  fontSize, 
  verseRefs
}) => {
  return (
    <div 
      className="verse-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      ref={(el) => (verseRefs.current[verse.number] = el)}
    >
      {showArabic && verse.arabic && (
        <div className="arabic-container">
          <div className="verse-number">{verse.number}</div>
          <p className="arabic-text">
            <span dir="rtl">{verse.arabic}</span>
          </p>
        </div>
      )}

      <div className="side-by-side">
        <div className="left-column">
          <div className="column-label">Roman English Transliteration</div>
          <p className="roman-text" style={{ fontSize: `${fontSize}px` }}>
            {verse.roman || ''}
          </p>
        </div>
        <div className="right-column">
          <div className="column-label">Telugu తెలుగు</div>
          <p className="telugu-text" style={{ fontSize: `${fontSize}px` }}>
            {verse.telugu || ''}
          </p>
        </div>
      </div>

      <div className="translation-container">
        <div className="translation-label">
          English Translation
        </div>
        <p className="translation-text" style={{ fontSize: `${fontSize - 2}px` }}>
          {verse.translation || ''}
        </p>
      </div>
    </div>
  )
})

VerseCard.displayName = 'VerseCard'

function VerseView() {
  const { number } = useParams()
  const navigate = useNavigate()
  const { showArabic, fontSize } = useSettings()
  const [verses, setVerses] = useState([])
  const [loading, setLoading] = useState(true)
  const [isSurahPlaying, setIsSurahPlaying] = useState(false)
  const surahAudioRef = useRef(null)
  const verseRefs = useRef({})
  const [bismillah, setBismillah] = useState(null) // Store Bismillah data from API

  useEffect(() => {
    const loadVerses = async () => {
      setLoading(true)
      const surahNumber = parseInt(number)
      
      // Fetch Bismillah from API for surahs other than Al-Fatiha (Surah 1)
      if (surahNumber !== 1) {
        try {
          const [arabicResponse, romanResponse] = await Promise.all([
            fetch('https://api.alquran.cloud/v1/surah/1'),
            fetch('https://api.alquran.cloud/v1/surah/1/en.transliteration')
          ])
          const arabicData = await arabicResponse.json()
          const romanData = await romanResponse.json()
          
          if (arabicData.code === 200 && arabicData.data?.ayahs?.[0] && 
              romanData.code === 200 && romanData.data?.ayahs?.[0]) {
            setBismillah({
              arabic: arabicData.data.ayahs[0].text.trim(),
              roman: romanData.data.ayahs[0].text.trim()
            })
          }
        } catch (e) {
          console.log('Could not fetch Bismillah from API')
          setBismillah(null)
        }
      } else {
        setBismillah(null) // No Bismillah display for Al-Fatiha
      }
      
      // Always use Sahih International
      const data = await getSurahVerses(surahNumber, 'sahih')
      setVerses(data)
      setLoading(false)
      // Scroll to top when surah changes
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // Clear any existing audio
      if (surahAudioRef.current) {
        surahAudioRef.current.pause()
        surahAudioRef.current.src = ''
        surahAudioRef.current = null
      }
      setIsSurahPlaying(false)
    }
    loadVerses()
  }, [number])

  // Handle surah-to-surah playback (full surah)
  const handleSurahPlay = useCallback(async () => {
    try {
      // If surah is playing, toggle pause
      if (isSurahPlaying) {
        if (surahAudioRef.current) {
          surahAudioRef.current.pause()
          setIsSurahPlaying(false)
        }
        return
      }

      // Load full surah audio
      const surahNumber = parseInt(number)
      const surahAudioUrl = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNumber}.mp3`
      
      // Create or reuse audio element
      if (!surahAudioRef.current) {
        const newAudio = new Audio(surahAudioUrl)
        surahAudioRef.current = newAudio

        // Set up event listeners
        newAudio.addEventListener('play', () => {
          setIsSurahPlaying(true)
        })

        newAudio.addEventListener('pause', () => {
          setIsSurahPlaying(false)
        })

        newAudio.addEventListener('ended', () => {
          setIsSurahPlaying(false)
        })

        newAudio.addEventListener('error', (e) => {
          console.error('Surah audio error:', e)
          setIsSurahPlaying(false)
        })
      }

      // Start playing
      try {
        await surahAudioRef.current.play()
      } catch (err) {
        console.error('Play error:', err)
        setIsSurahPlaying(false)
      }
    } catch (error) {
      console.error('Error playing surah audio:', error)
      setIsSurahPlaying(false)
    }
  }, [isSurahPlaying, number, verses])


  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (surahAudioRef.current) {
        surahAudioRef.current.pause()
        surahAudioRef.current.src = ''
        surahAudioRef.current = null
      }
    }
  }, [])

  // Memoize surah lookup - must be before conditional return (Rules of Hooks)
  const surah = useMemo(() => surahs.find(s => s.number === parseInt(number)), [number])

  const handleBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  if (loading) {
    return (
      <div className="verse-view loading">
        <div className="loading-spinner"></div>
        <p>Loading verses...</p>
      </div>
    )
  }

  return (
    <div className="verse-view">
      {surah && (
        <div className="surah-header-fixed">
          <div className="surah-header-content">
            <button 
              className="back-button"
              onClick={handleBack}
              title="Back to previous page"
            >
              ← Back
            </button>
            <div className="surah-name-center">
              <h2 className="surah-title-fixed">{surah.name}</h2>
              <p className="surah-subtitle-fixed">{surah.nameEnglish} • {surah.nameTelugu}</p>
            </div>
            <button 
              className="play-surah-button"
              onClick={handleSurahPlay}
              title="Play entire surah - Mishary Rashid Alafasy"
            >
              {isSurahPlaying ? (
                <>
                  <span className="pause-icon">⏸</span>
                  <span className="button-text">Pause</span>
                </>
              ) : (
                <>
                  <span className="play-icon">▶</span>
                  <span className="button-text">Play</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
      <div className="verses-container">
        {/* Display Bismillah before surah starts (for surahs other than Al-Fatiha) */}
        {!loading && bismillah && (
          <div className="bismillah-container">
            {showArabic && bismillah.arabic && (
              <div className="bismillah-arabic">
                <p className="bismillah-arabic-text" dir="rtl">
                  {bismillah.arabic}
                </p>
              </div>
            )}
            <div className="bismillah-transliteration">
              <p className="bismillah-roman-text" style={{ fontSize: `${fontSize}px` }}>
                {bismillah.roman}
              </p>
            </div>
          </div>
        )}
        
        {!loading && verses.length === 0 ? (
          <div className="no-verses">
            <p>Unable to load verses. Please check your internet connection and try again.</p>
            <button className="retry-button" onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        ) : verses.length > 0 ? (
          verses.map((verse, index) => (
            <VerseCard
              key={verse.number}
              verse={verse}
              index={index}
              showArabic={showArabic}
              fontSize={fontSize}
              verseRefs={verseRefs}
            />
          ))
        ) : null}
      </div>

      <ScrollToTopButton />

    </div>
  )
}

export default VerseView
