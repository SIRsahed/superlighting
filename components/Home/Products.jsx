import React from 'react';
import Image from 'next/image';
import LED1 from '@/public/LED1.jpg';
import LED2 from '@/public/LED2.jpg';
import LED3 from '@/public/LED3.jpg';
import LED4 from '@/public/LED4.jpg';
import Cart from '@/public/cart.png';
import Eye from '@/public/eye.png';
import heart from '@/public/HEART.png';
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";



const Products = () => {
  const productsList = [
    {
      image: LED1,
      imageIcon: heart,
      imageIconOne: Cart,
      imageIconTwo: Eye,
      title: "LED High Bay Light-COB Type",
      power: "50w to 200w",

    },
    {
      image: LED2,
      imageIcon: heart,
      imageIconOne: Cart,
      imageIconTwo: Eye,
      title: "LED Flood Light-COB Type",
      power: "10w to 400w",
    },

    {
      image: LED3,
      imageIcon: heart,
      imageIconOne: Cart,
      imageIconTwo: Eye,
      title: "LED Panel Light",
      power: "03w to 48w",
    },
    {
      image: LED4,
      imageIcon: heart,
      imageIconOne: Cart,
      imageIconTwo: Eye,
      title: "LED Street Light-COB Typ",
      power: " 50w to 200w",

    },

  ];
  return (

    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className='text-[#181b18] text-2xl md:text-3xl lg:text-4xl font-bold'>Populer Products</h2>
        </div>

        {/* card-area */}
        <div className="products-card py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {productsList.map((item, i) => (
            <div key={i}>
              <div className="group overflow-hidden card border-1 relative border-[#2e2e2e] group-hover:shadow-green-700 group-hover:shadow-5xl transition-all delay-500 ease-in-out hover:border-[#1B6732] group">
                <div className="relative">
                  <Image className='w-full h-auto' src={item.image} style={{ borderRadius: 5 }} alt={`${item.title}`}/>
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100">
                    <div className="bg-[#a2eba5] w-15 h-10 rounded-2xl flex items-center justify-center">
                      <p>New</p>
                    </div>
                    <div className="bg-[#a2eba5] w-15 h-10 rounded-2xl flex items-center justify-center mt-3">
                      <p>10%</p>
                    </div>
                  </div>
                </div>
                <div className='translate-y-48 group-hover:translate-y-0 duration-300'>
                  <div className='flex gap-4 items-center justify-center pb-4'>
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#a2eba5]">
                      <FaShoppingCart />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#a2eba5]">
                      <IoEyeOutline />
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-[#a2eba5]">
                      <FaRegHeart />
                    </div>

                  </div>
                  {/* star icon area */}

                </div>

              </div>


              <div className="p-3 sm:p-5">
                <p className='text-center text-sm sm:text-base mb-3'>LED Panel Light</p>
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 ">
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <IoStar className="text-yellow-400" />
                  <p className='text-sm sm:text-base ml-1'>12 reviews</p>
                </div>
                <p className='text-center text-xl sm:text-2xl font-semibold'> $25.00 </p>

              </div>
















            </div>
          ))
          }


        </div>

      </div>

    </section>
  )

}

export default Products;
























































































