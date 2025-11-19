# Holy Quran Web Application.

A beautiful web application for reading the complete Holy Quran with Arabic text, Roman English transliteration, and Telugu translation. Features a colorful holy theme with gold and green colors.

## Features

- 📖 **Complete Quran** - All 114 Surahs available
- 🌐 **Roman English Transliteration** - Easy pronunciation guide
- 🇮🇳 **Telugu Translation** - Full Telugu meaning
- 🕌 **Arabic Text** - Optional display with toggle
- 🎨 **Beautiful UI** - Holy-themed design with gold and green
- ⚙️ **Settings** - Customizable font size and display options
- 📱 **Responsive** - Works on desktop, tablet, and mobile

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   The app will automatically open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── pages/          # Page components
│   ├── Home.jsx
│   ├── SurahList.jsx
│   ├── VerseView.jsx
│   └── Settings.jsx
├── context/        # React Context
│   └── SettingsContext.jsx
├── data/          # Quran data
│   └── quranData.js
├── App.jsx        # Main app component
└── main.jsx       # Entry point
```

## Usage

1. **Home Screen** - Main entry point with navigation
2. **Surah List** - Browse all 114 chapters
3. **Verse View** - Read verses with:
   - Arabic text (optional)
   - Side-by-side: Roman English and Telugu
   - English translation
4. **Settings** - Customize display options

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **CSS3** - Styling with holy theme

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Created for educational and personal use.


