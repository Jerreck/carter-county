// Carter County Democrats — mobile-first single-page site.
// Layout via classes in site.css; this file owns content + interactivity.

const { useState, useEffect } = React;

// ---------- Tiny inline icons (simple shapes only — no hand-drawn SVGs) ----------
const Icon = ({ kind, size = 18 }) => {
  // generic glyph circle with character/symbol — used inside cards
  const map = { mail: "@", phone: "☎", fb: "f", group: "★", cal: "▤", map: "◆" };
  return (
    <span style={{
      fontFamily: "var(--slab)", fontWeight: 700, fontSize: size, lineHeight: 1,
    }}>{map[kind] || "•"}</span>
  );
};

// ---------- Section header ----------
const SectionHead = ({ eyebrow, title, sub, dark }) => (
  <div className="sec-head">
    <div className={"label-mono " + (dark ? "label-mono--sky" : "label-mono--federal")}>{eyebrow}</div>
    <h2 className={"h2 " + (dark ? "h2--light" : "")}>{title}</h2>
    {sub && <p className={"lead " + (dark ? "lead--light" : "")}>{sub}</p>}
  </div>
);

// ---------- Nav with hamburger ----------
const Nav = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    ["Find Your Precinct", "#precincts"],
    ["Meetings", "#meetings"],
    ["Vote", "#vote"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="nav">
      <div className="nav__bar-top" />
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <OkMark size={28} body="#5DB2E8" accent="#C8102E" />
          <div className="nav__brand-text">
            <div className="nav__brand-title">Carter County Democrats</div>
            <div className="nav__brand-domain">CARTERCOUNTYDEMS.ORG</div>
          </div>
        </a>

        {/* Desktop */}
        <div className="nav__desktop">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="nav__desktop-link">{l}</a>
          ))}
          <a href="#getinvolved" className="btn btn--urgent">Get Involved →</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={"nav__hamburger" + (open ? " is-open" : "")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="nav__hamburger-icon">
            <span /><span /><span />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="nav__mobile-panel">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="nav__mobile-link" onClick={() => setOpen(false)}>
              <span style={{ color: "var(--bone)" }}>{l}</span>
              <span>→</span>
            </a>
          ))}
          <a href="#getinvolved" className="btn btn--urgent btn--block nav__mobile-cta" onClick={() => setOpen(false)}>
            Get Involved →
          </a>
        </div>
      )}
    </nav>
  );
};

// ---------- Hero ----------
const Hero = () => (
  <section id="top" className="hero">
    <div className="hero__pattern" />
    <div className="hero__inner">
      <div className="hero__content">
        <div className="label-mono label-mono--sky">CARTER COUNTY · OKLAHOMA</div>
        <h1 className="hero__h1">Building a Stronger <em>Carter County</em></h1>
        <p className="hero__lead">
          We're neighbors working together for better schools, higher wages, and a more effective government that represents everyone in Carter County, Oklahoma. Join us.
        </p>
        <div className="hero__ctas">
          <a href="sms:+15805550155" className="btn btn--sky">📱 Text HOWDY to 580-555-0155</a>
          <a href="#meetings" className="btn btn--ghost-light">📅 Add to Calendar</a>
        </div>
        <div className="hero__next-meeting">
          <div className="hero__next-meeting-row" style={{ flex: 1 }}>
            <div className="hero__next-meeting-icon">📅</div>
            <div className="hero__next-meeting-text">
              <strong>Next Meeting:</strong>{" "}Third Thursday of every month · 6:30 PM · Ardmore Public Library
            </div>
          </div>
          <a href="#meetings" className="hero__next-meeting-link">Details ↓</a>
        </div>
      </div>
      <div className="hero__badge">
        <LogoBadge scale={1.0} />
      </div>
    </div>
    <div className="hero__bottom-stripe" />
    <div className="hero__bottom-stripe-2" />
  </section>
);

