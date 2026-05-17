// Logo system: primary lockup, stacked, mark, monogram, monochrome, knockouts

const LogoPrimary = ({ scale = 1, theme = "light" }) => {
  // theme: "light" | "dark" | "knockout-navy" | "knockout-sky"
  const colors = {
    light: { county: "#0B2545", plate: "#5DB2E8", plateText: "#0B2545", ok: "#1A5BC6", dot: "#C8102E" },
    dark: { county: "#F5F0E6", plate: "#5DB2E8", plateText: "#0B2545", ok: "#5DB2E8", dot: "#FFFFFF" },
    "knockout-navy": { county: "#F5F0E6", plate: "#F5F0E6", plateText: "#0B2545", ok: "#5DB2E8", dot: "#5DB2E8" },
    "knockout-sky": { county: "#0B2545", plate: "#0B2545", plateText: "#F5F0E6", ok: "#0B2545", dot: "#C8102E" },
  }[theme];

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: 8 * scale, alignItems: "flex-start" }}>
      <div style={{
        fontFamily: "var(--slab)", fontWeight: 700,
        fontSize: 36 * scale, letterSpacing: "0.02em", lineHeight: 0.95,
        color: colors.county,
      }}>
        CARTER COUNTY
      </div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 12 * scale }}>
        <OkDemsPlate scale={scale} plateColor={colors.plate} textColor={colors.plateText} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <OkMark size={56 * scale} body={colors.ok} accent={colors.dot} />
        </div>
      </div>
    </div>
  );
};

const LogoStacked = ({ scale = 1 }) => (
  <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 10 * scale }}>
    <OkMark size={72 * scale} body="#0B2545" accent="#C8102E" />
    <div style={{
      fontFamily: "var(--slab)", fontWeight: 700,
      fontSize: 22 * scale, letterSpacing: "0.04em", color: "#0B2545", lineHeight: 1,
    }}>
      CARTER COUNTY
    </div>
    <OkDemsPlate scale={scale * 0.7} />
  </div>
);

const LogoBadge = ({ scale = 1, bg = "#0B2545" }) => (
  <div style={{
    width: 220 * scale, height: 220 * scale, borderRadius: "50%",
    background: bg, color: "#F5F0E6",
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    position: "relative", overflow: "hidden",
  }}>
    {/* curved star ring at top */}
    <div style={{ position: "absolute", top: 18 * scale, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 14 * scale }}>
      {[0,1,2,3,4].map(i => <Star key={i} size={10 * scale} color="#5DB2E8" />)}
    </div>
    <div style={{
      fontFamily: "var(--slab)", fontWeight: 700, fontSize: 18 * scale,
      letterSpacing: "0.06em", textAlign: "center", lineHeight: 1, marginTop: 28 * scale,
    }}>
      CARTER COUNTY
    </div>
    <OkDemsPlate scale={scale * 0.55} />
    <div style={{
      fontFamily: "var(--mono)", fontSize: 9 * scale, letterSpacing: "0.22em",
      marginTop: 12 * scale, opacity: 0.7,
    }}>
      OKLAHOMA · EST. 1907
    </div>
    {/* bottom stripe arc */}
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 12 * scale, background: "#5DB2E8" }} />
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 12 * scale, height: 4 * scale, background: "#C8102E" }} />
  </div>
);

const LogoMark = ({ scale = 1 }) => (
  <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8 * scale }}>
    <div style={{
      width: 96 * scale, height: 96 * scale, background: "#0B2545",
      display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
    }}>
      <OkMark size={72 * scale} body="#F5F0E6" accent="#C8102E" />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 6 * scale, background: "#5DB2E8" }} />
    </div>
  </div>
);

// Combined panel showing a single logo with usage info
const LogoCard = ({ title, children, bg = "var(--paper)", height = 280, note }) => (
  <div style={{ display: "flex", flexDirection: "column", border: "1px solid var(--line)", background: "var(--paper)" }}>
    <div style={{
      background: bg, height, display: "flex", alignItems: "center", justifyContent: "center",
      padding: 24, overflow: "hidden",
    }}>
      {children}
    </div>
    <div style={{ padding: "14px 18px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", gap: 12 }}>
      <div className="label-mono">{title}</div>
      {note && <div className="label-mono" style={{ color: "var(--ink-2)" }}>{note}</div>}
    </div>
  </div>
);

Object.assign(window, { LogoPrimary, LogoStacked, LogoBadge, LogoMark, LogoCard });
