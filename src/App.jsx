import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
