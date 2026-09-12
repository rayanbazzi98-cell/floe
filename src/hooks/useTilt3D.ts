import { useEffect, useRef } from 'react'
import { clamp } from '@/lib/utils'

/**
 * Cursor-reactive 3D tilt: returns a ref for the element to tilt. Rotates
 * toward the cursor position (relative to viewport) with lerp smoothing,
 * for a "floating in 3D space" feel rather than a flat 2D image.
 */
export function useTilt3D(maxDeg = 14) {
  const ref = useRef<HTMLDivElement>(null)
  const target = useRef({ rx: 0, ry: 0 })
  const current = useRef({ rx: 0, ry: 0 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf = 0
    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      target.current.ry = clamp(nx * maxDeg, -maxDeg, maxDeg)
      target.current.rx = clamp(-ny * maxDeg * 0.6, -maxDeg * 0.6, maxDeg * 0.6)
    }
    const loop = () => {
      current.current.rx += (target.current.rx - current.current.rx) * 0.06
      current.current.ry += (target.current.ry - current.current.ry) * 0.06
      const el = ref.current
      if (el) {
        el.style.transform = `perspective(1000px) rotateX(${current.current.rx}deg) rotateY(${current.current.ry}deg)`
      }
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [maxDeg])

  return ref
}
