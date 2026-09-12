import { useEffect, useState, useSyncExternalStore } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Logo } from '@/assets/Logo'
import { heroProgress } from '@/lib/scrollProgress'
import { nav } from '@/lib/content'
import { useCart } from '@/lib/cart'
import { cn } from '@/lib/utils'

function navShadow(isLight: boolean): React.CSSProperties {
  return {
    textShadow: isLight ? '0 2px 16px rgba(0,0,0,0.35)' : '0 1px 10px rgba(255,255,255,0.5)',
  }
}

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const heroLight = useSyncExternalStore(heroProgress.subscribe, () => heroProgress.get() > 0.55)
  const isLight = isHome ? heroLight : true
  const [open, setOpen] = useState(false)
  const cart = useCart()

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const goToSection = (id: string) => {
    setOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 sm:px-10',
          !isHome && 'bg-ink/70 backdrop-blur-md',
        )}
      >
        <Link to="/" className="relative z-10" style={navShadow(isLight)}>
          <Logo light={isLight || open} className="text-2xl sm:text-3xl" />
        </Link>

        <nav className="hidden items-center gap-10 sm:flex">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              style={navShadow(isLight)}
              className={cn(
                'font-body text-sm uppercase tracking-[0.2em] transition-colors',
                isLight ? 'text-white hover:text-floe-ice' : 'text-ink hover:text-floe-red',
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button type="button" onClick={cart.open} aria-label="Open cart" className="relative z-10">
            <ShoppingBag className={cn('h-5 w-5', isLight ? 'text-white' : 'text-ink')} style={navShadow(isLight)} />
            {cart.itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-floe-red text-[10px] text-white">
                {cart.itemCount}
              </span>
            )}
          </button>

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
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink transition-opacity duration-300 sm:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {nav.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goToSection(item.id)}
            className="font-display text-4xl text-white"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  )
}
