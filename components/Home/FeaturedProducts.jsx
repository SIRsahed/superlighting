import React from 'react'
import Image from 'next/image'
import floodlight from '../components/public/aboutCusRight.avif'
import lights from '../components/public/aboutHero2.avif'
import { IoStar } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const FeaturedProducts = () => {

    return (
        <section className='py-8 lg:py-14'>
            <div className="container mx-auto">
                <div className="text-center sm:text-start mb-4 sm:mb-10">
                    <p className='text-xl sm:text-2xl md:text-3xl font-semibold underline'>Featured Products</p>
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mt-6 sm:mt-8">
                    <div className="w-full lg:w-1/2">
                        <Image className='w-full'
                            src={lights}
                            alt="floodlight"
                        />
                    </div>
                    <div className="w-full lg:w-auto px-3 sm:px-0">
                        <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[705px]">
                            <div className="w-full">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Flood Light</h2>
                                <hr className='mt-3 sm:mt-4' />
                                <div className="flex gap-4 items-center pt-4 lg:pt-6">
                                    <p className='text-lg sm:text-xl md:text-2xl font-medium'>$49.99</p>
                                    <s className='text-gray-500'>$55.99</s>
                                </div>
                                <div className="mt-3 sm:mt-6">
                                    <p className="text-sm sm:text-base text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam harum ipsa neque praesentium animi consequuntur quaerat mollitia quae molestiae incidunt impedit, assumenda non cum.</p>
                                </div>
                                <div className="flex items-center gap-1 mt-3 sm:mt-4">
                                    <IoStar className="text-yellow-400 text-sm sm:text-base" />
                                    <IoStar className="text-yellow-400 text-sm sm:text-base" />
                                    <IoStar className="text-yellow-400 text-sm sm:text-base" />
                                    <IoStar className="text-yellow-400 text-sm sm:text-base" />
                                    <IoStar className="text-yellow-400 text-sm sm:text-base" />
                                    <p className='text-xs sm:text-sm ml-1'>reviews</p>
                                </div>
                                <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 lg:gap-4">
                                    <div className="border-2 border-gray-200">
                                        <div className="flex items-center gap-4 px-3 py-1">
                                            <button className="text-lg sm:text-xl text-gray-700 rounded-lg">-</button>
                                            <span className="text-base sm:text-lg">1</span>
                                            <button className="text-lg sm:text-xl text-gray-700 rounded-lg">+</button>
                                        </div>
                                    </div>
                                    <div className="border-2 border-gray-200 px-3 py-1">
                                        <button>Add To Cart</button>
                                    </div>
                                    <div className="border-2 border-gray-200 px-3 py-1">
                                        <button>View Details</button>
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
            </div>
        </section>
    )
}

export default FeaturedProducts
