import React from "react";
import Image from "next/image";
import AboutHero2 from "@/public/aboutHero2.avif";
import Customer1 from "@/public/customer1.png";
import Customer2 from "@/public/customer2.png";
import Customer3 from "@/public/customer3.png";
import AboutCustomer from "@/public/aboutCusRight.avif";

const AboutCustomers = () => {
  const customerCard = [
    {
      title: "100+",
      info: "Happy Customers",
    },
    {
      title: "100+",
      info: "Happy Customers",
    },
    {
      title: "100+",
      info: "Happy Customers",
    },
    {
      title: "100+",
      info: "Happy Customers",
    },
    {
      title: "100+",
      info: "Happy Customers",
    },
    {
      title: "100+",
      info: "Happy Customers",
    },
  ];
  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-16 ">
          {/* left-side */}
          <div className="">
            <h3 className="text-lg font-semibold">
              Superlightbd, Your Home Stylist
            </h3>
            <p className="text-xs font-normal py-5">
              Illuminate your home with modern, stylish, and energy-saving
              lighting solutions designed to match your unique taste."{" "}
            </p>
            <div className="hover:scale-105 transition-all duration-700 ease-in-out">
              <Image
                className="max-w-full max-h-80 "
                src={AboutCustomer}
                alt="cusMainImage"
              />
            </div>
          </div>
          {/* right-side */}
          <div className="lg:w-[60%] w-full lg:mt-20">
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-5">
              {customerCard.map((item, index) => (
                <div
                  key={index}
                  className="px-10 py-4 border-1 border-gray-700 hover:bg-[#2BA14D] hover:text-white text-gray-800 transition-all duration-700 ease-in-out rounded-sm"
                >
                  <span className="font-semibold">{item.title} </span>
                  <p className="text-xs">{item.info}</p>
                </div>
              ))}
            </div>
            {/* customer-images */}
            <div className="flex items-center relative mt-6">
              <div>
                <Image className="w-10 h-10 lg:w-20 lg:h-20" src={Customer1} alt="cus1" />
              </div>
              <div className="absolute left-18 z-5">
                <Image className="w-10 h-10 lg:w-20 lg:h-20" src={Customer2} alt="cus2" />
              </div>
              <div className="absolute left-36 z-10">
                <Image className="w-10 h-10 lg:w-20 lg:h-20" src={Customer3} alt="cus3" />
              </div>
              <div className="absolute left-52 lg:left-72">
                <p className="text-xs lg:text-sm">Trusted by</p>
                <span className="text-xs lg:text-sm font-semibold">
                  1.000+ Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCustomers;
