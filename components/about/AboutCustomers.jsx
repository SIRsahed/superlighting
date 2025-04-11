import React from "react";
import Image from "next/image";
import Customer1 from "@/public/customer1.png";
import Customer2 from "@/public/customer2.png";
import Customer3 from "@/public/customer3.png";
import AboutCustomer from "@/public/styleHome.png";

const AboutCustomers = () => {
  const customerCard = [
    {
      title: "100+",
      info: "Happy Customers",
    },
    {
      title: "100+",
      info: "Quality Products",
    },
    {
      title: "100+",
      info: "Awards gained",
    },
    {
      title: "150+",
      info: "Countries & Regions We Serve",
    },
    {
      title: "25+",
      info: "Large Warehouse Around The World",
    },
    {
      title: "24/7",
      info: "Personal Customer Service",
      },
  ];
  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col sm:flex-row justify-between lg:items-end items-center gap-10 lg:gap-16 ">
          {/* left-side */}
          <div className="">
            <h3 className="text-lg font-semibold">
              Superlightbd, Your Home Stylist
            </h3>
            <p className="text-sm py-5">
              Illuminate your home with modern, stylish, and energy-saving
              lighting solutions designed to match your unique taste."{" "}
            </p>
            <div className="hover:scale-110 transition-all duration-700 ease-in-out">
              <Image
                className="max-w-full max-h-80 "
                src={AboutCustomer}
                alt="cusMainImage"
              />
            </div>
          </div>
          {/* right-side */}
          <div className="lg:w-[60%] w-full">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {customerCard.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-2 border-1 border-gray-700 hover:bg-[#2BA14D] hover:text-white text-gray-800 transition-all duration-700 ease-in-out rounded-sm"
                >
                  <span className="font-semibold">{item.title} </span><br />
                  <span className="text-xs leading-tight">{item.info}</span>
                </div>
              ))}
            </div>
            {/* customer-images */}
            <div className="flex items-center relative mt-6">
              <div>
                <Image className="w-20" src={Customer1} alt="cus1" />
              </div>
              <div className="absolute left-18 z-5">
                <Image className="w-20" src={Customer2} alt="cus2" />
              </div>
              <div className="absolute left-36 z-10">
                <Image className="w-20" src={Customer3} alt="cus3" />
              </div>
              <div className="absolute left-60 lg:left-60">
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
