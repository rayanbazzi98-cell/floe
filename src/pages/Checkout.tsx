import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Check, Copy } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { contact } from '@/lib/content'
import { formatPrice } from '@/lib/utils'

type FormState = {
  name: string
  email: string
  phone: string
  address1: string
  address2: string
  city: string
  postalCode: string
  country: string
  notes: string
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  postalCode: '',
  country: '',
  notes: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function buildOrderText(form: FormState, lines: ReturnType<typeof useCart>['lines'], subtotal: number): string {
  const itemLines = lines
    .map((l) => `  • ${l.name} (${l.variant}, ${l.size}) × ${l.qty} — ${formatPrice(l.price * l.qty)}`)
    .join('\n')

  return [
    `New FLOE order from ${form.name}`,
    '',
    'ITEMS',
    itemLines,
    `Subtotal: ${formatPrice(subtotal)}`,
    '',
    'DELIVER TO',
    form.name,
    form.address1,
    form.address2,
    `${form.city}, ${form.postalCode}`,
    form.country,
    '',
    'CONTACT',
    form.email,
    form.phone,
    form.notes ? `\nNOTES\n${form.notes}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}

export function Checkout() {
  const cart = useCart()
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [confirmedOrderText, setConfirmedOrderText] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const setField = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Required'
    if (!form.email.trim()) next.email = 'Required'
    else if (!EMAIL_RE.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Required'
    if (!form.address1.trim()) next.address1 = 'Required'
    if (!form.city.trim()) next.city = 'Required'
    if (!form.postalCode.trim()) next.postalCode = 'Required'
    if (!form.country.trim()) next.country = 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const orderText = buildOrderText(form, cart.lines, cart.subtotal)
    const subject = `New FLOE order from ${form.name}`
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(orderText)}`

    window.location.href = mailto
    setConfirmedOrderText(orderText)
    cart.clear()
  }

  const copyOrder = async () => {
    if (!confirmedOrderText) return
    try {
      await navigator.clipboard.writeText(confirmedOrderText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — the text is already visible to copy manually
    }
  }

  if (confirmedOrderText) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-40 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-floe-red/15">
          <Check className="h-7 w-7 text-floe-red" />
        </div>
        <h1 className="mt-8 font-display text-4xl text-ink sm:text-5xl">Order details ready</h1>
        <p className="mx-auto mt-4 max-w-md font-body text-ink/60">
          Your email app should have opened with your order pre-filled to <strong className="text-ink">{contact.email}</strong> — hit
          send there to confirm. If it didn't open, copy the details below and send them yourself.
        </p>

        <div className="mt-8 rounded-2xl border border-ink/10 bg-paper-200 p-6 text-left">
          <pre className="whitespace-pre-wrap font-body text-sm text-ink/70">{confirmedOrderText}</pre>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={copyOrder}
            className="flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-body text-sm uppercase tracking-[0.15em] text-ink hover:border-floe-deep"
          >
            <Copy className="h-4 w-4" />
            {copied ? 'Copied ✓' : 'Copy order details'}
          </button>
          <Link
            to="/"
            className="rounded-full bg-floe-red px-6 py-3 font-body text-sm uppercase tracking-[0.15em] text-white hover:bg-floe-redDark"
          >
            Back to site
          </Link>
        </div>

        <p className="mt-10 text-xs text-ink/40">
          This site doesn't process payment automatically — FLOE will follow up by email to confirm delivery and payment.
        </p>
      </section>
    )
  }

  if (cart.lines.length === 0) {
    return (
      <section className="mx-auto max-w-lg px-6 py-40 text-center">
        <h1 className="font-display text-4xl text-ink">Your cart is empty</h1>
        <p className="mt-4 font-body text-ink/60">Add something from the range before checking out.</p>
        <Link
          to="/"
          state={{ scrollTo: 'products' }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-floe-red px-6 py-3 font-body text-sm uppercase tracking-[0.15em] text-white hover:bg-floe-redDark"
        >
          <ArrowLeft className="h-4 w-4" />
          Browse products
        </Link>
      </section>
    )
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white px-4 py-3 font-body text-ink placeholder:text-ink/30 focus:outline-none focus:ring-1 ${
      errors[field] ? 'border-floe-red focus:ring-floe-red' : 'border-ink/15 focus:ring-floe-glacier'
    }`

  return (
    <section className="mx-auto max-w-6xl px-6 py-32 sm:px-10">
      <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-ink/60 hover:text-ink">
        <ArrowLeft className="h-4 w-4" />
        Continue shopping
      </Link>

      <h1 className="mt-6 font-display text-5xl text-ink">Checkout</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-floe-deep">Full name</label>
              <input value={form.name} onChange={setField('name')} className={inputClass('name')} />
              {errors.name && <p className="mt-1 text-xs text-floe-red">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-floe-deep">Email</label>
              <input value={form.email} onChange={setField('email')} className={inputClass('email')} type="email" />
              {errors.email && <p className="mt-1 text-xs text-floe-red">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-floe-deep">Phone</label>
            <input value={form.phone} onChange={setField('phone')} className={inputClass('phone')} type="tel" />
            {errors.phone && <p className="mt-1 text-xs text-floe-red">{errors.phone}</p>}
          </div>

          <div>
            <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-floe-deep">Address</label>
            <input value={form.address1} onChange={setField('address1')} className={inputClass('address1')} placeholder="Street address" />
            {errors.address1 && <p className="mt-1 text-xs text-floe-red">{errors.address1}</p>}
          </div>

          <input
            value={form.address2}
            onChange={setField('address2')}
            className={inputClass('address2')}
            placeholder="Apartment, floor, building (optional)"
          />

          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-floe-deep">City</label>
              <input value={form.city} onChange={setField('city')} className={inputClass('city')} />
              {errors.city && <p className="mt-1 text-xs text-floe-red">{errors.city}</p>}
            </div>
            <div>
              <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-floe-deep">Postal code</label>
              <input value={form.postalCode} onChange={setField('postalCode')} className={inputClass('postalCode')} />
              {errors.postalCode && <p className="mt-1 text-xs text-floe-red">{errors.postalCode}</p>}
            </div>
            <div>
              <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-floe-deep">Country</label>
              <input value={form.country} onChange={setField('country')} className={inputClass('country')} />
              {errors.country && <p className="mt-1 text-xs text-floe-red">{errors.country}</p>}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block font-body text-xs uppercase tracking-widest text-floe-deep">Delivery notes (optional)</label>
            <textarea value={form.notes} onChange={setField('notes')} rows={3} className={inputClass('notes')} />
          </div>

          <button
            type="submit"
            className="mt-4 rounded-full bg-floe-red py-4 font-body text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-floe-redDark"
          >
            Place order
          </button>
          <p className="text-center text-xs text-ink/40">
            No payment is taken here — this sends your order to FLOE by email so the team can confirm delivery and payment with you
            directly.
          </p>
        </form>

        <aside className="h-fit rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl text-ink">Order summary</h2>
          <ul className="mt-5 flex flex-col gap-4">
            {cart.lines.map((line) => (
              <li key={line.productId} className="flex justify-between gap-3 text-sm">
                <span className="text-ink/70">
                  {line.name} <span className="text-ink/40">× {line.qty}</span>
                </span>
                <span className="whitespace-nowrap text-ink">{formatPrice(line.price * line.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between border-t border-ink/10 pt-4 font-body text-ink">
            <span>Subtotal</span>
            <span className="font-display text-lg">{formatPrice(cart.subtotal)}</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
