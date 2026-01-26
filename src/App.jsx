import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import FeaturedProject from './components/FeaturedProject'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        {/* 1. First Impression */}
        <Hero />

        {/* 2. Immediate Credibility */}
        <TrustedBy />

        {/* 3. Best Work First (Case Study) */}
        <FeaturedProject />

        {/* 4. Personal Connection */}
        <About />

        {/* 5. Professional Background */}
        <Experience />

        {/* 6. Technical Validation */}
        <Skills />

        {/* 7. More Work Samples */}
        <Projects />

        {/* 8. Social Proof */}
        <Testimonials />

        {/* 9. Call to Action */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
