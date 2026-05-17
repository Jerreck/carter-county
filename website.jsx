// Carter County Democrats — single-page website.
// Content structure mirrors mcdemocrats.com: nav → hero → contact → precincts → meetings → civic → footer

const { useState } = React;

// ---------- Reusable bits ----------
const Container = ({ children, style }) => (
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", ...style }}>{children}</div>
);

const Eyebrow = ({ children, color }) => (
  <div className="label-mono" style={{ color: color || "var(--ink-3)" }}>{children}</div>
);

const SectionHead = ({ eyebrow, title, sub, dark }) => (
  <div style={{ maxWidth: 760, marginBottom: 48 }}>
    <Eyebrow color={dark ? "var(--sky)" : "var(--federal)"}>{eyebrow}</Eyebrow>
    <h2 style={{
      fontFamily: "var(--slab)", fontWeight: 700, fontSize: 56, lineHeight: 1, letterSpacing: "-0.025em",
      color: dark ? "var(--bone)" : "var(--navy)", margin: "16px 0 18px",
    }}>{title}</h2>
    {sub && <p style={{ fontFamily: "var(--sans)", fontSize: 18, lineHeight: 1.55, color: dark ? "rgba(245,240,230,0.78)" : "var(--ink-2)", margin: 0 }}>{sub}</p>}
  </div>
);

const Btn = ({ href, children, kind = "primary", external }) => {
  const styles = {
    primary: { background: "var(--navy)", color: "var(--bone)" },
    urgent:  { background: "var(--civic-red)", color: "var(--bone)" },
    sky:     { background: "var(--sky)", color: "var(--navy)" },
    ghost:   { background: "transparent", color: "var(--navy)", border: "2px solid var(--navy)" },
    "ghost-light": { background: "transparent", color: "var(--bone)", border: "2px solid var(--bone)" },
  }[kind];
  return (
    <a className="btn-reset" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}
       style={{
         ...styles, padding: "14px 22px", fontFamily: "var(--sans)", fontWeight: 800, fontSize: 13,
         letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1, alignItems: "center", gap: 10,
       }}>
      {children}
    </a>
  );
};

// ---------- Top nav ----------
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(11,37,69,0.97)" : "var(--navy)",
      color: "var(--bone)", borderBottom: "1px solid rgba(245,240,230,0.1)",
      transition: "background 0.2s",
    }}>
      <div style={{ height: 4, background: "var(--civic-red)" }} />
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 32px" }}>
        <a href="#top" className="nav-link" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <OkMark size={32} body="var(--sky)" accent="var(--civic-red)" />
          <div>
            <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 18, lineHeight: 1, letterSpacing: "0.01em" }}>Carter County Democrats</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--sky)", marginTop: 4 }}>CARTERCOUNTYDEMS.ORG</div>
          </div>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {[
            ["Find Your Precinct", "#precincts"],
            ["Meetings", "#meetings"],
            ["Vote", "#vote"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="nav-link label-mono" style={{ color: "var(--bone)" }}>{l}</a>
          ))}
          <Btn href="#getinvolved" kind="urgent">Get Involved →</Btn>
        </div>
      </Container>
    </div>
  );
};

