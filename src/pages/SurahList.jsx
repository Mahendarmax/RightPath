import React, { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { surahs } from '../data/quranData'
import SearchBar from '../components/SearchBar'
import './SurahList.css'

function SurahList() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSearch = useCallback((term) => {
    setSearchTerm(term)
  }, [])
  
  const handleBack = useCallback(() => {
    navigate('/')
  }, [navigate])
  
  const handleSurahClick = useCallback((surahNumber) => {
    navigate(`/surah/${surahNumber}`)
  }, [navigate])

  const filteredSurahs = useMemo(() => {
    if (!searchTerm) return surahs
    
    const term = searchTerm.toLowerCase()
    return surahs.filter(surah => 
      surah.name.toLowerCase().includes(term) ||
      surah.nameEnglish.toLowerCase().includes(term) ||
      surah.nameTelugu.includes(term) ||
      surah.number.toString().includes(term)
    )
  }, [searchTerm])

  return (
    <div className="surah-list-page">
      <div className="surah-list-header">
        <div>
          <h1>All 114 Surahs</h1>
          <p className="surah-count">Complete Holy Quran</p>
        </div>
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      </div>

      <SearchBar 
        onSearch={handleSearch}
        placeholder="Search by name, number, or translation..."
      />

      {filteredSurahs.length === 0 ? (
        <div className="no-results">
          <p>No surahs found matching "{searchTerm}"</p>
        </div>
      ) : (
        <>
          <div className="results-count">
            Showing {filteredSurahs.length} of {surahs.length} surahs
          </div>
          <div className="surah-list">
            {filteredSurahs.map((surah) => (
              <div
                key={surah.id}
                className="surah-card"
                onClick={() => handleSurahClick(surah.number)}
              >
                <div className="surah-number">{surah.number}</div>
                <div className="surah-info">
                  <h3 className="surah-name">{surah.name}</h3>
                  <p className="surah-name-english">{surah.nameEnglish}</p>
                  <p className="surah-name-telugu">{surah.nameTelugu}</p>
                </div>
                <div className="surah-meta">
                  <span className="ayah-count">{surah.ayahs} Verses</span>
                  <span className="revelation-type">{surah.revelationType}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SurahList

