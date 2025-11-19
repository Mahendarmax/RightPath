import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  const handleReadQuran = useCallback(() => {
    navigate('/surahs')
  }, [navigate])

  const handleSettings = useCallback(() => {
    navigate('/settings')
  }, [navigate])

  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-title">Holy Quran</h1>
        <h2 className="home-subtitle">పవిత్ర ఖురాన్</h2>
        <div className="decorative-line"></div>
      </div>

      <div className="home-content">
        <button 
          className="home-card"
          onClick={handleReadQuran}
        >
          <div className="card-icon">📖</div>
          <h3 className="card-title">Read Quran</h3>
          <p className="card-subtitle">ఖురాన్ చదవండి</p>
        </button>

        <button 
          className="home-card"
          onClick={handleSettings}
        >
          <div className="card-icon">⚙️</div>
          <h3 className="card-title">Settings</h3>
          <p className="card-subtitle">సెట్టింగ్స్</p>
        </button>
      </div>

      <div className="home-footer">
        <p className="footer-text">
          "And We have certainly made the Quran easy for remembrance, so is there any who will remember?"
        </p>
        <p className="footer-reference">Quran 54:17</p>
      </div>
    </div>
  )
}

export default Home

