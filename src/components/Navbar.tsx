import { useEffect, useState, useSyncExternalStore } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/assets/Logo'
import { heroProgress } from '@/lib/scrollProgress'
import { nav } from '@/lib/content'
import { cn } from '@/lib/utils'

function navShadow(isLight: boolean): React.CSSProperties {
  return {
    textShadow: isLight ? '0 2px 16px rgba(0,0,0,0.35)' : '0 1px 10px rgba(255,255,255,0.5)',
  }
}

export function Navbar() {
  const isLight = useSyncExternalStore(heroProgress.subscribe, () => heroProgress.get() > 0.55)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 sm:px-10">
        <a href="#home" className="relative z-10" style={navShadow(isLight)}>
          <Logo light={isLight || open} className="text-2xl sm:text-3xl" />
        </a>

        <nav className="hidden items-center gap-10 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={navShadow(isLight)}
              className={cn(
                'font-body text-sm uppercase tracking-[0.2em] transition-colors',
                isLight ? 'text-white hover:text-floe-ice' : 'text-ink hover:text-floe-red',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 sm:hidden"
        >
          {open ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className={cn('h-6 w-6', isLight ? 'text-white' : 'text-ink')} />
          )}
        </button>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink transition-opacity duration-300 sm:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="font-display text-4xl text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
