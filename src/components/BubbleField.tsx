import { useMemo } from 'react'
import { cn } from '@/lib/utils'

type Bubble = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
}

function makeBubbles(count: number): Bubble[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 3 + Math.random() * 9,
    duration: 9 + Math.random() * 12,
    delay: -Math.random() * 20,
    opacity: 0.12 + Math.random() * 0.3,
  }))
}

export function BubbleField({
  className,
  count = 26,
  bubbleClassName = 'bg-floe-mist',
}: {
  className?: string
  count?: number
  bubbleClassName?: string
}) {
  const bubbles = useMemo(() => makeBubbles(count), [count])

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {bubbles.map((b) => (
        <span
          key={b.id}
          className={cn('absolute bottom-0 rounded-full animate-rise', bubbleClassName)}
          style={
            {
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              '--o': b.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
