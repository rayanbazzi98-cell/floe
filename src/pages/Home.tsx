import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { Quality } from '@/components/Quality'
import { Source } from '@/components/Source'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!scrollTo) return
    const el = document.getElementById(scrollTo)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Hero />
      <Source />
      <Products />
      <Quality />
      <Footer />
    </>
  )
}
