# Audio Playback Logic Explanation

## Overview
This document explains what happens when voice/audio is played in the Quran application.

---

## 🔄 Complete Flow When Voice is Played

### 1. **User Clicks Play Button** (`handleSurahPlay`)

**Location:** `src/pages/VerseView.jsx` - Line 148

**What happens:**
- If audio is already playing → **Pause** it and clean up
- If audio is not playing → **Start** playback

---

### 2. **Audio Element Creation** (First time only)

**Location:** Line 170-189

**Steps:**
1. Creates new `Audio` object with URL: `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/{surahNumber}.mp3`
2. Waits for audio metadata to load (`loadedmetadata` event)
3. Calculates verse timestamps:
   - Gets total audio duration
   - Divides duration equally among all verses
   - Creates timestamp array: `[{verseNumber, startTime, endTime}, ...]`

**Example:**
- If surah has 7 verses and audio is 210 seconds
- Each verse gets ~30 seconds
- Verse 1: 0-30s, Verse 2: 30-60s, etc.

---

### 3. **When Audio Starts Playing** (`play` event listener)

**Location:** Line 192-230

**Step-by-step:**

#### A. **Scroll Position Management**
```javascript
// Capture current scroll position
let currentScrollY = window.scrollY

// If user is at top of page (< 95px), scroll down to show verses
if (currentScrollY < 95) {
  currentScrollY = 105  // Scroll below fixed header
  window.scrollTo({ top: 105 })
}

// Store this position for later
scrollPositionRef.current = currentScrollY
isMaintainingScrollRef.current = true
```

**Why?** Ensures verses are visible when audio starts, even if user is at top of page.

#### B. **Start Verse Tracking**
```javascript
setTimeout(() => {
  startSurahTimeTracking()  // Start tracking which verse is playing
  setCurrentPlayingVerse(verses[0].number)  // Set first verse as playing
}, 100)
```

---

### 4. **Verse Highlighting System** (`startSurahTimeTracking`)

**Location:** Line 410-440

**How it works:**
- Runs every **100ms** (10 times per second)
- Checks current audio time: `audio.currentTime`
- Finds which verse should be highlighted based on timestamps
- Updates `currentPlayingVerse` state when verse changes

**Example:**
- Audio at 45 seconds
- Verse 2 timestamp: 30-60 seconds
- Sets `currentPlayingVerse = 2`
- Verse 2 gets highlighted with CSS class `playing`

---

### 5. **Scroll Prevention System** (Multiple Layers)

#### **Layer 1: When Verse Changes** (Line 296-320)
- Triggers whenever `currentPlayingVerse` changes
- Immediately restores scroll position if it changed
- Runs multiple times (0ms, 16ms, 50ms) to catch delayed scrolls

#### **Layer 2: Continuous Monitoring** (Line 323-408)
- Runs **every 50ms** (20 times per second)
- Detects user scrolling vs automatic scrolling:
  - **User scrolling:** Detected via `wheel`, `touchstart`, `touchmove` events
  - **Automatic scrolling:** Any scroll change without user interaction

**Logic:**
```javascript
if (user is scrolling) {
  // Allow it, update stored position
  scrollPositionRef.current = newPosition
} else if (scroll changed automatically) {
  // Prevent it, restore saved position
  window.scrollTo({ top: savedPosition })
}
```

---

### 6. **Audio Event Handlers**

#### **Pause Event** (Line 232-240)
- Stops verse tracking
- Disables scroll maintenance
- Clears intervals

#### **Ended Event** (Line 242-251)
- Same as pause
- Also clears `currentPlayingVerse`

#### **Error Event** (Line 253-263)
- Handles audio loading/playback errors
- Cleans up everything

---

## 🎯 Key Features

### ✅ **What Works:**
1. **Verse Highlighting:** Current verse gets highlighted as audio plays
2. **Scroll Lock:** Page doesn't auto-scroll during playback
3. **Manual Scrolling:** User can still scroll manually
4. **Position Memory:** Remembers where you were when audio started
5. **Visibility:** Ensures verses are visible when audio starts

### ⚠️ **Potential Issues:**

1. **Equal Duration Assumption:**
   - Currently divides audio duration equally among verses
   - **Problem:** Real verses have different lengths
   - **Impact:** Highlighting might be slightly off

2. **Scroll Detection:**
   - Uses 5px threshold to detect automatic scrolling
   - **Problem:** Very small automatic scrolls might not be caught
   - **Impact:** Minor scroll jumps possible

3. **Performance:**
   - Multiple intervals running (50ms, 100ms)
   - **Problem:** Could impact performance on slow devices
   - **Impact:** Usually fine, but might lag on old devices

---

## 🔧 Current Logic Summary

```
User clicks Play
    ↓
Create/Get Audio Element
    ↓
Load Audio Metadata
    ↓
Calculate Verse Timestamps (equal division)
    ↓
Audio Starts Playing
    ↓
Capture Scroll Position (ensure verses visible)
    ↓
Start Verse Tracking (every 100ms)
    ↓
Start Scroll Monitoring (every 50ms)
    ↓
[LOOP DURING PLAYBACK]
    ↓
Every 100ms: Update highlighted verse
    ↓
Every 50ms: Check & prevent automatic scrolling
    ↓
On User Scroll: Update stored position
    ↓
[CONTINUES UNTIL PAUSE/END/ERROR]
```

---

## 📝 Recommendations for Improvement

1. **Better Timestamp Calculation:**
   - Use actual verse timestamps from API if available
   - Or use audio analysis to detect verse boundaries

2. **Optimize Intervals:**
   - Combine scroll monitoring and verse tracking into one interval
   - Use `requestAnimationFrame` instead of `setInterval` for better performance

3. **Better Scroll Detection:**
   - Use `IntersectionObserver` to detect if verse elements are trying to scroll into view
   - More accurate than position comparison

---

## 🐛 Debugging Tips

If audio playback has issues:

1. **Check Console:**
   - Look for audio errors
   - Check if timestamps are calculated correctly

2. **Check Scroll Position:**
   - `scrollPositionRef.current` should have a number
   - `isMaintainingScrollRef.current` should be `true` during playback

3. **Check Verse Highlighting:**
   - `currentPlayingVerse` should update every few seconds
   - Check if verse timestamps are correct

4. **Check Intervals:**
   - `timeUpdateInterval.current` should be running
   - `scrollMonitorInterval` should be running

---

**Last Updated:** Based on current code in `src/pages/VerseView.jsx`

