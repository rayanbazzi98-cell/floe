import { useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { faq } from '@/lib/content'
import { cn } from '@/lib/utils'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 py-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-body text-base text-white sm:text-lg">{q}</span>
        <ChevronUp className={cn('h-4 w-4 shrink-0 text-floe-mist transition-transform duration-300', !open && 'rotate-180')} />
      </button>
      <div
        className="grid transition-all duration-300 ease-floe"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="mt-3 max-w-2xl font-body text-sm text-floe-ice/70">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="font-body text-sm uppercase tracking-[0.35em] text-floe-mist">Questions</p>
      <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl">Good to know.</h2>
      <div className="mt-10">
        {faq.map((item) => (
          <FAQItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  )
}
