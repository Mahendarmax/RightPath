import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SurahList from './pages/SurahList'
import VerseView from './pages/VerseView'
import Settings from './pages/Settings'
import { SettingsProvider } from './context/SettingsContext'
import './App.css'

function App() {
  return (
    <SettingsProvider>
      <Router basename={import.meta.env.BASE_URL}>
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

