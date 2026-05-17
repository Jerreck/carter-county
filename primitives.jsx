// Shared visual primitives: stars, stripes, simplified Oklahoma mark, monogram blocks.
// Keep these strictly geometric — no hand-drawn complex SVGs.

const Star = ({ size = 16, color = "currentColor", style }) => {
  // 5-point star via SVG polygon (simple geometric shape — allowed)
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 50 : 22;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`);
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden="true">
      <polygon points={pts.join(" ")} fill={color} />
    </svg>
  );
};

// Horizontal stripes block (three-bar civic motif)
const StripeBar = ({ width = 80, height = 14, colors = ["#1A5BC6", "#5DB2E8", "#0B2545"], style }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 3, width, ...style }}>
    {colors.map((c, i) => (
      <div key={i} style={{ height: (height - 6) / colors.length, background: c }} />
    ))}
  </div>
);

// Simplified OK state mark — built from rectangles approximating panhandle + body.
// (Allowed: simple primitive shapes composed together.)
const OkMark = ({ size = 64, accent = "#C8102E", body = "#0B2545", panhandle = true, dotForCarter = true }) => {
  // Scale: viewBox 0..100 (w) x 0..56 (h). Panhandle in upper-left; main body rectangle.
  // Carter County roughly center-south of main body.
  const W = 100, H = 56;
  return (
    <svg width={size} height={(size * H) / W} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      {panhandle && <rect x="2" y="6" width="34" height="10" fill={body} />}
      <rect x="22" y="16" width="76" height="38" fill={body} />
      {/* notch on top-right to suggest border */}
      <rect x="86" y="16" width="12" height="6" fill={body} opacity="0.0" />
      {dotForCarter && (
        <>
          <circle cx="58" cy="44" r="3.5" fill={accent} />
          <circle cx="58" cy="44" r="7" fill="none" stroke={accent} strokeWidth="1" opacity="0.55" />
        </>
      )}
    </svg>
  );
};

// Monogram disc — "CCD"
const Monogram = ({ size = 96, bg = "#0B2545", fg = "#F5F0E6", accent = "#5DB2E8" }) => (
  <div style={{
    width: size, height: size, borderRadius: "50%",
    background: bg, color: fg, display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
    fontFamily: "var(--slab)", fontWeight: 700,
  }}>
    {/* top arc text feel via tiny stars */}
    <div style={{ display: "flex", gap: size * 0.04, marginBottom: size * 0.02 }}>
      <Star size={size * 0.07} color={accent} />
      <Star size={size * 0.07} color={accent} />
      <Star size={size * 0.07} color={accent} />
    </div>
    <div style={{ fontSize: size * 0.42, lineHeight: 0.9, letterSpacing: "-0.04em" }}>CCD</div>
    <div style={{ fontFamily: "var(--mono)", fontSize: size * 0.08, letterSpacing: "0.18em", marginTop: size * 0.04, opacity: 0.7 }}>EST·1907</div>
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: size * 0.06, background: accent }} />
  </div>
);

// Placeholder for illustrated assets (donkey, photos, etc.)
const Placeholder = ({ w, h, label = "ASSET", dark = false, style }) => (
  <div className={"placeholder" + (dark ? " placeholder--dark" : "")} style={{ width: w, height: h, ...style }}>
    {label}
  </div>
);

// A subtle decorative banner of stars
const StarRow = ({ count = 7, size = 12, color = "var(--sky)", gap = 10, style }) => (
  <div style={{ display: "flex", gap, alignItems: "center", ...style }}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={size} color={color} />
    ))}
  </div>
);

// Two-tone "OKDEMS" plate — reusable lockup element
const OkDemsPlate = ({ scale = 1, plateColor = "#5DB2E8", textColor = "#0B2545" }) => (
  <div style={{
    background: plateColor, color: textColor,
    padding: `${10 * scale}px ${18 * scale}px`,
    fontFamily: "var(--sans)", fontWeight: 900, fontSize: 44 * scale,
    letterSpacing: "-0.01em", lineHeight: 1,
    display: "inline-flex", alignItems: "center",
  }}>
    OKDEMS
  </div>
);

Object.assign(window, { Star, StripeBar, OkMark, Monogram, Placeholder, StarRow, OkDemsPlate });
