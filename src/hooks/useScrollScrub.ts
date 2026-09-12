import { useEffect, useLayoutEffect, useRef, type RefObject } from 'react'
import { clamp } from '@/lib/utils'

const LERP_TAU = 8
const SNAP = 0.002

/**
 * Drives a rAF loop off a sticky scroll "track" element: as the track
 * scrolls through the viewport, `raw` goes 0 -> 1 and `smoothed` chases it
 * with exponential (tau-based) smoothing so the scrub never feels stepped.
 * `onFrame` is called every tick so callers can mutate DOM refs directly
 * (imperative style writes) instead of paying for a React re-render at 60fps.
 */
export function useScrollScrub(
  trackRef: RefObject<HTMLElement | null>,
  onFrame: (smoothed: number, raw: number) => void,
) {
  const smoothedRef = useRef(0)
  const onFrameRef = useRef(onFrame)
  useLayoutEffect(() => {
    onFrameRef.current = onFrame
  })

  useEffect(() => {
    let raf = 0
    let last = performance.now()

    const computeRaw = () => {
      const el = trackRef.current
      if (!el) return 0
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) return 0
      const scrolled = -rect.top
      return clamp(scrolled / total, 0, 1)
    }

    const loop = (t: number) => {
      const dt = clamp((t - last) / 1000, 0, 0.1)
      last = t
      const raw = computeRaw()
      const alpha = 1 - Math.exp(-LERP_TAU * dt)
      let smoothed = smoothedRef.current + (raw - smoothedRef.current) * alpha
      if (Math.abs(raw - smoothed) < SNAP) smoothed = raw
      smoothedRef.current = smoothed
      onFrameRef.current(smoothed, raw)
      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [trackRef])
}
