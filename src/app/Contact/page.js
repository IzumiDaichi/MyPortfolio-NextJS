import React from 'react'
import Image from 'next/image'
import ContactForm from '@/components/contactComponents/form'
import ContactAvatar from "/public/Images/ContactAvatar.png";

function page() {
  return (
    <div  id="contact"
      className="container h-dvh bg-[#253558] rounded-lg shadow-lg flex flex-col overflow-hidden">
        <h1 className='text-4xl text-white font-semibold my-4' >/Contact</h1>

        <div className='grid grid-cols-2 bg-[#253558]'>
          
            <ContactForm/>
      
            <Image
            id="contactimg"
            alt="ContactAvatar"
            className="floating flex self-center justify-self-center pr-3"
            src={ContactAvatar}>
          </Image>

          </div>
      </div>
  )
}

export default page