import React from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegEye, FaRegHeart } from "react-icons/fa";

const CategoriesShop = ({item}) => {
  return (
    <div className="mt-5">
      {/* Image Section */}
      <div className="relative group">
        <Image
          src={item.image}
          alt="Solex Sofa"
          width={328}
          height={328}
          layout="responsive"
          className="rounded-lg w-full h-auto"
        />
        {/* Hover Icons */}
        <div className="flex absolute bottom-4 left-1/2 -translate-x-1/2 space-x-3 opacity-0 group-hover:opacity-100 transition duration-300">
          {[
            { icon: <FaCartPlus /> },
            { icon: <FaRegHeart />},
            { icon: <FaRegHeart />},
            { icon: <FaRegEye />},
          ].map((item, index) => (
            <div
              key={index}
              className={`w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-lg cursor-pointer hover:bg-black hover:text-white transition`}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <div className="flex items-center justify-center space-x-1 text-yellow-500 mt-1">
          {Array(5).fill(<IoStar className="w-5 h-5" />)}
        <p className="text-sm text-gray-500 mt-1">{item.reviews}(Reviews)</p>
        </div>
        <p className="text-xl font-bold text-gray-900 mt-2">
          ${item.price} <span className="text-gray-400 line-through text-sm ml-2">${item.discount}</span>
        </p>
      </div>
    </div>
  );
};

export default CategoriesShop;
