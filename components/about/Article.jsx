import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";




const Article = () => {
  return (
    <section className='py-10 bg-gray-200'>
       <div className="container mx-auto text-center items-center justify-center">
       <h2 className='text-xl lg:text-2xl font-semibold'>Did you find this article helpful?</h2>
       <div className="flex gap-4 my-5 justify-center">
        <button className="flex items-center gap-2 border text-sm px-4 py-1  hover:bg-gray-100 transition">
        < AiOutlineLike className='text-lg' />
        YES
      </button>
      <button className="flex items-center gap-2 border text-sm px-4 py-2  hover:bg-gray-100 transition">
        < AiOutlineLike className='text-lg' />
        NO
      </button>
    </div>
    <p>Need further assistance? We’re here to help</p>
    <button className='my-6 bg-[#2BA14D] text-white px-8 py-2 text-sm hover:text-[#2BA14D] hover:border-1 hover:border-[#2BA14D] hover:bg-white transition-all duration-700 ease-in-out'>Contact US </button>

        <div className='flex gap-2 items-center justify-center'>
           <FaFacebook className='text-xl hover:text-[#2BA14D] transition duration-700 hover:scale-115'/>
           <FaTwitterSquare className='text-xl hover:text-[#2BA14D] transition duration-700 hover:scale-115'/>
           <FaTiktok className='text-xl hover:text-[#2BA14D] transition duration-700 hover:scale-115'/>
           <FaSquareInstagram className='text-xl hover:text-[#2BA14D] transition duration-700 hover:scale-115'/>

           </div>

       </div>
    </section>
  )
}

export default Article
