// Function to hide YouTube Shorts
const hideShorts = () => {
  const youtubeShortsSection = document.querySelectorAll('[is-shorts]');
  youtubeShortsSection.forEach((section) => {
    (section as HTMLElement).style.display = 'none';
  });

  const youtubeShortsNavigation = document.querySelectorAll('a[title="Shorts"]');
  youtubeShortsNavigation.forEach((navigation) => {
    (navigation as HTMLElement).style.display = 'none';
  });
};

// Function to show YouTube Shorts
const showShorts = () => {
  const youtubeShortsSection = document.querySelectorAll('[is-shorts]');
  youtubeShortsSection.forEach((section) => {
    (section as HTMLElement).style.display = 'block';
  });

  const youtubeShortsNavigation = document.querySelectorAll('a[title="Shorts"]');
  youtubeShortsNavigation.forEach((navigation) => {
    (navigation as HTMLElement).style.display = 'block';
  });
};

// Load setting from storage and apply it
chrome.storage.local.get(['shortsHidden'], (result) => {
  if (result.shortsHidden) {
    hideShorts();
  }
});

// Watch for storage changes to update in real-time
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.shortsHidden) {
    if (changes.shortsHidden.newValue) {
      hideShorts();
    } else {
      showShorts();
    }
  }
});

// YouTube uses dynamic loading, so we need to continuously watch for new elements
const observer = new MutationObserver(() => {
  chrome.storage.local.get(['shortsHidden'], (result) => {
    if (result.shortsHidden) {
      hideShorts();
    }
  });
});

// Start observing the document for changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

console.log('Content script loaded!');
