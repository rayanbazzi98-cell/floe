import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function CartDrawer() {
  const { lines, isOpen, close, setQty, removeItem, itemCount, subtotal } = useCart()

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[70] bg-ink/40 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={close}
        aria-hidden
      />

      <aside
        className={cn(
          'fixed right-0 top-0 z-[80] flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-floe',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-2xl text-ink">
            Your cart {itemCount > 0 && <span className="text-floe-deep">({itemCount})</span>}
          </h2>
          <button type="button" onClick={close} aria-label="Close cart">
            <X className="h-5 w-5 text-ink" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <p className="mt-10 text-center font-body text-ink/50">Your cart is empty.</p>
          ) : (
            <ul className="flex flex-col gap-6">
              {lines.map((line) => (
                <li key={line.productId} className="flex items-start justify-between gap-3 border-b border-ink/10 pb-6">
                  <div>
                    <p className="font-body text-ink">{line.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-floe-deep">
                      {line.variant} · {line.size}
                    </p>
                    <p className="mt-2 font-body text-sm text-ink/60">{formatPrice(line.price)} each</p>

                    <div className="mt-3 flex items-center rounded-full border border-ink/15 w-fit">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => setQty(line.productId, line.qty - 1)}
                        className="p-2 text-ink/60 hover:text-ink"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center font-body text-sm text-ink">{line.qty}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => setQty(line.productId, line.qty + 1)}
                        className="p-2 text-ink/60 hover:text-ink"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <p className="font-body text-ink">{formatPrice(line.price * line.qty)}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(line.productId)}
                      className="text-xs uppercase tracking-widest text-ink/40 hover:text-floe-red"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-6">
            <div className="flex items-center justify-between font-body text-ink">
              <span>Subtotal</span>
              <span className="font-display text-xl">{formatPrice(subtotal)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={close}
              className="mt-5 block w-full rounded-full bg-floe-red py-3 text-center font-body text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-floe-redDark"
            >
              Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
