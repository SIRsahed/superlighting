import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {

  return (
    <section className="pt-8 lg:pt-24">
      <div className="container mx-auto">
        {/* Blog Header */}
        <div className="flex items-center justify-between px-4 md:px-10 lg:px-0 ">
          <h1 className="py-5 font-semibold text-[34px] text-[#9DCA42]">Blog</h1>
          <div className="flex items-center gap-2">
            <IoIosArrowBack className="text-2xl"/>
            <IoIosArrowForward className="text-2xl"/>
          </div>
        </div>

        {/* Blog Card */}
        <div className="lg:flex py-4  justify-between px-4 lg:px-0">
          <div>
            <div className="lg:w-[705px] w-[338px] relative h-[338px] bg-[#A1A1A1] group overflow-hidden flex flex-col justify-between">
              {/* Date & Admin */}
              <div className="pl-4 pt-4 space-y-2">
                <div className="flex items-center justify-center rounded-sm bg-white w-[150px] p-1 text-[#727272] gap-1">
                  <FaRegCalendarAlt />
                  <p>05 June 23</p>
                </div>
                <div className="flex items-center pl-5 rounded-sm bg-white w-[150px] p-1 text-[#727272] gap-1">
                  <FaUser />
                  <p>Admin</p>
                </div>
              </div>
              {/* READ MORE - Initially Hidden, Shows on Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all scale-105 duration-300">
                <h1 className="text-white text-xl font-semibold underline">
                  READ MORE
                </h1>
              </div>
            </div>
            <div className="lg:w-[420px] py-5 ">
              <p className="text-[#727272] text-[16px]">Tips</p>
              <p className="font-semibold text-[20px] text-[#2E2E2E]">
                Refresh your interior arrangement style with 3 basic steps
              </p>
            </div>
          </div>
          <div>
            <div className="w-[338px] relative h-[338px] bg-[#D9D9D9] group overflow-hidden flex flex-col justify-between">
              {/* Date & Admin */}
              <div className="pl-4 pt-4 space-y-2">
                <div className="flex items-center justify-center rounded-sm bg-white w-[150px] p-1 text-[#727272] gap-1">
                  <FaRegCalendarAlt />
                  <p>05 June 23</p>
                </div>

                <div className="flex items-center pl-5 rounded-sm bg-white w-[150px] p-1 text-[#727272] gap-1">
                  <FaUser />
                  <p>Admin</p>
                </div>
              </div>

              {/* READ MORE - Initially Hidden, Shows on Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all scale-105 duration-300">
                <h1 className="text-white text-xl font-semibold underline">
                  READ MORE
                </h1>
              </div>
            </div>
            <div className="w-[338px] py-5 ">
              <p className="text-[#727272] text-[16px]">FAQs</p>
              <p className="font-semibold text-[20px] text-[#2E2E2E]">
                Is minimalist furniture really costly and monotonous?
              </p>
            </div>
          </div>
          <div>
            <div className="w-[338px] relative h-[338px] bg-[#D9D9D9] group overflow-hidden flex flex-col justify-between">
              {/* Date & Admin */}
              <div className="pl-4 pt-4 space-y-2">
                <div className="flex items-center justify-center rounded-sm bg-white w-[150px] p-1 text-[#727272] gap-1">
                  <FaRegCalendarAlt />
                  <p>05 June 23</p>
                </div>

                <div className="flex items-center pl-5 rounded-sm bg-white w-[150px] p-1 text-[#727272] gap-1">
                  <FaUser />
                  <p>Admin</p>
                </div>
              </div>

              {/* READ MORE - Initially Hidden, Shows on Hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all scale-105 duration-300">
                <h1 className="text-white text-xl font-semibold underline">
                  READ MORE
                </h1>
              </div>
            </div>
            <div className="w-[338px] py-5 ">
              <p className="text-[#727272] text-[16px]">Tips</p>
              <p className="font-semibold text-[20px] text-[#2E2E2E]">
                How to furnish a house with minimal costs?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
