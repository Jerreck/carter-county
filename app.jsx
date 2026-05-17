// Main design system page composition

const { useState } = React;

// Compact copy-on-click swatch
const Swatch = ({ name, hex, role, fg = "#0B2545", big = false }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button onClick={copy} style={{
      all: "unset", cursor: "pointer", display: "flex", flexDirection: "column",
      border: "1px solid var(--line)", background: "var(--paper)", minWidth: 0,
    }}>
      <div style={{
        background: hex, height: big ? 200 : 140, position: "relative", display: "flex", alignItems: "flex-end", padding: 14,
      }}>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: big ? 28 : 20, color: fg, lineHeight: 1, letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
          {name}
        </div>
        {copied && (
          <div style={{
            position: "absolute", top: 10, right: 10, padding: "4px 8px",
            background: "rgba(11,22,40,0.85)", color: "#F5F0E6",
            fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em",
          }}>COPIED</div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderTop: "1px solid var(--line)" }}>
        <div className="label-mono">{role}</div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink)" }}>{hex.toUpperCase()}</div>
      </div>
    </button>
  );
};

// ===== Section: COVER =====
const Cover = () => (
  <div data-screen-label="01 Cover" className="section section--bone" style={{ paddingTop: 64, paddingBottom: 64, position: "relative", overflow: "hidden" }}>
    {/* corner motifs */}
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, display: "flex" }}>
      <div style={{ flex: 1, background: "#C8102E" }} />
      <div style={{ flex: 3, background: "#0B2545" }} />
      <div style={{ flex: 1, background: "#5DB2E8" }} />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center", marginTop: 32 }}>
      <div>
        <div className="label-mono">DESIGN SYSTEM · V1.0 · APRIL 2026</div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 96, lineHeight: 0.9, letterSpacing: "-0.035em", color: "#0B2545", marginTop: 18 }}>
          Carter County<br />Democrats.
        </div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 500, fontSize: 22, lineHeight: 1.35, color: "var(--ink-2)", maxWidth: 560, marginTop: 22 }}>
          A civic identity system for organizing, persuading, and showing up across southern Oklahoma — from yard signs to Facebook to the county courthouse.
        </div>
        <div style={{ display: "flex", gap: 32, marginTop: 36, paddingTop: 28, borderTop: "1px solid var(--line)" }}>
          {[
            ["Audience", "Persuadables · Volunteers · Young voters"],
            ["Tone", "Civic, weighty, plainspoken"],
            ["Heritage", "Refresh of existing OKDEMS mark"],
          ].map(([k, v]) => (
            <div key={k} style={{ flex: 1 }}>
              <div className="label-mono">{k}</div>
              <div style={{ fontFamily: "var(--slab)", fontWeight: 500, fontSize: 14, color: "var(--ink)", marginTop: 6, lineHeight: 1.35 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LogoBadge scale={1.4} />
      </div>
    </div>
  </div>
);

// ===== Section: LOGO REFRESH STORY =====
const RefreshStory = () => (
  <div data-screen-label="02 Logo Refresh" className="section section--bone">
    <div className="sec-eyebrow"><span className="num">02</span>LOGO REFRESH</div>
    <div className="sec-title">From friendly to civic.</div>
    <div className="sec-sub">
      The existing mark has good DNA — the two-blue palette, the Oklahoma silhouette, the wordmark stacked over a plate. We've kept what works, deepened the navy, tightened the type, and added a stars-and-stripes motif system so the brand reads as <em>institutional</em>, not stocky.
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 48, alignItems: "center" }}>
      <div>
        <div className="label-mono" style={{ marginBottom: 12 }}>BEFORE</div>
        <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 24, display: "flex", justifyContent: "center" }}>
          <img src="uploads/logo_upload-1779045295919.jpg" alt="Existing logo" style={{ width: "100%", maxWidth: 380 }} />
        </div>
        <div style={{ marginTop: 16, fontSize: 13, lineHeight: 1.55, color: "var(--ink-2)" }}>
          Geometric sans throughout, rectangular outer frame, sky-blue plate, OK silhouette with Carter County dot.
        </div>
      </div>
      <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 36, color: "var(--ink-3)" }}>→</div>
      <div>
        <div className="label-mono" style={{ marginBottom: 12 }}>AFTER</div>
        <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 40, display: "flex", justifyContent: "center", minHeight: 232 }}>
          <LogoPrimary scale={1.0} />
        </div>
        <div style={{ marginTop: 16, fontSize: 13, lineHeight: 1.55, color: "var(--ink-2)" }}>
          Zilla Slab for "CARTER COUNTY" gives newspaper-masthead weight. Sky-blue plate is tighter and unframed. OK mark now uses civic red for Carter County.
        </div>
      </div>
    </div>
  </div>
);

