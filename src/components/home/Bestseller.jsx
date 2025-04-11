import React from 'react'
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import lights from '../../../public/assets/lights.jpg';

const Bestseller = () => {

        return (
                <section className='py-8 lg:py-14'>
                        <div className="container mx-auto">
                                <div className="text-center my-6 sm:my-10">
                                        <p className='text-2xl sm:text-3xl sm:text-start text-center font-semibold underline'>Best Seller</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                                <div key={i} className="relative row-span-1">
                                                        <div>
                                                                <div className="relative group">
                                                                        <Image className='w-full h-auto object-cover transition-all duration-300 hover:scale-105' src={lights} alt="Best seller lighting product"/>
                                                                        <div className="absolute top-2 left-2 bg-white text-green hover:bg-green-400 hover:text-white text-xs font-bold px-2 py-1 rounded transition-colors duration-300">New</div>
                                                                        <div className="absolute top-10 left-2 bg-white text-green hover:bg-green-400 hover:text-white text-xs font-bold px-2 py-1 rounded transition-colors duration-300">10%</div>
                                                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
                                                                                <button className='bg-white text-green hover:bg-green-400 hover:text-white p-2 rounded  transition-colors duration-300'><IoMdHeart size={20} /></button>
                                                                                <button className='bg-white text-green hover:bg-green-400 hover:text-white p-2 rounded  transition-colors duration-300'><FaRegEye size={20} /></button>
                                                                                <button className='bg-white text-green hover:bg-green-400 hover:text-white p-2 rounded  transition-colors duration-300'><FaShoppingCart size={20} /></button>
                                                                        </div>
                                                                </div>
                                                                <div className="p-3 sm:p-5">
                                                                        <p className='text-center text-sm sm:text-base mb-3'>Product Name</p>
                                                                        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3">
                                                                                <IoStar className="text-yellow-400" />
                                                                                <IoStar className="text-yellow-400" />
                                                                                <IoStar className="text-yellow-400" />
                                                                                <IoStar className="text-yellow-400" />
                                                                                <IoStar className="text-yellow-400" />
                                                                                <p className='text-sm sm:text-base ml-1'>reviews</p>
                                                                        </div>
                                                                        <p className='text-center text-xl sm:text-2xl font-semibold'> $42.00 </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </section>
        )
}

export default Bestseller