import React from "react";
import Image from "next/image"
import Banner7 from "@/assets/banner7.avif";

const Banner = () => {

  return (
    <section className="relative h-screen w-[100vw] object-cover -z-1 pt-10 lg:pt-20 overflow-hidden shadow-4xl mx-auto ">
      {/* banner-image */}
      <Image alt="banner" src={Banner7} fill={true}  />
      <div className="container absolute px-10 lg:px-20 ">
        {/* <div className="absolute bg-black h-[100vh] w-[100vw] -top-20 left-0 opacity-20"></div> */}
        <div className="banner-content lg:max-w-[550px] max-w-[400px] bg-white px-10 lg:px-20 py-6 lg:py-8 mt-16   ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-[#2E2E2E]">
            Super <span className="text-[#2BA14D]">Light</span> Super{" "}
            <span className="text-[#afeb24]">Bright</span>{" "}
          </h1>
          <p className="text-[#2E2E2E] lg:max-w-[500px] max-w-[400px] mt-4 text-sm md:text-md">
          Super Light BD is a trusted lighting business providing a wide range of interior and outdoor lighting solutions. Illuminate your space with our high-quality and stylish lights.{" "}
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
