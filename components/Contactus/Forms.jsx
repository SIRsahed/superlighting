import React from 'react'
import { IoLocationOutline  } from "react-icons/io5";

const Forms = () => {
  return (
    <section className="contact-form py-12">
        <div className="container w-full mx-auto ">
            <div className="">
                <div className="flex gap-4 items-center ">
                    <div className="icon  items-center ">
                    <IoLocationOutline size={45} />
                    </div>
                    <div className="icon-words w-1/2">
                        <h2 className='font-bold' >Store Address</h2>
                        <p>House: 110, Road: 02, Block: D, Pallabi 2nd Project, Rupnagar, Mirpur</p>
                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    </section>
  )
}

export default Forms
