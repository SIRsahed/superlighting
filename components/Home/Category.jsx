import React from 'react'
import Image from "next/image"
import HighBayLight from '@/public/led-high-bay.jpg'
import FloodLight from '@/public/floodlight.jpg'
import PanelLight from '@/public/panel-light.jpg'
import StreetLight from '@/public/street-light.jpg'
import Link from 'next/link'


const Category = () => {
    const categoryList = [
        {
            image: HighBayLight,
            title: "LED High Bay Light-COB Type",
            power: "50w to 200w",
        },
        {
            image: FloodLight,
            title: "LED Flood Light-COB Type",
            power: "10w to 400w",
        },

        {
            image: PanelLight,
            title: "LED Panel Light",
            power: "03w to 48w",
        },
        {
            image: StreetLight,
            title: "LED Street Light-COB Typ",
            power: " 50w to 200w",
        },

    ];
    return (
        <section className='pt-8 lg:pt-24'>
            <div className="container mx-auto">
                <div className='pb-16 px-10 md:px-0'>
                    <h2 className='text-[#2e2e2e] text-2xl md:text-3xl lg:text-4xl underline underline-offset-8 font-bold'>Categories</h2>
                </div>
                <div className="category-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center px-10 md:px-0">
                    {categoryList.map((item, index) => (
                        <div key={index}>
                            <Link href=''>
                                <div className="card border-1 border-[#2e2e2e] group-hover:shadow-green-700 group-hover:shadow-5xl hover:border-[#1B6732] group">
                                <Image className='w-full h-auto' src={item.image} style={{ borderRadius: 5 }} alt={`${item.title}`} />
                                <div className='text-center  px-3 py-5 group-hover:bg-[#2e2e2e] text-[#1B6732] group-hover:text-white hover: border-t-1 hover:shadow-gray-600 transition-all ease-in-out delay-100' >
                                    <h6 className='text-sm '>{item.title}</h6>
                                    <p className='text-xs mt-1 '>{item.power}</p>
                                </div>
                            </div></Link>
                        </div>
                    ))
                    }
                </div>
            </div>

        </section>
    )
}

export default Category
