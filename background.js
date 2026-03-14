chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openPopup') {
    chrome.action.openPopup().catch(() => {
      console.log('Popup n\'a pas pu s\'ouvrir automatiquement');
    });
  }
});
