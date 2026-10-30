// Decorative shapes drawn from the eight-pointed star of the logo.

function octagramPoints(cx: number, cy: number, r: number, rotate = 0) {
  const inner = r * 0.7654 // where the edges of the two overlapping squares cross
  return Array.from({ length: 16 }, (_, i) => {
    const angle = ((i * 22.5 + rotate) * Math.PI) / 180
    const radius = i % 2 === 0 ? r : inner
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`
  }).join(' ')
}

// Two overlapping squares, the way the star is drawn in the logo.
function TwoSquares({ c, r, rotate = 0 }: { c: number; r: number; rotate?: number }) {
  const half = r / Math.SQRT2
  return (
    <g transform={`rotate(${rotate} ${c} ${c})`}>
      <rect x={c - half} y={c - half} width={half * 2} height={half * 2} />
      <rect x={c - half} y={c - half} width={half * 2} height={half * 2} transform={`rotate(45 ${c} ${c})`} />
    </g>
  )
}

export function Octagram({
  className,
  filled = false,
  strokeWidth = 1.6,
}: {
  className?: string
  filled?: boolean
  strokeWidth?: number
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {filled ? (
        <polygon points={octagramPoints(12, 12, 10)} fill="currentColor" />
      ) : (
        <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round">
          <TwoSquares c={12} r={9.5} />
        </g>
      )}
    </svg>
  )
}

export function Rosette({ className }: { className?: string }) {
  const dots = Array.from({ length: 16 }, (_, i) => {
    const a = ((i * 22.5 + 11.25) * Math.PI) / 180
    return { x: 200 + 172 * Math.cos(a), y: 200 + 172 * Math.sin(a) }
  })
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor">
        <circle cx={200} cy={200} r={198} strokeOpacity={0.35} />
        <circle cx={200} cy={200} r={188} strokeOpacity={0.3} strokeDasharray="1 7" strokeLinecap="round" strokeWidth={2} />
        <g strokeOpacity={0.45} strokeWidth={1.2}>
          <TwoSquares c={200} r={184} />
        </g>
        <polygon points={octagramPoints(200, 200, 150, 22.5)} strokeOpacity={0.3} />
        <circle cx={200} cy={200} r={118} strokeOpacity={0.35} />
      </g>
      <g fill="currentColor" fillOpacity={0.55}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x.toFixed(2)} cy={d.y.toFixed(2)} r={2.2} />
        ))}
      </g>
    </svg>
  )
}

export function StarDivider({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className ?? ''}`} aria-hidden="true">
      <span className="h-px w-12 bg-linear-to-r from-transparent to-current" />
      <Octagram className="size-4" filled />
      <span className="h-px w-12 bg-linear-to-l from-transparent to-current" />
    </div>
  )
}
