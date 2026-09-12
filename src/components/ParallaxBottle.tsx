import { useEffect, useRef } from 'react'
import glassSparkling033 from '@/assets/bottles/glass-sparkling-033.png'
import { clamp, cn } from '@/lib/utils'

/**
 * Floating, rotating bottle that parallaxes against page scroll and tilts
 * toward the cursor — the "unhinged" decorative bottle outside the hero.
 */
export function ParallaxBottle({ className }: { className?: string }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const target = useRef({ ty: 0, rot: 0 })
  const current = useRef({ ty: 0, rot: 0 })

  useEffect(() => {
    let raf = 0

    const onScroll = () => {
      const el = outerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      target.current.ty = clamp((viewportCenter - center) * 0.15, -90, 90)
    }

    const onPointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      target.current.rot = clamp(nx * 9, -9, 9)
    }

    const loop = () => {
      current.current.ty += (target.current.ty - current.current.ty) * 0.08
      current.current.rot += (target.current.rot - current.current.rot) * 0.08
      const el = outerRef.current
      if (el) {
        el.style.transform = `translateY(${current.current.ty}px) rotate(${current.current.rot}deg)`
      }
      raf = requestAnimationFrame(loop)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={outerRef} className={cn('will-change-transform', className)}>
      <img src={glassSparkling033} alt="" className="h-full w-full animate-floaty object-contain" />
    </div>
  )
}
