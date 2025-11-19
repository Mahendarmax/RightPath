// Complete list of all 114 Surahs
// Data source: Al-Quran Cloud API (with support for multiple translations)
// Using most popular worldwide authors: Yusuf Ali, Sahih International, Asad, Pickthall

export const surahs = [
  { id: 1, number: 1, name: 'Al-Fatiha', nameEnglish: 'The Opening', nameTelugu: 'అల్-ఫాతిహా', ayahs: 7, revelationType: 'Meccan' },
  { id: 2, number: 2, name: 'Al-Baqarah', nameEnglish: 'The Cow', nameTelugu: 'అల్-బఖరా', ayahs: 286, revelationType: 'Medinan' },
  { id: 3, number: 3, name: 'Ali \'Imran', nameEnglish: 'Family of Imran', nameTelugu: 'ఆలి ఇమ్రాన్', ayahs: 200, revelationType: 'Medinan' },
  { id: 4, number: 4, name: 'An-Nisa', nameEnglish: 'The Women', nameTelugu: 'అన్-నిసా', ayahs: 176, revelationType: 'Medinan' },
  { id: 5, number: 5, name: 'Al-Ma\'idah', nameEnglish: 'The Table Spread', nameTelugu: 'అల్-మాయిదా', ayahs: 120, revelationType: 'Medinan' },
  { id: 6, number: 6, name: 'Al-An\'am', nameEnglish: 'The Cattle', nameTelugu: 'అల్-అన్\'ఆమ్', ayahs: 165, revelationType: 'Meccan' },
  { id: 7, number: 7, name: 'Al-A\'raf', nameEnglish: 'The Heights', nameTelugu: 'అల్-ఆ\'రాఫ్', ayahs: 206, revelationType: 'Meccan' },
  { id: 8, number: 8, name: 'Al-Anfal', nameEnglish: 'The Spoils of War', nameTelugu: 'అల్-అన్ఫాల్', ayahs: 75, revelationType: 'Medinan' },
  { id: 9, number: 9, name: 'At-Tawbah', nameEnglish: 'The Repentance', nameTelugu: 'అత్-తౌబా', ayahs: 129, revelationType: 'Medinan' },
  { id: 10, number: 10, name: 'Yunus', nameEnglish: 'Jonah', nameTelugu: 'యూనుస్', ayahs: 109, revelationType: 'Meccan' },
  { id: 11, number: 11, name: 'Hud', nameEnglish: 'Hud', nameTelugu: 'హూద్', ayahs: 123, revelationType: 'Meccan' },
  { id: 12, number: 12, name: 'Yusuf', nameEnglish: 'Joseph', nameTelugu: 'యూసుఫ్', ayahs: 111, revelationType: 'Meccan' },
  { id: 13, number: 13, name: 'Ar-Ra\'d', nameEnglish: 'The Thunder', nameTelugu: 'అర్-రాద్', ayahs: 43, revelationType: 'Medinan' },
  { id: 14, number: 14, name: 'Ibrahim', nameEnglish: 'Abraham', nameTelugu: 'ఇబ్రాహీం', ayahs: 52, revelationType: 'Meccan' },
  { id: 15, number: 15, name: 'Al-Hijr', nameEnglish: 'The Rocky Tract', nameTelugu: 'అల్-హిజ్ర్', ayahs: 99, revelationType: 'Meccan' },
  { id: 16, number: 16, name: 'An-Nahl', nameEnglish: 'The Bees', nameTelugu: 'అన్-నహల్', ayahs: 128, revelationType: 'Meccan' },
  { id: 17, number: 17, name: 'Al-Isra', nameEnglish: 'The Night Journey', nameTelugu: 'అల్-ఇస్రా', ayahs: 111, revelationType: 'Meccan' },
  { id: 18, number: 18, name: 'Al-Kahf', nameEnglish: 'The Cave', nameTelugu: 'అల్-కహఫ్', ayahs: 110, revelationType: 'Meccan' },
  { id: 19, number: 19, name: 'Maryam', nameEnglish: 'Mary', nameTelugu: 'మర్యమ్', ayahs: 98, revelationType: 'Meccan' },
  { id: 20, number: 20, name: 'Ta-Ha', nameEnglish: 'Ta-Ha', nameTelugu: 'తా-హా', ayahs: 135, revelationType: 'Meccan' },
  { id: 21, number: 21, name: 'Al-Anbiya', nameEnglish: 'The Prophets', nameTelugu: 'అల్-అన్బియా', ayahs: 112, revelationType: 'Meccan' },
  { id: 22, number: 22, name: 'Al-Hajj', nameEnglish: 'The Pilgrimage', nameTelugu: 'అల్-హజ్', ayahs: 78, revelationType: 'Medinan' },
  { id: 23, number: 23, name: 'Al-Mu\'minun', nameEnglish: 'The Believers', nameTelugu: 'అల్-ముఅ్\'మినూన్', ayahs: 118, revelationType: 'Meccan' },
  { id: 24, number: 24, name: 'An-Nur', nameEnglish: 'The Light', nameTelugu: 'అన్-నూర్', ayahs: 64, revelationType: 'Medinan' },
  { id: 25, number: 25, name: 'Al-Furqan', nameEnglish: 'The Criterion', nameTelugu: 'అల్-ఫుర్\'ఖాన్', ayahs: 77, revelationType: 'Meccan' },
  { id: 26, number: 26, name: 'Ash-Shu\'ara', nameEnglish: 'The Poets', nameTelugu: 'అష్-షుఅ్\'రా', ayahs: 227, revelationType: 'Meccan' },
  { id: 27, number: 27, name: 'An-Naml', nameEnglish: 'The Ant', nameTelugu: 'అన్-నమ్ల్', ayahs: 93, revelationType: 'Meccan' },
  { id: 28, number: 28, name: 'Al-Qasas', nameEnglish: 'The Stories', nameTelugu: 'అల్-ఖసస్', ayahs: 88, revelationType: 'Meccan' },
  { id: 29, number: 29, name: 'Al-\'Ankabut', nameEnglish: 'The Spider', nameTelugu: 'అల్-అ్\'అన్కబూత్', ayahs: 69, revelationType: 'Meccan' },
  { id: 30, number: 30, name: 'Ar-Rum', nameEnglish: 'The Romans', nameTelugu: 'అర్-రూమ్', ayahs: 60, revelationType: 'Meccan' },
  { id: 31, number: 31, name: 'Luqman', nameEnglish: 'Luqman', nameTelugu: 'లుఖ్మాన్', ayahs: 34, revelationType: 'Meccan' },
  { id: 32, number: 32, name: 'As-Sajdah', nameEnglish: 'The Prostration', nameTelugu: 'అస్-సజ్దా', ayahs: 30, revelationType: 'Meccan' },
  { id: 33, number: 33, name: 'Al-Ahzab', nameEnglish: 'The Clans', nameTelugu: 'అల్-అహ్జాబ్', ayahs: 73, revelationType: 'Medinan' },
  { id: 34, number: 34, name: 'Saba', nameEnglish: 'Sheba', nameTelugu: 'సబా', ayahs: 54, revelationType: 'Meccan' },
  { id: 35, number: 35, name: 'Fatir', nameEnglish: 'The Originator', nameTelugu: 'ఫాతిర్', ayahs: 45, revelationType: 'Meccan' },
  { id: 36, number: 36, name: 'Ya-Sin', nameEnglish: 'Ya-Sin', nameTelugu: 'యా-సీన్', ayahs: 83, revelationType: 'Meccan' },
  { id: 37, number: 37, name: 'As-Saffat', nameEnglish: 'Those Ranged in Rows', nameTelugu: 'అస్-సఫ్ఫాత్', ayahs: 182, revelationType: 'Meccan' },
  { id: 38, number: 38, name: 'Sad', nameEnglish: 'Sad', nameTelugu: 'సాద్', ayahs: 88, revelationType: 'Meccan' },
  { id: 39, number: 39, name: 'Az-Zumar', nameEnglish: 'The Groups', nameTelugu: 'అజ్-జుమర్', ayahs: 75, revelationType: 'Meccan' },
  { id: 40, number: 40, name: 'Ghafir', nameEnglish: 'The Forgiver', nameTelugu: 'ఘఫీర్', ayahs: 85, revelationType: 'Meccan' },
  { id: 41, number: 41, name: 'Fussilat', nameEnglish: 'Explained in Detail', nameTelugu: 'ఫుస్సిలాత్', ayahs: 54, revelationType: 'Meccan' },
  { id: 42, number: 42, name: 'Ash-Shura', nameEnglish: 'The Consultation', nameTelugu: 'అష్-షూరా', ayahs: 53, revelationType: 'Meccan' },
  { id: 43, number: 43, name: 'Az-Zukhruf', nameEnglish: 'The Gold', nameTelugu: 'అజ్-జుఖ్రుఫ్', ayahs: 89, revelationType: 'Meccan' },
  { id: 44, number: 44, name: 'Ad-Dukhan', nameEnglish: 'The Smoke', nameTelugu: 'అద్-దుఖాన్', ayahs: 59, revelationType: 'Meccan' },
  { id: 45, number: 45, name: 'Al-Jathiyah', nameEnglish: 'The Crouching', nameTelugu: 'అల్-జాథియా', ayahs: 37, revelationType: 'Meccan' },
  { id: 46, number: 46, name: 'Al-Ahqaf', nameEnglish: 'The Wind-Curved Sandhills', nameTelugu: 'అల్-అహ్కాఫ్', ayahs: 35, revelationType: 'Meccan' },
  { id: 47, number: 47, name: 'Muhammad', nameEnglish: 'Muhammad', nameTelugu: 'ముహమ్మద్', ayahs: 38, revelationType: 'Medinan' },
  { id: 48, number: 48, name: 'Al-Fath', nameEnglish: 'The Victory', nameTelugu: 'అల్-ఫత్హ్', ayahs: 29, revelationType: 'Medinan' },
  { id: 49, number: 49, name: 'Al-Hujurat', nameEnglish: 'The Rooms', nameTelugu: 'అల్-హుజురాత్', ayahs: 18, revelationType: 'Medinan' },
  { id: 50, number: 50, name: 'Qaf', nameEnglish: 'Qaf', nameTelugu: 'ఖాఫ్', ayahs: 45, revelationType: 'Meccan' },
  { id: 51, number: 51, name: 'Adh-Dhariyat', nameEnglish: 'The Winnowing Winds', nameTelugu: 'అధ్-ధారియాత్', ayahs: 60, revelationType: 'Meccan' },
  { id: 52, number: 52, name: 'At-Tur', nameEnglish: 'The Mount', nameTelugu: 'అత్-తూర్', ayahs: 49, revelationType: 'Meccan' },
  { id: 53, number: 53, name: 'An-Najm', nameEnglish: 'The Star', nameTelugu: 'అన్-నజ్మ్', ayahs: 62, revelationType: 'Meccan' },
  { id: 54, number: 54, name: 'Al-Qamar', nameEnglish: 'The Moon', nameTelugu: 'అల్-ఖమర్', ayahs: 55, revelationType: 'Meccan' },
  { id: 55, number: 55, name: 'Ar-Rahman', nameEnglish: 'The Beneficent', nameTelugu: 'అర్-రహ్మాన్', ayahs: 78, revelationType: 'Medinan' },
  { id: 56, number: 56, name: 'Al-Waqi\'ah', nameEnglish: 'The Inevitable', nameTelugu: 'అల్-వాఖియా', ayahs: 96, revelationType: 'Meccan' },
  { id: 57, number: 57, name: 'Al-Hadid', nameEnglish: 'The Iron', nameTelugu: 'అల్-హదీద్', ayahs: 29, revelationType: 'Medinan' },
  { id: 58, number: 58, name: 'Al-Mujadila', nameEnglish: 'The Pleading Woman', nameTelugu: 'అల్-ముజాదిలా', ayahs: 22, revelationType: 'Medinan' },
  { id: 59, number: 59, name: 'Al-Hashr', nameEnglish: 'The Exile', nameTelugu: 'అల్-హష్ర్', ayahs: 24, revelationType: 'Medinan' },
  { id: 60, number: 60, name: 'Al-Mumtahanah', nameEnglish: 'She That is to be Examined', nameTelugu: 'అల్-ముం\'తహనా', ayahs: 13, revelationType: 'Medinan' },
  { id: 61, number: 61, name: 'As-Saff', nameEnglish: 'The Ranks', nameTelugu: 'అస్-సఫ్ఫ్', ayahs: 14, revelationType: 'Medinan' },
  { id: 62, number: 62, name: 'Al-Jumu\'ah', nameEnglish: 'Friday', nameTelugu: 'అల్-జుముఅ్\'హా', ayahs: 11, revelationType: 'Medinan' },
  { id: 63, number: 63, name: 'Al-Munafiqun', nameEnglish: 'The Hypocrites', nameTelugu: 'అల్-మునాఫికూన్', ayahs: 11, revelationType: 'Medinan' },
  { id: 64, number: 64, name: 'At-Taghabun', nameEnglish: 'The Mutual Disillusion', nameTelugu: 'అత్-తఘాబూన్', ayahs: 18, revelationType: 'Medinan' },
  { id: 65, number: 65, name: 'At-Talaq', nameEnglish: 'The Divorce', nameTelugu: 'అత్-తలాఖ్', ayahs: 12, revelationType: 'Medinan' },
  { id: 66, number: 66, name: 'At-Tahrim', nameEnglish: 'The Prohibition', nameTelugu: 'అత్-తహ్రీమ్', ayahs: 12, revelationType: 'Medinan' },
  { id: 67, number: 67, name: 'Al-Mulk', nameEnglish: 'The Sovereignty', nameTelugu: 'అల్-ముల్క్', ayahs: 30, revelationType: 'Meccan' },
  { id: 68, number: 68, name: 'Al-Qalam', nameEnglish: 'The Pen', nameTelugu: 'అల్-ఖలమ్', ayahs: 52, revelationType: 'Meccan' },
  { id: 69, number: 69, name: 'Al-Haqqah', nameEnglish: 'The Reality', nameTelugu: 'అల్-హక్కా', ayahs: 52, revelationType: 'Meccan' },
  { id: 70, number: 70, name: 'Al-Ma\'arij', nameEnglish: 'The Ascending Stairways', nameTelugu: 'అల్-మాఅ్\'రిజ్', ayahs: 44, revelationType: 'Meccan' },
  { id: 71, number: 71, name: 'Nuh', nameEnglish: 'Noah', nameTelugu: 'నూహ్', ayahs: 28, revelationType: 'Meccan' },
  { id: 72, number: 72, name: 'Al-Jinn', nameEnglish: 'The Jinn', nameTelugu: 'అల్-జిన్న్', ayahs: 28, revelationType: 'Meccan' },
  { id: 73, number: 73, name: 'Al-Muzzammil', nameEnglish: 'The Enshrouded One', nameTelugu: 'అల్-ముజ్జమ్మిల్', ayahs: 20, revelationType: 'Meccan' },
  { id: 74, number: 74, name: 'Al-Muddaththir', nameEnglish: 'The Cloaked One', nameTelugu: 'అల్-ముద్దత్థిర్', ayahs: 56, revelationType: 'Meccan' },
  { id: 75, number: 75, name: 'Al-Qiyamah', nameEnglish: 'The Resurrection', nameTelugu: 'అల్-ఖియామా', ayahs: 40, revelationType: 'Meccan' },
  { id: 76, number: 76, name: 'Al-Insan', nameEnglish: 'The Human', nameTelugu: 'అల్-ఇన్సాన్', ayahs: 31, revelationType: 'Medinan' },
  { id: 77, number: 77, name: 'Al-Mursalat', nameEnglish: 'The Emissaries', nameTelugu: 'అల్-ముర్సలాత్', ayahs: 50, revelationType: 'Meccan' },
  { id: 78, number: 78, name: 'An-Naba', nameEnglish: 'The Tidings', nameTelugu: 'అన్-నబా', ayahs: 40, revelationType: 'Meccan' },
  { id: 79, number: 79, name: 'An-Nazi\'at', nameEnglish: 'Those Who Drag Forth', nameTelugu: 'అన్-నజీఅ్\'త్', ayahs: 46, revelationType: 'Meccan' },
  { id: 80, number: 80, name: 'Abasa', nameEnglish: 'He Frowned', nameTelugu: 'అబసా', ayahs: 42, revelationType: 'Meccan' },
  { id: 81, number: 81, name: 'At-Takwir', nameEnglish: 'The Overthrowing', nameTelugu: 'అత్-తక్వీర్', ayahs: 29, revelationType: 'Meccan' },
  { id: 82, number: 82, name: 'Al-Infitar', nameEnglish: 'The Cleaving', nameTelugu: 'అల్-ఇన్ఫితార్', ayahs: 19, revelationType: 'Meccan' },
  { id: 83, number: 83, name: 'Al-Mutaffifin', nameEnglish: 'The Defrauding', nameTelugu: 'అల్-ముతఫ్ఫిఫీన్', ayahs: 36, revelationType: 'Meccan' },
  { id: 84, number: 84, name: 'Al-Inshiqaq', nameEnglish: 'The Splitting Open', nameTelugu: 'అల్-ఇన్షికాఖ్', ayahs: 25, revelationType: 'Meccan' },
  { id: 85, number: 85, name: 'Al-Buruj', nameEnglish: 'The Constellations', nameTelugu: 'అల్-బురూజ్', ayahs: 22, revelationType: 'Meccan' },
  { id: 86, number: 86, name: 'At-Tariq', nameEnglish: 'The Night-Comer', nameTelugu: 'అత్-తారీఖ్', ayahs: 17, revelationType: 'Meccan' },
  { id: 87, number: 87, name: 'Al-A\'la', nameEnglish: 'The Most High', nameTelugu: 'అల్-ఆ\'లా', ayahs: 19, revelationType: 'Meccan' },
  { id: 88, number: 88, name: 'Al-Ghashiyah', nameEnglish: 'The Overwhelming', nameTelugu: 'అల్-ఘషియా', ayahs: 26, revelationType: 'Meccan' },
  { id: 89, number: 89, name: 'Al-Fajr', nameEnglish: 'The Dawn', nameTelugu: 'అల్-ఫజ్ర్', ayahs: 30, revelationType: 'Meccan' },
  { id: 90, number: 90, name: 'Al-Balad', nameEnglish: 'The City', nameTelugu: 'అల్-బలద్', ayahs: 20, revelationType: 'Meccan' },
  { id: 91, number: 91, name: 'Ash-Shams', nameEnglish: 'The Sun', nameTelugu: 'అష్-షమ్స్', ayahs: 15, revelationType: 'Meccan' },
  { id: 92, number: 92, name: 'Al-Layl', nameEnglish: 'The Night', nameTelugu: 'అల్-లైల్', ayahs: 21, revelationType: 'Meccan' },
  { id: 93, number: 93, name: 'Ad-Duha', nameEnglish: 'The Morning Hours', nameTelugu: 'అద్-దుహా', ayahs: 11, revelationType: 'Meccan' },
  { id: 94, number: 94, name: 'Ash-Sharh', nameEnglish: 'The Relief', nameTelugu: 'అష్-షర్హ్', ayahs: 8, revelationType: 'Meccan' },
  { id: 95, number: 95, name: 'At-Tin', nameEnglish: 'The Fig', nameTelugu: 'అత్-తీన్', ayahs: 8, revelationType: 'Meccan' },
  { id: 96, number: 96, name: 'Al-\'Alaq', nameEnglish: 'The Clot', nameTelugu: 'అల్-అ్\'అలక్', ayahs: 19, revelationType: 'Meccan' },
  { id: 97, number: 97, name: 'Al-Qadr', nameEnglish: 'The Power', nameTelugu: 'అల్-ఖద్ర్', ayahs: 5, revelationType: 'Meccan' },
  { id: 98, number: 98, name: 'Al-Bayyinah', nameEnglish: 'The Evidence', nameTelugu: 'అల్-బయ్యినా', ayahs: 8, revelationType: 'Medinan' },
  { id: 99, number: 99, name: 'Az-Zalzalah', nameEnglish: 'The Earthquake', nameTelugu: 'అజ్-జల్జలా', ayahs: 8, revelationType: 'Medinan' },
  { id: 100, number: 100, name: 'Al-\'Adiyat', nameEnglish: 'The Courser', nameTelugu: 'అల్-అ్\'దియాత్', ayahs: 11, revelationType: 'Meccan' },
  { id: 101, number: 101, name: 'Al-Qari\'ah', nameEnglish: 'The Calamity', nameTelugu: 'అల్-ఖారియా', ayahs: 11, revelationType: 'Meccan' },
  { id: 102, number: 102, name: 'At-Takathur', nameEnglish: 'The Rivalry in world increase', nameTelugu: 'అత్-తకాత్హూర్', ayahs: 8, revelationType: 'Meccan' },
  { id: 103, number: 103, name: 'Al-\'Asr', nameEnglish: 'The Declining Day', nameTelugu: 'అల్-అ్\'అస్ర్', ayahs: 3, revelationType: 'Meccan' },
  { id: 104, number: 104, name: 'Al-Humazah', nameEnglish: 'The Traducer', nameTelugu: 'అల్-హుమజా', ayahs: 9, revelationType: 'Meccan' },
  { id: 105, number: 105, name: 'Al-Fil', nameEnglish: 'The Elephant', nameTelugu: 'అల్-ఫీల్', ayahs: 5, revelationType: 'Meccan' },
  { id: 106, number: 106, name: 'Quraysh', nameEnglish: 'Quraysh', nameTelugu: 'ఖురైష్', ayahs: 4, revelationType: 'Meccan' },
  { id: 107, number: 107, name: 'Al-Ma\'un', nameEnglish: 'The Small kindnesses', nameTelugu: 'అల్-మాఉన్', ayahs: 7, revelationType: 'Meccan' },
  { id: 108, number: 108, name: 'Al-Kawthar', nameEnglish: 'The Abundance', nameTelugu: 'అల్-కౌత్హర్', ayahs: 3, revelationType: 'Meccan' },
  { id: 109, number: 109, name: 'Al-Kafirun', nameEnglish: 'The Disbelievers', nameTelugu: 'అల్-కాఫిరూన్', ayahs: 6, revelationType: 'Meccan' },
  { id: 110, number: 110, name: 'An-Nasr', nameEnglish: 'The Divine Support', nameTelugu: 'అన్-నస్ర్', ayahs: 4, revelationType: 'Medinan' },
  { id: 111, number: 111, name: 'Al-Masad', nameEnglish: 'The Palm Fibre', nameTelugu: 'అల్-మసద్', ayahs: 5, revelationType: 'Meccan' },
  { id: 112, number: 112, name: 'Al-Ikhlas', nameEnglish: 'The Sincerity', nameTelugu: 'అల్-ఇఖ్లాస్', ayahs: 4, revelationType: 'Meccan' },
  { id: 113, number: 113, name: 'Al-Falaq', nameEnglish: 'The Daybreak', nameTelugu: 'అల్-ఫలక్', ayahs: 5, revelationType: 'Meccan' },
  { id: 114, number: 114, name: 'An-Nas', nameEnglish: 'The Mankind', nameTelugu: 'అన్-నాస్', ayahs: 6, revelationType: 'Meccan' },
]

