// ─────────────────────────────────────────────────────────────
// CONFIGURATION FIREBASE — À PERSONNALISER
// 1. Va sur https://console.firebase.google.com
// 2. Crée un projet (gratuit)
// 3. Clique sur "Ajouter une app Web" (</>)
// 4. Copie les valeurs ci-dessous depuis ton projet Firebase
// ─────────────────────────────────────────────────────────────

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB_x1oGxbmP12EVP0P82aBootK-yd8nMPo",
  authDomain: "cornhole-scorekeeper-f0042.firebaseapp.com",
  databaseURL: "https://cornhole-scorekeeper-f0042-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cornhole-scorekeeper-f0042",
  storageBucket: "cornhole-scorekeeper-f0042.firebasestorage.app",
  messagingSenderId: "77982373274",
  appId: "1:77982373274:web:7f83f04afe6e177e969623",
  measurementId: "G-XT7BR5Q4GJ"
};

// ─────────────────────────────────────────────────────────────
// CONFIGURATION DU CLUB — Personnalise l'apparence
// ─────────────────────────────────────────────────────────────

const CLUB_CONFIG = {
  nom:               "Cornhole Club",
  logo:              null,           // chemin vers ton logo ex: "./logo.png"
  couleurPrimaire:   "#f4a100",      // orange par défaut
  couleurSecondaire: "#ffffff",
  siteWeb:           "",
};
