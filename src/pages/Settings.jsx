import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSettings } from '../context/SettingsContext'
import './Settings.css'

function Settings() {
  const navigate = useNavigate()
  const { showArabic, toggleArabic, fontSize, increaseFontSize, decreaseFontSize } = useSettings()
  
  const handleBack = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>Settings</h1>
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      </div>

      <div className="settings-content">
        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-icon">📖</span>
            <div className="setting-text">
              <h3>Show Arabic Text</h3>
              <p>అరబిక్ టెక్స్ట్ చూపించు</p>
            </div>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={showArabic}
              onChange={toggleArabic}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <span className="setting-icon">🔤</span>
            <div className="setting-text">
              <h3>Font Size</h3>
              <p>ఫాంట్ పరిమాణం</p>
            </div>
          </div>
          <div className="font-size-controls">
            <button onClick={decreaseFontSize} className="font-button">
              −
            </button>
            <span className="font-size-display">{fontSize}</span>
            <button onClick={increaseFontSize} className="font-button">
              +
            </button>
          </div>
        </div>
      </div>

      <div className="settings-footer">
        <p>
          May this app help you in your journey of understanding the Holy Quran
        </p>
        <p className="footer-telugu">
          ఈ యాప్ పవిత్ర ఖురాన్ అర్థం చేసుకోవడంలో మీకు సహాయపడుతుందని ఆశిస్తున్నాము
        </p>
      </div>
    </div>
  )
}

export default Settings

