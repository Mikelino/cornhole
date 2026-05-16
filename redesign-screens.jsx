/* global React */
// Cornhole redesign — 6 redesigned screens (mobile + TV) of the real app

/* === SHARED ATOMS === */

function MobShell({ children }) {
  return (
    <div className="mob">
      <div className="mob-content">{children}</div>
      <div className="mob-grain" />
    </div>
  );
}

function QRStamp() {
  // A static-looking QR pattern (decorative)
  const pattern = [
    1,1,1,1,1,1,1,
    1,0,0,0,0,0,1,
    1,0,1,1,1,0,1,
    1,0,1,0,1,0,1,
    1,0,1,1,1,0,1,
    1,0,0,0,0,0,1,
    1,1,1,1,1,1,1,
  ];
  // Add a random middle area
  const grid = [];
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      const idx = r * 7 + c;
      const v = pattern[idx];
      grid.push(v);
    }
  }
  return (
    <div className="qr-box">
      {grid.map((v, i) => v ? <i key={i} /> : <span key={i} />)}
    </div>
  );
}

function BoardGlyph({ size = 22, fill = "var(--accent)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <polygon points="2,7 22,3 22,17 2,20" fill={fill} stroke="var(--ink)" strokeWidth="1.6" />
      <ellipse cx="16" cy="10.5" rx="2.8" ry="2" fill="var(--ink)" />
    </svg>
  );
}

function BagGlyph({ size = 22, fill = "var(--gold)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="15" rx="2" fill={fill} stroke="var(--ink)" strokeWidth="1.6" />
      <line x1="3" y1="11" x2="21" y2="11" stroke="var(--ink)" strokeWidth="1.3" />
      <path d="M7 6 L9 3 L15 3 L17 6" fill={fill} stroke="var(--ink)" strokeWidth="1.6" />
    </svg>
  );
}

function TrophyGlyph({ size = 60, fill = "var(--gold)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <path d="M14 8 H46 V20 C46 32 38 38 30 38 C22 38 14 32 14 20 Z" fill={fill} stroke="var(--ink)" strokeWidth="2"/>
      <path d="M14 12 C8 12 6 16 8 20 C9 22 11 23 14 23" fill="none" stroke="var(--ink)" strokeWidth="2"/>
      <path d="M46 12 C52 12 54 16 52 20 C51 22 49 23 46 23" fill="none" stroke="var(--ink)" strokeWidth="2"/>
      <rect x="26" y="38" width="8" height="8" fill={fill} stroke="var(--ink)" strokeWidth="2"/>
      <rect x="18" y="46" width="24" height="6" fill={fill} stroke="var(--ink)" strokeWidth="2"/>
      <text x="30" y="26" textAnchor="middle" fontFamily="var(--font-stencil)" fontSize="14" fill="var(--ink)">1</text>
    </svg>
  );
}

