'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

import navLogo from "../../assets/WhatsApp Image 2025-03-14 at 00.01.10_3d3b88d2.jpg"


const Navbar = () => {
  const [menubar, setMenuBar] = useState(false)
  const [search, setSearch] = useState(false)


  const MenuHandel = () => {
    setMenuBar(!menubar)
  }

  const searchHandel = () => {
    setSearch(true)
  }

  return (
    <section>

      {/* pc design  */}
      <div className='container mx-auto px-5 md:py-3  md:px-0'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-5 lg:gap-10 overflow-hidden'>
            <div className='flex items-center'>
              <IoMdMenu onClick={MenuHandel} className='text-4xl md:hidden' />

              <Image className='w-22 md:w-36' src={navLogo} alt='Nav Logo Image' />

            </div>
            <div className={`md:static md:h-fit md:bg-white  md:text-black md:duration-0 ${menubar ? 'absolute left-0 top-0 bg-black text-white w-[100%] h-[100%] ease-in-out duration-300 z-50' : ' absolute -left-70'}`}>
              <div className='md:hidden text-4xl pt-5 pl-8' onClick={() => setMenuBar(false)}>
                <RxCross1 className='' />
              </div>
              <ul className='flex flex-col justify-center items-center  md:flex-row gap-10 mt-10 md:gap-3 lg:gap-5 md:mt-0 text-[13px] md:text-[18]'>
                <li><Link href="#">Home</Link></li>
                <li>
                  <select className='outline-none' name="categories" id="">
                    <option value="select one">categories</option>
                    <option value="Home" id='home'>Home</option>
                    <option value="outdor" id='outdor'>outdor</option>
                    <option value="indor" id='indor'>Indor</option>
                    <option value="reading" id='reading'>Reading</option>
                  </select>
                </li>
                <li><Link href="#">Best Sellers</Link></li>
                <li><Link href="#">Services</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Contact</Link></li>

              </ul>
            </div>
          </div>
          <div className='flex gap-2 text-[18px] md:text-[20px]'>
            <div className=''>
              {search ? <div className='max-w-[160px]  h-8 flex justify-between items-center px-2  rounded-xl text-black border-[1px] border-[#77d330]'>
                <input className='outline-none bg-transparent  px-1 py-1 text-[12px] w-[85%] ' type="text" name="" id="" placeholder='Search' />
                <IoSearchOutline />
              </div> : <div className='py-2'><IoSearchOutline onClick={searchHandel} /></div>

              }


            </div>
            <div className='relative hover:bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330] rounded-full px-2 py-2'>
              <CiHeart />
              <p className=' absolute -top-1 right-0 bg-green-600  text-white rounded-full px-2 py-1 text-[8px]'>1</p>


            </div>
            <div className='hover:bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330] rounded-full px-2 py-2'>
              <FaRegUser />

            </div>
            <div className=' relative hover:bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330] rounded-full px-2 py-2'>
              <FiShoppingCart />
              <p className=' absolute -top-1 right-0 bg-green-600  text-white rounded-full px-2 py-1 text-[8px]'>1</p>

            </div>


          </div>

        </div>

        {/* mobile Design  */}
        {/* <div className={menubar ? ' fixed right-0 top-0 w-[100%] md:hidden h-screen bg-black text-white px-10 ease-in duration-700  ' : 'fixed right-[-100%] top-0 p-1  ease-in duration-500'}>
          <div className='text-4xl pt-5' onClick={()=> setMenuBar(false)}>
              <RxCross1 className='' />
          </div>
          <div className='flex flex-col gap-6 w-[60%] h-full items-start my-8 '>
            <div className='flex items-center px-2 py-1 rounded-xl text-black bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#87d24d]'>
            <input className='border-none outline-none  ' type="text" placeholder='Search' />
            <IoSearchOutline className='text-white text-2xl hover:text-green-500'  />
            </div>
            <ul className='flex flex-col gap-8'>


              <Link href="#">
                <li>Home</li>
              </Link>


              <li>
                <select className='bg-black outline-none' name="categories" id="">
                  <option value="select one">categories</option>
                  <option value="Home" id='home'>Home</option>
                  <option value="outdor" id='outdor'>outdor</option>
                  <option value="indor" id='indor'>Indor</option>
                  <option value="reading" id='reading'>Reading</option>
                </select>
              </li>
              <Link href="#">
                <li>Best Sellers</li>
              </Link>
              <Link href="#">
                <li>Services</li>
              </Link>
              <Link href="#">
                <li>About Us</li>
              </Link>
              <Link href="#">
                <li>Contact</li>
              </Link>

            </ul>
            <div className='flex gap-2 text-xl md:text-2xl'>

              <div className='hover:bg-green-400 rounded-full px-2 py-2'>
                <CiHeart />

              </div>
              <div className='hover:bg-green-400 rounded-full px-2 py-2'>
                <FaRegUser />

              </div>
              <div className='hover:bg-green-400 rounded-full px-2 py-2'>
                <FiShoppingCart />
              </div>
            </div>
          </div>

        </div> */}



      </div>

    </section>
  )
}

export default Navbar
