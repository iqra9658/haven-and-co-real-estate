import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import { PropertyProvider } from './context/PropertyContext'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import Services from './pages/Services'

function App() {
  return (
    <PropertyProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-[#222222]">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </PropertyProvider>
  )
}

export default App
