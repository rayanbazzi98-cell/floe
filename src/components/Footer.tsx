import { ArrowRight } from 'lucide-react'
import { Logo } from '@/assets/Logo'
import { FAQ } from '@/components/FAQ'
import { brand, contact } from '@/lib/content'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  return (
    <section id="contact" className="bg-paper px-6 py-32 sm:px-10">
      <FAQ />

      <div className="mx-auto mt-32 max-w-6xl border-t border-ink/10 pt-16">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <Logo className="h-9" />
            <p className="mt-4 font-body text-sm text-ink/50">{brand.footerTagline}</p>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-floe-deep">Reach us</p>
            <a href={`mailto:${contact.email}`} className="mt-3 flex items-center gap-2 font-body text-ink hover:text-floe-red">
              {contact.email}
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-2 font-body text-ink/60">{contact.phone}</p>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-body text-ink/60 hover:text-floe-red"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-floe-deep">Follow</p>
            <a
              href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 font-body text-ink hover:text-floe-red"
            >
              <InstagramIcon />
              {contact.instagram}
            </a>
          </div>
        </div>

        <p className="mt-16 font-body text-xs text-ink/35">
          &copy; {new Date().getFullYear()} FLOE. All rights reserved.
        </p>
      </div>
    </section>
  )
}
