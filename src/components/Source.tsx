import { GlitchText } from '@/components/GlitchText'
import { ParallaxBottle } from '@/components/ParallaxBottle'
import { purityClaims } from '@/lib/content'

export function Source() {
  return (
    <section id="source" className="relative overflow-hidden bg-ink px-6 py-32 sm:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="font-body text-sm uppercase tracking-[0.35em] text-floe-mist">Origin</p>
          <GlitchText
            as="h2"
            text="Filtered by nothing but time."
            className="mt-4 font-display text-5xl leading-[0.95] text-white sm:text-6xl"
          />
          <p className="mt-6 max-w-lg font-body text-floe-ice/70">
            Long before it reaches a bottle, FLOE spends years moving through protected stone and rock beneath the
            mountains of Lebanon — no chemical treatment, no shortcuts, nothing added and nothing rushed.
          </p>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-xs">
          <div className="absolute inset-0 rounded-full bg-floe-glacier/10 blur-3xl" />
          <ParallaxBottle className="relative h-full w-full" />
        </div>
      </div>

      <div className="mx-auto mt-24 grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {purityClaims.map((claim) => (
          <div key={claim.title} className="bg-ink px-6 py-10">
            <h3 className="font-display text-2xl text-white">{claim.title}</h3>
            <p className="mt-3 font-body text-sm text-floe-ice/70">{claim.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