// ---------- Contact ----------
const Contact = () => {
  const items = [
    { label: "Email",          val: "info@cartercountydems.org",   href: "mailto:info@cartercountydems.org", icon: "mail" },
    { label: "Phone",          val: "(580) 555-0155",              href: "tel:+15805550155",                 icon: "phone" },
    { label: "Facebook Page",  val: "Follow Us",                   href: "https://www.facebook.com/cartercountydemocrats", external: true, icon: "fb" },
    { label: "Facebook Group", val: "Join the Conversation",       href: "https://www.facebook.com/cartercountydemocrats", external: true, icon: "group" },
  ];
  return (
    <section id="contact" className="section section--paper">
      <div className="container">
        <SectionHead eyebrow="REACH OUT" title="Contact Us"
          sub="Have a question, want to get involved, or just want to say hello? Reach out — we'd love to hear from you." />
        <div className="contact-grid">
          {items.map(({ label, val, href, external, icon }) => (
            <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined} className="contact-card">
              <div className="contact-card__icon"><Icon kind={icon} size={20} /></div>
              <div>
                <div className="contact-card__label">{label}</div>
                <div className="contact-card__val">{val}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ---------- Precincts ----------
const Precincts = () => (
  <section id="precincts" className="section section--bone">
    <div className="container">
      <SectionHead eyebrow="ORGANIZE YOUR NECK OF THE WOODS" title="Find Your Precinct"
        sub="Carter County is divided into 21 voting precincts. Every precinct needs Democratic Precinct Officers — leaders who knock doors, turn out voters, and represent their community. Find yours and see how you can help." />

      <div className="precincts-grid">
        <div className="precinct-callout">
          <div className="precinct-callout__pattern" />
          <div className="label-mono label-mono--sky" style={{ position: "relative" }}>INTERACTIVE PRECINCT MAP</div>
          <div className="precinct-callout__title">
            Enter your address to instantly see which of Carter County's 21 voting precincts you live in — then sign up to become a Precinct Officer.
          </div>
          <div className="precinct-callout__steps">
            {[
              "Enter your Carter County address",
              "Your precinct is highlighted on the map",
              "Click to become a Precinct Officer candidate",
            ].map((t, i) => (
              <div key={i} className="precinct-step">
                <div className="precinct-step__num">{i + 1}</div>
                <div className="precinct-step__text">{t}</div>
              </div>
            ))}
          </div>
          <div className="precinct-callout__cta">
            <a href="#precinct-map" className="btn btn--sky">Open Precinct Map →</a>
          </div>
        </div>

        <div className="precinct-map" id="precinct-map">
          <div className="precinct-map__head">
            <div>
              <div className="label-mono">CARTER COUNTY · 21 PRECINCTS</div>
              <div className="precinct-map__title">Where do you vote?</div>
            </div>
            <OkMark size={32} body="#0B2545" accent="#C8102E" />
          </div>
          <div className="precinct-map__grid">
            {Array.from({ length: 21 }).map((_, i) => {
              const highlight = i === 9;
              return (
                <div key={i} className={"precinct-cell" + (highlight ? " precinct-cell--highlight" : "")}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              );
            })}
            <div className="precinct-cell precinct-cell--empty" />
            <div className="precinct-cell precinct-cell--empty" />
            <div className="precinct-cell precinct-cell--empty" />
          </div>
          <form className="precinct-form" onSubmit={e => e.preventDefault()}>
            <input placeholder="123 Main St, Ardmore, OK" />
            <button type="submit" className="btn btn--primary">Find</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Meetings ----------
const Meetings = () => (
  <section id="meetings" className="section section--paper">
    <div className="container">
      <SectionHead eyebrow="MONTHLY MEETINGS" title="Come to a Meeting"
        sub="Our regular monthly meetings are open to all Democrats and interested community members in Carter County. Come hear what we're working on, meet your neighbors, and have a voice in local Democratic Party decisions. No registration required — just show up." />

      <div className="meetings-grid">
        <div className="meeting-card">
          <div className="label-mono">REGULAR MEETING DETAILS</div>
          <h3 className="meeting-card__title">Third Thursday, every month.</h3>

          {[
            { k: "WHEN",      v: "Third Thursday of every month" },
            { k: "TIME",      v: "6:30 PM — 8:00 PM" },
            { k: "LOCATION",  v: "Ardmore Public Library\n320 E Street NW, Ardmore, OK 73401", map: true },
            { k: "QUESTIONS", v: "info@cartercountydems.org", mailto: true },
          ].map(({ k, v, map, mailto }) => (
            <div key={k} className="meeting-row">
              <div className="label-mono">{k}</div>
              <div className="meeting-row__value">
                {mailto
                  ? <a href={`mailto:${v}`} className="underline-link">{v}</a>
                  : v}
                {map && (
                  <div style={{ marginTop: 8 }}>
                    <a href="https://maps.google.com/?q=320+E+St+NW+Ardmore+OK+73401" target="_blank" rel="noopener" className="label-mono label-mono--federal">VIEW MAP ↗</a>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="meeting-card__ctas">
            <a href="#calendar" className="btn btn--primary">📅 Add to Calendar</a>
            <a href="sms:+15805550155" className="btn btn--ghost">Text "HOWDY"</a>
          </div>
        </div>

        <div className="meeting-agenda">
          <div className="meeting-agenda__pattern" />
          <div className="label-mono label-mono--sky" style={{ position: "relative" }}>WHAT TO EXPECT</div>
          <h3 className="meeting-card__title" style={{ color: "var(--bone)", position: "relative" }}>
            An hour and a half of neighbors getting things done.
          </h3>
          <div style={{ position: "relative" }}>
            {[
              ["6:30", "Coffee, cookies, and catching up"],
              ["6:45", "Chair's report + officer updates"],
              ["7:00", "Featured topic or guest speaker"],
              ["7:30", "Volunteer signups + new business"],
              ["8:00", "Adjourn — head home, or out for pie"],
            ].map(([t, d]) => (
              <div key={t} className="agenda-row">
                <div className="agenda-row__time">{t}</div>
                <div className="agenda-row__text">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------- Civic ----------
const Civic = () => (
  <section id="vote" className="section section--bone">
    <div className="container">
      <SectionHead eyebrow="CIVIC PARTICIPATION" title="Your Voice Matters"
        sub="Democracy works when everyone participates. Make sure you're registered, stay informed about upcoming elections, and encourage your neighbors to do the same." />

      <div className="civic-grid">
        {[
          {
            num: "01", title: "Register to Vote", accent: "#1A5BC6",
            body: "Oklahoma makes it easy to register or update your voter registration online. Check your registration status and sign up at the official Oklahoma Voter Registration Portal.",
            cta: "Oklahoma Voter Portal →", href: "https://okvoterportal.okelections.gov/",
          },
          {
            num: "02", title: "Upcoming Elections", accent: "#C8102E",
            body: "Stay informed about every election on your ballot — from local races to statewide and national contests. The Oklahoma State Election Board posts official dates and information.",
            cta: "View Next Election →", href: "https://oklahoma.gov/elections/elections-results/next-election.html",
          },
          {
            num: "03", title: "Find Your Precinct", accent: "#5DB2E8",
            body: "Enter your address on our interactive precinct map to see which voting precinct you live in — and find out how you can help lead Democrats in your neighborhood as a Precinct Officer.",
            cta: "Open Precinct Map →", href: "#precincts",
          },
        ].map(c => (
          <div key={c.num} className="civic-card">
            <div className="civic-card__accent" style={{ background: c.accent }} />
            <div className="civic-card__head">
              <div className="civic-card__num">{c.num} ·</div>
              <Star size={12} color={c.accent} />
            </div>
            <h3 className="civic-card__title">{c.title}</h3>
            <p className="civic-card__body">{c.body}</p>
            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="civic-card__cta">
              {c.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Get Involved CTA ----------
const GetInvolved = () => (
  <section id="getinvolved" className="section section--red" style={{ padding: "var(--pad-section) 0" }}>
    <div className="container cta-strip">
      <div className="cta-strip__copy">
        <div className="label-mono label-mono--light">DEMOCRACY SHOWS UP</div>
        <div className="cta-strip__title">
          Knock a door. Run for office. Bring a casserole. Every bit helps.
        </div>
      </div>
      <div className="cta-strip__btns">
        <a href="https://forms.gle/example" target="_blank" rel="noopener" className="btn btn--sky">Get Involved →</a>
        <a href="#contact" className="btn btn--ghost-light">Contact Us</a>
      </div>
    </div>
  </section>
);

// ---------- Footer ----------
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div>
          <LogoPrimary scale={0.65} theme="dark" />
          <p className="footer__about-text">
            Carter County Democratic Party — serving Ardmore, Lone Grove, Healdton, Ringling, Springer, Wilson, and every kitchen table in between since 1907.
          </p>
        </div>
        <div>
          <div className="label-mono footer__col-title">CONTACT</div>
          <div className="footer__col-list">
            <a href="mailto:info@cartercountydems.org">info@cartercountydems.org</a>
            <a href="tel:+15805550155">(580) 555-0155</a>
            <a href="https://www.facebook.com/cartercountydemocrats" target="_blank" rel="noopener">Facebook Page</a>
            <a href="https://www.facebook.com/cartercountydemocrats" target="_blank" rel="noopener">Facebook Group</a>
          </div>
        </div>
        <div>
          <div className="label-mono footer__col-title">QUICK LINKS</div>
          <div className="footer__col-list">
            {[
              ["Find Your Precinct", "#precincts"],
              ["Monthly Meeting", "#meetings"],
              ["Register to Vote", "https://okvoterportal.okelections.gov/"],
              ["Next Election", "https://oklahoma.gov/elections/elections-results/next-election.html"],
              ["Get Involved", "#getinvolved"],
            ].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener">{l}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__rule" />
      <div className="footer__legal">
        <div>PAID FOR BY THE CARTER COUNTY DEMOCRATIC PARTY. NOT AUTHORIZED BY ANY CANDIDATE OR CANDIDATE'S COMMITTEE.</div>
        <div>© 2026 · CARTERCOUNTYDEMS.ORG</div>
      </div>
    </div>
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
