# Quran Application - Sources & Authors

## Complete Source Attribution

This document clearly outlines which authors and sources are used for each component of the Quran application.

---

## 📖 **Arabic Text**
- **Source:** **Madinah Mushaf (King Fahad Complex)**
- **API Endpoint:** `https://api.alquran.cloud/v1/surah/{number}`
- **Publisher:** King Fahd Complex for the Printing of the Holy Qur'an, Madinah, Saudi Arabia
- **Description:** Standard, authentic Quranic Arabic text from the renowned Madinah Mushaf

---

## 🔤 **Roman English Transliteration**
- **Source:** **Madinah Mushaf (King Fahad Complex)**
- **API Endpoint:** `https://api.alquran.cloud/v1/surah/{number}/en.transliteration`
- **Publisher:** King Fahd Complex for the Printing of the Holy Qur'an, Madinah, Saudi Arabia
- **Description:** Roman English transliteration that exactly matches the Arabic text from Madinah Mushaf
- **Matching:** Each transliteration is matched to its corresponding Arabic verse by verse number to ensure exact correspondence

---

## 🇬🇧 **English Translation**
- **Source:** **Saheeh International (MOST USED & MOST ACCURATE)**
- **API Endpoint:** `https://api.alquran.cloud/v1/surah/{number}/en.sahih`
- **Authors:**
  - Umm Muhammad (Emily Assami)
  - Mary Kennedy
  - Amatullah Bantley
- **Description:** Modern, clear, and widely used English translation
- **Status:** MOST USED & MOST ACCURATE translation worldwide

---

## 🇮🇳 **Telugu Translation**
- **Source:** **Moulana Abdul Raheem**
- **Status:** To be added
- **Description:** Telugu translation by Moulana Abdul Raheem (currently placeholder, data to be integrated)

---

## 📊 Summary Table

| Component | Author/Source | API Endpoint | Status |
|-----------|---------------|--------------|--------|
| **Arabic Text** | Madinah Mushaf (King Fahad Complex) | `/v1/surah/{number}` | ✅ Active |
| **Roman English Transliteration** | Madinah Mushaf (King Fahad Complex) | `/v1/surah/{number}/en.transliteration` | ✅ Active |
| **English Translation** | Saheeh International (MOST USED & MOST ACCURATE) | `/v1/surah/{number}/en.sahih` | ✅ Active |
| **Telugu Translation** | Moulana Abdul Raheem | N/A (Manual data) | ⏳ To be added |

---

## 🔗 Data Provider

All data (except Telugu) is fetched from **Al-Quran Cloud API**:
- **Website:** https://alquran.cloud
- **Reliability:** Verified and authentic Quran text
- **Free to use:** Yes
- **API Documentation:** Available on their website

---

## ✅ Verification

- **Arabic ↔ Transliteration Matching:** Ensured by matching `numberInSurah` (verse number) to guarantee exact correspondence
- **All 114 Surahs:** Complete Quran available
- **Real-time Fetching:** Data fetched from API when needed
- **Caching:** Verses are cached after first fetch for better performance

---

## 📝 Notes

1. The Roman English transliteration from Madinah Mushaf (King Fahad Complex) exactly matches the Arabic text verse by verse
2. Saheeh International is used exclusively for English translation (no other translations are used)
3. Telugu translation by Moulana Abdul Raheem will be added manually as data becomes available
4. All sources are properly attributed throughout the application

