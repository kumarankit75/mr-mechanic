import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import ServicesList from './components/ServicesList'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <ServicesList />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App