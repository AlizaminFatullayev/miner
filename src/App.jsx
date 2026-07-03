import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
    </div>
  )
}
