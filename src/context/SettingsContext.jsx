import React, { createContext, useState, useContext, useCallback, useMemo } from 'react'
import { DEFAULT_TRANSLATION } from '../data/quranData'

const SettingsContext = createContext()

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider')
  }
  return context
}

export const SettingsProvider = ({ children }) => {
  const [showArabic, setShowArabic] = useState(true)
  const [fontSize, setFontSize] = useState(16)
  const [selectedTranslation, setSelectedTranslation] = useState(DEFAULT_TRANSLATION)

  const toggleArabic = useCallback(() => setShowArabic(prev => !prev), [])
  const increaseFontSize = useCallback(() => setFontSize(prev => Math.min(24, prev + 1)), [])
  const decreaseFontSize = useCallback(() => setFontSize(prev => Math.max(12, prev - 1)), [])
  
  const value = useMemo(() => ({
    showArabic,
    toggleArabic,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    selectedTranslation,
    setSelectedTranslation,
  }), [showArabic, toggleArabic, fontSize, increaseFontSize, decreaseFontSize, selectedTranslation])

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