// ---------- Hero ----------
const Hero = () => (
  <section id="top" style={{ background: "var(--navy)", color: "var(--bone)", position: "relative", overflow: "hidden" }}>
    {/* decorative stripe pattern bg */}
    <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(93,178,232,0.05) 0 14px, transparent 14px 28px)" }} />
    {/* corner star cluster */}
    <div style={{ position: "absolute", top: 56, right: 64, opacity: 0.5 }}>
      <StarRow count={5} size={14} color="var(--sky)" gap={12} />
    </div>
    <Container style={{ position: "relative", padding: "96px 32px 80px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "center" }}>
      <div>
        <Eyebrow color="var(--sky)">CARTER COUNTY · OKLAHOMA</Eyebrow>
        <h1 style={{
          fontFamily: "var(--slab)", fontWeight: 700, fontSize: 88, lineHeight: 0.95, letterSpacing: "-0.035em",
          margin: "18px 0 24px",
        }}>
          Building a Stronger <em style={{ fontStyle: "italic", color: "var(--sky)" }}>Carter County</em>
        </h1>
        <p style={{ fontFamily: "var(--sans)", fontSize: 20, lineHeight: 1.5, color: "rgba(245,240,230,0.85)", maxWidth: 620, margin: "0 0 36px" }}>
          We're neighbors working together for better schools, higher wages, and a more effective government that represents everyone in Carter County, Oklahoma. Join us.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Btn href="sms:+15805550155" kind="sky">📱 Text HOWDY to 580-555-0155</Btn>
          <Btn href="#meetings" kind="ghost-light">📅 Add to Calendar</Btn>
        </div>
        <div style={{
          marginTop: 40, padding: "18px 22px", background: "rgba(245,240,230,0.06)",
          border: "1px solid rgba(93,178,232,0.4)", display: "flex", alignItems: "center", gap: 18,
        }}>
          <div style={{
            width: 48, height: 48, background: "var(--civic-red)", color: "var(--bone)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            fontFamily: "var(--slab)", fontWeight: 700, fontSize: 20, lineHeight: 1,
          }}>📅</div>
          <div style={{ flex: 1, fontSize: 14, lineHeight: 1.5 }}>
            <strong style={{ fontWeight: 700, color: "var(--bone)" }}>Next Meeting:</strong>{" "}
            Third Thursday of every month · 6:30 PM · Ardmore Public Library, 320 E St NW
          </div>
          <a href="#meetings" className="nav-link label-mono" style={{ color: "var(--sky)", whiteSpace: "nowrap" }}>Details ↓</a>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LogoBadge scale={1.5} />
      </div>
    </Container>
    {/* bottom stripe */}
    <div style={{ height: 6, background: "var(--civic-red)" }} />
    <div style={{ height: 3, background: "var(--sky)" }} />
  </section>
);

// ---------- Contact ----------
const Contact = () => {
  const items = [
    { label: "Email",         val: "info@cartercountydems.org", href: "mailto:info@cartercountydems.org", icon: "✉" },
    { label: "Phone",         val: "(580) 555-0155",            href: "tel:+15805550155",                 icon: "☎" },
    { label: "Facebook Page", val: "Follow Us",                 href: "https://www.facebook.com/cartercountydemocrats", external: true, icon: "f" },
    { label: "Facebook Group",val: "Join the Conversation",     href: "https://www.facebook.com/cartercountydemocrats", external: true, icon: "♣" },
  ];
  return (
    <section id="contact" style={{ background: "var(--paper)", padding: "96px 0", borderBottom: "1px solid var(--line)" }}>
      <Container>
        <SectionHead eyebrow="REACH OUT" title="Contact Us" sub="Have a question, want to get involved, or just want to say hello? Reach out — we'd love to hear from you." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {items.map(({ label, val, href, external, icon }) => (
            <a key={label} className="btn-reset" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}
               style={{
                 display: "flex", flexDirection: "column", justifyContent: "space-between",
                 padding: 24, background: "var(--paper)", border: "1px solid var(--line)",
                 textDecoration: "none", color: "var(--ink)", minHeight: 180,
                 transition: "border-color 0.15s, transform 0.15s",
               }}
               onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--navy)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
               onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{
                width: 44, height: 44, background: "var(--navy)", color: "var(--bone)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--slab)", fontWeight: 700, fontSize: 22, lineHeight: 1,
              }}>{icon}</div>
              <div>
                <Eyebrow>{label}</Eyebrow>
                <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 20, color: "var(--navy)", marginTop: 6, letterSpacing: "-0.01em", lineHeight: 1.15 }}>{val}</div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};

