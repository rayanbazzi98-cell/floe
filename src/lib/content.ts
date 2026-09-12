import glassSparkling033 from '@/assets/bottles/glass-sparkling-033.png'
import glassSparkling1L from '@/assets/bottles/glass-sparkling-1L.png'
import petStill033 from '@/assets/bottles/pet-still-033-lifestyle.jpg'
import petStill05L12Pack from '@/assets/bottles/pet-still-05L-12pack.png'
import petStill1L6Pack from '@/assets/bottles/pet-still-1L-6pack.png'

// Site copy & product data for FLOE.
//
// Product photos and sizes/pack counts below are real (from photos supplied
// directly), so sizeConfirmed is true for all five SKUs. Prices are still
// placeholders (priceConfirmed: false) pending the real price list.
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
  /** USD. PLACEHOLDER — no real price list was available yet; see priceConfirmed. */
  price: number
  sizeConfirmed: boolean
  priceConfirmed: boolean
  image: string
  /** true for the one lifestyle photo (has its own background); false for transparent cutouts. */
  imageHasBackground?: boolean
}

export const currency = 'USD'

// Prices are PLACEHOLDER (priceConfirmed: false) pending the real price
// list — everything else is read straight off the product photos supplied.
export const products: Product[] = [
  {
    id: 'pet-still-033',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · PET',
    size: '0.33 L',
    packSize: 'Single bottle',
    price: 1.5,
    sizeConfirmed: true,
    priceConfirmed: false,
    image: petStill033,
    imageHasBackground: true,
  },
  {
    id: 'pet-still-1l-6pack',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · PET',
    size: '1.0 L',
    packSize: '6-pack',
    price: 6,
    sizeConfirmed: true,
    priceConfirmed: false,
    image: petStill1L6Pack,
  },
  {
    id: 'pet-still-05l-12pack',
    name: 'FLOE Natural Mineral Water',
    variant: 'Still · PET',
    size: '0.5 L',
    packSize: '12-pack',
    price: 9,
    sizeConfirmed: true,
    priceConfirmed: false,
    image: petStill05L12Pack,
  },
  {
    id: 'glass-sparkling-033',
    name: 'FLOE Sparkling Mineral Water',
    variant: 'Sparkling · Glass',
    size: '0.33 L',
    packSize: 'Single bottle',
    price: 2.5,
    sizeConfirmed: true,
    priceConfirmed: false,
    image: glassSparkling033,
  },
  {
    id: 'glass-sparkling-1l',
    name: 'FLOE Sparkling Mineral Water',
    variant: 'Sparkling · Glass',
    size: '1.0 L',
    packSize: 'Single bottle',
    price: 4.5,
    sizeConfirmed: true,
    priceConfirmed: false,
    image: glassSparkling1L,
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
  instagram: '@floeworld',
}

export const nav = [
  { label: 'Source', id: 'source' },
  { label: 'Products', id: 'products' },
  { label: 'Quality', id: 'quality' },
  { label: 'Contact', id: 'contact' },
]
