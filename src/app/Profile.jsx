import Image from 'next/image'
import React from 'react'
import ProfileImg from './images/Profile.png'

function Profile() {
  return (
    <div className="mt-16 flex items-center">
      <div className="inline-block px-10 mr-8 md:mr-0 md:mb-4">
        <Image
          className="rounded-full size-64"
          src={ProfileImg}
          alt="Jake Rupisan"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-black font-bold text-5xl">
          JAKE <br /> RUPISAN
        </h1>
        <h2 className="text-black font-bold text-xl">
          TRAINING FOR UI & UX, FRONTEND
        </h2>
        <a href="./Documents/Jake P. Rupisan Resume.pdf">
          <button
            className="Button font-medium text-white px-4 py-2 rounded-xl mt-2"
            download
          >
            {" "}
            Download Resume{" "}
          </button>
        </a>
  </div>
</div>
  )
}

export default Profile