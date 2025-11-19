import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import SurahList from './pages/SurahList'
import VerseView from './pages/VerseView'
import Settings from './pages/Settings'
import { SettingsProvider } from './context/SettingsContext'
import './App.css'

// Component to handle SPA redirect from 404.html
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we're coming from a 404 redirect
    const searchParams = new URLSearchParams(location.search)
    const redirectPath = searchParams.get('/')
    
    if (redirectPath) {
      // Clean up the path: replace ~and~ with &, handle query params
      let cleanPath = redirectPath.replace(/~and~/g, '&')
      
      // Remove the base path if present
      const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
      if (cleanPath.startsWith(basePath)) {
        cleanPath = cleanPath.substring(basePath.length)
      }
      
      // Navigate to the clean path
      if (cleanPath && cleanPath !== location.pathname) {
        navigate(cleanPath, { replace: true })
      }
    }
  }, [location, navigate])

  return null
}

function App() {
  return (
    <SettingsProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <RedirectHandler />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surahs" element={<SurahList />} />
            <Route path="/surah/:number" element={<VerseView />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </SettingsProvider>
  )
}

export default App