/* === SCREEN 1 — ACCUEIL === */
function S1_Accueil() {
  return (
    <MobShell>
      <div className="mob-head">
        <div>
          <div className="meta">Bienvenue à la</div>
          <div className="script">cornhole</div>
        </div>
        <div className="wood">Field<br/>House</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Card 1 — Match Local */}
        <div className="card" style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{
              width: 64, height: 64,
              background: "var(--gold)",
              border: "2px solid var(--ink)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <BoardGlyph size={38} fill="var(--accent)" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="card-eyebrow">Mode partie</div>
              <div className="card-title">Match Local</div>
              <div className="card-desc">
                Une partie 1v1 ou 2v2 sans Internet. Stats live, mode bust, Ghost Mode.
              </div>
            </div>
          </div>
          <div style={{
            marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{ display: "flex", gap: 4 }}>
              <span className="chip">Hors ligne</span>
              <span className="chip">ACL</span>
            </div>
            <div className="mini-ribbon">Jouer →</div>
          </div>
        </div>

        {/* Card 2 — Tournoi Live */}
        <div className="card card--ink">
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{
              width: 64, height: 64,
              background: "var(--accent)",
              border: "2px solid var(--gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <TrophyGlyph size={42} fill="var(--gold)" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="card-eyebrow">Mode tournoi</div>
              <div className="card-title" style={{ color: "var(--cream)" }}>Tournoi Live</div>
              <div className="card-desc" style={{ color: "var(--cream)" }}>
                Inscriptions, multi-terrains, QR unique, scoreboard TV et classement.
              </div>
            </div>
          </div>
          <div style={{
            marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{ display: "flex", gap: 4 }}>
              <span className="chip" style={{ background: "transparent", color: "var(--cream)", borderColor: "var(--cream)" }}>Multi-écrans</span>
              <span className="chip chip--gold">QR</span>
            </div>
            <div className="mini-ribbon" style={{ background: "var(--gold)", color: "var(--ink)" }}>
              Lancer →
            </div>
          </div>
        </div>
      </div>

      {/* In-progress strip */}
      <div className="card" style={{ background: "var(--paper-deep)", padding: "10px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div className="card-eyebrow">En cours</div>
            <div style={{ fontFamily: "var(--font-wood)", fontSize: 15, marginTop: 2 }}>
              Tournoi du Verger '26
            </div>
            <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, letterSpacing: "0.14em", color: "var(--ink-soft)", marginTop: 2 }}>
              4 ÉQUIPES · 2 TERRAINS · 3 MATCHS RESTANTS
            </div>
          </div>
          <button className="btn btn--sm" style={{ background: "var(--gold)", color: "var(--ink)", borderColor: "var(--ink)" }}>
            Reprendre
          </button>
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* Footer */}
      <div style={{ textAlign: "center", fontFamily: "var(--font-athletic)", fontSize: 9, letterSpacing: "0.24em", color: "var(--ink-soft)", opacity: 0.6 }}>
        FIELD HOUSE · CORNHOLE SCOREKEEPER · v3.0
      </div>
    </MobShell>
  );
}

/* === SCREEN 2 — MATCH LOCAL (LIVE) === */
function S2_MatchLocal() {
  return (
    <MobShell>
      {/* Mini header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="btn btn--sm btn--ghost" style={{ padding: "4px 10px" }}>◀ Setup</div>
        <div style={{ textAlign: "center" }}>
          <div className="card-eyebrow" style={{ fontSize: 9, letterSpacing: "0.2em" }}>
            Tournoi du Verger '26
          </div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, letterSpacing: "0.24em", color: "var(--ink-soft)" }}>
            CORNHOLE · ACL SCORING
          </div>
        </div>
        <div className="chip chip--ink" style={{ fontSize: 10 }}>R 7</div>
      </div>

      {/* Badges row */}
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        <span className="chip" style={{ fontSize: 9 }}>2v2</span>
        <span className="chip" style={{ fontSize: 9 }}>ACL Cancel.</span>
        <span className="chip chip--accent" style={{ fontSize: 9 }}>BUST → 15</span>
        <span className="chip" style={{ fontSize: 9 }}>10 manches</span>
      </div>

      {/* Two team planks */}
      <div style={{ display: "flex", gap: 10, height: 220 }}>
        <div className="plank plank--accent">
          <div className="plank-pennant">★ LEADING</div>
          <div className="plank-team">Les Husky</div>
          <div className="plank-players">M. PICARD · L. GAGNON</div>
          <div className="plank-digits">17</div>
          <div className="plank-goal">/ 21 PTS</div>
          <div className="plank-progress"><div style={{ width: "81%" }} /></div>
        </div>
        <div className="plank">
          <div className="plank-team">Les Renards</div>
          <div className="plank-players">A. TREMBLAY · J. ROY</div>
          <div className="plank-digits">14</div>
          <div className="plank-goal">/ 21 PTS</div>
          <div className="plank-progress"><div style={{ width: "67%" }} /></div>
        </div>
      </div>

      {/* History */}
      <div>
        <div className="card-eyebrow" style={{ marginBottom: 6 }}>Historique des manches</div>
        <div className="history-row">
          {[
            { r: 1, a: 3, b: 0 }, { r: 2, a: 2, b: 0 }, { r: 3, a: 0, b: 4 },
            { r: 4, a: 4, b: 0 }, { r: 5, a: 0, b: 1 }, { r: 6, a: 1, b: 0 },
          ].map((h) => (
            <div key={h.r} className="history-chip">
              <div className="r">R{h.r}</div>
              <div className="pts">
                <span style={{ color: "var(--accent-deep)" }}>+{h.a}</span>
                <span style={{ color: "var(--ink-soft)", margin: "0 2px" }}>|</span>
                <span style={{ color: "var(--ink)" }}>+{h.b}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* Action bar */}
      <div className="actionbar">
        <button className="btn-icon" title="Stats">📊</button>
        <button className="btn-icon" title="Undo">↩</button>
        <button className="btn-icon" title="Reset">↺</button>
        <button className="btn-main">+ ENTRER LES SACS</button>
      </div>
    </MobShell>
  );
}

/* === SCREEN 3 — SAISIE SACS (JOUEUR) === */
function S3_SaisieSacs() {
  // We show the bag-entry modal-style screen
  return (
    <MobShell>
      {/* Team-colored header */}
      <div style={{
        background: "var(--accent)",
        color: "var(--cream)",
        border: "2px solid var(--ink)",
        padding: "12px 14px",
        margin: "0 -2px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ fontFamily: "var(--font-athletic)", fontSize: 9, letterSpacing: "0.24em", opacity: 0.7 }}>
              CORNHOLE · MANCHE 7
            </div>
            <div className="card-title" style={{ color: "var(--cream)", marginTop: 2 }}>Les Husky</div>
          </div>
          <div className="mini-ribbon" style={{ background: "var(--gold)", color: "var(--ink)" }}>★ Toi</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 10 }}>
          <div>
            <div style={{ fontFamily: "var(--font-stencil)", fontSize: 56, lineHeight: 0.9 }}>17</div>
            <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, opacity: 0.7 }}>/ 21 PTS</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, opacity: 0.7 }}>Les Renards</div>
            <div style={{ fontFamily: "var(--font-stencil)", fontSize: 30, lineHeight: 1, opacity: 0.85 }}>14</div>
          </div>
        </div>
        <div style={{
          background: "rgba(0,0,0,0.18)",
          height: 4, marginTop: 8,
        }}>
          <div style={{ width: "81%", height: "100%", background: "var(--gold)" }} />
        </div>
      </div>

      {/* Section title */}
      <div className="card-eyebrow">Tes sacs · Manche 7</div>

      {/* In the hole */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <BagGlyph size={20} fill="var(--accent)" />
          <span style={{ fontFamily: "var(--font-athletic)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Dans le trou
          </span>
          <span style={{ fontFamily: "var(--font-wood)", fontSize: 14, color: "var(--accent)" }}>×3 pts</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[0, 1, 2, 3, 4].map((n) => (
            <div key={n} className={"bag-circle" + (n === 2 ? " bag-circle--on" : "")}>
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* On the board */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <BoardGlyph size={20} fill="var(--gold)" />
          <span style={{ fontFamily: "var(--font-athletic)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Sur la planche
          </span>
          <span style={{ fontFamily: "var(--font-wood)", fontSize: 14, color: "var(--gold-deep)" }}>×1 pt</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[0, 1, 2, 3, 4].map((n) => (
            <div key={n} className={"bag-circle" + (n === 1 ? " bag-circle--gold-on" : "")}>
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Preview total */}
      <div className="card" style={{ background: "var(--cream)", padding: "12px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="card-eyebrow">Points bruts cette manche</div>
            <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, color: "var(--ink-soft)", marginTop: 2 }}>
              Cancellation appliqué après confirmation
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-stencil)", fontSize: 44, color: "var(--accent)", lineHeight: 1 }}>+7</div>
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* CTA */}
      <button className="btn-main" style={{ padding: 16, fontSize: 15, borderRadius: 0 }}>
        ✓ SOUMETTRE MES SACS
      </button>
      <button className="btn btn--ghost btn--sm" style={{ alignSelf: "center", padding: "4px 10px" }}>
        ◀ Retour aux matchs
      </button>
    </MobShell>
  );
}

/* === SCREEN 4 — ADMIN TOURNOI === */
function S4_AdminTournoi() {
  return (
    <MobShell>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div className="card-eyebrow">Tournoi en cours</div>
          <div className="card-title" style={{ marginTop: 2 }}>Tournoi du Verger '26</div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, letterSpacing: "0.14em", color: "var(--ink-soft)", marginTop: 4 }}>
            2V2 · 2 TERRAINS · 21 PTS · 10 MANCHES MAX
          </div>
        </div>
        <div className="btn btn--sm btn--ghost" style={{ padding: "4px 10px" }}>Menu</div>
      </div>

      {/* QR strip */}
      <div className="card" style={{ padding: 12 }}>
        <div className="card-eyebrow" style={{ marginBottom: 8 }}>QR Tournoi · À imprimer</div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <QRStamp />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.4 }}>
              Un seul QR pour tous les joueurs. Ils voient les matchs et choisissent leur équipe.
            </div>
            <div style={{ fontFamily: "var(--font-athletic)", fontSize: 9, letterSpacing: "0.1em", color: "var(--ink-soft)", marginTop: 6, wordBreak: "break-all", opacity: 0.6 }}>
              FIELDHOUSE.APP/T/A7K9F2
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        <div className="card" style={{ padding: 10, textAlign: "center" }}>
          <div style={{ fontSize: 22 }}>📺</div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, marginTop: 4, letterSpacing: "0.12em" }}>SCOREBOARD</div>
        </div>
        <div className="card" style={{ padding: 10, textAlign: "center" }}>
          <div style={{ fontSize: 22 }}>🏆</div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, marginTop: 4, letterSpacing: "0.12em" }}>CLASSEMENT</div>
        </div>
        <div className="card" style={{ padding: 10, textAlign: "center", borderColor: "var(--accent)", borderStyle: "dashed" }}>
          <div style={{ fontSize: 22 }}>🗑</div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, marginTop: 4, letterSpacing: "0.12em", color: "var(--accent-deep)" }}>SUPPRIMER</div>
        </div>
      </div>

      {/* Équipes */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div className="card-eyebrow">Équipes · 6 inscrites</div>
          <div className="btn btn--sm btn--accent" style={{ padding: "3px 9px", fontSize: 11 }}>+ Ajouter</div>
        </div>
        <div style={{ background: "var(--cream)", border: "2px solid var(--ink)" }}>
          {[
            ["Les Husky", "M. Picard · L. Gagnon", "var(--accent)"],
            ["Les Renards", "A. Tremblay · J. Roy", "var(--gold)"],
            ["Les Castors", "M. Bouchard · D. Côté", "var(--accent-deep)"],
            ["Les Orignaux", "S. Bélanger · P. Dion", "var(--ink-soft)"],
          ].map((t, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 12px",
              borderBottom: i < 3 ? "1px dashed var(--line)" : "none",
            }}>
              <div style={{ width: 26, height: 26, background: t[2], border: "2px solid var(--ink)", flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-wood)", fontSize: 14, lineHeight: 1 }}>{t[0]}</div>
                <div style={{ fontFamily: "var(--font-athletic)", fontSize: 9, letterSpacing: "0.12em", color: "var(--ink-soft)", marginTop: 2 }}>{t[1]}</div>
              </div>
              <div style={{ fontFamily: "var(--font-athletic)", fontSize: 10, color: "var(--ink-soft)" }}>3V·1D</div>
            </div>
          ))}
        </div>
      </div>

      {/* Matchs en cours */}
      <div>
        <div className="card-eyebrow" style={{ marginBottom: 6 }}>Matchs en direct</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div className="match-row live">
            <div className="team-mini">
              <div className="swatch" style={{ background: "var(--gold)" }} />
              <div className="text"><div className="n">Les Husky</div><div className="p" style={{ opacity: 0.7 }}>T1</div></div>
            </div>
            <div className="score-mini">17 – 14</div>
            <div className="team-mini" style={{ justifyContent: "flex-end" }}>
              <div className="text" style={{ textAlign: "right" }}><div className="n">Les Renards</div><div className="p" style={{ opacity: 0.7 }}>R7</div></div>
              <div className="swatch" style={{ background: "var(--cream)" }} />
            </div>
          </div>
          <div className="match-row">
            <div className="team-mini">
              <div className="swatch" style={{ background: "var(--accent-deep)" }} />
              <div className="text"><div className="n">Castors</div><div className="p">T2</div></div>
            </div>
            <div className="score-mini">9 – 12</div>
            <div className="team-mini" style={{ justifyContent: "flex-end" }}>
              <div className="text" style={{ textAlign: "right" }}><div className="n">Orignaux</div><div className="p">R5</div></div>
              <div className="swatch" style={{ background: "var(--ink-soft)" }} />
            </div>
          </div>
        </div>
      </div>
    </MobShell>
  );
}

