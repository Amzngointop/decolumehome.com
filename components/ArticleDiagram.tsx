interface Props {
  slug: string;
}

// ── rgb-smart-floor-lamps ──────────────────────────────────────────────────
function SmartLampDecisionTree() {
  const gold = "#C9A84C";
  const bg = "#1E1E1E";
  const border = "1px solid rgba(201,168,76,0.25)";

  const boxStyle: React.CSSProperties = {
    background: bg,
    border,
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 13,
    color: "#F5F0E8",
    textAlign: "center",
  };
  const qStyle: React.CSSProperties = {
    ...boxStyle,
    borderColor: gold,
    color: gold,
    fontWeight: 600,
  };
  const recStyle: React.CSSProperties = {
    ...boxStyle,
    background: "rgba(201,168,76,0.10)",
    borderColor: gold,
    color: "#F5F0E8",
  };
  const arrowCol: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    fontSize: 11,
    color: "#9A9A8A",
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mb-4">
        Which Smart Lamp Is Right for You?
      </p>
      {/* Row 1 */}
      <div style={qStyle} className="mb-2">
        Q1 — What is your primary use case?
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="mb-2">
        <div style={arrowCol}>
          <span>▼ Gaming / Music Sync</span>
        </div>
        <div style={arrowCol}>
          <span>▼ Daily Ambient + Color</span>
        </div>
      </div>
      {/* Row 2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="mb-2">
        <div style={qStyle}>Q2 — Smart home needed?</div>
        <div style={qStyle}>Q3 — Matching corners?</div>
      </div>
      {/* Row 3 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }}>
        <div style={arrowCol}><span>▼ Yes</span></div>
        <div style={arrowCol}><span>▼ No</span></div>
        <div style={arrowCol}><span>▼ Yes</span></div>
        <div style={arrowCol}><span>▼ No</span></div>
      </div>
      {/* Row 4 — results */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10 }} className="mt-2">
        <div style={recStyle}>
          <div style={{ color: gold, fontWeight: 700, marginBottom: 2 }}>→ Pick #1</div>
          Govee RGBIC Floor Lamp
        </div>
        <div style={recStyle}>
          <div style={{ color: gold, fontWeight: 700, marginBottom: 2 }}>→ Pick #5</div>
          SUNMORY Torchiere
        </div>
        <div style={recStyle}>
          <div style={{ color: gold, fontWeight: 700, marginBottom: 2 }}>→ Pick #6</div>
          OIYN 2-Pack
        </div>
        <div style={recStyle}>
          <div style={{ color: gold, fontWeight: 700, marginBottom: 2 }}>→ Pick #3</div>
          Ambimall Remote
        </div>
      </div>
    </div>
  );
}

