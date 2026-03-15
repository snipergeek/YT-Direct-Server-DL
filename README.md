# YT-Direct-Server-DL
Gemini a dit
Here is the exact same README, translated into professional and punchy English, keeping all your specific features (VENV, Secret Key, and custom paths) intact.

📺 YT-Direct-Server-DL
Download any YouTube video directly to YOUR server in one click via a dedicated Chrome extension.

✨ The Concept
Tired of downloading videos to your PC only to manually transfer them to your NAS or VPS?
 YT-Direct-Server-DL injects a native button directly into the YouTube interface. Click it, choose your format (MP3 or MP4), and your server handles the rest. The file is instantly stored exactly where you want it.

🔒 Security & Customization
The project includes two important layers of customization:

Secret Key (Security): To prevent unauthorized users from using your bandwidth, a "Secret Key" must be identical in both popup.js (extension) and main.py (server). The server will reject any request without a matching key.

Custom Paths: Inside main.py, you can precisely define where your files land by modifying the MP3_PATH and MP4_PATH variables (e.g., pointing to your Plex or Music library).

🚀 Installation & Setup
1. Server Setup (Backend)
The start.sh script is fully automated. It handles the creation of a virtual environment (VENV), installs dependencies (including yt-dlp), and boots the server.

Bash
# Clone the repository
git clone [https://github.com/your-username/yt-to-server.git](https://github.com/snipergeek/YT-Direct-Server-DL.git)

cd yt-to-server

# Grant execution permissions
chmod +x start.sh

# Start the server
./start.sh
2. Extension Setup (Browser)
Open Google Chrome and navigate to chrome://extensions/.

Enable Developer Mode (top right toggle).

Click Load unpacked and select the extension folder from this project.

Important: Don't forget to configure your server's IP address and your SECRET_KEY in the extension files.

📂 Project Structure
Plaintext
.
├── extension/
│   ├── manifest.json
│   ├── popup.js       <-- Set Server URL and SECRET_KEY here
│   └── content.js     <-- YouTube button injection logic
├── backend/
│   ├── main.py        <-- Set custom PATHS and SECRET_KEY here
│   ├── requirements.txt
│   └── start.sh       <-- Auto VENV management & launch script
└── downloads/         <-- (Default) Your files land here
    ├── mp3/
    └── mp4/
🛠️ Technologies Used
Python 3: Server-side logic.

yt-dlp: The ultimate engine for high-quality media extraction.

Flask / FastAPI: To bridge the gap between the extension and your storage.

JavaScript (Manifest V3): For a lightweight and fast Chrome extension.

Bash: For seamless deployment via venv.

[!WARNING]

Legal Note: This project is intended for personal use only. Please respect the copyrights and terms of service of the content creators and platforms.
