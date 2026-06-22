document.addEventListener('DOMContentLoaded', () => {
  const toggleCheckbox = document.getElementById('toggleExtension');
  const statusCard = document.getElementById('statusCard');
  const statusText = document.getElementById('statusText');

  // Load the current state from storage
  chrome.storage.sync.get(["lesanEnabled"], (result) => {
    // Default to true if not set
    const isEnabled = result.lesanEnabled !== false;
    toggleCheckbox.checked = isEnabled;
    updateUI(isEnabled);
  });

  // Listen for toggle changes
  toggleCheckbox.addEventListener('change', (e) => {
    const isEnabled = e.target.checked;
    
    // Save state to storage
    chrome.storage.sync.set({ lesanEnabled: isEnabled }, () => {
      updateUI(isEnabled);
      
      // Notify the background script to update icon and active tabs
      chrome.runtime.sendMessage({ action: "toggle", enabled: isEnabled });
      
      // Notify content scripts in all tabs
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, { action: "toggle", enabled: isEnabled }).catch(() => {
            // Ignore errors for tabs where the content script isn't loaded
          });
        });
      });
    });
  });

  function updateUI(isEnabled) {
    if (isEnabled) {
      statusCard.classList.remove('disabled');
      statusText.textContent = "Protection is ON";
    } else {
      statusCard.classList.add('disabled');
      statusText.textContent = "Protection is OFF";
    }
  }
});