// ── floor-lamps-living-room ────────────────────────────────────────────────
function FloorLampMatrix() {
  const gold = "#C9A84C";
  const cols = ["Ambient Fill", "Reading Light", "Storage", "Style Statement"];
  const rows = [
    { type: "Torchiere", cells: ["✓ Best", "◎ Okay", "—", "✓ Best"] },
    { type: "Shade Lamp", cells: ["◎ Okay", "✓ Best", "—", "✓ Best"] },
    { type: "Shelf Lamp", cells: ["◎ Okay", "◎ Okay", "✓ Best", "◎ Okay"] },
    { type: "Dimmable Lamp", cells: ["✓ Best", "✓ Best", "—", "◎ Okay"] },
  ];

  const cellColor = (val: string) => {
    if (val === "✓ Best") return gold;
    if (val === "◎ Okay") return "#9A9A8A";
    return "#4A4A4A";
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mb-4">
        Floor Lamp Type Selector — Match to Your Use Case
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px 12px", color: gold, fontWeight: 700, borderBottom: `1px solid rgba(201,168,76,0.2)` }}>
              Lamp Type
            </th>
            {cols.map((c) => (
              <th key={c} style={{ padding: "8px 12px", color: "#9A9A8A", fontWeight: 600, borderBottom: `1px solid rgba(201,168,76,0.2)`, textAlign: "center", fontSize: 12 }}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.type} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
              <td style={{ padding: "10px 12px", color: "#F5F0E8", fontWeight: 600, borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                {row.type}
              </td>
              {row.cells.map((cell, j) => (
                <td key={j} style={{ padding: "10px 12px", textAlign: "center", fontWeight: 600, color: cellColor(cell), borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: 11, color: "#4A4A4A", marginTop: 8 }}>
        ✓ Best = ideal for this use case &nbsp;|&nbsp; ◎ Okay = functional &nbsp;|&nbsp; — = not the right tool
      </p>
    </div>
  );
}

// ── bedside-table-lamps ────────────────────────────────────────────────────
function BedsidePriorityChecker() {
  const gold = "#C9A84C";
  const cols = [
    {
      label: "Charging First",
      icon: "⚡",
      desc: "Nightstand with no wall charger — USB-C built-in is the priority.",
      picks: ["Fenmzee Bedside Touch Lamp (USB-C + AC)", "Small Table Lamp (USB-C + Pull Chain)"],
    },
    {
      label: "Sleep First",
      icon: "🌙",
      desc: "Wind-down routine matters — warm 2700K and soft dimming above all else.",
      picks: ["aooshine Small Minimalist Lamp", "Fenmzee Wood Base Touch Lamp"],
    },
    {
      label: "Style First",
      icon: "✦",
      desc: "The lamp is visible from the room — materials and form matter as much as function.",
      picks: ["Fenmzee Wood Base Touch Lamp", "Kakanuo Cordless 2-Pack"],
    },
  ];

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mb-4">
        Bedside Lamp Priority Checker — What Matters Most to You?
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {cols.map((col) => (
          <div
            key={col.label}
            style={{
              background: "#1E1E1E",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: 10,
              padding: "18px 16px",
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 8 }}>{col.icon}</div>
            <div style={{ color: gold, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>
              {col.label}
            </div>
            <p style={{ fontSize: 12, color: "#9A9A8A", lineHeight: 1.5, marginBottom: 12 }}>
              {col.desc}
            </p>
            <div style={{ fontSize: 11, color: "#C9A84C", fontWeight: 600, marginBottom: 4 }}>
              RECOMMENDED
            </div>
            {col.picks.map((p) => (
              <div
                key={p}
                style={{
                  fontSize: 12,
                  color: "#F5F0E8",
                  padding: "4px 0",
                  borderBottom: "1px solid rgba(201,168,76,0.08)",
                }}
              >
                → {p}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── candle-warmer-lamps ────────────────────────────────────────────────────
function CandleWarmerPyramid() {
  const gold = "#C9A84C";
  const tiers = [
    {
      label: "Must Have",
      color: gold,
      textColor: "#0F0F0F",
      features: ["Auto-Off Timer", "Dimmable Bulb"],
      width: "45%",
    },
    {
      label: "Nice to Have",
      color: "rgba(201,168,76,0.35)",
      textColor: "#F5F0E8",
      features: ["Adjustable Height Arm", "Touch Control"],
      width: "70%",
    },
    {
      label: "Bonus Features",
      color: "rgba(201,168,76,0.12)",
      textColor: "#9A9A8A",
      features: ["Cycle Timer", "Replacement Bulbs Included", "Gift Packaging"],
      width: "100%",
    },
  ];

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mb-4">
        Candle Warmer Feature Comparison — What to Prioritize
      </p>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        {tiers.map((tier) => (
          <div
            key={tier.label}
            style={{
              width: tier.width,
              background: tier.color,
              borderRadius: 8,
              padding: "14px 20px",
              textAlign: "center",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 13, color: tier.textColor, marginBottom: 6 }}>
              {tier.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6 }}>
              {tier.features.map((f) => (
                <span
                  key={f}
                  style={{
                    background: "rgba(0,0,0,0.2)",
                    borderRadius: 100,
                    padding: "3px 10px",
                    fontSize: 11,
                    color: tier.textColor,
                    fontWeight: 600,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 11, color: "#4A4A4A", marginTop: 10, textAlign: "center" }}>
        Pyramid reads top (highest priority) to bottom — every recommended pick covers at least the Must Have tier.
      </p>
    </div>
  );
}

// ── night-lights-for-home ──────────────────────────────────────────────────
function NightLightPlacementGuide() {
  const gold = "#C9A84C";
  const rooms = [
    {
      name: "Hallway",
      icon: "🚪",
      lumens: "10–15 lumens",
      sensor: "Dusk-to-dawn auto",
      cct: "Warm white 2700K",
      note: "Cover the full path from bedroom to bathroom as priority.",
    },
    {
      name: "Bathroom",
      icon: "🚿",
      lumens: "5–10 lumens",
      sensor: "Dusk-to-dawn auto",
      cct: "Warm white 2700K",
      note: "Avoid harsh output in a small reflective space.",
    },
    {
      name: "Kids Room",
      icon: "🌙",
      lumens: "3–5 lumens",
      sensor: "Fixed on / low output",
      cct: "Warm white or red-spectrum",
      note: "Dim enough for sleep, not so dark that it causes distress.",
    },
    {
      name: "Stairwell",
      icon: "🪜",
      lumens: "15–25 lumens",
      sensor: "Dusk-to-dawn or motion",
      cct: "Warm white 2700K–3000K",
      note: "Safety priority — each step must be clearly visible.",
    },
  ];

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mb-4">
        Night Light Placement Guide — Recommended Setup by Room
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
        {rooms.map((room) => (
          <div
            key={room.name}
            style={{
              background: "#1E1E1E",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: 10,
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 20 }}>{room.icon}</span>
              <span style={{ color: gold, fontWeight: 700, fontSize: 14 }}>{room.name}</span>
            </div>
            {[
              { label: "Output", value: room.lumens },
              { label: "Control", value: room.sensor },
              { label: "Color Temp", value: room.cct },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  padding: "4px 0",
                  borderBottom: "1px solid rgba(201,168,76,0.07)",
                }}
              >
                <span style={{ color: "#9A9A8A" }}>{row.label}</span>
                <span style={{ color: "#F5F0E8", fontWeight: 600 }}>{row.value}</span>
              </div>
            ))}
            <p style={{ fontSize: 11, color: "#9A9A8A", marginTop: 8, lineHeight: 1.5 }}>
              {room.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── galaxy-aurora-projectors ───────────────────────────────────────────────
function ProjectorModeComparison() {
  const gold = "#C9A84C";
  const modes = [
    {
      effect: "Aurora / Northern Lights",
      bestFor: "Wind-down, sleep prep",
      roomSize: "Medium–Large",
      atmosphere: 5,
    },
    {
      effect: "Galaxy / Nebula",
      bestFor: "Gaming rooms, accent",
      roomSize: "Any",
      atmosphere: 4,
    },
    {
      effect: "Star Field",
      bestFor: "Meditation, quiet focus",
      roomSize: "Any",
      atmosphere: 3,
    },
    {
      effect: "Ocean Waves",
      bestFor: "Relaxation, ambient",
      roomSize: "Medium",
      atmosphere: 4,
    },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A84C] mb-4">
        Projector Effect Mode Comparison
      </p>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            {["Effect Type", "Best For", "Room Size", "Atmosphere"].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  color: gold,
                  fontWeight: 700,
                  borderBottom: "1px solid rgba(201,168,76,0.2)",
                  fontSize: 12,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modes.map((m, i) => (
            <tr key={m.effect} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
              <td style={{ padding: "10px 12px", color: "#F5F0E8", fontWeight: 600, borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                {m.effect}
              </td>
              <td style={{ padding: "10px 12px", color: "#9A9A8A", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                {m.bestFor}
              </td>
              <td style={{ padding: "10px 12px", color: "#9A9A8A", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                {m.roomSize}
              </td>
              <td style={{ padding: "10px 12px", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                <span style={{ color: gold, letterSpacing: 2 }}>
                  {"★".repeat(m.atmosphere)}{"☆".repeat(5 - m.atmosphere)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────
export default function ArticleDiagram({ slug }: Props) {
  const wrapper: React.CSSProperties = {
    background: "#161616",
    border: "1px solid rgba(201,168,76,0.18)",
    borderRadius: 12,
    padding: "24px",
    marginBottom: 8,
  };

  const diagram = (() => {
    switch (slug) {
      case "rgb-smart-floor-lamps":
        return <SmartLampDecisionTree />;
      case "floor-lamps-living-room":
        return <FloorLampMatrix />;
      case "bedside-table-lamps":
        return <BedsidePriorityChecker />;
      case "candle-warmer-lamps":
        return <CandleWarmerPyramid />;
      case "night-lights-for-home":
        return <NightLightPlacementGuide />;
      case "galaxy-aurora-projectors":
        return <ProjectorModeComparison />;
      default:
        return null;
    }
  })();

  if (!diagram) return null;

  return <div style={wrapper}>{diagram}</div>;
}
