// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import SearchBar from './components/SearchBar'
// import Categories from './components/Categories'
// import ServicesList from './components/ServicesList'
// import HowItWorks from './components/HowItWorks'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <SearchBar />
//       <Categories />
//       <ServicesList />
//       <HowItWorks />
//       <Testimonials />
//       <Footer />
//     </div>
//   )
// }

// export default App












import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import ServicesList from './components/ServicesList'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState(new Set())

  const toggleCart = (id) => {
    setCart(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div>
      <Navbar cartCount={cart.size} />
      <Hero />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ServicesList
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        cart={cart}
        toggleCart={toggleCart}
      />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App