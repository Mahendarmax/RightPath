# Most Followed Worldwide Quran Authors

The application fetches Quran translations from the **most popular and widely followed authors** worldwide.

## Primary Translation: Saheeh International (MOST USED & MOST ACCURATE)

**Default Translation:** Saheeh International translation is used as the primary source because it is:
- ✅ **MOST USED & MOST ACCURATE** - The most widely used and accurate translation
- ✅ **Modern & Clear** - Contemporary, straightforward language
- ✅ **Widely Used** - Very popular modern translation
- ✅ **Reliable** - Trusted and authentic
- ✅ **Accessible** - Easy to understand for all readers

## Available Popular Authors

The app supports fetching from multiple popular worldwide authors:

### 1. **Saheeh International (MOST USED & MOST ACCURATE)** (Default)
- **Code:** `en.sahih`
- **Status:** MOST USED & MOST ACCURATE - Very popular modern translation
- **Description:** MOST USED & MOST ACCURATE - Clear, straightforward language - Default translation
- **Transliteration:** Roman English Transliteration - Madinah Mushaf (King Fahad Complex)

### 2. **Abdullah Yusuf Ali**
- **Code:** `en.yusufali`
- **Status:** Most popular and widely followed
- **Description:** Comprehensive translation with detailed commentary

### 3. **Muhammad Asad**
- **Code:** `en.asad`
- **Status:** Highly respected
- **Description:** Rationalist approach, influential modern translation

### 4. **Marmaduke Pickthall**
- **Code:** `en.pickthall`
- **Status:** Classic, widely used
- **Description:** One of the earliest English translations

### 5. **Abul Ala Maududi**
- **Code:** `en.maududi`
- **Status:** Popular with detailed commentary
- **Description:** Includes extensive explanatory notes

## Data Source

All translations are fetched from **Al-Quran Cloud API**, which provides:
- ✅ Verified and authentic Quran text
- ✅ Multiple translation options
- ✅ Reliable and fast API
- ✅ Free to use

## Current Implementation

- **Default:** Saheeh International (MOST USED & MOST ACCURATE)
- **Arabic:** Original text from API
- **Transliteration:** Roman English Transliteration - Madinah Mushaf (King Fahad Complex) from API
- **English Translation:** Saheeh International (MOST USED & MOST ACCURATE)
- **Telugu Translation:** Moulana Abdul Raheem (to be added)

## API Endpoints

```
Arabic: https://api.alquran.cloud/v1/surah/{number}
Yusuf Ali: https://api.alquran.cloud/v1/surah/{number}/en.yusufali
Sahih: https://api.alquran.cloud/v1/surah/{number}/en.sahih
Asad: https://api.alquran.cloud/v1/surah/{number}/en.asad
Pickthall: https://api.alquran.cloud/v1/surah/{number}/en.pickthall
Transliteration: https://api.alquran.cloud/v1/surah/{number}/en.transliteration
```

## Attribution

- **Arabic Text:** Madinah Mushaf (King Fahad Complex) - Standard Quranic text (Al-Quran Cloud API)
- **Roman English Transliteration:** Madinah Mushaf (King Fahad Complex) (Al-Quran Cloud API)
- **English Translation:** Saheeh International (MOST USED & MOST ACCURATE) (Al-Quran Cloud API)
- **Telugu Translation:** Moulana Abdul Raheem (to be added)