// ===== Section: LOCKUPS =====
const Lockups = () => (
  <div data-screen-label="03 Lockups" className="section section--bone">
    <div className="sec-eyebrow"><span className="num">03</span>LOGO LOCKUPS</div>
    <div className="sec-title">Six variations, one voice.</div>
    <div className="sec-sub">Use the primary horizontal lockup whenever space allows. Mark-only and monogram are reserved for tight crops — social avatars, lapel pins, favicons.</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
      <LogoCard title="PRIMARY · HORIZONTAL" note="default">
        <LogoPrimary scale={0.9} />
      </LogoCard>
      <LogoCard title="STACKED" note="vertical layouts">
        <LogoStacked scale={1.0} />
      </LogoCard>
      <LogoCard title="BADGE" note="merch · stamps" bg="var(--bone)">
        <LogoBadge scale={1.0} />
      </LogoCard>
      <LogoCard title="MARK ONLY" note="favicon · avatar" bg="var(--bone)">
        <LogoMark scale={1.2} />
      </LogoCard>
      <LogoCard title="MONOGRAM" note="lapel pin · stamp" bg="var(--bone)">
        <Monogram size={140} />
      </LogoCard>
      <LogoCard title="REVERSED · ON NAVY" note="dark contexts" bg="#0B2545">
        <LogoPrimary scale={0.9} theme="dark" />
      </LogoCard>
    </div>

    {/* Knockouts row */}
    <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
      <LogoCard title="ON SKY" bg="#5DB2E8" height={220}>
        <LogoPrimary scale={0.7} theme="knockout-sky" />
      </LogoCard>
      <LogoCard title="ON RED" bg="#C8102E" height={220}>
        <LogoPrimary scale={0.7} theme="dark" />
      </LogoCard>
      <LogoCard title="ON BONE · ALT" bg="var(--bone)" height={220}>
        <LogoStacked scale={0.85} />
      </LogoCard>
      <LogoCard title="ON INK" bg="#0A1628" height={220}>
        <LogoPrimary scale={0.7} theme="knockout-navy" />
      </LogoCard>
    </div>
  </div>
);

