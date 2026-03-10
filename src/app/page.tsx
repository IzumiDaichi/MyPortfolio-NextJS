import React from 'react'
import Banner from '@/components/ui/Banner'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}
