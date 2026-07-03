let lastUrl = location.href;

// ===== Porn Blocker =====
const PORN_KEYWORDS = [
  "pornhub", "xvideos", "xnxx", "xhamster", "youporn", "redtube", "pornkip.com", "pornkip", "pornkip.net", "pornkip.org", "instagram", "https://www.instagram.com/",
  "pornkip.com", "pornkip", "pornkip.net", "pornkip.org", "sex content", "https://theporndude.com/", "porndude.com", "porndudedeutsch.com", "theporndude", "https://tpd.deals", "tpd.deals", "porndudecasting.com", "porndudeshop.com", "porndude.com/about", "porndudecasting.com",
  "tube8", "spankwire", "eporner", "erome", "xnx", "xxx", "sex", "lesbian", "gay", "trans", "porn", "hot", "hot girl", "hot women", "hot boys", "hot men", "hot girl", "girl take off", "girl in bed", "girl take off", "girl in bed", "girl take off", "girl in bed",
  "PornHub", "XVideos", "xHamster", "XNXX", "Eporner", "HQporner",
  "Beeg", "YourPorn", "SpankBang", "Motherless", "XMoviesForYou",
  "PornTrex", "YouJizz", "RedTube", "YouPorn", "PornOne", "3Movs","sex adult",
  "Tube8", "PornDig", "CumLouder", "TXXX", "PornDoe", "PornHat", "OK.xxx",
    "Candy AI", "OurDream AI", "GirlfriendGPT", "SpicyChat AI", "JuicyChat AI",
    "PlayBun", "CreatePorn", "Joi AI", "CamSoda AI", "CrushOn AI",
    "PornWorks AI", "TryNectar AI", "Seduced", "LusyChat AI", "GoLove AI",
    "CamSoda", "StripChat", "SinParty", "LiveJasmin", "Streamate",
    "BongaCams", "JerkMate", "Cam4", "MyFreeCams", "Flirtify","bueaty woman",
    "Flirtbate", "Amateur TV", "XloveCam", "ImLive", "SkyPrivate",
    "Brazzers", "BangBros", "SpiceVids", "I Know That Girl", "LetsDoeIt",
    "AdultTime", "FapHouse", "Candy AI", "HentaiedPRO", "TeamSkeet",
    "MYLF", "PureTaboo", "Naughty America", "XVideos Red", "GirlfriendGPT",
    "Mofos", "Evil Angel", "Vixen", "AdultPrime", "PornBox",
    "Family Strokes", "Swappz", "CzechAV", "FreeUse",
    "CooMeet", "Flirtify", "LuckyCrush","sexy",
    "hot girl","adult woman","sex girl","hot woman","سكس","اهات","جنسية","صور بنات",
    "PlayBun", "XModeAI", "GenesisPorn",
    "CooMeet", "Flirtify", "LuckyCrush",
    "theporndude", "theporndude.com", "theporndude.net", "theporndude.org", "theporndude.com", "theporndude.net", "theporndude.org"
    ,"fuck", "fucking", "fucker", "shit", "shitty", "bitch", "bastard", "asshole", "ass",
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
    "CamSoda", "StripChat", "SinParty", "LiveJasmin", "Streamate","transgigixx",
    "BongaCams", "JerkMate", "Cam4", "MyFreeCams", "Flirtify",
    "Flirtbate", "Amateur TV", "XloveCam", "ImLive", "SkyPrivate",
    "Brazzers", "BangBros", "SpiceVids", "I Know That Girl", "LetsDoeIt",
    "AdultTime", "FapHouse", "Candy AI", "HentaiedPRO", "TeamSkeet",
    "MYLF", "PureTaboo", "Naughty America", "XVideos Red", "GirlfriendGPT",
    "Mofos", "Evil Angel", "Vixen", "AdultPrime", "PornBox",
    "Family Strokes", "Swappz", "CzechAV", "FreeUse","xx","xxx",
    "CooMeet", "Flirtify", "LuckyCrush","trans Gigi🔞🔞",
    "PlayBun", "XModeAI", "GenesisPorn","xxx","trans","gay",
    "CooMeet", "Flirtify", "LuckyCrush",

  // === Arabic Slang (Egyptian, Levantine, Gulf) ===
  // Warning: Explicit terms below
  "شرموطة", "قحبة", "عاهرة", "مومس", "بغي",
  "كس", "كسمك", "كس ", "كس اختك", "طيز", "طيزك", "خرم", "خرمك",
  "زبر", "زب", "زبوك", "ايقف", "قف",
  "عرص", "متناك", "منيوك", "خول", "لوطي", "ديوث", "مخنث", "تبل",
  "نيك", "ينيكك", "منيك", "مكنيك","سككس",
  "احا", "اهوس", "عرص", "كس ",
  "هيجي يريحك", "هيجي ينيكك", "كسم أمك", "يلعن ابوك", "يلعن دينك",
  "ابن المتناكة", "ابن القحبة", "ابن العرص", "ولد القحبة",
  "كلب", "ابن كلب", "حيوان", "خنزير",
  "حقير", "ساقط", "مجرم", "مردود", "وغد", "نذل", "رذيل",
  "سكس", "سكسي", "سكسيه", "سكسية", "سكسية ","S;S", "SX", "SXN",
  "TD]D,IHJ [KSDM","hfhpdm",

  // === Arabic FSI (Formal/Strong insults) ===
  "لعنة الله عليك", "تباً لك", "سحقاً لك", "افحش", "فاحشة", "فجور", "زنا",
  ];

