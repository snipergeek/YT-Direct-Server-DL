document.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status');

  async function sendToServer(format) {
    status.textContent = 'Récupération URL...';

    let tab;
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      tab = tabs[0];
      if (!tab?.url?.includes('youtube.com/watch')) {
        status.textContent = 'Pas sur une vidéo YouTube';
        return;
      }
    } catch (e) {
      status.textContent = 'Erreur: ' + e.message;
      return;
    }

    status.textContent = 'Envoi au serveur...';

    try {
      const response = await fetch('https://yt.hosten.uk/api/download-yt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: tab.url,
          format: format,          
          secret: 'EZDZUuhezdz6545z4dzz6d4zZefr'   
        })
      });

      if (response.ok) {
        status.textContent = 'Envoyé ! Le serveur télécharge...';
      } else {
        status.textContent = 'Erreur serveur : ' + response.status;
      }
    } catch (err) {
      status.textContent = 'Erreur : ' + err.message;
    }
  }

  document.getElementById('mp3').onclick = () => sendToServer('mp3');
  document.getElementById('mp4').onclick = () => sendToServer('mp4');
});