// Most popular worldwide authors/translations
// Priority order: Saheeh International (MOST USED & MOST ACCURATE) > Yusuf Ali > Asad > Pickthall
export const popularTranslations = {
  'sahih': { name: 'Saheeh International (MOST USED & MOST ACCURATE)', code: 'en.sahih', description: 'MOST USED & MOST ACCURATE - Modern, clear translation - Default' },
  'yusufali': { name: 'Abdullah Yusuf Ali', code: 'en.yusufali', description: 'Most popular and widely followed translation' },
  'asad': { name: 'Muhammad Asad', code: 'en.asad', description: 'Rationalist approach, highly respected' },
  'pickthall': { name: 'Marmaduke Pickthall', code: 'en.pickthall', description: 'Classic, widely used translation' },
  'maududi': { name: 'Abul Ala Maududi', code: 'en.maududi', description: 'Popular with detailed commentary' },
}

// Default to Saheeh International (MOST USED & MOST ACCURATE)
export const DEFAULT_TRANSLATION = 'sahih'

// Local cache for verses
const verseCache = {}

// Fetch complete surah data from Al-Quran Cloud API
// Using Saheeh International (MOST USED & MOST ACCURATE) for English Translation | Madinah Mushaf (King Fahad Complex) for Arabic & Roman English Transliteration
export const fetchSurahFromAPI = async (surahNumber, translationCode = null) => {
  try {
    // Fetch Arabic text
    const arabicResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
    const arabicData = await arabicResponse.json()
    
    if (arabicData.code !== 200 || !arabicData.data) {
      return []
    }

    // Fetch English translation (Saheeh International - MOST USED & MOST ACCURATE)
    let englishTranslation = []
    let currentTranslationAuthor = 'Saheeh International (MOST USED & MOST ACCURATE)'
    try {
      // Always use Saheeh International (MOST USED & MOST ACCURATE)
      const translationCode = 'en.sahih'
      const translationResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/${translationCode}`)
      const translationData = await translationResponse.json()
      if (translationData.code === 200 && translationData.data) {
        englishTranslation = translationData.data.ayahs || []
      }
    } catch (e) {
      console.log('Saheeh International (MOST USED & MOST ACCURATE) translation not available')
    }

    // Fetch transliteration (Roman English - Madinah Mushaf / King Fahad Complex)
    let transliteration = []
    try {
      const transliterationResponse = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.transliteration`)
      const transliterationData = await transliterationResponse.json()
      if (transliterationData.code === 200 && transliterationData.data) {
        transliteration = transliterationData.data.ayahs || []
      }
    } catch (e) {
      console.log('Madinah Mushaf (King Fahad Complex) transliteration not available')
    }

    // Fetch Telugu translation from Quran.com API (translation ID 227 - Maulana Abder-Rahim ibn Muhammad)
    let teluguTranslation = []
    try {
      const teluguResponse = await fetch(`https://api.quran.com/api/v4/quran/translations/227?chapter_number=${surahNumber}`)
      if (teluguResponse.ok) {
        const teluguData = await teluguResponse.json()
        if (teluguData && teluguData.translations && Array.isArray(teluguData.translations)) {
          // Translations are ordered by verse number (index 0 = verse 1, index 1 = verse 2, etc.)
          teluguTranslation = teluguData.translations.map((item, index) => ({
            numberInSurah: index + 1, // Verse numbers start from 1
            text: item.text || ''
          }))
        }
      }
    } catch (e) {
      console.log(`Telugu translation not available for surah ${surahNumber} from Quran.com API:`, e.message)
    }

    // Get Bismillah Arabic text to remove it from verse 1 if present
    let bismillahArabicText = ''
    if (surahNumber !== 1) {
      try {
        const bismillahResponse = await fetch('https://api.alquran.cloud/v1/surah/1')
        const bismillahData = await bismillahResponse.json()
        if (bismillahData.code === 200 && bismillahData.data?.ayahs?.[0]) {
          bismillahArabicText = bismillahData.data.ayahs[0].text.trim()
        }
      } catch (e) {
        // If we can't fetch Bismillah, continue without removing it
      }
    }

    // Combine all data - using API data exactly as provided, but remove Bismillah from verse 1 Arabic if present
    const verses = arabicData.data.ayahs.map((ayah) => {
      // Find matching English translation by verse number
      const englishVerse = englishTranslation.find(v => v.numberInSurah === ayah.numberInSurah)
      // Find matching Roman English transliteration by verse number - use exactly as API provides
      const romanVerse = transliteration.find(v => v.numberInSurah === ayah.numberInSurah)
      // Find matching Telugu translation by verse number
      const teluguVerse = teluguTranslation.find(v => v.numberInSurah === ayah.numberInSurah)
      
      let arabicText = ayah.text.trim()
      
      // Remove Bismillah from verse 1 Arabic text if it's present (since we display it separately)
      // This only applies to surahs other than Al-Fatiha
      // IMPORTANT: We must preserve the exact Arabic text from API after removing Bismillah
      if (surahNumber !== 1 && ayah.numberInSurah === 1 && bismillahArabicText) {
        // Normalize both texts for comparison (remove extra whitespace, normalize Unicode)
        const normalizedBismillah = bismillahArabicText.replace(/\s+/g, ' ').trim()
        const normalizedArabic = arabicText.replace(/\s+/g, ' ').trim()
        
        // Check if the verse starts with Bismillah (with possible space variations)
        if (normalizedArabic.startsWith(normalizedBismillah)) {
          // Remove Bismillah and any following space, but preserve the exact remaining text
          // This ensures the Arabic text matches the transliteration exactly
          const remainingText = normalizedArabic.substring(normalizedBismillah.length).trim()
          // Use the original text's characters to preserve exact Unicode (diacritics, etc.)
          if (remainingText) {
            // Find the position in original text where Bismillah ends
            const bismillahEndIndex = arabicText.indexOf(normalizedBismillah) + normalizedBismillah.length
            arabicText = arabicText.substring(bismillahEndIndex).trim()
          }
        } else {
          // Try pattern matching - look for Bismillah followed by space and verse content
          const bismillahPattern = new RegExp('^' + normalizedBismillah.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*', '')
          if (bismillahPattern.test(normalizedArabic)) {
            // Find position in original text
            const match = normalizedArabic.match(bismillahPattern)
            if (match) {
              const matchLength = match[0].length
              // Calculate position in original text
              const originalMatchIndex = arabicText.indexOf(normalizedBismillah)
              if (originalMatchIndex !== -1) {
                arabicText = arabicText.substring(originalMatchIndex + normalizedBismillah.length).trim()
              }
            }
          }
        }
      }
      
      const romanText = romanVerse ? romanVerse.text.trim() : ''
      
      // Verify that transliteration exists for this Arabic verse
      if (!romanVerse) {
        console.warn(`No transliteration found for verse ${ayah.numberInSurah} in surah ${surahNumber}`)
      }
      
      return {
        number: ayah.numberInSurah,
        arabic: arabicText, // Arabic text with Bismillah removed from verse 1 if present
        roman: romanText, // Roman English transliteration exactly as API provides
        telugu: teluguVerse && teluguVerse.text ? teluguVerse.text.trim() : '', // Telugu translation from Quran.com API
        teluguAuthor: 'Maulana Abder-Rahim ibn Muhammad',
        translation: englishVerse ? englishVerse.text : '',
        translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
      }
    })

    // Cache the verses (always Saheeh International - MOST USED & MOST ACCURATE)
    const cacheKey = `${surahNumber}_sahih`
    verseCache[cacheKey] = verses
    return verses
  } catch (error) {
    console.error('Error fetching surah:', error)
    return []
  }
}