// ---------- Precincts ----------
const Precincts = () => (
  <section id="precincts" style={{ background: "var(--bone)", padding: "96px 0", borderBottom: "1px solid var(--line)" }}>
    <Container>
      <SectionHead eyebrow="ORGANIZE YOUR NECK OF THE WOODS" title="Find Your Precinct"
        sub="Carter County is divided into 21 voting precincts. Every precinct needs Democratic Precinct Officers — leaders who knock doors, turn out voters, and represent their community. Find yours and see how you can help." />

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32, alignItems: "stretch" }}>
        {/* Left: callout card */}
        <div style={{ background: "var(--navy)", color: "var(--bone)", padding: 40, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(93,178,232,0.05) 0 12px, transparent 12px 24px)" }} />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", flex: 1 }}>
            <Eyebrow color="var(--sky)">INTERACTIVE PRECINCT MAP</Eyebrow>
            <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 32, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 14 }}>
              Enter your address to instantly see which of Carter County's 21 voting precincts you live in — then sign up to become a Precinct Officer.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
              {[
                "Enter your Carter County address",
                "Your precinct is highlighted on the map",
                "Click to become a Precinct Officer candidate",
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    width: 28, height: 28, background: "var(--sky)", color: "var(--navy)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    fontFamily: "var(--slab)", fontWeight: 700, fontSize: 15, lineHeight: 1,
                  }}>{i + 1}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.5, paddingTop: 4 }}>{t}</div>
                </div>
              ))}
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ marginTop: 32 }}>
              <Btn href="#precinct-map" kind="sky">Open Precinct Map →</Btn>
            </div>
          </div>
        </div>

        {/* Right: stylized "map" placeholder */}
        <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 28, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <Eyebrow>CARTER COUNTY · 21 PRECINCTS</Eyebrow>
              <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 22, color: "var(--navy)", marginTop: 6, letterSpacing: "-0.01em" }}>Where do you vote?</div>
            </div>
            <OkMark size={32} body="var(--navy)" accent="var(--civic-red)" />
          </div>
          {/* faux map */}
          <div style={{ flex: 1, position: "relative", background: "var(--bone)", border: "1px solid var(--line)", overflow: "hidden", minHeight: 280 }}>
            {/* grid of "precincts" */}
            <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridTemplateRows: "repeat(4, 1fr)", gap: 1, padding: 1, background: "var(--line)" }}>
              {Array.from({ length: 21 }).map((_, i) => {
                const highlight = i === 9;
                return (
                  <div key={i} style={{
                    background: highlight ? "var(--sky)" : "var(--paper)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--mono)", fontSize: 11, fontWeight: 500, color: highlight ? "var(--navy)" : "var(--ink-3)",
                    position: "relative",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                    {highlight && (
                      <div style={{ position: "absolute", inset: 0, border: "2px solid var(--civic-red)", pointerEvents: "none" }} />
                    )}
                  </div>
                );
              })}
              {/* fill last 3 grid cells with bone */}
              <div style={{ background: "var(--bone)" }} />
              <div style={{ background: "var(--bone)" }} />
              <div style={{ background: "var(--bone)" }} />
            </div>
          </div>
          {/* address input */}
          <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
            <input placeholder="123 Main St, Ardmore, OK" style={{
              flex: 1, padding: "12px 14px", background: "var(--bone)", border: "1px solid var(--line)",
              fontFamily: "var(--sans)", fontSize: 14, color: "var(--navy)", outline: "none",
            }} />
            <button style={{
              padding: "12px 20px", background: "var(--navy)", color: "var(--bone)", border: 0,
              fontFamily: "var(--sans)", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em",
              textTransform: "uppercase", cursor: "pointer",
            }}>FIND</button>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// ---------- Meetings ----------
const Meetings = () => (
  <section id="meetings" style={{ background: "var(--paper)", padding: "96px 0", borderBottom: "1px solid var(--line)" }}>
    <Container>
      <SectionHead eyebrow="MONTHLY MEETINGS" title="Come to a Meeting"
        sub="Our regular monthly meetings are open to all Democrats and interested community members in Carter County. Come hear what we're working on, meet your neighbors, and have a voice in local Democratic Party decisions. No registration required — just show up." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "stretch" }}>
        {/* Details card */}
        <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 36 }}>
          <Eyebrow>REGULAR MEETING DETAILS</Eyebrow>
          <h3 style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 28, color: "var(--navy)", margin: "10px 0 24px", letterSpacing: "-0.02em" }}>
            Third Thursday, every month.
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              { k: "WHEN",      v: "Third Thursday of every month" },
              { k: "TIME",      v: "6:30 PM — 8:00 PM" },
              { k: "LOCATION",  v: "Ardmore Public Library\n320 E Street NW, Ardmore, OK 73401", map: true },
              { k: "QUESTIONS", v: "info@cartercountydems.org", mailto: true },
            ].map(({ k, v, map, mailto }) => (
              <div key={k} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 18, paddingBottom: 18, borderBottom: "1px solid var(--line)" }}>
                <Eyebrow>{k}</Eyebrow>
                <div style={{ fontFamily: "var(--slab)", fontWeight: 500, fontSize: 17, color: "var(--ink)", lineHeight: 1.45, whiteSpace: "pre-line" }}>
                  {mailto
                    ? <a href={`mailto:${v}`} className="nav-link" style={{ color: "var(--federal)", textDecoration: "underline", textUnderlineOffset: 4 }}>{v}</a>
                    : v}
                  {map && (
                    <div style={{ marginTop: 8 }}>
                      <a href="https://maps.google.com/?q=320+E+St+NW+Ardmore+OK+73401" target="_blank" rel="noopener"
                         className="nav-link label-mono" style={{ color: "var(--federal)" }}>VIEW MAP ↗</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn href="#calendar" kind="primary">📅 Add to Calendar</Btn>
            <Btn href="sms:+15805550155" kind="ghost">Text "HOWDY"</Btn>
          </div>
        </div>

        {/* What to expect */}
        <div style={{ background: "var(--navy)", color: "var(--bone)", padding: 36, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(93,178,232,0.05) 0 12px, transparent 12px 24px)" }} />
          <div style={{ position: "relative" }}>
            <Eyebrow color="var(--sky)">WHAT TO EXPECT</Eyebrow>
            <h3 style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 28, margin: "10px 0 24px", letterSpacing: "-0.02em" }}>
              An hour and a half of neighbors getting things done.
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["6:30", "Coffee, cookies, and catching up"],
                ["6:45", "Chair's report + officer updates"],
                ["7:00", "Featured topic or guest speaker"],
                ["7:30", "Volunteer signups + new business"],
                ["8:00", "Adjourn — head home, or out for pie"],
              ].map(([t, d]) => (
                <div key={t} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 16, alignItems: "baseline", paddingBottom: 12, borderBottom: "1px solid rgba(245,240,230,0.12)" }}>
                  <div style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 13, color: "var(--sky)", letterSpacing: "0.06em" }}>{t}</div>
                  <div style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.45 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// ---------- Civic participation ----------
