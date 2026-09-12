import { clamp } from '@/lib/utils'

function fade(p: number, start: number, end: number, from: number, to: number): number {
  if (p <= start) return from
  if (p >= end) return to
  const t = (p - start) / (end - start)
  return from + (to - from) * t
}

// s1: on screen from the start, fades out 0.20 -> 0.28
export function s1Opacity(p: number): number {
  return clamp(fade(p, 0.2, 0.28, 1, 0), 0, 1)
}

// s2: fades in 0.24 -> 0.32, holds ("window") to 0.55, fades out 0.55 -> 0.63
export function s2Opacity(p: number): number {
  if (p < 0.24) return 0
  if (p < 0.32) return fade(p, 0.24, 0.32, 0, 1)
  if (p <= 0.55) return 1
  return clamp(fade(p, 0.55, 0.63, 1, 0), 0, 1)
}

// s3: fades in 0.67 -> 0.75, then holds
export function s3Opacity(p: number): number {
  if (p < 0.67) return 0
  if (p < 0.75) return fade(p, 0.67, 0.75, 0, 1)
  return 1
}

export function activeSection(p: number): 's1' | 's2' | 's3' | null {
  if (s3Opacity(p) > 0.01 && p >= 0.67) return 's3'
  if (s2Opacity(p) > 0.01 && p >= 0.24) return 's2'
  if (s1Opacity(p) > 0.01) return 's1'
  return null
}

export function mountainTransform(p: number): string {
  const scale = 1 + p * 0.22
  const y = -p * 34
  return `scale(${scale}) translateY(${y}px)`
}

export function bottleStyle(p: number): { opacity: number; transform: string } {
  const opacity = clamp(fade(p, 0.52, 0.68, 0, 1), 0, 1)
  const y = fade(p, 0.52, 0.85, 46, 0)
  const scale = fade(p, 0.52, 0.85, 0.86, 1)
  return { opacity, transform: `translateY(${y}vh) scale(${scale})` }
}

export function scrollCueOpacity(p: number): number {
  return clamp(fade(p, 0, 0.06, 1, 0), 0, 1)
}
