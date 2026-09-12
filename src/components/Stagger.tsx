import { Children, type ReactNode } from 'react'

/**
 * Staggers each direct child in with opacity 0->1, translateY 24px->0,
 * 0.8s cubic-bezier(0.16,1,0.3,1) — triggered once by `show` and held.
 */
export function Stagger({ show, children, stepMs = 120 }: { show: boolean; children: ReactNode; stepMs?: number }) {
  return (
    <>
      {Children.map(children, (child, i) => (
        <div
          className="transition-all duration-[800ms] ease-floe"
          style={{
            transitionDelay: `${i * stepMs}ms`,
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {child}
        </div>
      ))}
    </>
  )
}
