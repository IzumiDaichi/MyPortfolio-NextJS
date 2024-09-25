import React from 'react'
import Image from 'next/image'
import Html from '../../../public/icons/Html 5.png'
import CSS from '../../../public/icons/CSS.png'
import JS from '../../../public/icons/JavaScript.png'
import Tailwind from '../../../public/icons/Tailwind.png'


export default function MyWorkshop() {
  return (
    <div>
      <h1 className='font-bold text-3xl pb-4'> My Tools </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center justify-center">
          <Image src={Html}
            width="48"
            height="48"
            alt="Icon 1"
            className="mb-2 mx-3"
          />
          <p>HTML</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center justify-center">
          <Image src={CSS}
            width="48"
            height="48"
            alt="Icon 2"
            className="mb-2"
          />
          <p>CSS</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center justify-center">
          <Image src={JS} width="48" height="48" alt="Icon 3" className="mb-2" />
          <p>JavaScript</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-white grid grid-cols-2 items-center justify-center">
          <Image src={Tailwind} width="48" height="48" alt="Icon 4" className="mb-2" />
          <p>Tailwind</p>
        </div>
      </div>
    </div>
  )
}
