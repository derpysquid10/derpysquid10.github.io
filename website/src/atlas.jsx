import React from 'react';

// Direction 2 — "Atlas": Abstract artful hero (point-cloud), data-viz goals dashboard, navy + soft cream
const Atlas = () => {
  const heroRef = React.useRef(null);
  const [mouse, setMouse] = React.useState({ x: 0.5, y: 0.5 });

  const onMove = (e) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };

  // Generate a stable point cloud
  const points = React.useMemo(() => {
    const pts = [];
    for (let i = 0; i < 320; i++) {
      const a = (i / 320) * Math.PI * 2;
      const r = 0.35 + 0.25 * Math.sin(i * 0.13) + 0.1 * Math.cos(i * 0.41);
      pts.push({
        x: 0.5 + Math.cos(a) * r * 0.55,
        y: 0.5 + Math.sin(a) * r * 0.7,
        d: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return pts;
  }, []);

  return (
    <div style={at.page}>
      <header style={at.nav}>
        <div style={at.brand}><span style={at.brandG}>G/T</span><span style={at.brandFull}>Gordon Tan</span></div>
        <nav style={at.navLinks}>
          {[
            { l: "Myself", id: "atlas-index" },
            { l: "Now", id: "atlas-now" },
            { l: "Experience", id: "atlas-experience" },
            { l: "Goals", id: "atlas-goals" },
          ].map((it, i) => (
            <a
              key={it.l}
              href={`#${it.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(it.id);
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 16;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              style={{ ...at.navLink, ...(i === 0 ? at.navActive : {}) }}
            >
              <span style={at.navNum}>0{i + 1}</span>{it.l}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO — name + photo + about (point cloud removed; reserved slot below bio) */}
      <section ref={heroRef} onMouseMove={onMove} style={at.hero} id="atlas-index">
        <Crosshair pos={{ top: 32, left: 32 }} />
        <Crosshair pos={{ top: 32, right: 32 }} />
        <Crosshair pos={{ bottom: 32, left: 32 }} />
        <Crosshair pos={{ bottom: 32, right: 32 }} />

        <div style={at.heroInner}>
          {/* name strip at top */}
          <div style={at.nameStrip}>
            <div style={at.nameLeft}>
              <div style={at.heroLabel}>
                <span style={at.heroLabelDot} />
                <span>§ 01 · MYSELF · GORDON TAN</span>
              </div>
              <div style={at.bigName}>Gordon Tan</div>
              <div style={at.nameTags}>
                <span>Engineering Science · University of Toronto</span>
                {/* <span style={at.nameTagsDot}>·</span> */}
                {/* <span>3D vision · robotics</span> */}
              </div>
              <div style={at.socialRow}>
                <a href="mailto:gordon.tan111@gmail.com" className="atlas-social">
                  <span style={at.socialIcon}>✉</span>
                  <span>gordon.tan111@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/gordon-tan04/" target="_blank" rel="noreferrer" className="atlas-social">
                  <span style={at.socialIcon}>in</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/derpysquid10" target="_blank" rel="noreferrer" className="atlas-social">
                  <span style={{ ...at.socialIcon, display: "inline-flex", alignItems: "center" }}>
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
              <style>{`
                .atlas-social {
                  display: inline-flex;
                  align-items: center;
                  gap: 8px;
                  font-family: 'JetBrains Mono', monospace;
                  font-size: 11px;
                  letter-spacing: 0.1em;
                  text-transform: uppercase;
                  color: #1A1A1A;
                  border-bottom: 1px solid rgba(26,26,26,0.2);
                  padding-bottom: 4px;
                  cursor: pointer;
                  transition: color 0.25s ease, text-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
                }
                .atlas-social:hover {
                  color: #1F3FB8;
                  border-bottom-color: #1F3FB8;
                  text-shadow: 0 0 8px rgba(31,63,184,0.55), 0 0 18px rgba(31,63,184,0.35);
                  transform: translateY(-1px);
                }
                .atlas-social:hover > span:first-child {
                  text-shadow: 0 0 10px rgba(31,63,184,0.85), 0 0 22px rgba(31,63,184,0.5);
                }
              `}</style>
            </div>
          </div>

          {/* main hero row: title + photo + bio (point cloud removed) */}
          <div style={at.heroMain}>
            <div style={at.heroTitleCol}>
              <h1 style={at.h1}>
                Reconstruct<br/>
                the world,<br/>
                <span style={at.h1Italic}>then go see it.</span>
              </h1>

              <div style={at.heroBio}>
                <p style={at.heroBioP}>
                  I am a 4th year Engineering Science student specializing in Machine
                  Intelligence at the University of Toronto. I am currently a
                  research intern at <em>Huawei Noah's Ark Lab</em> on the SpatialAI/Autonomous Driving team where I had the privilege to be mentored by{" "}
                  <a href="https://binbin-xu.github.io/" target="_blank" rel="noreferrer" style={at.bioLink}>Dr. Binbin Xu</a>,
                  focusing on 3D reconstruction. Prior to this,
                  I was a summer research intern at the Technical University of
                  Munich (TUM) under <a href="https://www.dynsyslab.org/prof-angela-schoellig/" target="_blank" rel="noreferrer" style={at.bioLink}>Prof. Dr. Angela Schoellig</a>, working on semantic
                  autonomous navigation for mobile manipulators.
                </p>
                <p style={at.heroBioP}>
                  Outside of school, I am an avid cyclist with a goal of cycling on
                  every continent in the world (including Antarctica). Currently, I'm 3/7 on the way! I am also a private pilot and enjoy flying around
                  Toronto and Vancouver, my hometown, seeing the beautiful scenic nature and cities from
                  above.
                </p>
              </div>
            </div>

            <div style={at.heroPhotoCol}>
              <div style={at.photoFrame}>
                <div style={at.photoCorner1} />
                <div style={at.photoCorner2} />
                <div style={at.photoCorner3} />
                <div style={at.photoCorner4} />
                <div style={at.photoInner}>
                  <div style={at.photoPlaceholder}>
                    <img
                      src="/images/portrait.jpg"
                      alt="Gordon Tan"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </div>
                <div style={at.photoCaption}>
                  <span style={at.photoCapNum}>FIG. 01</span>
                  <span>Shannon Falls BC</span>
                </div>
              </div>

              <div style={at.heroMeta}>
                <div style={at.heroMetaItem}>
                  <div style={at.heroMetaK}>Currently</div>
                  <div style={at.heroMetaV}>Huawei Noah's Ark Lab</div>
                </div>
                <div style={at.heroMetaItem}>
                  <div style={at.heroMetaK}>Contact</div>
                  <div style={at.heroMetaV}>gordon.tan111@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO removed — bio now lives in hero */}

      {/* NOW — strip */}
      <section style={at.nowStrip} id="atlas-now">
        <div style={at.nowStripHead}>
          <div>
            <span style={at.sectionTag}>§ 02 · NOW</span>
            <h2 style={at.h2}>What I'm up to</h2>
          </div>
          <span style={at.nowStripDate}>updated 05.05.2026</span>
        </div>
        <div style={at.nowRail}>
          {[
            { k: "EXPLORING", v: "Agentic Assistants", c: "#1F3FB8" },
            { k: "READING", v: "Representation Engineering: A Top-Down Approach to AI Transparency", c: "#E84C2A", href: "https://arxiv.org/abs/2310.01405" },
            { k: "TRAINING", v: "Shanghai -> Hangzhou mini-bikepacking tour", c: "#5A7D5A" },
            { k: "PLAYING", v: <><a href="https://www.youtube.com/watch?v=tSAwZP8e-zQ" target="_blank" rel="noreferrer" style={at.nowLink}>Chopin · Nocturne Op.48 No.1</a><br/><a href="https://www.youtube.com/watch?v=HfPE3cgYyco" target="_blank" rel="noreferrer" style={at.nowLink}>Rachmaninoff · Piano Concerto No.2 (mvt 2)</a></>, c: "#8B6F47" },
          ].map((n) => (
            <div key={n.k} style={at.nowItem}>
              <div style={{ ...at.nowBar, background: n.c }} />
              <div style={at.nowK}>{n.k}</div>
              <div style={at.nowV}>
                {n.href ? (
                  <a href={n.href} target="_blank" rel="noreferrer" style={at.nowLink}>{n.v}</a>
                ) : n.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE — education + work side by side */}
      <section style={at.section} id="atlas-experience">
        <div style={at.sectionHead}>
          <span style={at.sectionTag}>§ 03 · EXPERIENCE</span>
          <h2 style={at.h2}>Where I've been</h2>
        </div>
        <div style={at.expGrid}>
          <div style={at.expCol}>
            <div style={at.expColHead}>
              <span style={at.expColTag}>EDUCATION</span>
              <span style={at.expColRule} />
            </div>
            {[
              [<>2022—<br/>2027</>, "BASc Engineering Science · Machine Intelligence", "University of Toronto", "Toronto"],
            ].map((row, i) => (
              <div key={i} style={{ ...at.expItem, ...(i === 0 ? at.expItemFirst : {}) }}>
                <div style={at.expYear}>{row[0]}</div>
                <div style={at.expRole}>{row[2]}</div>
                <div style={at.expOrg}>{row[1]}</div>
                <div style={at.expPlace}>{row[3]}</div>
              </div>
            ))}
          </div>
          <div style={at.expCol}>
            <div style={at.expColHead}>
              <span style={at.expColTag}>WORK</span>
              <span style={at.expColRule} />
            </div>
            {[
              [<>2025—<br/>2026</>, "Research Intern · SpatialAI", "Huawei Noah's Ark Lab", "Toronto"],
              ["2024", "Undergraduate Researcher", "TUM · Learning Systems & Robotics Lab", "Munich"],
              ["2023", "Undergraduate Researcher", "U of T · Hub for Advanced Buildings", "Toronto"],
            ].map((row, i) => (
              <div key={i} style={{ ...at.expItem, ...(i === 0 ? at.expItemFirst : {}) }}>
                <div style={at.expYear}>{row[0]}</div>
                <div style={at.expRole}>{row[2]}</div>
                <div style={at.expOrg}>{row[1]}</div>
                <div style={at.expPlace}>{row[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS — full data-viz dashboard */}
      <section style={at.section} id="atlas-goals">
        <div style={at.sectionHead}>
          <span style={at.sectionTag}>§ 04 · GOALS</span>
          <h2 style={at.h2}>A long-running ledger</h2>
        </div>

        <div style={at.dashboard}>
          {/* Continents — radial */}
          <div style={{ ...at.dashCard, ...at.dashBig }}>
            <div style={at.dashHead}>
              <div>
                <div style={at.dashLabel}>Continents cycled</div>
                <div style={at.dashStat}>3 <span style={at.dashStatSmall}>/ 7</span></div>
              </div>
              <div style={at.dashTag}>43%</div>
            </div>
            <ContinentCircle />
            <div style={at.dashFootRow}>
              {[
                ["NA", true], ["SA", false], ["EU", true], ["AS", true],
                ["AF", false], ["OC", false], ["AN", false],
              ].map(([k, done]) => (
                <span key={k} style={{ ...at.contChip, ...(done ? at.contChipDone : {}) }}>
                  {k}{done && " ✓"}
                </span>
              ))}
            </div>
          </div>

          {/* Pilot — rolling counter */}
          <div style={at.dashCard}>
            <div style={at.dashLabel}>Hours Flown</div>
            <div style={at.dashStat}>71.4<span style={at.dashStatSmall}> / 200</span></div>
            <Stairs current={71.4} total={200} />
          </div>

          {/* Countries — dot matrix */}
          <div style={at.dashCard}>
            <div style={at.dashLabel}>Countries visited</div>
            <div style={at.dashStat}>11<span style={at.dashStatSmall}> / 196</span></div>
            <DotMatrix filled={11} total={196} countries={["Canada","United States","China","Germany","Austria","France","Czechia","Poland","Switzerland","Slovakia","Hungary"]} />
          </div>

          {/* BASc — bar */}
          <div style={at.dashCard}>
            <div style={at.dashLabel}>BASc Eng Sci</div>
            <div style={at.dashStat}>Year 4<span style={at.dashStatSmall}> / 5</span></div>
            <YearBar />
          </div>

          {/* Chopin — keyboard slice */}
          <div style={at.dashCard}>
            <div style={at.dashLabel}>Chopin Nocturne Op.48 No.1</div>
            <div style={at.dashStat}>15%<span style={at.dashStatSmall}> learned</span></div>
            <KeyboardSlice />
          </div>

          {/* ??? */}
          <div style={{ ...at.dashCard, ...at.dashMystery }}>
            <div style={at.dashLabel}>???</div>
            <div style={{ ...at.dashStat, color: "#9C9485", letterSpacing: "0.5em" }}>···</div>
            <div style={at.mysteryText}>To be revealed.</div>
          </div>
        </div>
      </section>

      <footer style={at.footer}>
        <div style={at.footerL}>Gordon Tan</div>
        <div>43.66°N 79.40°W</div>
      </footer>
    </div>
  );
};

const Crosshair = ({ pos }) => (
  <svg style={{ position: "absolute", ...pos, width: 18, height: 18, color: "#1A1A1A" }} viewBox="0 0 18 18">
    <path d="M9 0 V18 M0 9 H18" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

const ContinentCircle = () => {
  const r = 70;
  const cx = 110, cy = 110;
  const continents = [
    { name: "NA", angle: 0, done: true },
    { name: "SA", angle: 51, done: false },
    { name: "EU", angle: 102, done: true },
    { name: "AS", angle: 154, done: true },
    { name: "AF", angle: 205, done: false },
    { name: "OC", angle: 257, done: false },
    { name: "AN", angle: 308, done: false },
  ];
  return (
    <svg viewBox="0 0 220 220" style={{ width: "100%", maxWidth: 240, alignSelf: "center", margin: "12px auto" }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#BFB6A0" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r - 12} fill="none" stroke="#BFB6A0" strokeWidth="0.5" strokeDasharray="2 4" />
      {continents.map((c, i) => {
        const a = (c.angle * Math.PI) / 180;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        const lx = cx + Math.cos(a) * (r + 18);
        const ly = cy + Math.sin(a) * (r + 18);
        return (
          <g key={c.name}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={c.done ? "#1F3FB8" : "#BFB6A0"} strokeWidth={c.done ? 1.2 : 0.6} />
            <circle cx={x} cy={y} r={c.done ? 5 : 3} fill={c.done ? "#1F3FB8" : "#fff"} stroke={c.done ? "#1F3FB8" : "#9C9485"} strokeWidth="1" />
            <text x={lx} y={ly} fontSize="10" fontFamily="'JetBrains Mono', monospace" fill={c.done ? "#1A1A1A" : "#9C9485"} textAnchor="middle" dominantBaseline="middle">{c.name}</text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="3" fill="#1A1A1A" />
    </svg>
  );
};

const Stairs = ({ current, total }) => {
  const steps = 20;
  const filled = Math.round((current / total) * steps);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 64, marginTop: 16 }}>
      {[...Array(steps)].map((_, i) => (
        <div key={i} style={{
          flex: 1,
          height: `${15 + i * 4}%`,
          background: i < filled ? "#1F3FB8" : "#E2DCC8",
          minHeight: 4,
        }} />
      ))}
    </div>
  );
};

const DotMatrix = ({ filled, total, countries = [] }) => {
  const cols = 28;
  const rows = 7;
  const [hovered, setHovered] = React.useState(null);
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: hovered ? "#1F3FB8" : "#9C9485",
        marginBottom: 8,
        minHeight: 16,
        transition: "color 0.15s ease",
      }}>
        {hovered || "Hover a dot →"}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 3 }}>
        {[...Array(cols * rows)].map((_, i) => {
          const isFilled = i < filled;
          const name = isFilled ? countries[i] : null;
          const isHovered = hovered && name === hovered;
          return (
            <div key={i} style={{
              aspectRatio: "1",
              background: isFilled ? "#1F3FB8" : "#E2DCC8",
              cursor: name ? "pointer" : "default",
              transform: isHovered ? "scale(1.8)" : "scale(1)",
              boxShadow: isHovered ? "0 0 0 2px #f5f0e8, 0 2px 10px rgba(0,0,0,0.25)" : "none",
              position: "relative",
              zIndex: isHovered ? 2 : 1,
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
              onMouseEnter={() => name && setHovered(name)}
              onMouseLeave={() => name && setHovered(null)}
            />
          );
        })}
      </div>
    </div>
  );
};

const YearBar = () => (
  <div style={{ display: "flex", gap: 4, marginTop: 16, height: 56 }}>
    {[1, 2, 3, 4, 5].map((y) => (
      <div key={y} style={{
        flex: 1,
        background: y <= 4 ? "#1A1A1A" : "#E2DCC8",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: 6,
        color: y <= 4 ? "#fff" : "#9C9485",
        fontSize: 10,
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        Y{y}
      </div>
    ))}
  </div>
);

const KeyboardSlice = () => {
  const whiteKeys = 14;
  const blackPattern = [1, 1, 0, 1, 1, 1, 0]; // C D _ E F G _ ...
  return (
    <div style={{ position: "relative", height: 64, marginTop: 16, display: "flex", gap: 1 }}>
      {[...Array(whiteKeys)].map((_, i) => (
        <div key={i} style={{
          flex: 1,
          background: i < 2 ? "#1F3FB8" : "#fff",
          border: "1px solid #BFB6A0",
        }} />
      ))}
      <div style={{ position: "absolute", inset: 0, display: "flex" }}>
        {[...Array(whiteKeys - 1)].map((_, i) => {
          const has = blackPattern[i % 7];
          if (!has) return <div key={i} style={{ flex: 1 }} />;
          return (
            <div key={i} style={{ flex: 1, position: "relative" }}>
              <div style={{ position: "absolute", right: "-30%", top: 0, width: "60%", height: "62%", background: "#1A1A1A" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const at = {
  page: { background: "#F5F0E8", color: "#1A1A1A", fontFamily: "'Inter', system-ui, sans-serif", maxWidth: 1200, margin: "0 auto", borderLeft: "1px solid #BFB6A0", borderRight: "1px solid #BFB6A0", minHeight: "100vh", zoom: 1.5 },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #BFB6A0" },
  brand: { display: "flex", alignItems: "baseline", gap: 12, fontFamily: "'Source Serif 4', Georgia, serif" },
  brandG: { fontSize: 22, fontWeight: 700, fontStyle: "italic", color: "#1F3FB8", letterSpacing: "-0.04em" },
  brandFull: { fontSize: 16, fontWeight: 500, color: "#1A1A1A" },
  navLinks: { display: "flex", gap: 28 },
  navLink: { display: "flex", alignItems: "center", gap: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A1A1A", cursor: "pointer" },
  navNum: { color: "#9C9485", fontSize: 9 },
  navActive: { color: "#1F3FB8" },

  hero: { position: "relative", minHeight: 900, overflow: "hidden", borderBottom: "1px solid #BFB6A0", padding: "56px 64px 72px" },
  cloud: { position: "absolute", inset: 0, width: "100%", height: "100%" },
  heroInner: { position: "relative", zIndex: 2 },
  nameStrip: { paddingBottom: 0, marginBottom: 16 },
  nameLeft: {},
  bigName: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 56, fontWeight: 600, letterSpacing: "-0.03em", color: "#1A1A1A", lineHeight: 1, margin: "8px 0 12px" },
  nameTags: { display: "flex", gap: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9C9485", flexWrap: "wrap" },
  nameTagsDot: { color: "#1F3FB8" },

  socialRow: { display: "flex", gap: 24, marginTop: 18, flexWrap: "wrap" },
  socialLink: { display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A1A1A", borderBottom: "1px solid rgba(26,26,26,0.2)", paddingBottom: 4, cursor: "pointer" },
  socialIcon: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 14, color: "#1F3FB8", letterSpacing: 0 },

  heroMain: { display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "start" },
  heroTitleCol: {},
  heroPhotoCol: { display: "flex", flexDirection: "column", gap: 32, marginTop: -156 },

  heroLabel: { display: "flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.2em", color: "#9C9485" },
  heroLabelDot: { width: 6, height: 6, borderRadius: 6, background: "#1F3FB8" },
  h1: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 84, lineHeight: 0.95, fontWeight: 500, letterSpacing: "-0.03em", margin: 0, color: "#1A1A1A" },
  h1Italic: { fontStyle: "italic", color: "#1F3FB8" },

  heroBio: { marginTop: 36, paddingTop: 24, borderTop: "1px solid rgba(26,26,26,0.15)" },
  heroBioP: { fontSize: 16, lineHeight: 1.65, color: "#3a3a3a", margin: "0 0 16px", fontFamily: "'Source Serif 4', Georgia, serif", maxWidth: 560 },
  bioLink: { color: "#1A1A1A", borderBottom: "1px solid #1F3FB8", fontWeight: 500 },

  photoFrame: { position: "relative", background: "#fff", padding: 14, paddingBottom: 56, boxShadow: "0 30px 60px -20px rgba(26,26,26,0.25), 0 8px 20px rgba(26,26,26,0.08)" },
  photoCorner1: { position: "absolute", top: -1, left: -1, width: 12, height: 12, borderTop: "1px solid #1F3FB8", borderLeft: "1px solid #1F3FB8" },
  photoCorner2: { position: "absolute", top: -1, right: -1, width: 12, height: 12, borderTop: "1px solid #1F3FB8", borderRight: "1px solid #1F3FB8" },
  photoCorner3: { position: "absolute", bottom: -1, left: -1, width: 12, height: 12, borderBottom: "1px solid #1F3FB8", borderLeft: "1px solid #1F3FB8" },
  photoCorner4: { position: "absolute", bottom: -1, right: -1, width: 12, height: 12, borderBottom: "1px solid #1F3FB8", borderRight: "1px solid #1F3FB8" },
  photoInner: {},
  photoPlaceholder: { aspectRatio: "3/4", background: "repeating-linear-gradient(135deg, #E2DCC8 0 14px, #D4CCB4 14px 16px)", display: "flex", alignItems: "center", justifyContent: "center" },
  phLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9C9485", background: "#F5F0E8", padding: "4px 10px" },
  photoCaption: { position: "absolute", bottom: 16, left: 14, right: 14, display: "flex", gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#9C9485", letterSpacing: "0.06em" },
  photoCapNum: { fontWeight: 700, color: "#1F3FB8" },

  heroMeta: { display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 16, paddingTop: 20, borderTop: "1px solid rgba(26,26,26,0.15)" },
  heroMetaItem: { display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 12, borderBottom: "1px dashed rgba(26,26,26,0.1)" },
  heroMetaK: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9C9485" },
  heroMetaV: { fontSize: 14, color: "#1A1A1A", fontWeight: 500, fontFamily: "'Source Serif 4', Georgia, serif" },

  cloudSlot: { marginTop: 32 },
  cloudSlotHead: { display: "flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9C9485", marginBottom: 12 },
  cloudSlotSpacer: { flex: 1 },
  cloudSlotHint: { color: "#1F3FB8", letterSpacing: "0.15em" },
  cloudSlotBox: { width: "100%", aspectRatio: "16/7", border: "1px dashed rgba(26,26,26,0.25)", background: "repeating-linear-gradient(45deg, transparent 0 8px, rgba(26,26,26,0.03) 8px 16px)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
  cloudSlotInner: { display: "flex", alignItems: "center", justifyContent: "center" },
  cloudSlotLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.18em", color: "#9C9485", background: "#F5F0E8", padding: "6px 14px" },

  intro: { padding: "96px 64px 80px", maxWidth: 880, margin: "0 auto", position: "relative" },
  introMark: { position: "absolute", top: 96, left: 64, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.2em", color: "#1F3FB8" },
  introText: { fontSize: 24, lineHeight: 1.5, color: "#1A1A1A", margin: "0 0 24px", maxWidth: 720, fontFamily: "'Source Serif 4', Georgia, serif" },

  nowStrip: { padding: "32px 40px 64px", borderTop: "1px solid #BFB6A0" },
  nowStripHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 },
  sectionTag: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.2em", color: "#1F3FB8" },
  nowStripDate: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#9C9485" },
  nowRail: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 },
  nowItem: { background: "#fff", padding: "20px 22px", border: "1px solid #BFB6A0", position: "relative" },
  nowBar: { position: "absolute", top: 0, left: 0, width: 3, height: "100%" },
  nowK: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.2em", color: "#9C9485", marginBottom: 8 },
  nowV: { fontSize: 15, color: "#1A1A1A", fontWeight: 500, lineHeight: 1.4 },
  nowLink: { color: "inherit", borderBottom: "1px solid rgba(31,63,184,0.4)", paddingBottom: 1, transition: "color 0.2s, border-color 0.2s" },

  section: { padding: "32px 40px 64px", borderTop: "1px solid #BFB6A0" },
  sectionHead: { marginBottom: 24 },
  h2: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 48, fontWeight: 500, letterSpacing: "-0.02em", color: "#1A1A1A", margin: "8px 0 0", fontStyle: "italic" },

  table: { width: "100%", borderCollapse: "collapse" },
  tableRow: { borderTop: "1px solid #BFB6A0", cursor: "pointer", transition: "background 0.15s" },
  tdYear: { padding: "20px 0", width: 100, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#9C9485", letterSpacing: "0.1em" },
  tdRole: { padding: "20px 16px", fontSize: 18, fontWeight: 500, color: "#1A1A1A", fontFamily: "'Source Serif 4', Georgia, serif" },
  tdOrg: { padding: "20px 16px", fontSize: 14, color: "#3a3a3a", fontStyle: "italic" },
  tdPlace: { padding: "20px 16px", fontSize: 12, color: "#9C9485", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "right" },
  tdArrow: { padding: "20px 0 20px 16px", color: "#1F3FB8", fontSize: 16, width: 24 },

  expGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 },
  expCol: { display: "flex", flexDirection: "column", gap: 14 },
  expColHead: { display: "flex", alignItems: "center", gap: 12, marginBottom: 4 },
  expColTag: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.2em", color: "#1F3FB8" },
  expColRule: { flex: 1, height: 1, background: "#BFB6A0" },
  expItem: { display: "grid", gridTemplateColumns: "60px 1fr", columnGap: 20, rowGap: 2, paddingTop: 12, borderTop: "1px solid #BFB6A0" },
  expItemFirst: { borderTop: "none", paddingTop: 0 },
  expYear: { gridRow: "1 / span 4", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#9C9485", letterSpacing: "0.1em", paddingTop: 4 },
  expRole: { fontSize: 18, fontWeight: 500, color: "#1A1A1A", fontFamily: "'Source Serif 4', Georgia, serif", lineHeight: 1.3 },
  expOrg: { fontSize: 14, color: "#3a3a3a", fontStyle: "italic" },
  expPlace: { fontSize: 11, color: "#9C9485", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 },

  dashboard: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "minmax(220px, auto)", gap: 16 },
  dashCard: { background: "#fff", padding: "24px 26px", border: "1px solid #BFB6A0", display: "flex", flexDirection: "column" },
  dashBig: { gridColumn: "span 1", gridRow: "span 2" },
  dashMystery: { background: "repeating-linear-gradient(45deg, #fff 0 6px, #EFE9DA 6px 12px)" },
  dashHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  dashLabel: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C9485", marginBottom: 8 },
  dashStat: { fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 44, fontWeight: 500, color: "#1A1A1A", lineHeight: 1, letterSpacing: "-0.02em" },
  dashStatSmall: { fontSize: 18, color: "#9C9485", fontWeight: 400 },
  dashTag: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#1F3FB8", border: "1px solid #1F3FB8", padding: "4px 8px", letterSpacing: "0.1em" },
  dashFootRow: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 },
  contChip: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.1em", padding: "4px 8px", border: "1px solid #BFB6A0", color: "#9C9485" },
  contChipDone: { background: "#1F3FB8", color: "#fff", borderColor: "#1F3FB8" },
  mysteryText: { fontFamily: "'Source Serif 4', Georgia, serif", fontStyle: "italic", color: "#9C9485", marginTop: "auto" },

  footer: { display: "flex", justifyContent: "space-between", padding: "32px 40px", borderTop: "1px solid #BFB6A0", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em", color: "#9C9485" },
  footerL: {},
};

export default Atlas;
