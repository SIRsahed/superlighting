import React from 'react'
import Image from "next/image"
import AboutHero2 from "@/public/aboutHero2.avif";
const AboutHero = () => {
  
  return (
    <section className="py-10">
    <div className="container mx-auto px-5">
      <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center ">
        {/* left-side */}
        <div className="lg:w-[70%] w-full">
          <h2 className='text-2xl lg:text-3xl font-bold underline underline-offset-8'>About Us</h2>
          <p className="text-sm font-normal lg:text-base my-5">
          Super Light BD is a trusted lighting solutions provider, offering a wide range of interior and outdoor lights. From stylish home lighting to durable street and industrial lights, we ensure top-quality products at the best prices. Our mission is to brighten every space with innovative and energy-efficient lighting. With a commitment to customer satisfaction, we provide reliable solutions for homes, offices, and commercial spaces. Choose Super Light BD for modern, long-lasting, and eco-friendly lighting.
          </p>
          <div>
          <button className='bg-[#2BA14D] text-white px-8 py-2 text-sm hover:text-[#2BA14D] hover:border-1 hover:border-[#2BA14D] hover:bg-white transition-all duration-700 ease-in-out'>Explore </button>
        </div>
        </div>
        {/* right-side */}
        <div className='rounded-lg'>
        <Image className="max-w-full hover:scale-110 transition-all duration-700 ease-in-out" src={AboutHero2} alt="aboutImage"  />

        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutHero

