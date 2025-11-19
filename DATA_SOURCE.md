# Quran Data Source

## Current Implementation

The application fetches Quran data from **Al-Quran Cloud API**, which provides:

- ✅ **Arabic Text** - Complete original Arabic text
- ✅ **English Translation** - Sahih International (most popular translation)
- ✅ **Roman Transliteration** - English transliteration for pronunciation
- ⚠️ **Telugu Translation** - Needs to be added (see below)

## API Endpoints Used

1. **Arabic Text:**
   ```
   https://api.alquran.cloud/v1/surah/{surahNumber}
   ```

2. **English Translation (Sahih International):**
   ```
   https://api.alquran.cloud/v1/surah/{surahNumber}/en.sahih
   ```

3. **Roman Transliteration:**
   ```
   https://api.alquran.cloud/v1/surah/{surahNumber}/en.transliteration
   ```

## Huda Publications Integration

**Note:** Huda Publications (Al-Huda Publications) does not provide a public API. Their "Word for Word Translation of the Qur'an" by Dr. Farhat Hashmi is available in print/digital format.

### To Add Huda Publications Translations:

1. **Option 1: Manual Addition**
   - Obtain the translations from Huda Publications
   - Add Telugu translations manually to the data file
   - Update `src/data/quranData.js` with the translations

2. **Option 2: Data File**
   - Create a JSON file with Huda Publications translations
   - Import and merge with API data
   - Ensure proper attribution

3. **Option 3: API Integration (if available)**
   - If Huda Publications releases an API, integrate it
   - Update the fetch functions accordingly

## Available Translations

The API supports multiple English translations:
- `en.sahih` - Sahih International (currently used)
- `en.asad` - Muhammad Asad
- `en.yusufali` - Abdullah Yusuf Ali
- `en.pickthall` - Marmaduke Pickthall
- `en.maududi` - Abul Ala Maududi

## Data Caching

- Verses are cached after first fetch
- Reduces API calls and improves performance
- Cache persists during session

## Attribution

- **Arabic Text:** Al-Quran Cloud API
- **English Translation:** Sahih International
- **Transliteration:** Al-Quran Cloud API
- **Telugu Translation:** To be added from Huda Publications or other source

## Future Enhancements

- [ ] Add Huda Publications Telugu translations
- [ ] Support multiple translation sources
- [ ] Offline mode with cached data
- [ ] Download complete Quran for offline use