const Civic = () => (
  <section id="vote" style={{ background: "var(--bone)", padding: "96px 0", borderBottom: "1px solid var(--line)" }}>
    <Container>
      <SectionHead eyebrow="CIVIC PARTICIPATION" title="Your Voice Matters"
        sub="Democracy works when everyone participates. Make sure you're registered, stay informed about upcoming elections, and encourage your neighbors to do the same." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {[
          {
            num: "01",
            title: "Register to Vote",
            body: "Oklahoma makes it easy to register or update your voter registration online. Check your registration status and sign up at the official Oklahoma Voter Registration Portal.",
            cta: "Oklahoma Voter Portal →",
            href: "https://okvoterportal.okelections.gov/",
            accent: "var(--federal)",
          },
          {
            num: "02",
            title: "Upcoming Elections",
            body: "Stay informed about every election on your ballot — from local races to statewide and national contests. The Oklahoma State Election Board posts official dates and information.",
            cta: "View Next Election →",
            href: "https://oklahoma.gov/elections/elections-results/next-election.html",
            accent: "var(--civic-red)",
          },
          {
            num: "03",
            title: "Find Your Precinct",
            body: "Enter your address on our interactive precinct map to see which voting precinct you live in — and find out how you can help lead Democrats in your neighborhood as a Precinct Officer.",
            cta: "Open Precinct Map →",
            href: "#precincts",
            accent: "var(--sky)",
          },
        ].map(c => (
          <div key={c.num} style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 32, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: c.accent }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.18em", color: "var(--ink-3)" }}>{c.num} ·</div>
              <Star size={12} color={c.accent} />
            </div>
            <h3 style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 28, color: "var(--navy)", margin: "12px 0 14px", letterSpacing: "-0.02em", lineHeight: 1.05 }}>{c.title}</h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)", margin: "0 0 24px" }}>{c.body}</p>
            <div style={{ flex: 1 }} />
            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener"
               className="nav-link" style={{
                 fontFamily: "var(--sans)", fontWeight: 800, fontSize: 13, letterSpacing: "0.08em",
                 textTransform: "uppercase", color: "var(--navy)", paddingTop: 16, borderTop: "1px solid var(--line)",
               }}>{c.cta}</a>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