function checkPornSite() {
  const hostname = window.location.hostname.toLowerCase();
  const isPornSite = PORN_KEYWORDS.some(keyword => hostname.includes(keyword));
  
  if (isPornSite) {
    blockPage();
    return true;
  }
  return false;
}

function blockPage() {
  document.documentElement.style.display = 'none';
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.display = '';
    document.body.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #f5f5f5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        text-align: center;
        padding: 2rem;
        box-sizing: border-box;
      ">
        <!-- Traffic Cones Icon -->
        <div style="margin-bottom: 2rem;">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="https://www.pinterest.com/pin/574209021263226104/"> 
            <!-- Left cone (tilted) -->
            <g transform="translate(15, 20) rotate(-15, 30, 70)">
              <path d="M30 10 L50 70 L10 70 Z" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
              <rect x="8" y="70" width="44" height="8" rx="2" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
              <path d="M22 35 L38 35 L35 45 L25 45 Z" fill="white" opacity="0.9"/>
            </g>
            <!-- Right cone (upright) -->
            <g transform="translate(55, 10)">
              <path d="M30 10 L50 70 L10 70 Z" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
              <rect x="8" y="70" width="44" height="8" rx="2" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
              <path d="M22 35 L38 35 L35 45 L25 45 Z" fill="white" opacity="0.9"/>
            </g>
          </svg>
        </div>

        <!-- Main Heading -->
        <h1 style="
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        "> بيئتنا الرقمية تستحق أن تكون أنقى</h1>

        <!-- Subtitle -->
        <p style="
          font-size: 1.1rem;
          color: #555;
          margin: 0 0 2rem 0;
          line-height: 1.6;
          width: 20rem;
        ">
         أنضم لمجتمعنا السري والأمن .. لتجد من تتحدث معه 
          <br>
         Join our secret and secure community... to find someone to talk to
        </p>

        <!-- Social Media Icons Row -->
        <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
          <!-- Facebook -->
          <a href="https://web.facebook.com/lisanblur.official" style="
            width: 48px; height: 48px;
            border-radius: 50%;
            border: 2px solid #ddd;
            display: flex; align-items: center; justify-content: center;
            text-decoration: none; color: #333;
            transition: all 0.2s ease;
          " onmouseover="this.style.borderColor='#1877F2'; this.style.color='#1877F2'" 
             onmouseout="this.style.borderColor='#ddd'; this.style.color='#333'">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <!-- WhatsApp -->
          <a href="https://web.telegram.org/k/#@lisanblur" style="
            width: 48px; height: 48px;
            border-radius: 50%;
            border: 2px solid #ddd;
            display: flex; align-items: center; justify-content: center;
            text-decoration: none; color: #333;
            transition: all 0.2s ease;
          " onmouseover="this.style.borderColor='#25cdd3ff'; this.style.color='#25b0d3ff'" 
             onmouseout="this.style.borderColor='#ddd'; this.style.color='#333'">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://w3.org">
                <path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 5.621 3.875 10.334 9.117 11.603.023-.424.047-1.077.008-1.54L9.08 17.58s1.606.945 4.316.945c5.344 0 8.653-4.14 8.653-8.86 0-4.04-2.883-6.852-7.143-6.852-5.183 0-8.253 3.867-8.253 7.91 0 1.564.6 3.235 1.35 4.14.15.18.172.34.127.525l-.503 2.06c-.08.33-.284.443-.615.29-2.17-.96-3.414-3.86-3.414-6.49 0-5.59 4.417-10.93 11.945-10.93 6.27 0 11.085 4.47 11.085 10.38 0 6.23-3.924 11.24-9.367 11.24-1.83 0-3.552-.95-4.14-2.07l-1.13 4.31c-.41 1.56-1.52 3.51-2.27 4.74A11.933 11.933 0 0011.944 24C18.57 24 24 18.57 24 11.944 24 5.344 18.57 0 11.944 0z"/>
                <path d="M18.384 6.76a.547.547 0 0 0-.53-.08l-13.06 5.04c-.375.15-.371.36-.067.45l3.35 1.045 7.77-4.905c.365-.22.7-.1.427.14l-6.3 5.685-.246 3.48c.343 0 .495-.157.687-.342l1.65-1.6 3.43 2.534c.63.35 1.085.17 1.242-.58l2.25-10.6c.23-.92-.35-1.336-.913-1.072z"/>
              </svg>
          </a>
        </div>
        <!-- Join our group -->
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <span style="font-size: 1rem; color: #555;">Join our Chat group</span>
          <a href="https://t.me/+9c00Nll9Aq80MTk8" style="
            display: inline-block;
            padding: 0.6rem 1.5rem;
            border: 2px solid #ccc;
            border-radius: 8px;
            text-decoration: none;
            color: #333;
            font-size: 1rem;
            font-weight: 500;
            background: white;
            transition: all 0.2s ease;
          " onmouseover="this.style.borderColor='#2693dcff'; this.style.color='#2693dcff'" 
             onmouseout="this.style.borderColor='#ccc'; this.style.color='#333'">
            Join our Telegram chat
          </a>
        </div>
        <br/>
        <!-- Email Contact Section -->
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <span style="font-size: 1rem; color: #555;">Send us an Email</span>
          <a href="mailto:yaqinplatformofficial@outlook.com" style="
            display: inline-block;
            padding: 0.6rem 1.5rem;
            border: 2px solid #ccc;
            border-radius: 8px;
            text-decoration: none;
            color: #333;
            font-size: 1rem;
            font-weight: 500;
            background: white;
            transition: all 0.2s ease;
          " onmouseover="this.style.borderColor='#2693dcff'; this.style.color='#2693dcff'" 
             onmouseout="this.style.borderColor='#ccc'; this.style.color='#333'">
            yaqinplatformofficial@outlook.com
          </a>
        </div>
      </div>
    `;
    document.body.style.display = 'block';
  });
}

// Run immediately
if (!checkPornSite()) {
  checkPlatformSearch();
  window.location.href
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBlurring);
  } else {
    initBlurring();
  }
}

function initBlurring() {
  if (document.body) scanAndBlur(document.body);
  observeMutations();
}

// Create a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver((mutations) => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    checkPlatformSearch();
  }

  for (let mutation of mutations) {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          scanAndBlur(node);
        } else if (node.nodeType === Node.TEXT_NODE) {
          processTextNode(node);
        }
      });
    } else if (mutation.type === "characterData") {
      processTextNode(mutation.target);
    }
  }
});

function observeMutations() {
  if (!document.body) return;
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
}

function scanAndBlur(element) {
  // Ignore specific tags that shouldn't be processed
  const ignoreTags = ["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "OBJECT"];
  if (ignoreTags.includes(element.tagName)) return;
  if (element.classList && element.classList.contains("lesan-blurred-text")) return;

  const treeWalker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        if (ignoreTags.includes(node.parentNode.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (node.parentNode.classList && node.parentNode.classList.contains("lesan-blurred-text")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  const textNodes = [];
  let currentNode;
  while ((currentNode = treeWalker.nextNode())) {
    textNodes.push(currentNode);
  }

  textNodes.forEach(processTextNode);
}

function processTextNode(node) {
  if (!node.nodeValue) return;
  
  const text = node.nodeValue;
  // If no match, do nothing
  if (!BAD_WORDS_REGEX.test(text)) {
    return;
  }
  
  // Create a wrapper element to hold the text with replacements
  const span = document.createElement("span");
  
  // Replace the bad words with the blurred span
  let lastIndex = 0;
  let match;
  
  // Reset regex index
  BAD_WORDS_REGEX.lastIndex = 0;
  
  // We use replace to build HTML string because it's simpler, but injecting HTML
  // from text node requires care to escape the non-bad-word parts.
  // Actually, creating text nodes and span nodes is safer.
  
  const fragments = document.createDocumentFragment();
  
  while ((match = BAD_WORDS_REGEX.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      fragments.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));
    }
    
    // Add matched text wrapped in blurred span
    const blurredSpan = document.createElement("span");
    blurredSpan.className = "lesan-blurred-text";
    blurredSpan.textContent = match[0];
    fragments.appendChild(blurredSpan);
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    fragments.appendChild(document.createTextNode(text.substring(lastIndex)));
  }
  
  // Replace original node with our new fragment
  if (node.parentNode) {
    node.parentNode.replaceChild(fragments, node);
  }
}

function removeBlurs() {
  const blurredElements = document.querySelectorAll(".lesan-blurred-text");
  blurredElements.forEach(el => {
    const parent = el.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(el.textContent), el);
    }
  });
  // Re-normalize text nodes after removing spans
  document.body.normalize();
}

function checkPlatformSearch() {
  const url = window.location.href;
  const urlObj = new URL(url);
  const hostname = urlObj.hostname;
  let searchQuery = null;
  let redirectUrl = null;
  
  // Safe query to redirect to
  let RandomIdeasSearch = [
    "Trailers",
    "funny cat videos",
    "funny dog videos",
    "funny videos",
    "Top fun",
    "Trailers 2024",
    "Trailers 2025",
    "Trailers 2026",
    "beautiful places in the world",
    "Most beautiful places in the world",
    "nature scenes",
    "mountain views",
    "ocean views",
    "forests",
    "waterfalls",
    "top 10 most beautiful places in the world"
  ];
  
  const safeQuery = encodeURIComponent(RandomIdeasSearch[Math.floor(Math.random() * RandomIdeasSearch.length)]);

  if (hostname.includes("youtube.com") && urlObj.pathname === "/results") {
    searchQuery = urlObj.searchParams.get("search_query");
    redirectUrl = `https://www.youtube.com/results?search_query=${safeQuery}`;
  } else if (hostname.includes("facebook.com") && urlObj.pathname.startsWith("/search")) {
    searchQuery = urlObj.searchParams.get("q");
    redirectUrl = `https://www.facebook.com/search/top?q=${safeQuery}`;
  } else if ((hostname.includes("twitter.com") || hostname.includes("x.com") || hostname.includes("x.com/explore")) && urlObj.pathname === "/search") {
    searchQuery = urlObj.searchParams.get("q");
    redirectUrl = `https://x.com/search?q=${safeQuery}`;
    //---
    // دالة لإخفاء شريط البحث في X
    function hideXSearchBar() {
      const searchBar = document.querySelector('[data-testid="sidebarColumn"] form[role="search"]');
      if (searchBar) {
        searchBar.style.display = 'none !important';
        
      }
    }

    setInterval(hideXSearchBar, 1000);
    
  
  }  else if (hostname.includes("instagram.com") && urlObj.pathname.includes("/explore/search")) {
    searchQuery = urlObj.searchParams.get("q");
    redirectUrl = `https://www.instagram.com/explore/search/keyword/?q=${safeQuery}`;
  } else if (hostname.includes("reddit.com") && urlObj.pathname.startsWith("/search")) {
    searchQuery = urlObj.searchParams.get("q");
    redirectUrl = `https://www.reddit.com/search/?q=${safeQuery}`;
  } else if (hostname.includes("tiktok.com") && urlObj.pathname.startsWith("/search")) {
    searchQuery = urlObj.searchParams.get("q");
    redirectUrl = `https://www.tiktok.com/search?q=${safeQuery}`;
  } else if (hostname.includes("linkedin.com") && urlObj.pathname.startsWith("/search/results")) {
    searchQuery = urlObj.searchParams.get("keywords");
    redirectUrl = `https://www.linkedin.com/search/results/all/?keywords=${safeQuery}`;

  } else if (hostname.includes("telegram.org")) {

    const obs = new MutationObserver((obs) => {
      const TelSearchInput = document.querySelector(".input-field-input");
      if (TelSearchInput) {
        TelSearchInput.addEventListener("focus", (e) => {
          TelSearchInput.addEventListener("keyup", (searchVal) => {
            const SearchValInput = searchVal.target.value;
            if (SearchValInput != null || SearchValInput != '') {
              const badTelegramWords = PORN_KEYWORDS.some(keyword => SearchValInput.includes(keyword));
              if (badTelegramWords) {
                  blockPage();
                  return true;
              }
              return false;
            }
          })
        })
        obs.disconnect();
      }
    });
    obs.observe(document.documentElement , {
      childList:true,
      subtree:true
    })
  
  }

  if (searchQuery) {
    const decodedQuery = decodeURIComponent(searchQuery).replace(/\+/g, ' ');
    BAD_WORDS_REGEX.lastIndex = 0; // reset regex
    if (BAD_WORDS_REGEX.test(decodedQuery)) {
      window.location.replace(redirectUrl);
    }
  }
}
