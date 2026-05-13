// ─────────────────────────────────────────────────────────────
// CONFIGURATION FIREBASE — À PERSONNALISER
// 1. Va sur https://console.firebase.google.com
// 2. Crée un projet (gratuit)
// 3. Clique sur "Ajouter une app Web" (</>)
// 4. Copie les valeurs ci-dessous depuis ton projet Firebase
// ─────────────────────────────────────────────────────────────

const FIREBASE_CONFIG = {
  apiKey:            "REMPLACE_PAR_TA_CLE",
  authDomain:        "TON_PROJET.firebaseapp.com",
  databaseURL:       "https://TON_PROJET-default-rtdb.firebaseio.com",
  projectId:         "TON_PROJET",
  storageBucket:     "TON_PROJET.appspot.com",
  messagingSenderId: "TON_ID",
  appId:             "TON_APP_ID"
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
