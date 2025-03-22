"use client";
import React, { useState } from "react";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      category: "Tips",
      title: "Refresh your interior arrangement style with 3 basic steps",
      bgColor: "bg-[#D9D9D9]",
    },
    {
      id: 2,
      category: "FAQs",
      title: "Is minimalist furniture really costly and monotonous?",
      bgColor: "bg-[#D9D9D9]",
    },
    {
      id: 3,
      category: "Tips",
      title: "How to furnish a house with minimal costs?",
      bgColor: "bg-[#D9D9D9]",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        {/* Blog Header */}
        <div className="flex items-center justify-between px-4 md:px-10 lg:px-0">
          <h1 className="py-5 font-semibold text-[34px] text-[#9DCA42]">
            Blog
          </h1>
          <div className="flex gap-2">
            <div className="text-[#9DCA42] border p-2 cursor-pointer">
              <IoIosArrowBack />
            </div>
            <div className="text-white bg-[#9DCA42] p-2 cursor-pointer">
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-0">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`group   flex flex-col justify-between transition-all duration-500 ease-in-out 
              w-full lg:w-[35%] lg:hover:w-[60%]`}
            >
              <div
                className={`${blog.bgColor} overflow-hidden rounded-sm relative  h-[338px] `}
              >
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

              {/* Blog Details */}
              <div className=" pt-4    ">
                <div key={blog.id} className="w-full">
                  <div className="">
                    <p className="text-[#727272] text-[16px]">
                      {blog.category}
                    </p>
                    <p className="font-semibold text-[20px] text-[#2E2E2E]">
                      {blog.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
