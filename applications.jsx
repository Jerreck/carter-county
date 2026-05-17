// Real-world applications: yard sign, door hanger, business card, social posts,
// event flyer, donation card, email header, voter guide, Facebook cover.

// =============== YARD SIGN ===============
const YardSign = ({ w = 480, h = 360, candidate = "VOTE BLUE", subline = "CARTER COUNTY · NOV 3" }) => (
  <div style={{ width: w, height: h, background: "var(--bone)", display: "flex", flexDirection: "column", overflow: "hidden", border: "1px solid var(--line)" }}>
    {/* Top stripe */}
    <div style={{ height: 14, background: "#C8102E" }} />
    <div style={{ height: 6, background: "#0B2545" }} />
    {/* Body */}
    <div style={{ padding: "20px 28px 18px", display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.2em", color: "#0B2545" }}>
          CARTER COUNTY · OKLAHOMA
        </div>
        <OkMark size={36} body="#0B2545" accent="#C8102E" />
      </div>
      <div style={{
        fontFamily: "var(--slab)", fontWeight: 700, fontSize: 76, lineHeight: 0.88,
        letterSpacing: "-0.03em", color: "#0B2545", marginTop: 14,
      }}>
        {candidate}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
        <StarRow count={5} size={12} color="#1A5BC6" gap={6} />
        <div style={{ fontFamily: "var(--sans)", fontWeight: 800, fontSize: 14, letterSpacing: "0.08em", color: "#1A5BC6" }}>
          {subline}
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <OkDemsPlate scale={0.5} />
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--ink-3)", textAlign: "right", lineHeight: 1.6 }}>
          PAID FOR BY<br/>CARTER CO. DEMS
        </div>
      </div>
    </div>
  </div>
);

// =============== DOOR HANGER ===============
const DoorHanger = ({ w = 220, h = 460 }) => (
  <div style={{ width: w, height: h, background: "#0B2545", color: "#F5F0E6", position: "relative", overflow: "hidden" }}>
    {/* hole at top */}
    <div style={{ display: "flex", justifyContent: "center", paddingTop: 18 }}>
      <div style={{ width: 44, height: 44, border: "3px solid #5DB2E8", borderRadius: "50%" }} />
    </div>
    <div style={{ padding: "22px 18px 18px", display: "flex", flexDirection: "column", height: "calc(100% - 80px)" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.22em", color: "#5DB2E8", textAlign: "center" }}>
        KNOCK · TALK · VOTE
      </div>
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 32, lineHeight: 0.92, letterSpacing: "-0.02em", marginTop: 14, textAlign: "center" }}>
        Sorry we missed you!
      </div>
      <div style={{ height: 1, background: "rgba(245,240,230,0.2)", margin: "16px 0" }} />
      <div style={{ fontSize: 12, lineHeight: 1.55, opacity: 0.85 }}>
        We stopped by to talk about the upcoming election. Carter County Democrats are organizing to protect rural healthcare, public schools, and working families.
      </div>
      <div style={{ marginTop: 16, padding: "10px 12px", border: "1px solid #5DB2E8", display: "flex", flexDirection: "column", gap: 4 }}>
        <div className="label-mono" style={{ color: "#5DB2E8" }}>NEXT MEETING</div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 16 }}>Thu · 6:30 PM</div>
        <div style={{ fontSize: 11, opacity: 0.8 }}>Ardmore Public Library</div>
      </div>
      <div style={{ flex: 1 }} />
      <OkDemsPlate scale={0.5} />
      <div style={{ fontFamily: "var(--mono)", fontSize: 8, letterSpacing: "0.2em", marginTop: 10, opacity: 0.6 }}>
        CARTERCOUNTYDEMS.ORG
      </div>
    </div>
  </div>
);

