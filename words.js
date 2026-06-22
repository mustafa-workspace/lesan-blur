// // A predefined list of bad words in English and Arabic.
// // Note: This is a basic starter list for demonstration.
// قاموس موسع ومرتب (تم التأكد من عدم التكرار)
const badWords = [
  // === English Profanity & Slurs ===
  "fuck", "fucking", "fucker", "shit", "shitty", "bitch", "bastard", "asshole", "ass",
  "dick", "pussy", "cunt", "motherfucker", "slut", "whore", "nigger", "nigga", "faggot",
  "retard", "retarded", "damn", "crap", "douche", "wanker", "twat", "cock", "snatch", "pornhub", "pornhub.com", "pornhub.net", "pornhub.org",
  "xhamster.com", "xhamster", "xhamster.net", "xhamster.org", "xhmaster", "xhamster18+", "xhamster2", "xhamster3", "xhamster4", "xhamster5", "xhamster6", "xhamster7", "xhamster8", "xhamster9", "xhamster10",
  "pornhd.com", "pornhd", "pornhd.net", "pornhd.org",
  "porntube.com", "porntube", "porntube.net", "porntube.org",
  "youjiz.com", "youjiz", "youjiz.net", "youjiz.org",
  "redtube.com", "redtube", "redtube.net", "redtube.org",
  "tube8.com", "tube8", "tube8.net", "tube8.org",
  "erome.com", "erome", "erome.net", "erome.org",
  "eporner.com", "eporner", "eporner.net", "eporner.org",
  "pornkip.com", "pornkip", "pornkip.net", "pornkip.org",
  "pornkip.com", "pornkip", "pornkip.net", "pornkip.org",
  "pornkip.com", "pornkip", "pornkip.net", "pornkip.org", "porn", "hot", "hot girl", "hot women", "hot boys", "hot men", "hot girl",
  "hot", "hot girl", "hot women", "hot boys", "hot men", "hot girl", "girl take off", "girl", "girl in bed", "girl take off", "girl in bed", "girl take off", "girl in bed",
  // === Arabizi / Franco Arabic (Very common to bypass filters) ===
  "kosomak", "kosmk", "ksomak", "koso", "sharmouta", "sharmota", "sharmoot", "a7a", "ahaa",
  "zib", "zobb", "teez", "teez", "mutnak", "mnawk", "5awl", "3ars", "ya 3ars", "qahba",
  "kahba", "maknaka", "deyyth", "ayre", "ayr", "niqak", "neeek", "niiik", "fakk", "fak",
  "khasra", "lebat", "motrebat", "zameli", "kalb", "wlad kalb", "ibn kalb",

  // === Arabic Slang (Egyptian, Levantine, Gulf) ===
  // Warning: Explicit terms below
  "شرموطة", "قحبة", "عاهرة", "مومس", "بغي",
  "كس", "كسمك", "كس امك", "كس اختك", "طيز", "طيزك", "خرم", "خرمك",
  "زبر", "زب", "زبوك", "ايقف", "قف",
  "عرص", "متناك", "منيوك", "خول", "لوطي", "ديوث", "مخنث", "تبل",
  "نيك", "ينيكك", "منيك", "مكنيك",
  "احا", "اهص", "اهوس", "عوض", "كس أمك",
  "هيجي يريحك", "هيجي ينيكك", "كسم أمك", "يلعن ابوك", "يلعن ديكتك",
  "ابن المتناكة", "ابن القحبة", "ابن العرص", "ولد القحبة",
  "كلب", "ابن كلب", "حيوان", "خنزير",
  "حقير", "ساقط", "مجرم", "مردود", "وغد", "نذل", "رذيل",

  // === Arabic FSI (Formal/Strong insults) ===
  "لعنة الله عليك", "تباً لك", "سحقاً لك", "افحش", "فاحشة", "فجور", "زنا",
  "زاني", "زانية", "فاسق", "فاسقة", "مفسد", "كافر", "منافق", "خائن"
];


// Helper to escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Create a combined regular expression that matches any of the bad words,
// as whole words only (where applicable), case insensitive.
// For Arabic, word boundaries \b might not work perfectly depending on the regex engine, 
// so we might need spaces or punctuation boundaries.
const boundaries = "(?:^|\\s|[.,!?;:\"'()[\\]{}<>-])";
const badWordsRegexSource = badWords.map(word => escapeRegExp(word)).join('|');
// A global, case-insensitive regex for the bad words
const BAD_WORDS_REGEX = new RegExp(`(${badWordsRegexSource})`, 'gi');

