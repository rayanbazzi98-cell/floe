import logoSrc from '@/assets/brand/logo.png'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  light?: boolean
}

export function Logo({ className, light = false }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="FLOE — Natural Mineral Water"
      className={cn('w-auto object-contain', light && 'brightness-0 invert', className)}
    />
  )
}