// =============== BUSINESS CARD ===============
const BizCardFront = ({ w = 360, h = 200 }) => (
  <div style={{ width: w, height: h, background: "var(--paper)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
    <div style={{ height: 8, background: "#C8102E" }} />
    <div style={{ padding: "22px 24px 18px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flex: 1 }}>
      <div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 22, lineHeight: 1, color: "#0B2545" }}>Jane Holloway</div>
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", marginTop: 6, color: "var(--ink-2)" }}>
          PRECINCT CAPTAIN · WARD 4
        </div>
        <div style={{ height: 1, background: "var(--line)", margin: "14px 0" }} />
        <div style={{ fontSize: 11, lineHeight: 1.7, color: "var(--ink-2)" }}>
          (580) 555-0142<br/>
          jane@cartercountydems.org
        </div>
      </div>
      <OkMark size={48} body="#0B2545" accent="#C8102E" />
    </div>
    <div style={{ padding: "10px 24px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <OkDemsPlate scale={0.4} />
      <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--ink-3)" }}>EST. 1907</div>
    </div>
  </div>
);

const BizCardBack = ({ w = 360, h = 200 }) => (
  <div style={{ width: w, height: h, background: "#0B2545", color: "#F5F0E6", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 24, position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(93,178,232,0.06) 0 12px, transparent 12px 24px)" }} />
    <div style={{ position: "relative", zIndex: 1 }}>
      <StarRow count={7} size={9} color="#5DB2E8" gap={6} />
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 28, lineHeight: 1, letterSpacing: "-0.02em", marginTop: 18 }}>
        Democracy<br/>shows up.
      </div>
    </div>
    <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em" }}>CARTERCOUNTYDEMS.ORG</div>
      <div style={{ width: 36, height: 36, background: "#F5F0E6", border: "1px solid #5DB2E8" }} />
    </div>
  </div>
);

// =============== SOCIAL POSTS (1:1) ===============
const SocialPostQuote = ({ w = 320 }) => (
  <div style={{ width: w, height: w, background: "var(--bone)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <div style={{ padding: "22px 24px 0", flex: 1, display: "flex", flexDirection: "column" }}>
      <StarRow count={3} size={11} color="#C8102E" gap={8} />
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 28, lineHeight: 1.05, letterSpacing: "-0.015em", color: "#0B2545", marginTop: 18 }}>
        "Rural Oklahomans built this state. We deserve schools, hospitals, and a fair shot."
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--ink-2)", marginBottom: 14 }}>
        — REP. CANDIDATE NAME
      </div>
    </div>
    <div style={{ background: "#0B2545", padding: "12px 24px", color: "#F5F0E6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <OkDemsPlate scale={0.4} />
      <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em" }}>@CARTERCO.DEMS</div>
    </div>
  </div>
);

const SocialPostEvent = ({ w = 320 }) => (
  <div style={{ width: w, height: w, background: "#1A5BC6", color: "#F5F0E6", padding: 24, position: "relative", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <div className="label-mono" style={{ color: "#5DB2E8" }}>MONTHLY MEETING</div>
    <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 52, lineHeight: 0.9, letterSpacing: "-0.03em", marginTop: 12 }}>
      Thu<br/>Apr 18
    </div>
    <div style={{ height: 2, width: 60, background: "#5DB2E8", margin: "18px 0 12px" }} />
    <div style={{ fontSize: 14, lineHeight: 1.45, opacity: 0.92 }}>
      Ardmore Public Library<br/>
      <strong style={{ fontWeight: 700 }}>6:30 PM</strong> — All welcome
    </div>
    <div style={{ flex: 1 }} />
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <OkDemsPlate scale={0.4} plateColor="#0B2545" textColor="#F5F0E6" />
      <div style={{ width: 44, height: 44, border: "2px solid #5DB2E8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Star size={20} color="#5DB2E8" />
      </div>
    </div>
  </div>
);

const SocialPostStats = ({ w = 320 }) => (
  <div style={{ width: w, height: w, background: "#F5F0E6", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <div style={{ padding: "22px 24px 0" }}>
      <div className="label-mono">VOTER REGISTRATION DRIVE</div>
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 96, lineHeight: 0.9, letterSpacing: "-0.04em", color: "#0B2545", marginTop: 8 }}>
        412
      </div>
      <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 17, lineHeight: 1.2, color: "#0B2545", marginTop: 6 }}>
        new voters registered this month.
      </div>
    </div>
    <div style={{ flex: 1 }} />
    <div style={{ display: "flex", height: 28 }}>
      <div style={{ flex: 1, background: "#C8102E" }} />
      <div style={{ flex: 2, background: "#1A5BC6" }} />
      <div style={{ flex: 1, background: "#5DB2E8" }} />
      <div style={{ flex: 1, background: "#0B2545" }} />
    </div>
    <div style={{ background: "#0B2545", color: "#F5F0E6", padding: "10px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em" }}>JOIN US · CARTERCOUNTYDEMS.ORG</div>
      <OkMark size={20} body="#5DB2E8" accent="#C8102E" />
    </div>
  </div>
);

// =============== EVENT FLYER ===============
const EventFlyer = ({ w = 380, h = 540 }) => (
  <div style={{ width: w, height: h, background: "var(--paper)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <div style={{ background: "#0B2545", padding: "20px 24px", color: "#F5F0E6", position: "relative", overflow: "hidden" }}>
      <StarRow count={5} size={10} color="#5DB2E8" gap={8} />
      <div className="label-mono" style={{ marginTop: 10, color: "#5DB2E8" }}>YOU'RE INVITED</div>
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 38, lineHeight: 0.95, letterSpacing: "-0.025em", marginTop: 8 }}>
        Carter County<br/>BBQ &amp; Town Hall
      </div>
    </div>
    <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
      <Placeholder w="100%" h={140} label="EVENT PHOTO — candidates, crowd, venue" />
      <div style={{ display: "flex", gap: 14 }}>
        <div style={{ flex: 1 }}>
          <div className="label-mono">WHEN</div>
          <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 17, color: "#0B2545", marginTop: 4, lineHeight: 1.15 }}>Sat · Jun 22<br/>4:00 PM</div>
        </div>
        <div style={{ flex: 1 }}>
          <div className="label-mono">WHERE</div>
          <div style={{ fontFamily: "var(--slab)", fontWeight: 600, fontSize: 17, color: "#0B2545", marginTop: 4, lineHeight: 1.15 }}>Lake Murray<br/>Pavilion 3</div>
        </div>
      </div>
      <div style={{ height: 1, background: "var(--line)" }} />
      <div style={{ fontSize: 12, lineHeight: 1.55, color: "var(--ink-2)" }}>
        Brisket on the smoker, candidates on the mic, your neighbors at the table. Bring a side dish if you can — kids welcome.
      </div>
    </div>
    <div style={{ background: "#5DB2E8", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 14, color: "#0B2545" }}>RSVP · cartercountydems.org/bbq</div>
      <OkMark size={22} body="#0B2545" accent="#C8102E" />
    </div>
  </div>
);

// =============== DONATION CARD ===============
const DonationCard = ({ w = 360, h = 460 }) => {
  const [amt, setAmt] = React.useState(25);
  const opts = [10, 25, 50, 100];
  return (
    <div style={{ width: w, height: h, background: "var(--paper)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ padding: "24px 24px 18px", borderBottom: "1px solid var(--line)" }}>
        <div className="label-mono">CHIP IN · MONTHLY</div>
        <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 28, lineHeight: 1, letterSpacing: "-0.02em", color: "#0B2545", marginTop: 8 }}>
          Fund the fight for Carter County.
        </div>
      </div>
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {opts.map(v => (
            <button key={v} onClick={() => setAmt(v)} style={{
              padding: "14px 12px", border: amt === v ? "2px solid #0B2545" : "1px solid var(--line)",
              background: amt === v ? "#0B2545" : "var(--paper)",
              color: amt === v ? "#F5F0E6" : "#0B2545",
              fontFamily: "var(--slab)", fontWeight: 700, fontSize: 20, cursor: "pointer",
              letterSpacing: "-0.01em",
            }}>
              ${v}<span style={{ fontSize: 10, fontFamily: "var(--mono)", fontWeight: 400, marginLeft: 4, opacity: 0.7 }}>/MO</span>
            </button>
          ))}
        </div>
        <input placeholder="Other amount" style={{
          padding: "12px 14px", border: "1px solid var(--line)", background: "var(--bone)",
          fontFamily: "var(--sans)", fontSize: 14, color: "#0B2545", outline: "none",
        }} />
        <div style={{ flex: 1 }} />
        <button style={{
          padding: "14px 16px", background: "#C8102E", color: "#F5F0E6", border: 0,
          fontFamily: "var(--sans)", fontWeight: 800, fontSize: 14, letterSpacing: "0.08em",
          textTransform: "uppercase", cursor: "pointer",
        }}>
          DONATE ${amt} / MONTH →
        </button>
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.14em", color: "var(--ink-3)", lineHeight: 1.6 }}>
          PAID FOR BY CARTER COUNTY DEMOCRATIC PARTY.<br/>
          NOT AUTHORIZED BY ANY CANDIDATE.
        </div>
      </div>
    </div>
  );
};

// =============== EMAIL HEADER ===============
const EmailHeader = ({ w = 640 }) => (
  <div style={{ width: w, background: "var(--paper)", border: "1px solid var(--line)", overflow: "hidden" }}>
    <div style={{ height: 6, background: "#C8102E" }} />
    <div style={{ height: 4, background: "#1A5BC6" }} />
    <div style={{ padding: "22px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--paper)" }}>
      <LogoPrimary scale={0.55} />
      <div style={{ display: "flex", gap: 24 }}>
        {["EVENTS", "VOLUNTEER", "DONATE"].map(l => (
          <div key={l} className="label-mono" style={{ color: "#0B2545" }}>{l}</div>
        ))}
      </div>
    </div>
    <div style={{ background: "#0B2545", color: "#F5F0E6", padding: "26px 28px", position: "relative" }}>
      <div className="label-mono" style={{ color: "#5DB2E8" }}>THE WEEKLY BRIEFING · NO. 142</div>
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 32, lineHeight: 1, letterSpacing: "-0.02em", marginTop: 8 }}>
        Five things happening in Carter County this week
      </div>
      <div style={{ marginTop: 14, fontSize: 13, opacity: 0.8 }}>April 18, 2026 · 4 min read</div>
    </div>
  </div>
);

