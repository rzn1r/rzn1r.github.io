import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AddonCards from './components/AddonCards'
import Contact from './components/Contact'
import KanyeQuote from './components/KanyeQuote'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Animation effect for elements
    const elements = document.querySelectorAll('body *:not(.headline):not(.headline *)')
    elements.forEach((el) => el.classList.add('animate-in'))
    
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('show')
      }, i * 30)
    })
  }, [])

  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <Hero />
        <hr style={{ marginTop: '20px' }} />
        <h2>My Addons:</h2>
        <AddonCards />
        <a href="https://www.curseforge.com/members/rezn1r/projects" style={{ textAlign: 'center' }}>
          <p>View All...</p>
        </a>
        <hr style={{ margin: '40px 0' }} />
        <Contact />
        <KanyeQuote />
        <Footer />
      </div>
    </>
  )
}

export default App
