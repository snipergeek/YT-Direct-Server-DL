function addCustomButton() {
  if (document.getElementById('yt-to-server-btn')) return;

  if (!document.getElementById('yt-server-btn-styles')) {
    const style = document.createElement('style');
    style.id = 'yt-server-btn-styles';
    style.innerHTML = `
      #yt-to-server-btn {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: rgba(255, 255, 255, 0.08) !important;
        color: var(--yt-spec-text-primary, #fff) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
        cursor: pointer !important;
        font-size: 14px !important;
        padding: 8px 12px !important;
        margin: 0 4px !important;
        border-radius: 20px !important;
        font-family: 'Roboto', Arial, sans-serif !important;
        transition: all 0.2s ease !important;
        font-weight: 500 !important;
      }
      
      #yt-to-server-btn:hover {
        background: rgba(255, 255, 255, 0.25) !important;
        border: 1px solid rgba(255, 255, 255, 0.25) !important;
      }
    `;
    document.head.appendChild(style);
  }

  const shareButton = Array.from(document.querySelectorAll('button[aria-label]')).find(btn => {
    const label = btn.getAttribute('aria-label') || '';
    return label.toLowerCase().includes('share') || label.toLowerCase().includes('partager');
  });

  if (!shareButton) {
    setTimeout(addCustomButton, 500);
    return;
  }

  const button = document.createElement('button');
  button.id = 'yt-to-server-btn';
  button.setAttribute('aria-label', 'Télécharger sur serveur');
  button.innerHTML = `
    <svg style="width: 20px; height: 20px; margin-right: 6px; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>
    <span>Download</span>
  `;

  button.onclick = () => {
    chrome.runtime.sendMessage({ action: "openPopup" }).catch((err) => {
      console.log('Popup:', err);
    });
  };

  shareButton.parentElement.insertBefore(button, shareButton.nextSibling);
  console.log('Bouton ajouté');
}

console.log('🚀 content.js chargé');
setTimeout(addCustomButton, 500);

setInterval(() => {
  if (!document.getElementById('yt-to-server-btn')) {
    addCustomButton();
  }
}, 3000);