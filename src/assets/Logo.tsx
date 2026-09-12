import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  light?: boolean
}

/**
 * Recreated wordmark (no source logo file was extractable in this
 * environment) — bold geometric sans, lowercase, tight tracking, matching
 * the reference mark's weight and red-on-white treatment.
 */
export function Logo({ className, light = false }: LogoProps) {
  return (
    <span
      className={cn(
        'font-wordmark font-extrabold lowercase tracking-tight select-none',
        light ? 'text-white' : 'text-floe-red',
        className,
      )}
    >
      floe
    </span>
  )
}