// Get verses for a surah (with caching)
// Uses Saheeh International (MOST USED & MOST ACCURATE) for English Translation | Madinah Mushaf (King Fahad Complex) for Arabic & Roman English Transliteration
export const getSurahVerses = async (surahNumber, translationKey = null) => {
  // Always use Saheeh International (MOST USED & MOST ACCURATE)
  const cacheKey = `${surahNumber}_sahih`
  
  // Check cache first
  if (verseCache[cacheKey]) {
    return verseCache[cacheKey]
  }
  
  // Check local sample data
  if (localSampleVerses[surahNumber]) {
    return localSampleVerses[surahNumber]
  }
  
  // Fetch from API (always Saheeh International - MOST USED & MOST ACCURATE)
  return await fetchSurahFromAPI(surahNumber, null)
}

// Sample verses for offline use
// Telugu translations available for:
// - Surah 1 (Al-Fatiha): All 7 verses
// - Surah 112 (Al-Ikhlas): All 4 verses
// Note: API integration is in place but Telugu API endpoints are currently returning 404 errors
// When API becomes available, it will automatically fetch Telugu translations for all surahs
const localSampleVerses = {
  1: [
        {
          number: 1,
          arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
          roman: 'Bismillaahir Rahmaanir Raheem',
          telugu: 'దయామయుడైన, కరుణామయుడైన అల్లాహ్ పేరుతో',
          teluguAuthor: 'Moulana Abdul Raheem',
          translation: 'In the name of Allah, the Most Gracious, the Most Merciful',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
        },
    {
      number: 2,
      arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      roman: 'Alhamdu lillaahi Rabbil \'aalameen',
      telugu: 'అన్ని ప్రపంచాలకు ప్రభువైన అల్లాహ్ కు స్తుతి',
      translation: 'Praise be to Allah, the Lord of all the worlds',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
    {
      number: 3,
      arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
      roman: 'Ar-Rahmaanir-Raheem',
      telugu: 'దయామయుడైన, కరుణామయుడైన',
      translation: 'The Most Gracious, the Most Merciful',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
    {
      number: 4,
      arabic: 'مَالِكِ يَوْمِ الدِّينِ',
      roman: 'Maaliki Yawmid-Deen',
      telugu: 'న్యాయం దినం యొక్క యజమాని',
      translation: 'Master of the Day of Judgment',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
    {
      number: 5,
      arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      roman: 'Iyyaaka na\'budu wa lyyaaka nasta\'een',
      telugu: 'మేము మాత్రమే నిన్ను ఆరాధిస్తాము మరియు మేము మాత్రమే నిన్ను సహాయం కోరుతాము',
      translation: 'You alone we worship, and You alone we ask for help',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
    {
      number: 6,
      arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      roman: 'Ihdinas-Siraatal-Mustaqeem',
      telugu: 'మాకు సరైన మార్గాన్ని చూపించు',
      translation: 'Guide us to the straight path',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
    {
      number: 7,
      arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      roman: 'Siraatal-lazeena an\'amta \'alaihim ghayril-maghdoobi \'alaihim wa lad-daaalleen',
      telugu: 'వారి మార్గం, వారిపై నీవు కృప చూపించావు, కోపం పొందిన వారిది కాదు మరియు తప్పుడు మార్గంలో ఉన్నవారిది కాదు',
      translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
  ],
  112: [
    {
      number: 1,
      arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
      roman: 'Qul huwallahu ahad',
      telugu: 'చెప్పు: అతను అల్లాహ్, ఒక్కడే',
      translation: 'Say: He is Allah, the One',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
    {
      number: 2,
      arabic: 'اللَّهُ الصَّمَدُ',
      roman: 'Allahus samad',
      telugu: 'అల్లాహ్ సర్వ స్వతంత్రుడు',
      translation: 'Allah, the Eternal, Absolute',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
    {
      number: 3,
      arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
      roman: 'Lam yalid wa lam yoolad',
      telugu: 'ఆయన కన్నవాడు లేడు, కనబడినవాడు లేడు',
      translation: 'He begets not, nor is He begotten',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
    {
      number: 4,
      arabic: 'وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
      roman: 'Wa lam yakun lahu kufuwan ahad',
      telugu: 'మరియు ఆయనకు సమానమైనవాడు ఎవడూ లేడు',
      translation: 'And there is none like unto Him',
          teluguAuthor: 'Moulana Abdul Raheem',
          translationAuthor: 'Saheeh International (MOST USED & MOST ACCURATE)',
    },
  ],
}
