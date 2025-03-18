import Image from "next/image";
import React from "react";
import about from "@/assets/about1.jpg";
import aboutone from "@/assets/about2.jpg";
import icon from "@/assets/icon.png";

const HomeAbout = () => {
    const brand = [
        { id: 1, title: "100% Wood Material" },
        { id: 2, title: "Community Value" },
        { id: 3, title: "International Quality" },
    ];

    const aboutItems = [
        { id: 1, title: "100% Wood Material" },
        { id: 2, title: "Community Value" },
        { id: 3, title: "International Quality" },
        { id: 4, title: "100% Wood Material" },
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
                    <div>
                        <span className="text-lg font-medium text-gray-800 uppercase">About Us</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">
                            Your Comfort Is Our Happiness
                        </h2>

                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Brand Story</h3>
                                <ul className="text-gray-700 mb-6">
                                    {brand.map((item) => (
                                        <li key={item.id} className="flex items-center gap-2 mb-2">
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                                <div className="rounded-lg overflow-hidden shadow-md">
                                    <Image src={about} alt="Brand Story" width={500} height={500} />
                                </div>
                            </div>

                            <div>
                                <div className="rounded-lg overflow-hidden shadow-md mb-6">
                                    <Image src={aboutone} alt="Experience" width={500} height={500} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    We Provide You The Best Experience
                                </h3>
                                <ul className="text-gray-700">
                                    {aboutItems.map((item) => (
                                        <li key={item.id} className="flex items-center gap-2 mb-2">
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black px-12 py-16 rounded-lg shadow-lg">
                        <div className="flex flex-col">
                            <div className="flex">
                                <Image src={icon} alt="Brand Story" width={160} height={160} />
                                <Image src={icon} alt="Brand Story" width={160} height={160} />
                            </div>

                            <div className="flex">
                                <div className="w-[160px]"></div> 
                                <Image src={icon} alt="Brand Story" width={160} height={160} />
                                <Image src={icon} alt="Brand Story" width={160} height={160} />
                            </div>

                            <div className="flex">
                                <Image src={icon} alt="Brand Story" width={160} height={160} />
                                <Image src={icon} alt="Brand Story" width={160} height={160} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
