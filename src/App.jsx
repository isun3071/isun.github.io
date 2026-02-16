import './App.css'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import FocusAreas from './components/FocusAreas'
import EnterpriseLab from './components/EnterpriseLab'
import Research from './components/Research'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen font-sans overflow-x-hidden" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-secondary)' }}>
      <Hero />
      <StatsBar />
      <About />
      <FocusAreas />
      <EnterpriseLab />
      <Research />
      <Projects />
      <Footer />
    </main>
  )
}
