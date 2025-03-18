import React from 'react'
import Image from "next/image"
import Light1 from '../../assets/light1.jpg'
import Light2 from '../../assets/light2.jpg'
import Light3 from '../../assets/light3.jpg'
import Light4 from '../../assets/light4.jpg'


const Category = () => {
    const categoryList = [
        {
          image: Light1,
          title: "T8 LED Complete Tube Light",
          power: "10w to 28w",
        },
        {
        image: Light2,
          title: "LED Bulb - E27/B22",
          power:"05w to 100w",
        },

        {
            image: Light3,
            title: "T5 LED Complete Tube Light",
            power:"05w to 20w",
          },
        {
            image: Light4,
          title: "CATA Shade Tube Light",
          power:"05w to 20w",
        },
      
      ];
  return (
    <section className='category pt-8 lg:pt-10 bg-white'>
        <div className="container">
           
            <h2 className='text-[#2e2e2e] text-2xl md:text-3xl font-bold'>Categories</h2>
           
            {/* card-area */}
            <div className="category-card pt-5 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
                {categoryList.map((item,i) => (
                    <div key={i}>
                    <div  className="card border-2 border-[#1B6732]">
                    <Image src={item.image} alt={Light1}  style={{borderRadius: 5}}/>
                    <div className='text-center bg-[#2e2e2e] text-white px-3 py-5  ' >
                        <h6 className='text-sm'>{item.title}</h6>
                        <p className='text-xs'>{item.power}</p>
                    </div>
                </div>
                </div>
                ))
                }
            </div>
        </div>
      
    </section>
  )
}

export default Category
