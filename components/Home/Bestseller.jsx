import React from 'react'
import Image from 'next/image'
import { IoStar } from "react-icons/io5"; 
import lights from '../../assets/lights.jpg'

const Bestseller = () => {
  return (
    <section className='bestseller container px-6 items-center align-middle'>
        <div className="text-center m-10">
            <p className='lg:text-start sm:text-center text-3xl font-semibold'>Best Seller</p>
        </div>
        {/* <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-10 lg:px-20"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 sm:px-4 md:px-10 lg:px-20">

            <div className="">
                <div className="">
                    <div className="w-full sm:w-auto md:w-auto  realtive">
                        <Image className='' src={lights} alt="Best seller lighting product" width={500} height={500} priority quality={100} />
                    
                        <div className="absolute top-2 left-2 bg-green-300 text-white text-xs font-bold px-2 py-1 rounded">
                            New
                        </div>

                        
                        <div className="absolute top-2 right-2 bg-green-300 text-white text-xs font-bold px-2 py-1 rounded">
                            10%
                        </div>
                    </div>
                    <div className="items-center align-middle m-5">
                    <p className='text-center m-5'>Product Name</p>
                    <div className="flex text-center justify-center m-5 gap-2">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <p className='text-center '>reviews</p>
                    </div>
                    <p className='text-center m-4 text-2xl font-semibold'> $42.00 </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="w-full sm:w-auto md:w-auto  ">
                        <Image className='' src={lights} alt="Best seller lighting product" width={500} height={500} priority quality={100} />
                    </div>
                    <div className="items-center align-middle m-5">
                    <p className='text-center m-5'>Product Name</p>
                    <div className="flex text-center justify-center m-5 gap-2">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <p className='text-center '>reviews</p>
                    </div>
                    <p className='text-center m-4 text-2xl font-semibold'> $42.00 </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="w-full sm:w-auto md:w-auto  ">
                        <Image className='' src={lights} alt="Best seller lighting product" width={500} height={500} priority quality={100} />
                    </div>
                    <div className="items-center align-middle m-5">
                    <p className='text-center m-5'>Product Name</p>
                    <div className="flex text-center justify-center m-5 gap-2">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <p className='text-center '>reviews</p>
                    </div>
                    <p className='text-center m-4 text-2xl font-semibold'> $42.00 </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="w-full sm:w-auto md:w-auto  ">
                        <Image className='' src={lights} alt="Best seller lighting product" width={500} height={500} priority quality={100} />
                    </div>
                    <div className="items-center align-middle m-5">
                    <p className='text-center m-5'>Product Name</p>
                    <div className="flex text-center justify-center m-5 gap-2">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <p className='text-center '>reviews</p>
                    </div>
                    <p className='text-center m-4 text-2xl font-semibold'> $42.00 </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="w-full sm:w-auto md:w-auto  ">
                        <Image className='' src={lights} alt="Best seller lighting product" width={500} height={500} priority quality={100} />
                    </div>
                    <div className="items-center align-middle m-5">
                    <p className='text-center m-5'>Product Name</p>
                    <div className="flex text-center justify-center m-5 gap-2">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <p className='text-center '>reviews</p>
                    </div>
                    <p className='text-center m-4 text-2xl font-semibold'> $42.00 </p>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="w-full sm:w-auto md:w-auto  ">
                        <Image className='' src={lights} alt="Best seller lighting product" width={500} height={500} priority quality={100} />
                    </div>
                    <div className="items-center align-middle m-5">
                    <p className='text-center m-5'>Product Name</p>
                    <div className="flex text-center justify-center m-5 gap-2">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <p className='text-center '>reviews</p>
                    </div>
                    <p className='text-center m-4 text-2xl font-semibold'> $42.00 </p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="">

        </div>
    </section>
  )
}

export default Bestseller
