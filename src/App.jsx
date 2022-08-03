import React from 'react'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
// import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experience />
        {/* <Services /> */}
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />

    </div>
  )
}

export default App