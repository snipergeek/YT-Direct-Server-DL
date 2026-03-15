# YT-Direct-Server-DL
Download any YouTube video directly to YOUR server in one click via a dedicated Chrome extension.
​✨ The Concept
​Tired of downloading videos to your PC only to manually transfer them to your NAS or VPS?
YT-to-Server injects a native button directly into the YouTube interface. Click it, choose your format (MP3 or MP4), and your server handles the rest. The file is instantly stored exactly where you want it.
​🔒 Security & Customization
​The project includes two important layers of customization:
​Secret Key (Security): To prevent unauthorized users from using your bandwidth, a "Secret Key" must be identical in both popup.js (extension) and main.py (server). The server will reject any request without a matching key.
​Custom Paths: Inside main.py, you can precisely define where your files land by modifying the MP3_PATH and MP4_PATH variables (e.g., pointing to your Plex or Music library).
​🚀 Installation & Setup
​1. Server Setup (Backend)
​The start.sh script is fully automated. It handles the creation of a virtual environment (VENV), installs dependencies (including yt-dlp), and boots the server.