// ===== Section: ICON SYSTEM =====
const IconSystem = () => (
  <div data-screen-label="04 Marks & Motifs" className="section section--bone">
    <div className="sec-eyebrow"><span className="num">04</span>MARKS &amp; MOTIFS</div>
    <div className="sec-title">Stars, stripes, &amp; state.</div>
    <div className="sec-sub">The mark system is type-driven and geometric. The literal stars-and-bars donkey is reserved for one signature illustration (to be commissioned from a local illustrator and used sparingly).</div>

    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 20 }}>
      <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 28 }}>
        <div className="label-mono">FEATURED ILLUSTRATION</div>
        <div style={{ marginTop: 14 }}>
          <Placeholder w="100%" h={240} label="STARS-AND-BARS DONKEY — commissioned illustration, 1-color silhouette, used at moments of brand emphasis (annual report, cover banner, event poster)" />
        </div>
      </div>
      <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 28 }}>
        <div className="label-mono">OKLAHOMA · CARTER COUNTY</div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 180, marginTop: 10 }}>
          <OkMark size={180} body="#0B2545" accent="#C8102E" />
        </div>
        <div style={{ fontSize: 12, lineHeight: 1.5, color: "var(--ink-2)" }}>
          Simplified state silhouette with Carter County indicated in civic red. Use whenever local context matters.
        </div>
      </div>
      <div style={{ background: "#0B2545", color: "#F5F0E6", padding: 28 }}>
        <div className="label-mono" style={{ color: "#5DB2E8" }}>STAR MOTIF · SIZES</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 14, marginTop: 24, height: 100 }}>
          {[12, 18, 28, 44, 64].map(s => <Star key={s} size={s} color="#5DB2E8" />)}
        </div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.14em", color: "rgba(245,240,230,0.7)", marginTop: 16, lineHeight: 1.7 }}>
          USE IN ROWS OF 3, 5, OR 7.<br/>NEVER MIX SIZES IN A ROW.
        </div>
      </div>
    </div>

    {/* Stripe rules / patterns */}
    <div style={{ marginTop: 32, background: "var(--paper)", border: "1px solid var(--line)", padding: 28 }}>
      <div className="label-mono" style={{ marginBottom: 18 }}>STRIPE RULES &amp; PATTERNS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div className="stripe-rule" />
        <div style={{ display: "flex", height: 28 }}>
          <div style={{ flex: 1, background: "#C8102E" }} />
          <div style={{ flex: 4, background: "#0B2545" }} />
          <div style={{ flex: 1, background: "#5DB2E8" }} />
        </div>
        <div style={{ display: "flex", height: 28 }}>
          <div style={{ flex: 1, background: "#0B2545" }} />
          <div style={{ flex: 2, background: "#1A5BC6" }} />
          <div style={{ flex: 1, background: "#5DB2E8" }} />
          <div style={{ flex: 4, background: "#F5F0E6" }} />
        </div>
        <div style={{ height: 28, background: "repeating-linear-gradient(135deg, rgba(11,37,69,0.12) 0 10px, transparent 10px 20px), var(--bone)" }} />
      </div>
    </div>
  </div>
);

