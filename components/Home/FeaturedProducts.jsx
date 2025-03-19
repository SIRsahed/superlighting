import React from 'react'
import Image from 'next/image'
import floodlight from '@/public/floodlight.jpg'
import lights from '@/public/lights.jpg'
import { IoStar } from "react-icons/io5"; 
import { CiShare2 } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const FeaturedProducts = () => {
return (
    <section className='bestseller container mx-auto px-3 sm:px-6 py-6 sm:py-10'>
        <div className="text-center sm:text-start mb-4 sm:mb-10">
            <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>Featured Products</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex justify-center">
                    <Image className='w-full object-cover transition-all duration-300 hover:scale-105' 
                        src={floodlight} 
                        alt="floodlight" 
                        width={200}  
                        height={200} 
                        priority={i < 4} 
                        quality={100}
                    />
                </div>
            ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 sm:gap-10 mt-6 sm:mt-8">
            <div className="w-full sm:w-1/2">
                <Image className='w-full min-h-[500px] object-cover transition-all duration-300 hover:scale-105' 
                    src={lights}  
                    alt="floodlight" 
                    width={500}
                    priority  
                    quality={100}
                />
            </div>
            <div className="w-full sm:w-auto px-3 sm:px-0">
                <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-[705px]">
                    <div className="w-full">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Flood Light</h2>
                        <hr className='mt-3 sm:mt-4' />
                        <div className="flex gap-2 mt-4 sm:mt-6">
                            <p className='text-lg sm:text-xl md:text-2xl font-medium'>$49.99</p>
                            <s className='text-gray-500'>$55.99</s>
                        </div>
                        <div className="mt-3 sm:mt-6">
                            <p className="text-sm sm:text-base text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam harum ipsa neque praesentium animi consequuntur quaerat mollitia quae molestiae incidunt impedit, assumenda non cum.</p>
                        </div>
                        <div className="flex items-center gap-1 mt-3 sm:mt-4">
                            <IoStar className="text-yellow-400 text-sm sm:text-base"/>
                            <IoStar className="text-yellow-400 text-sm sm:text-base"/>
                            <IoStar className="text-yellow-400 text-sm sm:text-base"/>
                            <IoStar className="text-yellow-400 text-sm sm:text-base"/>
                            <IoStar className="text-yellow-400 text-sm sm:text-base"/>
                            <p className='text-xs sm:text-sm ml-1'>reviews</p>
                        </div>
                        <div className="flex mt-4 sm:mt-6">
                            <div className="border-2 border-gray-300 p-2 sm:p-3"><p className="text-xl sm:text-2xl font-bold">42</p><p className="text-xs sm:text-sm text-gray-300">Day</p></div>
                            <div className="border-2 border-gray-300 p-2 sm:p-3"><p className="text-xl sm:text-2xl font-bold">20</p><p className="text-xs sm:text-sm text-gray-300">Hour</p></div>
                            <div className="border-2 border-gray-300 p-2 sm:p-3"><p className="text-xl sm:text-2xl font-bold">16</p><p className="text-xs sm:text-sm text-gray-300">Minute</p></div>
                            <div className="border-2 border-gray-300 p-2 sm:p-3"><p className="text-xl sm:text-2xl font-bold">02</p><p className="text-xs sm:text-sm text-gray-300">Second</p></div>
                        </div>
                        <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
                            <div className="border-2 border-gray-200 p-2 sm:p-3">
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <button className="text-lg sm:text-xl text-gray-700 p-1 sm:p-2 rounded-lg hover:bg-gray-300">-</button>
                                    <span className="text-base sm:text-lg">1</span>
                                    <button className="text-lg sm:text-xl text-gray-700 p-1 sm:p-2 rounded-lg hover:bg-gray-300">+</button>
                                </div>
                            </div>
                            <div className="border-2 border-gray-800 p-2 sm:p-3 bg-white text-gray-600 hover:border-white hover:bg-green-400 hover:text-white">
                                <button className="text-sm sm:text-base">Add To Cart</button>
                            </div>
                            <div className="border-2 border-gray-800 p-2 sm:p-3 bg-white text-gray-600 hover:border-white hover:bg-green-400 hover:text-white">
                                <button className="text-sm sm:text-base">Buy Now</button>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
                            <button className='bg-gray-300 text-green hover:bg-green-400 hover:text-white p-2 rounded text-sm sm:text-base'><IoMdHeart /></button>
                            <button className='bg-gray-300 text-green hover:bg-green-400 hover:text-white p-2 rounded text-sm sm:text-base'><CiShare2 /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default FeaturedProducts
