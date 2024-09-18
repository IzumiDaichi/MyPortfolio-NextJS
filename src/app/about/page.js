import React from 'react'
import { Profile } from '../../../components/Profile.js'


const image2="https://i.imgur.com/Z9l1OCM.jpe"
const image3="https://i.imgur.com/Q3uwOWU.jpe"
const alt1="test"
const alt2="test2"
const alt3="test3"

const image1 = {
  url:"https://i.imgur.com/KRbcQZI.jpeg",
  alt:"test"
}


function About() {
  return (
    <div>
      <List/>
        < Profile image={image1}/>
        < Profile image={image2} alt={alt2}/>
        < Profile image={image3} alt={alt3}/>
    </div>
  )
}

export default About