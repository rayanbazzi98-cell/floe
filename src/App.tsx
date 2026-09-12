import { CursorGlow } from '@/components/CursorGlow'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Products } from '@/components/Products'
import { Quality } from '@/components/Quality'
import { Source } from '@/components/Source'

function App() {
  return (
    <div className="relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Source />
      <Products />
      <Quality />
      <Footer />
    </div>
  )
}

export default App
