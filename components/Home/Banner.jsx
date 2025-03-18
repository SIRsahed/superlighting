import React from "react";
import Image from "next/image"
import Banner1 from "../../assets/banner7.avif";
const Banner = () => {
  return (
    <section className=" relative h-[90vh] w-[100vw] object-cover -z-1 pt-10 lg:pt-20 overflow-x-hidden">
      {/* banner-image */}
      <Image alt="banner" src={Banner1} fill={true} />
      <div className="container absolute px-10 lg:px-20 ">
        <div className="absolute bg-black h-[100vh] w-[100vw] -top-20 left-0 opacity-20"></div>
        <div className="banner-content lg:max-w-[600px] max-w-[400px] bg-white p-6 lg:p-10 mt-16   ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-[#2E2E2E]">
            Minimal <span className="text-[#9DCA42]">Interior</span> Enhance{" "}
            <span className="text-[#2BA14D]">Your House</span>{" "}
          </h1>
          <p className="text-[#2E2E2E] lg:max-w-[500px] max-w-[400px] mt-3">
            The smartest guide to decorating kitchen cabinets to help optimize
            the area of ​​family kitchen space, improve the experience.{" "}
          </p>
          <button className="bg-[#22813E] mt-3 px-5 py-3 rounded-md text-white font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
