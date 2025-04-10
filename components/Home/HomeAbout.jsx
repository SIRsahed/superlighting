import Image from "next/image";
import React from "react";
import about from "../components/public/about1.jpg";
import aboutone from "../components/public/about2.jpg";
import icon from "../components/public/icon.png";
import happy from "../components/public/happy.png";
import quality from "../components/public/quality.png";
import champion from "../components/public/champion.png";
import setting from "../components/public/setting.png";
import awards from "../components/public/awards.png";
import { FaCheck } from "react-icons/fa6";


const HomeAbout = () => {
    const brand = [
        { id: 1, title: "100% Wood Material" },
        { id: 2, title: "Community Value" },
        { id: 3, title: "International Quality" },
        { id: 4, title: "Sustainability" },
        { id: 5, title: "Comfort" }
    ];

    const aboutItems = [
        { id: 1, title: "100% Wood Material" },
        { id: 2, title: "International Quality" },
        { id: 3, title: "100% Wood Material" },
        { id: 4, title: "Community Value" },
        { id: 5, title: "Comfort" }
    ];

    return (
        <section className="py-8 lg:py-24 bg-gray-100">
            <div className="container mx-auto lg:px-0 px-4">
                <div className="grid lg:grid-cols-[4fr_3fr] gap-10">
                    <div className="">
                        <h2 className="lg:text-3xl text-xl font-semibold text-[#2E2E2E] underline pb-10">About Us</h2>
                        <h2 className="lg:text-4xl text-2xl font-bold text-[#2E2E2E]">
                            Your Comfort Is Our Happiness
                        </h2>
                        <div className="mt-10">
                            <div className="grid lg:grid-cols-2">
                                <div className="">
                                    <h3 className="text-xl font-semibold text-[#2E2E2E] underline mb-3">Brand Story</h3>
                                    <ul className="text-gray-700">
                                        {brand.map((item) => (
                                            <li key={item.id} className="text-[#A1A1A1] lg:text-xl text-[18px] text-xl font-medium mb-2 flex gap-4 items-center">
                                                <FaCheck /> {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="">
                                    <Image src={aboutone} alt="Experience" className="w-full" />
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 mt-12">
                                <div className="">
                                    <Image src={about} alt="Brand Story" className="w-full" />
                                </div>
                                <div className="lg:pl-10">
                                    <h3 className="text-xl font-semibold text-[#2E2E2E] mb-3">
                                        We Provide The Best Experience
                                    </h3>
                                    <ul className="text-gray-700">
                                        {aboutItems.map((item) => (
                                            <li key={item.id} className="text-[#A1A1A1] lg:text-xl text-[18px] font-medium mb-2 flex gap-4 items-center">
                                                <FaCheck /> {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black rounded-lg p-10 flex justify-center items-center">
                        <div className="grid grid-cols-3 grid-rows-3 w-full">
                            <Image src={icon} alt="Brand Story" className="w-full" />
                            <Image src={happy} alt="Brand Story" className="w-full" />
                            <Image src={quality} alt="Brand Story" className="w-full col-start-2 col-end-3" />
                            <Image src={setting} alt="Brand Story" className="w-full col-start-3 col-end-4" />
                            <Image src={champion} alt="Brand Story" className="w-full" />
                            <Image src={awards} alt="Brand Story" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
