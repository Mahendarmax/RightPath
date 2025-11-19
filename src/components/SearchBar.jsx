import React, { useState, useCallback } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch, placeholder = "Search surahs..." }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = useCallback((e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }, [onSearch])

  const handleClear = useCallback(() => {
    setSearchTerm('')
    onSearch('')
  }, [onSearch])

  return (
    <div className="search-bar-container">
      <div className="search-icon">🔍</div>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <button
          className="search-clear"
          onClick={handleClear}
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar

