import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { products, type Product } from '@/lib/content'
import { useCart } from '@/lib/cart'
import { cn, formatPrice } from '@/lib/utils'

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem(product, qty)
    setAdded(true)
    setQty(1)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="group relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2">
      <div
        className={cn(
          'flex h-56 w-full items-center justify-center overflow-hidden',
          product.imageHasBackground && 'rounded-2xl',
        )}
      >
        <img
          src={product.image}
          alt={`${product.name} — ${product.variant}, ${product.size}${product.packSize ? `, ${product.packSize}` : ''}`}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-8 font-display text-2xl text-white">{product.name}</h3>
      <p className="mt-1 font-body text-xs uppercase tracking-[0.25em] text-floe-mist">{product.variant}</p>
      <div className="mt-4 font-body text-sm text-floe-ice/70">
        {product.size}
        {product.packSize ? ` · ${product.packSize}` : ''}
      </div>
      <p className="mt-4 font-display text-xl text-floe-red">{formatPrice(product.price)}</p>
      {(!product.sizeConfirmed || !product.priceConfirmed) && (
        <span className="mt-1 text-[10px] uppercase tracking-wide text-floe-ice/40">
          {!product.priceConfirmed && !product.sizeConfirmed
            ? 'Size & price pending confirmation'
            : !product.priceConfirmed
              ? 'Price pending confirmation'
              : 'Size pending confirmation'}
        </span>
      )}

      <div className="mt-6 flex items-center gap-3">
        <div className="flex items-center rounded-full border border-white/15">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="p-2 text-floe-ice/70 hover:text-white"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-6 text-center font-body text-sm text-white">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="p-2 text-floe-ice/70 hover:text-white"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="rounded-full bg-floe-red px-6 py-2 font-body text-sm uppercase tracking-[0.15em] text-white transition-colors hover:bg-floe-redDark"
        >
          {added ? 'Added ✓' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}

export function Products() {
  return (
    <section id="products" className="bg-ink px-6 py-32 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="font-body text-sm uppercase tracking-[0.35em] text-floe-mist">The range</p>
          <h2 className="mt-4 font-display text-5xl text-white sm:text-6xl">Same source. Every format.</h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
