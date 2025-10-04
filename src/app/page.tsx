import React from 'react'
import Banner from '@/components/Banner'
import About from './About/page'
import Projects from './Projects/page'
import Contact from './Contact/page'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