/* === SCREEN 5 — SCOREBOARD TV (LANDSCAPE) === */
function S5_ScoreboardTV() {
  return (
    <div className="tv">
      <div className="tv-grain" />
      {/* Head */}
      <div className="tv-head">
        <div>
          <div className="label">Cornhole · Match en direct</div>
          <div className="name">Tournoi du Verger '26</div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span className="chip chip--accent" style={{ fontSize: 12, padding: "4px 12px" }}>● LIVE</span>
          <span className="chip" style={{ background: "transparent", color: "var(--cream)", borderColor: "var(--gold)", fontSize: 12, padding: "4px 12px" }}>
            TERRAIN 1
          </span>
          <span className="chip chip--gold" style={{ fontSize: 12, padding: "4px 12px" }}>
            MANCHE 7 / 10
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: "20px 40px", gap: 20, zIndex: 1 }}>
        {/* Team A */}
        <div style={{ textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 36, height: 36, background: "var(--accent)", border: "3px solid var(--gold)" }} />
            <div className="card-eyebrow" style={{ color: "var(--gold)", fontSize: 14, letterSpacing: "0.28em" }}>
              ÉQUIPE A
            </div>
            <div className="mini-ribbon" style={{ background: "var(--gold)", color: "var(--ink)", fontSize: 11, padding: "3px 10px" }}>
              ★ EN TÊTE
            </div>
          </div>
          <div style={{ fontFamily: "var(--font-wood)", fontSize: 54, marginTop: 6, lineHeight: 0.95, letterSpacing: "0.02em", textTransform: "uppercase" }}>
            Les Husky
          </div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 14, letterSpacing: "0.24em", color: "var(--cream)", opacity: 0.6, marginTop: 4 }}>
            M. PICARD · L. GAGNON
          </div>
          <div className="tv-digits" style={{ color: "var(--accent)", marginTop: 4 }}>17</div>
          <div style={{ height: 8, background: "rgba(247,238,219,0.12)", marginTop: 8, maxWidth: 380 }}>
            <div style={{ width: "81%", height: "100%", background: "var(--gold)" }} />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="t-script" style={{ fontSize: 80, color: "var(--gold)" }}>vs</div>
          <div className="card-eyebrow" style={{ color: "var(--cream)", opacity: 0.6, fontSize: 12, letterSpacing: "0.3em" }}>
            PREMIER À 21
          </div>
        </div>

        {/* Team B */}
        <div style={{ textAlign: "right" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "flex-end" }}>
            <div className="card-eyebrow" style={{ color: "var(--gold)", fontSize: 14, letterSpacing: "0.28em" }}>
              ÉQUIPE B
            </div>
            <div style={{ width: 36, height: 36, background: "var(--cream)", border: "3px solid var(--gold)" }} />
          </div>
          <div style={{ fontFamily: "var(--font-wood)", fontSize: 54, marginTop: 6, lineHeight: 0.95, letterSpacing: "0.02em", textTransform: "uppercase" }}>
            Les Renards
          </div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 14, letterSpacing: "0.24em", color: "var(--cream)", opacity: 0.6, marginTop: 4 }}>
            A. TREMBLAY · J. ROY
          </div>
          <div className="tv-digits" style={{ color: "var(--cream)", marginTop: 4 }}>14</div>
          <div style={{ height: 8, background: "rgba(247,238,219,0.12)", marginTop: 8, maxWidth: 380, marginLeft: "auto" }}>
            <div style={{ width: "67%", height: "100%", background: "var(--gold)" }} />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="tv-marquee">
        <div>
          ★ R1 +3·0 ★ R2 +2·0 ★ R3 +0·4 ★ R4 +4·0 ★ R5 +0·1 ★ R6 +1·0 ★ DERNIER COUP D'ŒIL — LES RENARDS À 7 POINTS DE LA REMONTÉE ★ TERRAIN 2 — LES CASTORS MÈNENT 12-9 CONTRE LES ORIGNAUX ★ FINALE À 18H30 ★
        </div>
      </div>
    </div>
  );
}

