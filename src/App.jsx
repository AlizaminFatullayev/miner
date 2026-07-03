import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Testimonials />
      </main>
    </div>
  )
}
