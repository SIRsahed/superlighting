import React from 'react'
import Image from "next/image"
import AboutHero2 from "@/public/aboutHero2.avif";
import Customer1 from "@/public/customer1.png";
import Customer2 from "@/public/customer2.png";
import Customer3 from "@/public/customer3.png";
import CustomerMain from "@/public/customerMain.png";



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
        }
    ]
  return (
        <section className="my-20">
        <div className="container mx-auto px-5">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-16 ">
          <div className='lg:w-[70%] w-full'>

         
          <div className=' grid grid-cols-2 md:grid-cols-3 gap-5'>
            { customerCard.map ((item,index) => (
                <div key={index} className='px-10 py-6 border-1 border-gray-700'>
                <span className='font-semibold'>{item.title} </span>
                <p className='text-xs'>{item.info}</p>
            </div>
            ))}
            
            </div>
            <div className='flex items-center relative mt-6'>
                    <div >
                    <Image src={Customer1} alt='cus1'/>
                    </div>
                    <div className='absolute left-18 z-5'>
                    <Image  src={Customer2} alt='cus2'/>
                    </div>  
                    <div className='absolute left-36 z-10'>
                    <Image src={Customer3} alt='cus3'/>
                    </div>
                    <div className='absolute left-60'>
                    <p className='text-xs lg:text-sm'>Trusted by</p>
                    <span className='text-xs lg:text-sm font-bold'>1.000+ Customers</span>
                    </div>
            </div>
            </div>
            <div className=''>
            <div className="">
              <h3 className='text-lg font-semibold'>Superlightbd, Your Home Stylist</h3>
              <p className="text-xs font-normal lg:text-base my-5">
              Lorem ipsum dolor sit amet consectetur. Sed lacus convallis nunc sed neque. Tincidunt in tempor nulla ut commodo.              </p>
              <div>
              <Image className="max-w-full max-h-60 " src={CustomerMain} alt="cusMainImage"  />

            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutCustomers
