import React from 'react';
import ContactForm from '@/components/contactComponents/form';
import Image from 'next/image';
import ContactAvatar from "@/Images/ContactAvatar.png";

function page() {
  return (
    <div
      id="contact"
      className="container h-dvh bg-[#253558] rounded-lg shadow-lg flex flex-col overflow-hidden"
    >
      <h1 className="text-4xl text-white font-semibold my-4">/Contact</h1>

      <div id="cardform" className="grid grid-cols-2 bg-[#253558]">
        <ContactForm />

        <Image
          id="contactimg"
          alt="Contact Avatar"
          className="floating flex self-center justify-self-center pr-3"
          src={ContactAvatar}
          width={400} // Adjust width and height accordingly
          height={400} // Adjust width and height accordingly
        />
      </div>
    </div>
  );
}

export default page;
