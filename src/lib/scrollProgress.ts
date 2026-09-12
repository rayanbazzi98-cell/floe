// Minimal pub/sub store so the hero's per-frame scroll progress can drive
// the navbar's color flip without forcing a React re-render on every tick.
// Consumers should read it through useSyncExternalStore with a selector
// that collapses the value to something coarse (e.g. a boolean) so React
// only re-renders when that derived value actually changes.
type Listener = () => void

class ScrollProgressStore {
  private value = 0
  private listeners = new Set<Listener>()

  set(v: number) {
    this.value = v
    this.listeners.forEach((l) => l())
  }

  get = () => this.value

  subscribe = (listener: Listener) => {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }
}

export const heroProgress = new ScrollProgressStore()
