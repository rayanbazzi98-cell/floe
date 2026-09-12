import { Bottle } from '@/assets/Bottle'
import { products, type Product } from '@/lib/content'

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2">
      <Bottle
        className="h-56 transition-transform duration-500 group-hover:scale-105"
        labelSize={product.size}
      />
      <h3 className="mt-8 font-display text-2xl text-white">{product.name}</h3>
      <p className="mt-1 font-body text-xs uppercase tracking-[0.25em] text-floe-mist">{product.variant}</p>
      <div className="mt-4 font-body text-sm text-floe-ice/70">
        {product.size}
        {product.packSize ? ` · ${product.packSize}` : ''}
      </div>
      <p className="mt-4 font-display text-xl text-floe-red">{product.priceLabel}</p>
      {!product.sizeConfirmed && (
        <span className="mt-3 text-[10px] uppercase tracking-wide text-floe-ice/40">Size pending confirmation</span>
      )}
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