// =============== VOTER GUIDE ===============
const VoterGuide = ({ w = 380, h = 540 }) => (
  <div style={{ width: w, height: h, background: "var(--paper)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
    <div style={{ background: "#0B2545", color: "#F5F0E6", padding: "20px 22px" }}>
      <div className="label-mono" style={{ color: "#5DB2E8" }}>VOTER GUIDE · GENERAL ELECTION 2026</div>
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 36, lineHeight: 0.95, letterSpacing: "-0.025em", marginTop: 10 }}>
        Your ballot,<br/>explained.
      </div>
    </div>
    <div style={{ background: "#5DB2E8", color: "#0B2545", padding: "10px 22px", display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em" }}>
      <span>POLLS OPEN</span><span>TUE NOV 3 · 7AM–7PM</span>
    </div>
    <div style={{ padding: "16px 22px", display: "flex", flexDirection: "column", gap: 12, flex: 1, overflow: "hidden" }}>
      {[
        { num: "01", race: "U.S. SENATE", name: "Maria Chen", note: "Healthcare access, rural broadband" },
        { num: "02", race: "U.S. HOUSE · DIST 4", name: "Daniel Reyes", note: "Working families, public schools" },
        { num: "03", race: "STATE SENATE · DIST 14", name: "Aisha Whitman", note: "Teacher pay, Medicaid expansion" },
        { num: "04", race: "COUNTY COMMISSIONER", name: "Tom Bridger", note: "Roads, water, transparency" },
      ].map(r => (
        <div key={r.num} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: 10, borderBottom: "1px solid var(--line)" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", paddingTop: 2 }}>{r.num}</div>
          <div style={{ flex: 1 }}>
            <div className="label-mono" style={{ color: "#1A5BC6" }}>{r.race}</div>
            <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 18, color: "#0B2545", marginTop: 2 }}>{r.name}</div>
            <div style={{ fontSize: 11, color: "var(--ink-2)", marginTop: 2 }}>{r.note}</div>
          </div>
          <div style={{ width: 22, height: 22, border: "2px solid #0B2545", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontFamily: "var(--slab)", fontWeight: 700, color: "#0B2545", fontSize: 16, lineHeight: 1 }}>✓</div>
          </div>
        </div>
      ))}
    </div>
    <div style={{ background: "#C8102E", color: "#F5F0E6", padding: "12px 22px", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em", display: "flex", justifyContent: "space-between" }}>
      <span>CARTERCOUNTYDEMS.ORG/VOTE</span><span>VOTE BLUE ★</span>
    </div>
  </div>
);

// =============== FACEBOOK COVER ===============
const FbCover = ({ w = 820, h = 312 }) => (
  <div style={{ width: w, height: h, background: "#0B2545", color: "#F5F0E6", position: "relative", overflow: "hidden", display: "flex" }}>
    <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, rgba(93,178,232,0.05) 0 14px, transparent 14px 28px)" }} />
    <div style={{ position: "relative", padding: "40px 48px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <StarRow count={5} size={12} color="#5DB2E8" gap={10} />
      <div style={{ fontFamily: "var(--slab)", fontWeight: 700, fontSize: 56, lineHeight: 0.92, letterSpacing: "-0.03em", marginTop: 14 }}>
        We are Carter<br/>County Democrats.
      </div>
      <div style={{ fontFamily: "var(--sans)", fontWeight: 500, fontSize: 16, marginTop: 14, color: "#5DB2E8", letterSpacing: "0.04em" }}>
        Organizing for working families across southern Oklahoma.
      </div>
    </div>
    <div style={{ position: "relative", width: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <LogoBadge scale={0.95} bg="transparent" />
    </div>
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 8, background: "#C8102E" }} />
  </div>
);

Object.assign(window, { YardSign, DoorHanger, BizCardFront, BizCardBack, SocialPostQuote, SocialPostEvent, SocialPostStats, EventFlyer, DonationCard, EmailHeader, VoterGuide, FbCover });
