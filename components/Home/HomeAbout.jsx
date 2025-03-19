import Image from "next/image";
import React from "react";
import about from "@/public/about1.jpg";
import aboutone from "@/public/about2.jpg";
import icon from "@/public/icon.png";
import happy from "@/public/happy.png";
import quality from "@/public/quality.png";
import champion from "@/public/champion.png";
import setting from "@/public/setting.png";
import awards from "@/public/awards.png";

const HomeAbout = () => {
    const brand = [
        { id: 1, title: "100% Wood Material" },
        { id: 2, title: "Community Value" },
        { id: 3, title: "International Quality" },
        { id: 4, title: "Sustainability" },
    ];

    const aboutItems = [
        { id: 1, title: "100% Wood Material" },
        { id: 2, title: "Community Value" },
        { id: 3, title: "International Quality" },
        { id: 4, title: "100% Wood Material" },
    ];

    return (
        <section className="lg:py-20 py-12 bg-gray-100">
            <div className="container mx-auto lg:px-0 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center">
                    <div>
                        <span className="lg:text-3xl text-xl font-semibold text-[#2E2E2E]">About Us</span>
                        <h2 className="lg:text-6xl text-2xl font-bold text-[#2E2E2E] lg:mt-3 nt-2">
                            Your Comfort Is Our Happiness
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:mt-12 mt-5">
                            <div>
                                <h3 className="text-xl font-semibold text-[#2E2E2E] underline">Brand Story</h3>
                                <ul className="text-gray-700 mb-6 mt-4">
                                    {brand.map((item) => (
                                        <li key={item.id} className="text-[#A1A1A1] lg:text-xl text-[18px] text-xl font-medium mb-2">
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <Image src={about} alt="Brand Story" width={500} height={500} />
                                </div>
                            </div>

                            <div>
                                <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                                    <Image src={aboutone} alt="Experience" width={500} height={500} />
                                </div>
                                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-3">
                                    We Provide You The Best Experience
                                </h3>
                                <ul className="text-gray-700">
                                    {aboutItems.map((item) => (
                                        <li key={item.id} className="text-[#A1A1A1] lg:text-xl text-[18px] font-medium mb-2">
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black lg:px-12 px-8 py-16 rounded-lg shadow-lg flex items-center justify-center">
                        <div className="flex flex-col">
                            <div className="flex">
                                <Image src={icon} alt="Brand Story" width={160} height={160} className="lg:w-[160px] w-[80px] h-[80px] lg:h-[160px]" />
                                <Image src={happy} alt="Brand Story" width={160} height={160} className="lg:w-[160px] w-[80px] h-[80px] lg:h-[160px]"/>
                            </div>

                            <div className="flex">
                                <div className="lg:w-[160px] w-[80px]"></div> 
                                <Image src={quality} alt="Brand Story" width={160} height={160} className="lg:w-[160px] w-[80px] h-[80px] lg:h-[160px]"/>
                                <Image src={setting} alt="Brand Story" width={160} height={160} className="lg:w-[160px] w-[80px] h-[80px] lg:h-[160px]"/>
                            </div>

                            <div className="flex">
                                <Image src={champion} alt="Brand Story" width={160} height={160} className="lg:w-[160px] w-[80px] h-[80px] lg:h-[160px]" />
                                <Image src={awards} alt="Brand Story" width={160} height={160} className="lg:w-[160px] w-[80px] h-[80px] lg:h-[160px]"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
