import React from 'react'
import Image from "next/image"
import Image1 from '../../../public/assets/image1.jpg';
import image2 from '../../../public/assets/image2.jpg';

const Collection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className='flex flex-col-reverse md:flex-row gap-5 items-center justify-around'>
          <div className="carousel-left">
            <h6>LED Light-2025</h6>
            <h4 className=" underline underline-offset-8">NEW ARRIVAL</h4>
            <h2>LED</h2>
            <h1 className="font-bold text-3xl">Collection</h1>
            <div>
              <button className=" mt-5 px-6 py-2 bg-[#161715] text-white">SHOP NOW</button>
            </div>
          </div>

          {/* image area */}
          <div className=' relative'>
            <div className="relative">
              <Image className="w-full h-auto" src={Image1} alt="image1" width={700} height={230} />
              <div className="absolute bottom-0 left-0 w-[50%] h-[50%]">
                <Image className="w-full h-full object-cover" src={image2} alt="image1" width={800} height={530} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection;
