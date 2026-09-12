import glassSparkling033 from '@/assets/bottles/glass-sparkling-033.png'
import glassSparkling1L from '@/assets/bottles/glass-sparkling-1L.png'
import glassStill033 from '@/assets/bottles/glass-still-033.png'
import glassStill1L from '@/assets/bottles/glass-still-1L.png'
import petStill05L12Pack from '@/assets/bottles/pet-still-05L-12pack.png'
import petStill1L6Pack from '@/assets/bottles/pet-still-1L-6pack.png'
import petStill033_12Pack from '@/assets/bottles/pet-still-033-12pack.png'

// Site copy & product data for FLOE.
//
// The product catalog (names/sizes/pack counts/prices) is read straight off
// the real floeworld.com shop page — all 7 SKUs, all CONFIRMED, all with a
// matching real product photo now.
// Everything else (hero copy, purity claims, FAQ, contact info) remains
// placeholder copy written in FLOE's voice — swap it for the real thing
// whenever you can get it to this session.

export const brand = {
  name: 'FLOE',
  tagline: 'Pure Water, Naturally Refined',
  footerTagline: 'pure . eternal . essential',
  origin: 'Lebanon',
}

export const hero = {
  s1: {
    kicker: 'From the mountains of Lebanon',
    title: 'Water, uninterrupted.',
  },
  s2: {
    kicker: 'Filtered by time itself',
    title: 'Decades in stone. A lifetime in every drop.',
    body: 'Drawn from deep, protected geological layers and carried through sand, stone, and ancient rock — slowly, for years — before it ever reaches a bottle.',
  },
  s3: {
    kicker: 'FLOE',
    title: 'Pure Water, Naturally Refined',
  },
}

export const purityClaims = [
  {
    title: 'Naturally Filtered',
    body: 'Filtered over years through deep stone and rock formations — no shortcuts, no chemical treatment.',
  },
  {
    title: 'Protected Source',
    body: 'Drawn from geological layers shielded from surface contamination since long before we arrived.',
  },
  {
    title: 'Low in Sodium',
    body: 'A light, clean mineral profile that stays out of the way of the water itself.',
  },
  {
    title: 'Bottled at Origin',
    body: 'Sealed close to the source to keep what nature spent decades perfecting intact.',
  },
]

export type Product = {
  id: string
  name: string
  variant: string
  size: string
  packSize?: string
  /** USD. Real, from floeworld.com. */
  price: number
  sizeConfirmed: boolean
  priceConfirmed: boolean
  /** Omitted where no matching product photo exists yet — renders a "Photo pending" placeholder. */
  image?: string
  /** true for a photo with its own background (not a transparent cutout). */
  imageHasBackground?: boolean
}

export const currency = 'USD'

// Real catalog (names/sizes/pack counts/prices) from floeworld.com's shop
// page, top to bottom.
export const products: Product[] = [
  {
    id: 'pet-still-1l-6pack',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · PET',
    size: '1.0 L',
    packSize: '6-pack',
    price: 3.95,
    sizeConfirmed: true,
    priceConfirmed: true,
    image: petStill1L6Pack,
  },
  {
    id: 'pet-still-330ml-12pack',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · PET',
    size: '330 ml',
    packSize: '12-pack',
    price: 3.95,
    sizeConfirmed: true,
    priceConfirmed: true,
    image: petStill033_12Pack,
  },
  {
    id: 'pet-still-05l-12pack',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · PET',
    size: '500 ml',
    packSize: '12-pack',
    price: 3.95,
    sizeConfirmed: true,
    priceConfirmed: true,
    image: petStill05L12Pack,
  },
  {
    id: 'glass-still-1l-12pack',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · Glass',
    size: '1.0 L',
    packSize: '12-pack',
    price: 16,
    sizeConfirmed: true,
    priceConfirmed: true,
    image: glassStill1L,
  },
  {
    id: 'glass-sparkling-1l-12pack',
    name: 'FLOE Sparkling Mineral Water',
    variant: 'Sparkling · Glass',
    size: '1.0 L',
    packSize: '12-pack',
    price: 16,
    sizeConfirmed: true,
    priceConfirmed: true,
    image: glassSparkling1L,
  },
  {
    id: 'glass-still-330ml-24pack',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · Glass',
    size: '330 ml',
    packSize: '24-pack',
    price: 16,
    sizeConfirmed: true,
    priceConfirmed: true,
    image: glassStill033,
  },
  {
    id: 'glass-sparkling-330ml-24pack',
    name: 'FLOE Sparkling Mineral Water',
    variant: 'Sparkling · Glass',
    size: '330 ml',
    packSize: '24-pack',
    price: 16,
    sizeConfirmed: true,
    priceConfirmed: true,
    image: glassSparkling033,
  },
]

export const faq = [
  {
    q: 'Where does FLOE water come from?',
    a: 'FLOE is drawn from a protected natural source in the mountains of Lebanon, filtered for years through deep stone and rock layers before it reaches the surface.',
  },
  {
    q: 'Is FLOE treated with chemicals?',
    a: "No. FLOE isn't chemically treated — its purity comes from the natural filtration of the source itself, not from processing after the fact.",
  },
  {
    q: 'What does "low in sodium" mean for FLOE?',
    a: 'It means FLOE carries a light, clean mineral profile — low enough in sodium to suit daily drinking and pair cleanly with food.',
  },
  {
    q: 'Where can I buy FLOE?',
    a: 'FLOE is available through select retailers and hospitality partners across Lebanon, including Spinneys and Carrefour.',
  },
]

// PLACEHOLDER — replace with FLOE's real contact details.
export const contact = {
  email: 'hello@floeworld.com',
  phone: '+961 1 000 000',
  /** Digits only, with country code, no + or spaces — used to build the wa.me link. */
  whatsapp: '9611000000',
  instagram: '@floeworld',
}

export const nav = [
  { label: 'Source', id: 'source' },
  { label: 'Products', id: 'products' },
  { label: 'Quality', id: 'quality' },
  { label: 'Contact', id: 'contact' },
]
