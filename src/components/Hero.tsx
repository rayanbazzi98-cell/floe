import { useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { Logo } from '@/assets/Logo'
import glassSparkling1L from '@/assets/bottles/glass-sparkling-1L.png'
import heroPhoto from '@/assets/bottles/pet-still-033-hero-sharp.jpg'
import { useScrollScrub } from '@/hooks/useScrollScrub'
import { heroProgress } from '@/lib/scrollProgress'
import {
  activeSection,
  bottleStyle,
  mountainTransform,
  s1Opacity,
  s2Opacity,
  s3Opacity,
  scrollCueOpacity,
} from '@/lib/heroCurves'
import { hero } from '@/lib/content'
import { Stagger } from '@/components/Stagger'
import { BubbleField } from '@/components/BubbleField'

export function Hero() {
  const trackRef = useRef<HTMLElement>(null)
  const mountainRef = useRef<HTMLDivElement>(null)
  const bottleRef = useRef<HTMLDivElement>(null)
  const s1Ref = useRef<HTMLDivElement>(null)
  const s2Ref = useRef<HTMLDivElement>(null)
  const s3Ref = useRef<HTMLDivElement>(null)
  const cueRef = useRef<HTMLDivElement>(null)

  const [active, setActive] = useState<'s1' | 's2' | 's3' | null>('s1')
  const activeRef = useRef(active)

  useScrollScrub(trackRef, (p) => {
    // Published as a 0/1 "navbar should use light (white) text" signal, not
    // raw progress — progress clamps at 1 once you scroll past the hero, so
    // deriving "light" from progress alone would stay true forever after
    // (invisible against the light sections below). Gate it on the hero
    // track actually still being near the top of the viewport too.
    const heroBottom = trackRef.current?.getBoundingClientRect().bottom ?? 0
    const navLight = p > 0.55 && heroBottom > 120
    heroProgress.set(navLight ? 1 : 0)

    if (mountainRef.current) mountainRef.current.style.transform = mountainTransform(p)

    if (bottleRef.current) {
      const b = bottleStyle(p)
      bottleRef.current.style.opacity = String(b.opacity)
      bottleRef.current.style.transform = b.transform
    }

    if (s1Ref.current) s1Ref.current.style.opacity = String(s1Opacity(p))
    if (s2Ref.current) s2Ref.current.style.opacity = String(s2Opacity(p))
    if (s3Ref.current) s3Ref.current.style.opacity = String(s3Opacity(p))
    if (cueRef.current) cueRef.current.style.opacity = String(scrollCueOpacity(p))

    const next = activeSection(p)
    if (next !== activeRef.current) {
      activeRef.current = next
      setActive(next)
    }
  })

  return (
    <section id="home" ref={trackRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <div ref={mountainRef} className="absolute inset-0 will-change-transform">
          <img
            src={heroPhoto}
            alt="FLOE bottle in the snow, mountains behind"
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 64%' }}
          />
        </div>

        <BubbleField className="z-10" />

        <div className="pointer-events-none absolute inset-0 z-[15] bg-gradient-to-b from-black/25 via-transparent to-ink/80" />

        <div
          ref={bottleRef}
          className="absolute inset-x-0 bottom-0 z-20 flex justify-center will-change-transform"
          style={{ opacity: 0 }}
        >
          <img
            src={glassSparkling1L}
            alt="FLOE sparkling mineral water bottle"
            className="h-[38vh] max-h-[360px] animate-floaty object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            style={{ '--r0': '-2deg', '--r1': '2deg' } as React.CSSProperties}
          />
        </div>

        <div className="relative z-30 h-full w-full [text-shadow:0_4px_30px_rgba(0,0,0,0.45)]">
          <div ref={s1Ref} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <Stagger show={active === 's1'}>
              <p className="font-body text-sm uppercase tracking-[0.35em] text-floe-mist">{hero.s1.kicker}</p>
              <h1 className="mt-4 font-display text-6xl leading-none text-white sm:text-8xl">{hero.s1.title}</h1>
            </Stagger>
          </div>

          <div ref={s2Ref} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" style={{ opacity: 0 }}>
            <Stagger show={active === 's2'}>
              <p className="font-body text-sm uppercase tracking-[0.35em] text-floe-mist">{hero.s2.kicker}</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-none text-white sm:text-7xl">{hero.s2.title}</h2>
              <p className="mx-auto mt-6 max-w-xl font-body text-base text-floe-ice/80 sm:text-lg">{hero.s2.body}</p>
            </Stagger>
          </div>

          <div ref={s3Ref} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" style={{ opacity: 0 }}>
            <Stagger show={active === 's3'}>
              <Logo className="mx-auto h-10 sm:h-12" />
              <h2 className="mt-4 font-display text-5xl leading-none text-white sm:text-7xl">{hero.s3.title}</h2>
            </Stagger>
          </div>
        </div>

        <div ref={cueRef} className="absolute inset-x-0 bottom-8 z-30 flex flex-col items-center gap-2 text-floe-ice/70">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
