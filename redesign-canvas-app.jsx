/* global React, ReactDOM */
const DesignCanvas = window.DesignCanvas;
const DCSection    = window.DCSection;
const DCArtboard   = window.DCArtboard;
const IOSDevice    = window.IOSDevice;

function Cap({ n, eb, t, d }) {
  return (
    <div className="ab-cap">
      <div className="n">{n}</div>
      <div className="label-stack">
        <div className="eb">{eb}</div>
        <div className="t">{t}</div>
      </div>
      <div className="d">{d}</div>
    </div>
  );
}

const MOBILE_PAGES = [
  {
    id: "accueil",
    n: "01", eb: "écran d'entrée", t: "Accueil",
    d: "Le visiteur choisit son mode — match local sans Internet ou tournoi live multi-terrains. Si une partie est en cours, un ruban vintage permet de la reprendre.",
    Component: () => <window.S1_Accueil />,
  },
  {
    id: "match-local",
    n: "02", eb: "match local", t: "Partie en cours",
    d: "Deux planches de bois côte-à-côte servent de tableau d'affichage. Le ruban « LEADING » et le drapeau étoilé soulignent l'équipe en tête. Le journal des manches roule en bas.",
    Component: () => <window.S2_MatchLocal />,
  },
  {
    id: "saisie",
    n: "03", eb: "côté joueur", t: "Saisie des sacs",
    d: "Le joueur entre ses sacs après avoir scanné le QR. Cercles vintage pour les comptes (×3 dans le trou, ×1 sur la planche). La cancellation est appliquée après confirmation de l'adversaire.",
    Component: () => <window.S3_SaisieSacs />,
  },
  {
    id: "admin",
    n: "04", eb: "côté organisateur", t: "Admin tournoi",
    d: "Le QR unique à imprimer, les raccourcis vers le scoreboard TV et le classement, la liste des équipes inscrites et les matchs en direct sur chaque terrain.",
    Component: () => <window.S4_AdminTournoi />,
  },
];

const TV_PAGES = [
  {
    id: "scoreboard-tv",
    n: "05", eb: "grand écran", t: "Scoreboard TV",
    d: "L'affichage public d'un match en direct. Gros chiffres stencil sur ardoise navy, ruban or pour le leader, marquise déroulante en bas avec l'historique des manches et l'état des autres terrains.",
    Component: () => <window.S5_ScoreboardTV />,
  },
  {
    id: "classement-tv",
    n: "06", eb: "fin de tournoi", t: "Classement TV",
    d: "Une fois la finale jouée, la bannière dorée couronne le champion. Le tableau du classement liste fiche, points pour, différentiel. Marquise de remerciements et commanditaires en bas.",
    Component: () => <window.S6_ClassementTV />,
  },
];

const MOB_W = 402;
const MOB_H = 874;
const STAGE_PAD = 24;
const CAP_H = 86;

const TV_W = 1280;
const TV_H = 720;

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="mobile"
        title="Cornhole — Visuels par page"
        subtitle="Système Field House · vintage modéré · 4 écrans mobile + 2 écrans grand écran"
        gap={64}
      >
        {MOBILE_PAGES.map((p) => (
          <DCArtboard
            key={p.id}
            id={p.id}
            label={`${p.n} · ${p.t}`}
            width={MOB_W + STAGE_PAD * 2}
            height={MOB_H + STAGE_PAD * 2 + CAP_H}
          >
            <Cap n={p.n} eb={p.eb} t={p.t} d={p.d} />
            <div className="ab-stage">
              <IOSDevice width={MOB_W} height={MOB_H}>
                <p.Component />
              </IOSDevice>
            </div>
          </DCArtboard>
        ))}
      </DCSection>
      <DCSection
        id="tv"
        title="Grand écran"
        subtitle="Pour le scoreboard public et le classement final — paysage 1280×720"
        gap={80}
      >
        {TV_PAGES.map((p) => (
          <DCArtboard
            key={p.id}
            id={p.id}
            label={`${p.n} · ${p.t}`}
            width={TV_W}
            height={TV_H + CAP_H}
          >
            <Cap n={p.n} eb={p.eb} t={p.t} d={p.d} />
            <div className="ab-stage tv" style={{ height: TV_H }}>
              <p.Component />
            </div>
          </DCArtboard>
        ))}
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
