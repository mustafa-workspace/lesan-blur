const badWords = [
  // === English Profanity & Slurs ===
  "fuck", "fucking", "fucker", "shit", "shitty", "bitch", "bastard", "asshole", "ass",
  "dick", "pussy", "cunt", "motherfucker", "slut", "whore", "nigger", "nigga", "faggot",
  "retard", "retarded", "damn", "crap", "douche", "wanker", "twat", "cock", "snatch", "pornhub", "https://pornhub.com/", "pornhub.net", "pornhub.org", "https://pornhub.com/", "xhamster.com",
  "xhamster", "xhamster.net", "xhamster.org", "xhmaster", "xhamster18+", "xhamster2", "xhamster3", "xhamster4", "xhamster5", "xhamster6", "xhamster7", "xhamster8", "xhamster9", "xhamster10",
  "pornhd.com", "pornhd", "pornhd.net", "pornhd.org",
  "porntube.com", "porntube", "porntube.net", "porntube.org",
  "youjiz.com", "youjiz", "youjiz.net", "youjiz.org",
  "theporndude", "theporndude.com", "theporndude.net", "theporndude.org",
  "redtube.com", "redtube", "redtube.net", "redtube.org",
  "tube8.com", "tube8", "tube8.net", "tube8.org",
  "erome.com", "erome", "erome.net", "erome.org",
  "eporner.com", "eporner", "eporner.net", "eporner.org",
  "pornkip.com", "pornkip", "pornkip.net", "pornkip.org","instagram", "https://www.instagram.com/",
  "pornkip.com", "pornkip", "pornkip.net", "pornkip.org","instagram.com","sex content",
  "pornkip.com", "pornkip", "pornkip.net", "pornkip.org", "porn", "hot", "hot girl", "hot women", "hot boys", "hot men", "hot girl",
  "hot", "hot girl", "hot women", "hot boys", "hot men", "hot girl", "girl take off", "girl", "girl in bed", "girl take off", "girl in bed", "girl take off", "girl in bed",
  // === Arabizi / Franco Arabic (Very common to bypass filters) ===
  "kosomak", "kosmk", "ksomak", "koso", "sharmouta", "sharmota", "sharmoot", "a7a", "ahaa",
  "zib", "zobb", "teez", "teez", "mutnak", "mnawk", "5awl", "3ars", "ya 3ars", "qahba",
  "kahba", "maknaka", "deyyth", "ayre", "ayr", "niqak", "neeek", "niiik", "fakk", "fak",
  "khasra", "lebat", "motrebat", "zameli", "kalb", "wlad kalb", "ibn kalb",
  "PornHub", "XVideos", "xHamster", "XNXX", "Eporner", "HQporner",
  "Beeg", "YourPorn", "SpankBang", "Motherless", "XMoviesForYou",
  "PornTrex", "YouJizz", "RedTube", "YouPorn", "PornOne", "3Movs",
  "Tube8", "PornDig", "CumLouder", "TXXX", "PornDoe", "PornHat", "OK.xxx",
    "Candy AI", "OurDream AI", "GirlfriendGPT", "SpicyChat AI", "JuicyChat AI",
    "PlayBun", "CreatePorn", "Joi AI", "CamSoda AI", "CrushOn AI",
    "PornWorks AI", "TryNectar AI", "Seduced", "LusyChat AI", "GoLove AI",
    "CamSoda", "StripChat", "SinParty", "LiveJasmin", "Streamate",
    "BongaCams", "JerkMate", "Cam4", "MyFreeCams", "Flirtify","onlyfans",
    "Flirtbate", "Amateur TV", "XloveCam", "ImLive", "SkyPrivate",
    "Brazzers", "BangBros", "SpiceVids", "I Know That Girl", "LetsDoeIt",
    "AdultTime", "FapHouse", "Candy AI", "HentaiedPRO", "TeamSkeet",
    "MYLF", "PureTaboo", "Naughty America", "XVideos Red", "GirlfriendGPT",
    "Mofos", "Evil Angel", "Vixen", "AdultPrime", "PornBox",
    "Family Strokes", "Swappz", "CzechAV", "FreeUse","sex adult","bueaty woman",
    "CooMeet", "Flirtify", "LuckyCrush",
    "PlayBun", "XModeAI", "GenesisPorn","trans Gigi🔞🔞","transgigixx",
    "CooMeet", "Flirtify", "LuckyCrush","trans","gay",

  // === Arabic Slang (Egyptian, Levantine, Gulf) ===
  // Warning: Explicit terms below
  "شرموطة", "قحبة", "عاهرة", "مومس", "بغي",
  "كس", "كسمك", "كس ", "كس اختك", "طيز", "طيزك", "خرم", "خرمك",
  "زبر", "زب", "زبوك", "ايقف", "قف",
  "عرص", "متناك", "منيوك", "خول", "لوطي", "ديوث", "مخنث", "تبل",
  "نيك", "ينيكك", "منيك", "مكنيك",
  "احا", "اهوس", "عرص", "كس ",
  "هيجي يريحك", "هيجي ينيكك", "كسم أمك", "يلعن ابوك", "يلعن دينك",
  "ابن المتناكة", "ابن القحبة", "ابن العرص", "ولد القحبة",
  "كلب", "ابن كلب", "حيوان", "خنزير",
  "حقير", "ساقط", "مجرم", "مردود", "وغد", "نذل", "رذيل",
  "سكس", "سكسي", "سكسيه", "سكسية", "سكسية ","S;S", "SX", "SXN",
  "TD]D,IHJ [KSDM","hfhpdm","sexy","سككس","xxx",

  // === Arabic FSI (Formal/Strong insults) ===
  "لعنة الله عليك", "تباً لك", "سحقاً لك", "افحش", "فاحشة", "فجور", "زنا",
  "زاني", "زانية", "فاسق", "فاسقة", "مفسد", "كافر", "منافق", "خائن", "مسيء", "عدواني", "مؤذٍ", "مسيء", "مسيء", "مسيء", "مسيء", "مسيء", "مسيء",
];


// Helper to escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const badWordsRegexSource = badWords.map(word => escapeRegExp(word)).join('|');

// Use lookbehind and lookahead to ensure we only match whole words.
// We include spaces and common English/Arabic punctuation as boundaries.
const leftBoundary = "(?<=^|\\s|[.,!?;:\"'()\\[\\]{}<>\\-_،؛؟/])";
const rightBoundary = "(?=$|\\s|[.,!?;:\"'()\\[\\]{}<>\\-_،؛؟/])";

// A global, case-insensitive regex for the bad words
const BAD_WORDS_REGEX = new RegExp(`${leftBoundary}(${badWordsRegexSource})${rightBoundary}`, 'gi');

