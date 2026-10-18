export default function Robot() {
  return (
    <div className="robot-stage">
      <svg
        className="robot"
        viewBox="0 0 320 330"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Ilustrasi robot"
      >
        {/* sparkle kiri atas */}
        <path
          className="sparkle sparkle-1"
          d="M62 96 L66 106 L76 110 L66 114 L62 124 L58 114 L48 110 L58 106 Z"
          fill="#5ad2ff"
        />
        {/* silang kanan atas */}
        <path
          className="sparkle sparkle-2"
          d="M243 88 L258 103 M258 88 L243 103"
          stroke="#2ea8f2"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* antena */}
        <g className="antenna">
          <line
            x1="160"
            y1="145"
            x2="160"
            y2="66"
            stroke="#2f7cf6"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle cx="160" cy="55" r="14" fill="#5ad2ff" />
        </g>

        {/* kepala */}
        <g className="head">
          <rect
            x="75"
            y="70"
            width="170"
            height="150"
            rx="52"
            fill="#2f7cf6"
          />
          {/* wajah */}
          <rect
            x="99"
            y="98"
            width="122"
            height="94"
            rx="42"
            fill="#ffffff"
          />
          {/* mata */}
          <g className="eyes">
            <circle cx="136" cy="138" r="13" fill="#173a72" />
            <circle cx="184" cy="138" r="13" fill="#173a72" />
          </g>
          {/* pipi */}
          <circle cx="117" cy="158" r="9" fill="#5ad2ff" />
          <circle cx="203" cy="158" r="9" fill="#5ad2ff" />
          {/* senyum */}
          <path
            d="M138 162 Q160 184 182 162"
            fill="none"
            stroke="#173a72"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>

        {/* badan */}
        <rect
          x="112"
          y="232"
          width="96"
          height="58"
          rx="28"
          fill="#2f7cf6"
        />

        {/* tangan kanan */}
        <g className="arm">
          <line
            x1="205"
            y1="248"
            x2="248"
            y2="222"
            stroke="#2f7cf6"
            strokeWidth="13"
            strokeLinecap="round"
          />
          <circle cx="256" cy="216" r="15" fill="#5ad2ff" />
        </g>

      </svg>
    </div>
  )
}
