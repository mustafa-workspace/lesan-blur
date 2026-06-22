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
