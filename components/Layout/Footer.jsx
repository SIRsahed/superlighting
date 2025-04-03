import React from "react";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import Bkash from "@/public/bkash_logo.png";
import Nagad from "@/public/nagad.png";
import Rocket from "@/public/rocket.png";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className=" container mx-auto ">
        <div className="lg:flex justify-between  ">
          <div className="lg:px-0 px-5  ">
            <p className="text-[#727272] text-[16px]  mx-auto lg:mx-0">
              The smartest guide to decorating kitchen cabinets to help optimize
              the area of family kitchen space.
            </p>

            <div className="flex flex-col lg:flex-row gap-3 mt-5 justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9DCA42] transition-all  shadow-sm"
              />
              <button className="bg-[#9DCA42] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#87b32f] hover:scale-105 hover:shadow-md transition-all">
                SUBMIT
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex   justify-center lg:justify-start py-6 gap-4 text-6xl">
              <FaSquareFacebook className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
              <IoLogoInstagram className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
              <FaPinterest className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
              <AiFillTwitterCircle className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
              <FaTiktok className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
            </div>

            {/* Underline for Social Media Icons */}
            <div className="w-full max-w-[453px] h-[2px] bg-[#9DCA42] -mt-2"></div>

            {/* Copyright Section */}
            <div className=" mt-8 text-gray-600 text-[16px] ">
              <p>
                © 2025 <span className="font-semibold">SuperLightingBD</span>.
                Designed by
                <a
                  href="https://yourwebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9DCA42] hover:underline ml-1"
                >
                  FakeCompany.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-4 lg:px-0 px-5 lg:pt-0 pt-10">
              <h1 className="text-[#9DCA42] font-semibold text-[16px] ">
                Customer Service
              </h1>
              <h3 className="text-[#727272] text-[16px] pt-3">My Account</h3>
              <h3 className="text-[#727272] text-[16px]">Payments</h3>
              <h3 className="text-[#727272] text-[16px]">Term of Use</h3>
              <h3 className="text-[#727272] text-[16px]">
                Deliveries & Returns
              </h3>
              <h3 className="text-[#727272] text-[16px]">Gift Card</h3>
              <h3 className="text-[#727272] text-[16px]">
                Refund & Returns Policy
              </h3>
              <h3 className="text-[#727272] text-[16px]">FAQs</h3>
            </div>
          </div>

          <div>
            <div className="space-y-4 lg:px-0 px-5 lg:pt-0 pt-10">
              <h1 className="text-[#9DCA42] font-semibold text-[16px] ">
                About Us
              </h1>
              <h3 className="text-[#727272] text-[16px] pt-3">Product</h3>
              <h3 className="text-[#727272] text-[16px]">Our Story</h3>
              <h3 className="text-[#727272] text-[16px]">Job Opportunities</h3>
              <h3 className="text-[#727272] text-[16px]">Store Locator</h3>
              <h3 className="text-[#727272] text-[16px]">Blog</h3>
              <h3 className="text-[#727272] text-[16px]">Reviews</h3>
              <h3 className="text-[#727272] text-[16px]">Trending Search</h3>
            </div>
          </div>

          <div>
            <div className="space-y-4 lg:px-0 px-5 lg:pt-0 pt-10">
              <h1 className="text-[#9DCA42] font-semibold text-[16px] ">
                Contact Us
              </h1>
              <div className="text-[#727272]   pt-3 flex items-center gap-2">
                <IoLocationOutline />
                <h3 className="text-[#727272] text-[16px]  ">
                  House: 110, Road: 02, Block: D, Pallabi 2nd Project, Rupnagar,
                  Mirpur
                </h3>
              </div>
              <div className="text-[#727272] pt-3 flex items-center gap-2">
                <BiPhoneCall />
                <h3 className="text-[#727272] text-[16px] ">
                  +880 1724-188240
                </h3>
              </div>
              <div className="text-[#727272] pt-3 flex items-center gap-2">
                <CiMail />
                <h3 className="text-[#727272] text-[16px] ">
                  superlightingbd1@gmail.com
                </h3>
              </div>

              <h1 className="text-[#2E2E2E] text-[16px] font-semibold pt-10">
                Service Time
              </h1>

              <div className="text-[#727272]  pt-3 flex items-center gap-2">
                <CiClock2 />

                <h3 className="text-[#727272] text-[16px] ">
                  24-hour (Monday - Sunday)
                </h3>
              </div>

              <div className="flex gap-3 pt-5">
                <div className="flex justify-center items-center w-[35px] h-[22px] ">
                  <Image alt="bkashlogo" src={Bkash}></Image>
                </div>
                <div className="flex justify-center items-center w-[35px] h-[22px] ">
                  <Image alt="nagadlogo" src={Nagad}></Image>
                </div>
                <div className="flex justify-center items-center w-[35px] h-[22px] ">
                  <Image alt="rocketlogo" src={Rocket}></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
