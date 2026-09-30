import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumePrint from './components/ResumePrint'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificate />
        <Contact />
      </main>
      <Footer />
      <ResumePrint />
    </>
  )
}

export default App
