let isEnabled = true;
let lastUrl = location.href;

// ===== Porn Blocker =====
const PORN_KEYWORDS = [
  "pornhub", "xvideos", "xnxx", "xhamster", "youporn", "redtube", 
  "tube8", "spankwire", "eporner", "erome", "xnx", "xxx", "sex", "lesbian", "gay", "trans", "porn", "hot", "hot girl", "hot women", "hot boys", "hot men", "hot girl", "girl take off", "girl in bed", "girl take off", "girl in bed", "girl take off", "girl in bed"
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
          يمكنك التواصل معنا عبر حساباتنا على وسائل التواصل الاجتماعي
          <br>
          Our digital environment deserves to be cleaner.
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
          <!-- YouTube -->
          <a href="" style="
            width: 48px; height: 48px;
            border-radius: 50%;
            border: 2px solid #ddd;
            display: flex; align-items: center; justify-content: center;
            text-decoration: none; color: #333;
            transition: all 0.2s ease;
          " onmouseover="this.style.borderColor='#FF0000'; this.style.color='#FF0000'" 
             onmouseout="this.style.borderColor='#ddd'; this.style.color='#333'">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <!-- TikTok -->
          <a href="#" style="
            width: 48px; height: 48px;
            border-radius: 50%;
            border: 2px solid #ddd;
            display: flex; align-items: center; justify-content: center;
            text-decoration: none; color: #333;
            transition: all 0.2s ease;
          " onmouseover="this.style.borderColor='#000'; this.style.color='#000'" 
             onmouseout="this.style.borderColor='#ddd'; this.style.color='#333'">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
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
          " onmouseover="this.style.borderColor='#25D366'; this.style.color='#25D366'" 
             onmouseout="this.style.borderColor='#ddd'; this.style.color='#333'">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

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

// Retrieve initial state from storage
chrome.storage.sync.get(["lesanEnabled"], (result) => {
  if (result.lesanEnabled !== undefined) {
    isEnabled = result.lesanEnabled;
  }
  if (isEnabled) {
    if (checkPornSite()) return; // Stop if porn site
    
    checkPlatformSearch();
    
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initBlurring);
    } else {
      initBlurring();
    }
  }
});

function initBlurring() {
  if (document.body) scanAndBlur(document.body);
  observeMutations();
}

// Listen for messages from popup/background to toggle state
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    isEnabled = request.enabled;
    if (isEnabled) {
      if (checkPornSite()) return;
      initBlurring();
    } else {
      removeBlurs();
      if (typeof observer !== "undefined") observer.disconnect();
    }
  }
});

// Create a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver((mutations) => {
  if (!isEnabled) return;
  
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
  const safeQuery = encodeURIComponent("محتوى مضحك وإيجابي");

  if (hostname.includes("youtube.com") && urlObj.pathname === "/results") {
    searchQuery = urlObj.searchParams.get("search_query");
    redirectUrl = `https://www.youtube.com/results?search_query=${safeQuery}`;
  } else if (hostname.includes("facebook.com") && urlObj.pathname.startsWith("/search")) {
    searchQuery = urlObj.searchParams.get("q");
    redirectUrl = `https://www.facebook.com/search/top?q=${safeQuery}`;
  } else if ((hostname.includes("twitter.com") || hostname.includes("x.com")) && urlObj.pathname === "/search") {
    searchQuery = urlObj.searchParams.get("q");
    redirectUrl = `https://x.com/search?q=${safeQuery}`;
  } else if (hostname.includes("instagram.com") && urlObj.pathname.includes("/explore/search")) {
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
  }

  if (searchQuery) {
    const decodedQuery = decodeURIComponent(searchQuery).replace(/\+/g, ' ');
    BAD_WORDS_REGEX.lastIndex = 0; // reset regex
    if (BAD_WORDS_REGEX.test(decodedQuery)) {
      window.location.replace(redirectUrl);
    }
  }
}
