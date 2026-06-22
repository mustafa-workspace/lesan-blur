importScripts("words.js");

// Initialize state on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["lesanEnabled"], (result) => {
    if (result.lesanEnabled === undefined) {
      chrome.storage.sync.set({ lesanEnabled: true });
    }
  });
});

// Handle messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    // We could update the extension icon here based on state
    // e.g., greyscale when disabled
    const path = request.enabled 
      ? {
          "16": "assets/icon-16.png",
          "48": "assets/icon-48.png",
          "128": "assets/icon-128.png"
        }
      : {
          "16": "assets/icon-16-disabled.png",
          "48": "assets/icon-48-disabled.png",
          "128": "assets/icon-128-disabled.png"
        };
        
    // Note: If you don't have these icon files, chrome.action.setIcon might throw an error.
    // Uncomment when icons are ready:
    /*
    chrome.action.setIcon({
      path: path
    }).catch(err => console.log(err));
    */
  }
});

// Listen for search engine queries to intercept bad words
const searchEngines = [
  { host: "google.com", param: "q" },
  { host: "bing.com", param: "q" },
  { host: "yahoo.com", param: "p" },
  { host: "duckduckgo.com", param: "q" }
];

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return; // Only check main frame navigation

  chrome.storage.sync.get(["lesanEnabled"], (result) => {
    // Check if the extension is enabled
    if (result.lesanEnabled === false) return;

    try {
      const url = new URL(details.url);
      
      const engine = searchEngines.find(e => url.hostname.includes(e.host));
      if (!engine) return;

      const queryParam = url.searchParams.get(engine.param);
      if (!queryParam) return;

      // Check if query contains any bad word
      const hasBadWord = BAD_WORDS_REGEX.test(queryParam);
      BAD_WORDS_REGEX.lastIndex = 0; // Reset index for global regex

      if (hasBadWord) {
        // Replace bad words with "nature"
        const safeQuery = queryParam.replace(BAD_WORDS_REGEX, "nature");
        url.searchParams.set(engine.param, safeQuery);
        
        // Redirect to safe search
        chrome.tabs.update(details.tabId, { url: url.toString() });
      }
    } catch (e) {
      console.error("Error processing navigation URL", e);
    }
  });
});
