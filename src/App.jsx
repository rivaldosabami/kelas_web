import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/footer'
import Hero from './components/Hero'
import Navbar from './components/navbar'
import Service from './components/Service'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Contact />
        <Footer />
    </div>
  )
}

export default App