// ===== Section: COLOR TOKENS =====
const Colors = () => (
  <div data-screen-label="05 Color" className="section section--bone">
    <div className="sec-eyebrow"><span className="num">05</span>COLOR TOKENS</div>
    <div className="sec-title">Two blues. One bone. One spark.</div>
    <div className="sec-sub">Two confident blues do the heavy lifting. Civic red is used sparingly — only for urgent moments and election-day emphasis. Click any swatch to copy its hex.</div>

    <div className="label-mono" style={{ marginBottom: 14 }}>PRIMARY</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
      <Swatch big name="Navy" hex="#0B2545" role="--navy · authority" fg="#F5F0E6" />
      <Swatch big name="Federal" hex="#1A5BC6" role="--federal · primary" fg="#F5F0E6" />
      <Swatch big name="Sky" hex="#5DB2E8" role="--sky · accent" fg="#0B2545" />
      <Swatch big name="Bone" hex="#F5F0E6" role="--bone · paper" fg="#0B2545" />
    </div>

    <div className="label-mono" style={{ margin: "32px 0 14px" }}>SUPPORTING</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}>
      <Swatch name="Ink" hex="#0A1628" role="--ink · text" fg="#F5F0E6" />
      <Swatch name="Ink 2" hex="#2A3B52" role="body text" fg="#F5F0E6" />
      <Swatch name="Ink 3" hex="#6A7588" role="captions" fg="#F5F0E6" />
      <Swatch name="Line" hex="#DDD4C2" role="hairlines" fg="#0B2545" />
      <Swatch name="Paper" hex="#FBF8F2" role="surfaces" fg="#0B2545" />
    </div>

    <div className="label-mono" style={{ margin: "32px 0 14px" }}>SEMANTIC ACCENTS · USE SPARINGLY</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
      <Swatch big name="Civic Red" hex="#C8102E" role="urgent · election day" fg="#F5F0E6" />
      <Swatch big name="Gold" hex="#E8B23A" role="endorsements · wins" fg="#0B2545" />
      <Swatch big name="Leaf" hex="#4F7A3A" role="agriculture · rural" fg="#F5F0E6" />
    </div>

    {/* Usage ratio */}
    <div style={{ marginTop: 32, background: "var(--paper)", border: "1px solid var(--line)", padding: 24 }}>
      <div className="label-mono" style={{ marginBottom: 14 }}>USAGE RATIO · ROUGH GUIDE</div>
      <div style={{ display: "flex", height: 56 }}>
        <div style={{ flex: 50, background: "#F5F0E6", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "#0B2545" }}>BONE · 50%</div>
        <div style={{ flex: 30, background: "#0B2545", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "#F5F0E6" }}>NAVY · 30%</div>
        <div style={{ flex: 12, background: "#1A5BC6", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "#F5F0E6" }}>FED · 12%</div>
        <div style={{ flex: 6, background: "#5DB2E8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "#0B2545" }}>SKY · 6%</div>
        <div style={{ flex: 2, background: "#C8102E", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", color: "#F5F0E6" }}>RED · 2%</div>
      </div>
    </div>
  </div>
);

// ===== Section: TYPOGRAPHY =====
const Typography = () => (
  <div data-screen-label="06 Typography" className="section section--bone">
    <div className="sec-eyebrow"><span className="num">06</span>TYPOGRAPHY</div>
    <div className="sec-title">Slab for weight. Sans for work.</div>
    <div className="sec-sub">Zilla Slab carries headlines and signage — institutional, civic, masthead-weight. Inter handles UI, body copy, and small text where clarity wins.</div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 }}>
      {/* Zilla Slab specimen */}
      <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 28, color: "#0B2545" }}>Zilla Slab</div>
          <div className="label-mono">DISPLAY · HEADLINES</div>
        </div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 96, lineHeight: 0.92, letterSpacing: "-0.035em", color: "#0B2545", marginTop: 20 }}>Aa</div>
        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          {[400, 500, 600, 700].map(w => (
            <div key={w} style={{ padding: "6px 10px", background: "var(--bone)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", color: "var(--ink-2)" }}>{w}</div>
          ))}
        </div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 400, fontSize: 13, color: "var(--ink-3)", marginTop: 18, lineHeight: 1.5 }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789 &amp;?!—
        </div>
      </div>

      {/* Inter specimen */}
      <div style={{ background: "#0B2545", color: "#F5F0E6", padding: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontFamily: "var(--sans)", fontWeight: 800, fontSize: 28 }}>Inter</div>
          <div className="label-mono" style={{ color: "#5DB2E8" }}>UI · BODY</div>
        </div>
        <div style={{ fontFamily: "var(--sans)", fontWeight: 900, fontSize: 96, lineHeight: 0.92, letterSpacing: "-0.04em", marginTop: 20 }}>Aa</div>
        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
          {[400, 500, 600, 700, 800, 900].map(w => (
            <div key={w} style={{ padding: "6px 10px", background: "rgba(245,240,230,0.08)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em", color: "#5DB2E8" }}>{w}</div>
          ))}
        </div>
        <div style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: 13, color: "rgba(245,240,230,0.7)", marginTop: 18, lineHeight: 1.5 }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789 &amp;?!—
        </div>
      </div>
    </div>

    {/* Type scale */}
    <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 28 }}>
      <div className="label-mono" style={{ marginBottom: 20 }}>TYPE SCALE</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {[
          { label: "DISPLAY · 96/0.9", style: { fontFamily: "var(--slab)", fontWeight: 700, fontSize: 96, lineHeight: 0.9, letterSpacing: "-0.035em" }, text: "Show up. Speak up. Vote." },
          { label: "H1 · 64/1.0", style: { fontFamily: "var(--slab)", fontWeight: 700, fontSize: 64, lineHeight: 1, letterSpacing: "-0.025em" }, text: "Democracy shows up." },
          { label: "H2 · 40/1.1", style: { fontFamily: "var(--slab)", fontWeight: 600, fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em" }, text: "Organizing in southern Oklahoma" },
          { label: "H3 · 24/1.25", style: { fontFamily: "var(--slab)", fontWeight: 600, fontSize: 24, lineHeight: 1.25 }, text: "Our county. Our courthouse. Our future." },
          { label: "LEAD · 20/1.45 · Inter 500", style: { fontFamily: "var(--sans)", fontWeight: 500, fontSize: 20, lineHeight: 1.45 }, text: "Every other Tuesday we knock doors across Ardmore — join a route this week." },
          { label: "BODY · 16/1.55 · Inter 400", style: { fontFamily: "var(--sans)", fontWeight: 400, fontSize: 16, lineHeight: 1.55 }, text: "Carter County Democrats meet the third Thursday of every month at the Ardmore Public Library, 6:30 PM. Coffee provided; bring a friend if you can." },
          { label: "CAPTION · 13/1.5 · Inter 400", style: { fontFamily: "var(--sans)", fontWeight: 400, fontSize: 13, lineHeight: 1.5, color: "var(--ink-2)" }, text: "Paid for by the Carter County Democratic Party. Not authorized by any candidate." },
          { label: "EYEBROW · 11/0.18em · Mono 500", style: { fontFamily: "var(--mono)", fontWeight: 500, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-3)" }, text: "VOLUNTEER · DOOR KNOCK · APR 22" },
        ].map((row, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, alignItems: "baseline", paddingBottom: 14, borderBottom: i < 7 ? "1px solid var(--line)" : "none" }}>
            <div className="label-mono">{row.label}</div>
            <div style={{ color: "#0B2545", ...row.style }}>{row.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ===== Section: BUTTONS / INPUTS =====
const Components = () => {
  const [v, setV] = useState("");
  const [checked, setChecked] = useState(true);
  return (
    <div data-screen-label="07 Components" className="section section--bone">
      <div className="sec-eyebrow"><span className="num">07</span>BUTTONS &amp; FORMS</div>
      <div className="sec-title">Working components.</div>
      <div className="sec-sub">Square corners, weighty type, no soft shadows. Buttons are uppercase Inter 800 with generous tracking — they should feel like signs, not pills.</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Buttons */}
        <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 28 }}>
          <div className="label-mono" style={{ marginBottom: 18 }}>BUTTONS · STYLES</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button style={btn("primary")}>VOLUNTEER NOW</button>
              <button style={btn("urgent")}>DONATE · ${"\u00A0"}25</button>
              <button style={btn("secondary")}>RSVP</button>
              <button style={btn("ghost")}>LEARN MORE →</button>
            </div>
            <div className="label-mono" style={{ marginTop: 14 }}>SIZES</div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <button style={{ ...btn("primary"), padding: "8px 14px", fontSize: 11 }}>SMALL</button>
              <button style={btn("primary")}>DEFAULT</button>
              <button style={{ ...btn("primary"), padding: "20px 28px", fontSize: 15 }}>LARGE · YARD SIGN</button>
            </div>
            <div className="label-mono" style={{ marginTop: 14 }}>STATES</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button style={btn("primary")}>DEFAULT</button>
              <button style={{ ...btn("primary"), background: "#1A5BC6" }}>HOVER</button>
              <button style={{ ...btn("primary"), background: "#000B1F" }}>ACTIVE</button>
              <button style={{ ...btn("primary"), opacity: 0.4, cursor: "not-allowed" }}>DISABLED</button>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div style={{ background: "#0B2545", color: "#F5F0E6", padding: 28 }}>
          <div className="label-mono" style={{ marginBottom: 18, color: "#5DB2E8" }}>FORM FIELDS</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label className="label-mono" style={{ color: "#5DB2E8", display: "block", marginBottom: 6 }}>NAME</label>
              <input value={v} onChange={e => setV(e.target.value)} placeholder="Jane Holloway" style={input()} />
            </div>
            <div>
              <label className="label-mono" style={{ color: "#5DB2E8", display: "block", marginBottom: 6 }}>EMAIL</label>
              <input placeholder="jane@example.com" style={input()} />
            </div>
            <div>
              <label className="label-mono" style={{ color: "#5DB2E8", display: "block", marginBottom: 6 }}>ZIP</label>
              <input placeholder="73401" style={{ ...input(), width: 140 }} />
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", marginTop: 8 }}>
              <div onClick={() => setChecked(!checked)} style={{
                width: 22, height: 22, border: "2px solid #5DB2E8",
                background: checked ? "#5DB2E8" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {checked && <div style={{ fontFamily: "var(--slab)", fontWeight: 700, color: "#0B2545", fontSize: 14, lineHeight: 1 }}>✓</div>}
              </div>
              <span style={{ fontSize: 14 }}>Send me weekly updates</span>
            </label>
          </div>
        </div>
      </div>

      {/* Tags & alerts */}
      <div style={{ marginTop: 20, background: "var(--paper)", border: "1px solid var(--line)", padding: 28 }}>
        <div className="label-mono" style={{ marginBottom: 18 }}>TAGS · CALLOUTS · ALERTS</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
          {[
            ["VOLUNTEER", "#0B2545", "#F5F0E6"],
            ["DONOR", "#1A5BC6", "#F5F0E6"],
            ["CANDIDATE", "#5DB2E8", "#0B2545"],
            ["ENDORSED", "#E8B23A", "#0B2545"],
            ["URGENT", "#C8102E", "#F5F0E6"],
          ].map(([t, bg, fg]) => (
            <div key={t} style={{ padding: "5px 10px", background: bg, color: fg, fontFamily: "var(--mono)", fontWeight: 500, fontSize: 10, letterSpacing: "0.18em" }}>{t}</div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <div style={{ padding: 16, background: "var(--bone)", borderLeft: "4px solid #1A5BC6", display: "flex", flexDirection: "column", gap: 4 }}>
            <div className="label-mono" style={{ color: "#1A5BC6" }}>HEADS UP</div>
            <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 16, color: "#0B2545" }}>Voter registration closes Oct 12.</div>
          </div>
          <div style={{ padding: 16, background: "#C8102E", color: "#F5F0E6", display: "flex", flexDirection: "column", gap: 4 }}>
            <div className="label-mono" style={{ color: "#F5F0E6", opacity: 0.85 }}>ELECTION DAY</div>
            <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 16 }}>Polls open 7am to 7pm — find your site.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const btn = (kind) => {
  const base = {
    fontFamily: "var(--sans)", fontWeight: 800, fontSize: 13,
    letterSpacing: "0.1em", padding: "14px 20px", border: 0, cursor: "pointer",
    textTransform: "uppercase", lineHeight: 1,
  };
  if (kind === "primary") return { ...base, background: "#0B2545", color: "#F5F0E6" };
  if (kind === "urgent") return { ...base, background: "#C8102E", color: "#F5F0E6" };
  if (kind === "secondary") return { ...base, background: "#5DB2E8", color: "#0B2545" };
  if (kind === "ghost") return { ...base, background: "transparent", color: "#0B2545", border: "2px solid #0B2545", padding: "12px 18px" };
  return base;
};
const input = () => ({
  width: "100%", padding: "12px 14px",
  background: "rgba(245,240,230,0.06)", border: "1px solid #5DB2E8",
  color: "#F5F0E6", fontFamily: "var(--sans)", fontSize: 14, outline: "none",
});

// ===== Section: APPLICATIONS =====
const Applications = () => (
  <div data-screen-label="08 Applications" className="section section--ink">
    <div className="sec-eyebrow"><span className="num">08</span>APPLICATIONS</div>
    <div className="sec-title" style={{ color: "#F5F0E6" }}>The system in the wild.</div>
    <div className="sec-sub">Yard signs, doorhangers, social posts, flyers — the system holds together because the same handful of moves repeat: weighty slab headline, sky-blue plate, civic-red emphasis, plenty of bone paper.</div>

    {/* Row 1: yard sign + door hanger + biz cards */}
    <AppRow title="YARD SIGN · 24×18">
      <YardSign />
    </AppRow>
    <AppRow title="DOOR HANGER · 4×8.5">
      <DoorHanger />
    </AppRow>
    <AppRow title="BUSINESS CARD · FRONT/BACK" wide>
      <div style={{ display: "flex", gap: 24 }}>
        <BizCardFront />
        <BizCardBack />
      </div>
    </AppRow>
    <AppRow title="SOCIAL POSTS · 1080×1080" wide>
      <div style={{ display: "flex", gap: 16 }}>
        <SocialPostQuote />
        <SocialPostEvent />
        <SocialPostStats />
      </div>
    </AppRow>
    <AppRow title="EVENT FLYER · LETTER">
      <EventFlyer />
    </AppRow>
    <AppRow title="MONTHLY DONATION CARD">
      <DonationCard />
    </AppRow>
    <AppRow title="VOTER GUIDE">
      <VoterGuide />
    </AppRow>
    <AppRow title="EMAIL HEADER · 640w" wide>
      <EmailHeader />
    </AppRow>
    <AppRow title="FACEBOOK COVER · 820×312" wide>
      <FbCover />
    </AppRow>
  </div>
);

const AppRow = ({ title, children, wide }) => (
  <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: wide ? "240px 1fr" : "240px auto", gap: 32, alignItems: "flex-start", paddingTop: 32, borderTop: "1px solid rgba(245,240,230,0.12)" }}>
    <div>
      <div className="label-mono" style={{ color: "#5DB2E8" }}>{title}</div>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-start" }}>{children}</div>
  </div>
);

// ===== Section: FOOTER =====
const Footer = () => (
  <div data-screen-label="09 Footer" className="section section--navy" style={{ paddingTop: 64, paddingBottom: 48 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, alignItems: "flex-start" }}>
      <div>
        <LogoPrimary scale={0.7} theme="dark" />
        <div style={{ marginTop: 24, fontSize: 13, lineHeight: 1.55, color: "rgba(245,240,230,0.7)", maxWidth: 380 }}>
          Carter County Democratic Party · serving Ardmore, Lone Grove, Healdton, Ringling, Springer, Wilson, and every kitchen table in between since 1907.
        </div>
      </div>
      <div>
        <div className="label-mono" style={{ color: "#5DB2E8" }}>SYSTEM</div>
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "rgba(245,240,230,0.85)" }}>
          <div>Version 1.0</div>
          <div>Last updated April 2026</div>
          <div>Fonts: Zilla Slab + Inter</div>
          <div>Color space: sRGB · printer use Pantone 281 C / 2925 C</div>
        </div>
      </div>
      <div>
        <div className="label-mono" style={{ color: "#5DB2E8" }}>NEXT STEPS</div>
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "rgba(245,240,230,0.85)" }}>
          <div>1. Commission donkey illustration</div>
          <div>2. Print yard signs · navy/bone reverse</div>
          <div>3. Build website on this token set</div>
          <div>4. Migrate Facebook templates</div>
        </div>
      </div>
    </div>
    <div style={{ height: 1, background: "rgba(245,240,230,0.15)", margin: "40px 0 20px" }} />
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", color: "rgba(245,240,230,0.55)" }}>
      <div>CARTERCOUNTYDEMS.ORG</div>
      <div>★ ★ ★ ★ ★</div>
      <div>VOTE BLUE · NOV 3</div>
    </div>
  </div>
);

// ===== App composition =====
const App = () => (
  <div className="page">
    <Cover />
    <RefreshStory />
    <Lockups />
    <IconSystem />
    <Colors />
    <Typography />
    <Components />
    <Applications />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
