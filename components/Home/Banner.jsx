import React from "react";
import Image from "next/image"
import Banner7 from "@/public/banner_bg.jpg";

const Banner = () => {

  return (
    <section className="relative py-[150px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:content-[''] after:bg-black after:-z-10 after:opacity-20">
      <Image
        className="object-cover w-full h-full -z-10"
        src={Banner7}
        layout="fill"
        alt="Super Light BD Banner"/>
      <div className="container mx-auto">
        <div className="banner-content lg:max-w-[50%] max-w-[90%] bg-white backdrop-blur-md px-12 py-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-[#2E2E2E] pb-4">
            <p className="text-[#000]"> Super <span className="text-[#2BA14D]">Light</span> </p>
            <p className="text-[#000]">Super <span className="text-[#afeb24]">Bright</span></p>
          </h1>
          <p className="text-[#2E2E2E] text-sm md:text-md pb-3">
            Super Light BD is a trusted lighting business providing a wide range of interior and outdoor lighting solutions. Illuminate your space with our high-quality and stylish lights.
          </p>
          <button className="bg-[#2BA14D] mt-4 px-5 py-3 rounded-md text-white font-semibold  text-sm md:text-md">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