/* === SCREEN 6 — CLASSEMENT TV === */
function S6_ClassementTV() {
  const standings = [
    { rank: 1, name: "Les Husky", players: "M. PICARD · L. GAGNON", v: 5, d: 0, pts: 105, diff: "+42" },
    { rank: 2, name: "Les Renards", players: "A. TREMBLAY · J. ROY", v: 4, d: 1, pts: 88, diff: "+24" },
    { rank: 3, name: "Les Castors", players: "M. BOUCHARD · D. CÔTÉ", v: 3, d: 2, pts: 76, diff: "+8" },
    { rank: 4, name: "Les Orignaux", players: "S. BÉLANGER · P. DION", v: 2, d: 3, pts: 62, diff: "−6" },
    { rank: 5, name: "Les Carcajous", players: "É. POULIN · K. LAVOIE", v: 1, d: 4, pts: 48, diff: "−28" },
    { rank: 6, name: "Les Lynx", players: "R. FORTIN · V. MORIN", v: 0, d: 5, pts: 31, diff: "−40" },
  ];
  return (
    <div className="tv">
      <div className="tv-grain" />
      <div className="tv-head">
        <div>
          <div className="label">Classement général · Tournoi terminé</div>
          <div className="name">Tournoi du Verger '26</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="card-eyebrow" style={{ color: "var(--gold)", fontSize: 12, letterSpacing: "0.28em" }}>
            15 MATCHS · 6 ÉQUIPES
          </div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 12, letterSpacing: "0.18em", color: "var(--cream)", opacity: 0.6, marginTop: 4 }}>
            DIMANCHE · 18H42
          </div>
        </div>
      </div>

      {/* Champion banner */}
      <div style={{
        margin: "16px 40px 12px",
        background: "var(--gold)",
        color: "var(--ink)",
        border: "2px solid var(--ink)",
        outline: "1px solid var(--gold)",
        outlineOffset: 4,
        padding: "18px 28px",
        display: "flex", alignItems: "center", gap: 22,
      }}>
        <TrophyGlyph size={70} fill="var(--accent)" />
        <div style={{ flex: 1 }}>
          <div className="card-eyebrow" style={{ color: "var(--ink)", fontSize: 12, letterSpacing: "0.32em" }}>
            ★ Champion ★
          </div>
          <div style={{ fontFamily: "var(--font-wood)", fontSize: 48, lineHeight: 0.95, textTransform: "uppercase", marginTop: 4 }}>
            Les Husky
          </div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 13, letterSpacing: "0.2em", marginTop: 4, opacity: 0.8 }}>
            M. PICARD · L. GAGNON
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="card-eyebrow" style={{ color: "var(--ink)", fontSize: 11, letterSpacing: "0.28em" }}>
            FICHE
          </div>
          <div style={{ fontFamily: "var(--font-stencil)", fontSize: 56, lineHeight: 1 }}>5–0</div>
          <div style={{ fontFamily: "var(--font-athletic)", fontSize: 12, letterSpacing: "0.18em", opacity: 0.7 }}>
            105 PTS · +42 DIFF
          </div>
        </div>
      </div>

      {/* Standings */}
      <div style={{ flex: 1, padding: "0 40px", display: "flex", flexDirection: "column", gap: 6, zIndex: 1 }}>
        <div className="standings-row" style={{
          background: "transparent",
          border: "none",
          padding: "4px 18px",
        }}>
          <div className="card-eyebrow" style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.22em", textAlign: "center" }}>
            RANG
          </div>
          <div className="card-eyebrow" style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.22em" }}>
            ÉQUIPE
          </div>
          <div className="card-eyebrow" style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.22em", textAlign: "center" }}>
            V – D
          </div>
          <div className="card-eyebrow" style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.22em", textAlign: "center" }}>
            POINTS
          </div>
          <div className="card-eyebrow" style={{ color: "var(--gold)", fontSize: 11, letterSpacing: "0.22em", textAlign: "center" }}>
            DIFF
          </div>
        </div>
        {standings.map((s) => (
          <div key={s.rank} className={"standings-row" + (s.rank === 1 ? " gold" : "")}>
            <div className="rank">{String(s.rank).padStart(2, "0")}</div>
            <div className="nameblock">
              <div className="name">{s.name}</div>
              <div className="players">{s.players}</div>
            </div>
            <div className="cell">
              <small>FICHE</small>
              {s.v}–{s.d}
            </div>
            <div className="cell">
              <small>PTS</small>
              {s.pts}
            </div>
            <div className="cell" style={{ color: s.diff.startsWith("+") ? (s.rank === 1 ? "var(--accent-deep)" : "var(--gold)") : "var(--cream)", opacity: s.diff.startsWith("−") ? 0.6 : 1 }}>
              <small>DIFF</small>
              {s.diff}
            </div>
          </div>
        ))}
      </div>

      <div className="tv-marquee">
        <div>
          ★ MERCI À TOUS POUR CE TOURNOI ★ PROCHAIN RENDEZ-VOUS LE 22 OCTOBRE ★ INSCRIPTIONS OUVERTES SUR FIELDHOUSE.APP ★ COMMANDITAIRES : BRASSERIE DU VERGER · BOIS PRÉCISION INC · CASSE-CROÛTE CHEZ NORMAND ★
        </div>
      </div>
    </div>
  );
}

window.S1_Accueil       = S1_Accueil;
window.S2_MatchLocal    = S2_MatchLocal;
window.S3_SaisieSacs    = S3_SaisieSacs;
window.S4_AdminTournoi  = S4_AdminTournoi;
window.S5_ScoreboardTV  = S5_ScoreboardTV;
window.S6_ClassementTV  = S6_ClassementTV;
