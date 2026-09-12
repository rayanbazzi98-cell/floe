import { cn } from '@/lib/utils'

type BottleProps = {
  className?: string
  style?: React.CSSProperties
  labelSize?: string
  labelCopy?: string
}

const BOTTLE_PATH =
  'M95,95 L145,95 L145,140 C145,155 150,158 158,168 C180,192 205,205 205,235 ' +
  'L205,470 C205,500 195,515 170,518 L70,518 C45,515 35,500 35,470 ' +
  'L35,235 C35,205 60,192 82,168 C90,158 95,155 95,140 Z'

/**
 * Illustrated bottle — not the supplied product photo (this harness has no
 * way to save pasted image bytes to disk), but built to the same label
 * copy: "NATURAL MINERAL WATER", "LOW IN SODIUM", the red "floe" wordmark.
 */
export function Bottle({ className, style, labelSize = '0.33 L', labelCopy = 'LOW IN SODIUM' }: BottleProps) {
  return (
    <svg
      viewBox="0 0 240 560"
      className={cn('drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]', className)}
      style={style}
      role="img"
      aria-label="FLOE natural mineral water bottle"
    >
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EAF7FB" stopOpacity="0.35" />
          <stop offset="45%" stopColor="#EAF7FB" stopOpacity="0.08" />
          <stop offset="55%" stopColor="#EAF7FB" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#EAF7FB" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8FCBE0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2E6E88" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3E8CB0" />
          <stop offset="55%" stopColor="#1B5A78" />
          <stop offset="100%" stopColor="#0F3D54" />
        </linearGradient>
        <clipPath id="bottleClip">
          <path d={BOTTLE_PATH} />
        </clipPath>
      </defs>

      {/* body */}
      <path d={BOTTLE_PATH} fill="url(#glass)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />

      <g clipPath="url(#bottleClip)">
        <rect x="0" y="340" width="240" height="220" fill="url(#water)" />
        <path d="M50,110 L75,110 L60,520 L38,520 Z" fill="white" opacity="0.14" />
        <path d="M150,110 L168,110 L178,520 L158,520 Z" fill="white" opacity="0.08" />
      </g>

      {/* neck ring */}
      <rect x="90" y="88" width="60" height="8" rx="2" fill="#0F3D54" opacity="0.6" />

      {/* cap */}
      <rect x="86" y="16" width="68" height="80" rx="10" fill="url(#cap)" />
      {[28, 40, 52, 64, 76].map((y) => (
        <rect key={y} x="90" y={y} width="60" height="3" fill="#0A2C3D" opacity="0.5" />
      ))}

      {/* label */}
      <g>
        <rect x="35" y="255" width="170" height="200" rx="10" fill="#FCFEFF" opacity="0.97" />
        <path
          d="M35,455 C90,430 150,470 205,440 L205,255 L35,255 Z"
          fill="#BFE3F0"
          opacity="0.5"
        />
        <text
          x="53"
          y="400"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="9"
          letterSpacing="2"
          fill="#1B5A78"
          transform="rotate(-90 53 400)"
        >
          NATURAL MINERAL WATER
        </text>
        <text
          x="128"
          y="360"
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontWeight="800"
          fontSize="56"
          fill="#E01B2E"
          transform="rotate(-90 128 360)"
        >
          floe
        </text>
        <text
          x="120"
          y="432"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="600"
          fontSize="10"
          letterSpacing="1"
          fill="#1B5A78"
        >
          {labelCopy} &middot; {labelSize}
        </text>
      </g>
    </svg>
  )
}