// ---------- Get Involved (extra CTA strip) ----------
const GetInvolved = () => (
  <section id="getinvolved" style={{ background: "var(--civic-red)", color: "var(--bone)", padding: "64px 0" }}>
    <Container style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
      <div style={{ maxWidth: 720 }}>
        <Eyebrow color="rgba(245,240,230,0.8)">DEMOCRACY SHOWS UP</Eyebrow>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 40, lineHeight: 1, letterSpacing: "-0.025em", marginTop: 10 }}>
          Knock a door. Run for office. Bring a casserole. Every bit helps.
        </div>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <Btn href="https://forms.gle/example" external kind="sky">Get Involved →</Btn>
        <Btn href="#contact" kind="ghost-light">Contact Us</Btn>
      </div>
    </Container>
  </section>
);

// ---------- Footer ----------
const Footer = () => (
  <footer style={{ background: "var(--navy)", color: "var(--bone)", padding: "64px 0 32px" }}>
    <Container>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, alignItems: "flex-start" }}>
        <div>
          <LogoPrimary scale={0.65} theme="dark" />
          <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(245,240,230,0.7)", maxWidth: 420, marginTop: 22 }}>
            Carter County Democratic Party — serving Ardmore, Lone Grove, Healdton, Ringling, Springer, Wilson, and every kitchen table in between since 1907.
          </p>
        </div>
        <div>
          <Eyebrow color="var(--sky)">CONTACT</Eyebrow>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8, fontSize: 14, lineHeight: 1.55 }}>
            <a href="mailto:info@cartercountydems.org" className="nav-link" style={{ color: "rgba(245,240,230,0.85)" }}>info@cartercountydems.org</a>
            <a href="tel:+15805550155" className="nav-link" style={{ color: "rgba(245,240,230,0.85)" }}>(580) 555-0155</a>
            <a href="https://www.facebook.com/cartercountydemocrats" target="_blank" rel="noopener" className="nav-link" style={{ color: "rgba(245,240,230,0.85)" }}>Facebook Page</a>
            <a href="https://www.facebook.com/cartercountydemocrats" target="_blank" rel="noopener" className="nav-link" style={{ color: "rgba(245,240,230,0.85)" }}>Facebook Group</a>
          </div>
        </div>
        <div>
          <Eyebrow color="var(--sky)">QUICK LINKS</Eyebrow>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
            {[
              ["Find Your Precinct", "#precincts"],
              ["Monthly Meeting", "#meetings"],
              ["Register to Vote", "https://okvoterportal.okelections.gov/"],
              ["Next Election", "https://oklahoma.gov/elections/elections-results/next-election.html"],
              ["Get Involved", "#getinvolved"],
            ].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener" className="nav-link" style={{ color: "rgba(245,240,230,0.85)" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: 1, background: "rgba(245,240,230,0.15)", margin: "40px 0 24px" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "rgba(245,240,230,0.55)" }}>
        <div>PAID FOR BY THE CARTER COUNTY DEMOCRATIC PARTY. NOT AUTHORIZED BY ANY CANDIDATE OR CANDIDATE'S COMMITTEE.</div>
        <div>© 2026 · CARTERCOUNTYDEMS.ORG</div>
      </div>
    </Container>
  </footer>
);

// ---------- App ----------
const App = () => (
  <div>
    <Nav />
    <Hero />
    <Contact />
    <Precincts />
    <Meetings />
    <Civic />
    <GetInvolved />
    <Footer />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
