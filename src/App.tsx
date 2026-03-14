import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div className='bg-black'>
      <Navbar />
      <section id='home'>
        <Home />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  )
}

export default App
