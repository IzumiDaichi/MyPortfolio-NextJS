import React from 'react'
import Banner from '../Banner'
import Profile from '../Profile'

function Home() {
  return (
    <div className="container h-dvh bg-white overflow-hidden rounded-lg shadow-lg">
      <div>
          <Banner />
          <Profile />
      </div>
    </div>
  )
}

export default Home