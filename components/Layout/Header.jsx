import Link from 'next/link';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Header = () => {
  return (
    <section className='bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330]'>
      <div className='container mx-auto  '>
        <div className='flex  justify-between py-2 text-black text-[8px] px-4 md:px-0 md:text-[13px]'>
          <div className='flex gap-2'>
            <div className='flex gap-1 items-center'>
              <FaPhoneAlt />
              <p>01609302239</p>
            </div>
            <div className='flex gap-1 items-center'>
              <MdOutlineMail />
              <p>sahedrohmanwit@gmailcom</p>
            </div>
          </div>
          <div className='flex gap-2'>
            
            <p><Link href="#">EN</Link></p>
            <p>|</p>
            <p><Link href='#'>বাংলা</Link></p>
          

          </div>
        </div>


      </div>
    </section>
  )
}

export default Header
