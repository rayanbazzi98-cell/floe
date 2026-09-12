import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '@/lib/content'

export type CartLine = {
  productId: string
  name: string
  variant: string
  size: string
  price: number
  qty: number
}

type CartContextValue = {
  lines: CartLine[]
  addItem: (product: Product, qty?: number) => void
  removeItem: (productId: string) => void
  setQty: (productId: string, qty: number) => void
  clear: () => void
  itemCount: number
  subtotal: number
  isOpen: boolean
  open: () => void
  close: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'floe-cart-v1'

function readStoredLines(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => readStoredLines())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // localStorage unavailable (private mode, etc.) — cart just won't persist
    }
  }, [lines])

  const addItem = (product: Product, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === product.id)
      if (existing) {
        return prev.map((l) => (l.productId === product.id ? { ...l, qty: l.qty + qty } : l))
      }
      return [
        ...prev,
        { productId: product.id, name: product.name, variant: product.variant, size: product.size, price: product.price, qty },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (productId: string) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }

  const setQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeItem(productId)
      return
    }
    setLines((prev) => prev.map((l) => (l.productId === productId ? { ...l, qty } : l)))
  }

  const clear = () => setLines([])

  const itemCount = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines])
  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.qty * l.price, 0), [lines])

  const value: CartContextValue = {
    lines,
    addItem,
    removeItem,
    setQty,
    clear,
    itemCount,
    subtotal,
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
