// Check if the extension is enabled
let isEnabled = true;

// Retrieve initial state from storage
chrome.storage.sync.get(["lesanEnabled"], (result) => {
  if (result.lesanEnabled !== undefined) {
    isEnabled = result.lesanEnabled;
  }
  if (isEnabled) {
    scanAndBlur(document.body);
    observeMutations();
  }
});

// Listen for messages from popup/background to toggle state
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggle") {
    isEnabled = request.enabled;
    if (isEnabled) {
      scanAndBlur(document.body);
      observeMutations();
    } else {
      removeBlurs();
      observer.disconnect();
    }
  }
});

// Create a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver((mutations) => {
  if (!isEnabled) return;
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
