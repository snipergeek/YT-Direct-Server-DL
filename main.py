from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
import os
import uvicorn

app = FastAPI(title="YouTube Downloader to Server")

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r'^chrome-extension://.*$',
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


MUSIC_DIR = "/home/server/..." # Directory path where music files are stored
VIDEO_DIR = "/home/server/..." # Directory path where video files are stored
SECRET = "Secret key used for encryption or session authentication"

os.makedirs(MUSIC_DIR, exist_ok=True)
os.makedirs(VIDEO_DIR, exist_ok=True)

class DownloadRequest(BaseModel):
    url: str
    format: str         
    secret: str

@app.post("/api/download-yt")
async def download_yt(req: DownloadRequest):
    """
    Lance un téléchargement YouTube vers le dossier approprié
    (Musique pour MP3, Vidéo pour MP4)
    """
    if req.secret != SECRET:
        raise HTTPException(status_code=403, detail="Clé invalide")

    if req.format not in ("mp3", "mp4"):
        raise HTTPException(status_code=400, detail="Format invalide (mp3 ou mp4 seulement)")

    download_dir = MUSIC_DIR if req.format == "mp3" else VIDEO_DIR

    if req.format == "mp3":
        cmd = [
            "yt-dlp",
            "-x",
            "--audio-format", "mp3",
            "--audio-quality", "0",
            "-o", f"{download_dir}/%(title)s.%(ext)s",
            "--no-playlist",
            "--embed-thumbnail",
            "--add-metadata",
            req.url
        ]
    else:  # mp4
        cmd = [
            "yt-dlp",
            "-f", "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]",
            "-o", f"{download_dir}/%(title)s.%(ext)s",
            "--no-playlist",
            "--embed-subs",
            req.url
        ]

    try:
        subprocess.Popen(
            cmd,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            start_new_session=True
        )
        return {"status": "ok", "message": "Téléchargement lancé"}
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail="yt-dlp introuvable – est-il installé dans le venv ?")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur inattendue : {str(e)}")
if __name__ == "__main__":
    port = int(os.getenv("PORT", "8523"))        
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port,
        log_level="info",
    )
