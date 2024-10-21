import React from 'react'
import Image from 'next/image'
import Logo2 from "@/logo/Logo2.png";
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineX } from "react-icons/ai";
import Link from 'next/link'


function Footer() {
  return (
    <div id='footer' className="w-full bg-slate-900 h-fit py-4 px-4 text-white grid grid-cols-2">

  <div className='w-fit'>
<Link href='/'>
<Image
className='w-64 flex self-center'
 src={Logo2}>
 </Image>
</Link>
</div>

 <div>
<h1 className='footertext text-end font-semibold text-lg '>Get in touch</h1>
<p className='footertext text-end text-sm'>JakeRupisan2016@gmail.com</p>
<p className='footertext text-end text-md'>(+63) 920-812-5475</p>
<div className='footersocial flex-row flex justify-end mt-2'>
<Link href="https://www.facebook.com/IzumiDaichi02">
        <AiOutlineFacebook size={40} color="white" className="cursor-pointer" />
      </Link>
      <Link href="https://x.com/IzumiDaichi02">
        <AiOutlineX size={40} color="white" className="cursor-pointer" />
      </Link> 
      <Link href="https://github.com/IzumiDaichi">
        <AiOutlineGithub size={40} color="white" className="cursor-pointer" />
      </Link>
      </div>
  </div>

    </div>
  )
}

export default Footer