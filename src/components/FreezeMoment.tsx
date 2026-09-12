import { useState } from 'react'
import { cn } from '@/lib/utils'

function FrostOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 animate-freezeCrack">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
      <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 400 200" preserveAspectRatio="none">
        <g stroke="white" strokeWidth="1" fill="none">
          <path d="M200,100 L120,40 M200,100 L280,30 M200,100 L90,140 M200,100 L310,150 M200,100 L200,20 M200,100 L200,190 M200,100 L60,90 M200,100 L340,100" />
          <path d="M120,40 L100,10 M120,40 L140,15 M280,30 L300,5 M90,140 L60,160 M310,150 L340,175 M60,90 L20,80 M340,100 L380,95" />
        </g>
      </svg>
    </div>
  )
}

export function FreezeMoment() {
  const [frozen, setFrozen] = useState(false)
  const [shaking, setShaking] = useState(false)

  const trigger = () => {
    if (frozen) return
    setShaking(true)
    window.setTimeout(() => setShaking(false), 500)
    window.setTimeout(() => setFrozen(true), 150)
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-700 px-6 py-24 text-center sm:px-16',
        shaking && 'animate-shake',
      )}
    >
      {frozen && <FrostOverlay />}
      <div className="relative mx-auto max-w-2xl">
        {!frozen ? (
          <>
            <p className="font-body text-sm uppercase tracking-[0.35em] text-floe-mist">Quality, held still</p>
            <h3 className="mt-4 font-display text-4xl text-white sm:text-6xl">
              Everything slows down at the source.
            </h3>
            <button
              type="button"
              onClick={trigger}
              className="mt-10 rounded-full border border-white/20 px-8 py-3 font-body text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-floe-red hover:text-floe-red"
            >
              Hold the moment
            </button>
          </>
        ) : (
          <>
            <p className="font-body text-sm uppercase tracking-[0.35em] text-floe-mist">Frozen at the source</p>
            <h3 className="mt-4 font-display text-4xl text-white sm:text-6xl">
              At 0&deg;C, water doesn&apos;t disappear. It holds still.
            </h3>
            <p className="mx-auto mt-5 max-w-lg font-body text-floe-ice/80">
              That's the instant FLOE bottles — before anything has the chance to change it.
            </p>
            <button
              type="button"
              onClick={() => setFrozen(false)}
              className="mt-10 rounded-full border border-white/20 px-8 py-3 font-body text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-floe-glacier hover:text-floe-glacier"
            >
              Thaw
            </button>
          </>
        )}
      </div>
    </div>
  )
}
