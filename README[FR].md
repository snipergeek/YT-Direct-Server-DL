#📺 YT-Direct-Server-DL
Téléchargez n'importe quelle vidéo YouTube directement sur VOTRE serveur en un clic via une extension Chrome dédiée.

✨ Le Concept
Marre de devoir télécharger des vidéos sur votre PC pour ensuite les transférer manuellement sur votre NAS ou votre VPS ?
YT-Direct-Server-DL injecte un bouton natif directement dans l'interface YouTube. Cliquez, choisissez votre format (MP3 ou MP4), et votre serveur s'occupe du reste. Le fichier est instantanément stocké exactement là où vous le souhaitez.

🔒 Sécurité & Personnalisation
Le projet inclut deux couches de personnalisation essentielles :

Secret Key (Sécurité) : Pour éviter que des utilisateurs non autorisés n'utilisent votre bande passante, une "Clé Secrète" doit être identique dans le fichier popup.js (extension) et main.py (serveur). Le serveur rejettera toute requête ne possédant pas la clé correspondante.

Chemins Personnalisés : Dans main.py, vous pouvez définir précisément où vos fichiers atterrissent en modifiant les variables MP3_PATH et MP4_PATH (par exemple, pour pointer vers votre bibliothèque Plex ou Musique).

🚀 Installation & Configuration
1. Configuration du Serveur (Backend)
Le script start.sh est entièrement automatisé. Il gère la création d'un environnement virtuel (VENV), installe les dépendances (dont yt-dlp), et lance le serveur.

Bash
# Cloner le dépôt
git clone [https://github.com/snipergeek/YT-Direct-Server-DL.git](https://github.com/snipergeek/YT-Direct-Server-DL.git)

cd YT-Direct-Server-DL

# Donner les droits d'exécution
chmod +x start.sh

# Lancer le serveur
./start.sh
2. Configuration de l'Extension (Navigateur)
Ouvrez Google Chrome et allez sur chrome://extensions/.

Activez le Mode développeur (interrupteur en haut à droite).

Cliquez sur Charger l'extension décompressée et sélectionnez le dossier extension de ce projet.

Important : N'oubliez pas de configurer l'adresse IP de votre serveur et votre SECRET_KEY dans les fichiers de l'extension.

🛠️ Technologies Utilisées
Python 3 : Logique côté serveur.

yt-dlp : Le moteur ultime pour l'extraction de médias haute qualité.

Flask / FastAPI : Pour faire le pont entre l'extension et votre stockage.

JavaScript (Manifest V3) : Pour une extension Chrome légère et rapide.

Bash : Pour un déploiement fluide via venv.

[!WARNING]

Note Légale : Ce projet est destiné à un usage personnel uniquement. Veuillez respecter les droits d'auteur ainsi que les conditions d'utilisation des créateurs de contenu et des plateformes.

Lange :

[ENGLISH](https://github.com/snipergeek/YT-Direct-Server-DL/blob/main/README%5BEN%5D.md)
