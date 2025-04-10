import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import About2 from "../components/../components/public/about2.jpg"
import Link from "next/link";

const Blog = () => {

  const blogs = [
    {
      id: 1,
      thumbnail: About2,
      date: "04-04-2025",
      title: "Understanding the Importance of Lighting",
      details: "Lighting is a fundamental aspect of any space, influencing both aesthetics and functionality. Proper lighting enhances mood, improves focus, and even affects health. Natural light boosts productivity and reduces eye strain, while artificial lighting helps maintain a well-lit environment during nighttime or in dim areas. Different lighting tones impact emotions—warm lighting creates a cozy atmosphere, while cool lighting is ideal for workspaces. In interior design, lighting highlights architectural features and enhances decor. In photography and videography, lighting plays a critical role in capturing the right details and setting the tone of the composition. Choosing the right lighting not only enhances the visual appeal of a space but also promotes well-being and efficiency."
    },
    {
      id: 2,
      date: "04-04-2025",
      thumbnail: About2,
      title: "Types of Lighting and Their Uses",
      details: "Lighting can be categorized into three main types: ambient, task, and accent lighting. Ambient lighting provides general illumination, making a space usable. Task lighting is more focused, helping with activities like reading, cooking, or working. Accent lighting highlights key features such as paintings, shelves, or architectural elements, adding depth and style to a space. Smart lighting, which allows users to control brightness and color through apps or voice assistants, is becoming popular. Understanding how to layer these lighting types ensures a well-lit, functional, and visually pleasing environment. Whether for homes, offices, or creative spaces, using the right mix of lighting enhances both comfort and usability."
    },
    {
      id: 3,
      date: "04-04-2025",
      thumbnail: About2,
      title: "Tips for Optimizing Lighting in Your Space",
      details: "To create the perfect lighting setup, start by maximizing natural light with large windows, mirrors, and light-colored walls. Choose the right bulb temperature—warm lights (2700K-3000K) for relaxation and cool lights (4000K-5000K) for workspaces. Layer your lighting by combining ambient, task, and accent lighting. Use dimmable lights to adjust brightness according to the time of day and mood. Smart lighting solutions allow for remote control and automation, enhancing convenience. To avoid glare and shadows, position light sources strategically and use lampshades or diffusers. Lastly, switch to energy-efficient LED bulbs, which consume less power and last longer. These simple adjustments can transform any space into a comfortable, well-lit environment."
    }
  ]

  return (
    <section className="py-8 lg:py-14">
      <div className="container mx-auto">
        {/* Blog Header */}
        <div className="flex items-center justify-between px-4 md:px-10 lg:px-0 mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold underline">Blog</h1>
        </div>

        {/* Blog Card */}
        <div className="grid lg:grid-cols-3 gap-4">
          {
            blogs.map((blog) => (
              <div key={blog.id} className="">
                <Image src={blog.thumbnail} alt={`${blog.title}`} className="w-full opacity-80" />
                <div className="pr-2">
                  <div className="flex items-center gap-5 mt-3">
                    <div className="py-1 flex items-center text-xs rounded-sm text-[#2BA14D] gap-3">
                      <FaUser />
                      <p>Admin</p>
                    </div>
                    <div className="py-1 flex items-center text-xs rounded-sm text-[#2BA14D] gap-3">
                      <FaRegCalendarAlt />
                      <p>{blog.date}</p>
                    </div>
                  </div>
                  <h3 className="font-medium text-lg text-[#2E2E2E] mt-2">{blog.title}</h3>
                  <p className="text-sm mt-3 w-[90%] leading-6 opacity-70 line-clamp-2">{blog.details}</p>
                  <div className="flex items-center mt-3">
                    <Link href={`/blog/${blog.id}`} className="text-sm text-[#2BA14D] hover:text-[#141414] relative after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-3 after:h-2 after:w-2 after:content-[''] after:bg-[#2BA14D] after:rounded-full">Read More</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Blog;
