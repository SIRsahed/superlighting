'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import navLogo from "@/public/logo.png";


const Navbar = () => {
  const [menubar, setMenuBar] = useState(false)
  const [search, setSearch] = useState(false)


  const MenuHandel = () => {
    setMenuBar(!menubar)
  }

  return (
    <nav className='bg-white'>
      <div className='container mx-auto px-5  md:px-0'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center gap-5 lg:gap-10 overflow-hidden'>
            <div className='md:w-1/9 w-2/3'>
              <Link href="/"><Image src={navLogo} alt='Nav Logo Image' /></Link>
            </div>
            <div className={`md:static md:bg-white  md:text-black ${menubar ? 'absolute left-0 top-0 bg-black text-white w-full h-full duration-300 ease-in-out z-50' : 'duration-300 ease-in-out h-full w-full absolute -left-[400px] top-0 z-50'}`}>
              <ul className='flex flex-col ml-5 md:ml-0 justify-center md:flex-row gap-10 mt-10 md:gap-12 md:mt-0 text-[16px]'>
                <li className='flex justify-between items-center mr-5 pb-2 md:hidden'>
                  <p>Menu</p>
                  <div className='text-xl' onClick={() => setMenuBar(false)}>
                    <RxCross1 className='' />
                  </div>
                </li>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-2 text-[18px] md:text-[20px]'>
            <div className=''>
              {search ?
                <div className='flex justify-between items-center'>
                  <input className='w-[150px] border-[1px] border-[#77d330] px-2 py-2 rounded-xl text-black outline-none bg-transparent text-[12px]' type="text" name="" id="" placeholder='Search' />
                  <IoSearchOutline className='text-[20px]' onClick={() => setSearch(false)} />
                </div>
                :
                <div className=''>
                  <IoSearchOutline className='text-[20px]' onClick={() => setSearch(true)} />
                </div>
              }
            </div>
            <div className='relative hover:bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330] rounded-full px-2 py-2'>
              <FaRegHeart className='text-[20px]' />
              <p className=' absolute -top-1 right-0 bg-green-600  text-white rounded-full px-2 py-1 text-[8px]'>1</p>
            </div>
            <div className='hover:bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330] rounded-full px-2 py-2'>
              <Link href="/myaccount"><FaRegUser className='text-[20px]' /></Link>
            </div>
            <div className=' relative hover:bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330] rounded-full px-2 py-2'>
              <Link href="/cart"><LuShoppingCart className='text-[20px]' /></Link>
              <p className=' absolute -top-1 right-0 bg-green-600  text-white rounded-full px-2 py-1 text-[8px]'>1</p>
            </div>
            <div className="">
              <IoMdMenu onClick={MenuHandel} className='text-[20px] md:hidden' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar