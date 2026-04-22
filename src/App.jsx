import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Categories from './components/Categories'
import ServicesList from './components/ServicesList'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <ServicesList />
    </div>
  )
}

export default App