import { useEffect, useRef, useState, type ElementType } from 'react'
import { cn } from '@/lib/utils'

type GlitchTextProps = {
  text: string
  as?: ElementType
  className?: string
}

/**
 * Text that scrambles/RGB-splits briefly the first time it scrolls into
 * view, then settles into a clean, static reveal.
 */
export function GlitchText({ text, as: Tag = 'span', className }: GlitchTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [bursting, setBursting] = useState(false)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true)
          setBursting(true)
          const t = setTimeout(() => setBursting(false), 550)
          return () => clearTimeout(t)
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggered])

  return (
    <Tag className={cn('relative inline-block', className)}>
      <span ref={ref} className={cn('relative', triggered && 'animate-fadeUp')} style={!triggered ? { opacity: 0 } : undefined}>
        {text}
      </span>
      {bursting && (
        <>
          <span aria-hidden className="absolute inset-0 text-floe-red mix-blend-multiply animate-glitch1">
            {text}
          </span>
          <span aria-hidden className="absolute inset-0 text-floe-deep mix-blend-multiply animate-glitch2">
            {text}
          </span>
        </>
      )}
    </Tag>
  )
}
