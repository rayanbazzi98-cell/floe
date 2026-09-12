import { ArrowRight } from 'lucide-react'
import { Logo } from '@/assets/Logo'
import { FAQ } from '@/components/FAQ'
import { brand, contact } from '@/lib/content'

export function Footer() {
  return (
    <section id="contact" className="bg-ink px-6 py-32 sm:px-10">
      <FAQ />

      <div className="mx-auto mt-32 max-w-6xl border-t border-white/10 pt-16">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <Logo className="h-9" light />
            <p className="mt-4 font-body text-sm text-floe-ice/60">{brand.footerTagline}</p>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-floe-mist">Reach us</p>
            <a href={`mailto:${contact.email}`} className="mt-3 flex items-center gap-2 font-body text-white hover:text-floe-red">
              {contact.email}
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-2 font-body text-floe-ice/70">{contact.phone}</p>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-floe-mist">Follow</p>
            <a
              href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-body text-white hover:text-floe-red"
            >
              {contact.instagram}
            </a>
          </div>
        </div>

        <p className="mt-16 font-body text-xs text-floe-ice/40">
          &copy; {new Date().getFullYear()} FLOE. All rights reserved.
        </p>
      </div>
    </section>
  )
}
