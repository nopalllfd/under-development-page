function Sparkle({ x, y, s, delay }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        className="twinkle"
        style={{ animationDelay: delay }}
        d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z"
        fill="var(--accent)"
      />
    </g>
  )
}

function Bot() {
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <Sparkle x={38} y={64} s={1} delay="0s" />
      <Sparkle x={186} y={54} s={0.75} delay="0.9s" />
      <Sparkle x={172} y={122} s={0.55} delay="1.7s" />

      <g className="tilt">
        {/* antenna */}
        <line x1="110" y1="50" x2="110" y2="32" stroke="var(--primary)" strokeWidth="5" strokeLinecap="round" />
        <circle className="pulse" cx="110" cy="24" r="8" fill="var(--accent)" />

        {/* head */}
        <rect x="50" y="48" width="120" height="96" rx="32" fill="var(--primary)" />
        <rect x="66" y="66" width="88" height="58" rx="22" fill="var(--card)" />

        {/* face */}
        <circle className="blink" cx="92" cy="92" r="7" fill="var(--primary)" />
        <circle className="blink" cx="128" cy="92" r="7" fill="var(--primary)" />
        <path d="M96 108 q14 12 28 0" stroke="var(--primary)" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="76" cy="104" r="5" fill="var(--accent)" opacity="0.45" />
        <circle cx="144" cy="104" r="5" fill="var(--accent)" opacity="0.45" />
      </g>

      {/* body */}
      <rect x="78" y="150" width="64" height="30" rx="15" fill="var(--primary)" opacity="0.9" />

      {/* waving arm */}
      <g className="wave">
        <rect x="146" y="152" width="26" height="10" rx="5" fill="var(--primary)" />
        <circle cx="180" cy="152" r="9" fill="var(--accent)" />
      </g>

      {/* ground shadow */}
      <ellipse className="shadow-bob" cx="110" cy="200" rx="52" ry="8" fill="var(--primary)" />
    </svg>
  )
}

export default function Robot() {
  return (
    <div className="robot-stage">
      <div className="float">
        <Bot />
      </div>
    </div>
  )
}
