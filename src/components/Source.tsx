import { BubbleField } from '@/components/BubbleField'
import { GlitchText } from '@/components/GlitchText'
import { ParallaxBottle } from '@/components/ParallaxBottle'
import { purityClaims } from '@/lib/content'

export function Source() {
  return (
    <section id="source" className="relative overflow-hidden bg-paper px-6 py-32 sm:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="font-body text-sm uppercase tracking-[0.35em] text-floe-deep">Origin</p>
          <GlitchText
            as="h2"
            text="Filtered by nothing but time."
            className="mt-4 font-display text-5xl leading-[0.95] text-ink sm:text-6xl"
          />
          <p className="mt-6 max-w-lg font-body text-ink/60">
            Long before it reaches a bottle, FLOE spends years moving through protected stone and rock beneath the
            mountains of Lebanon — no chemical treatment, no shortcuts, nothing added and nothing rushed.
          </p>
        </div>

        <div className="relative mx-auto h-[560px] w-full max-w-sm">
          <div className="absolute inset-0 rounded-full bg-floe-glacier/25 blur-3xl" />
          <BubbleField count={20} bubbleClassName="bg-floe-glacier/70" />
          <ParallaxBottle className="relative h-full w-full" />
        </div>
      </div>

      <div className="mx-auto mt-24 grid max-w-6xl gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
        {purityClaims.map((claim) => (
          <div key={claim.title} className="bg-paper px-6 py-10">
            <h3 className="font-display text-2xl text-ink">{claim.title}</h3>
            <p className="mt-3 font-body text-sm text-ink/60">{claim.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
