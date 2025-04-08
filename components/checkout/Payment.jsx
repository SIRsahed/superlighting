import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPaperPlane } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";

const Payment = () => {
  return (
    <section className='payment container w-full mx-auto py-12 px-4'>
      {/* <div className="flex flex-col gap-8 items-center justify-center">
        <div className="icon">
          <GiTakeMyMoney size={45} />
        </div>
        <div className="icon-words w-full md:w-1/2 text-center">
          <h2 className="font-bold text-2xl">Payment Method</h2>
          <p>We accept all types of payment methods.</p>
        </div>
      </div> */}
      <div className="container w-full mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6  ">
            <form action="" method="post" className="w-full">
                <div className="bg-gray-100 border-2 border-gray-100 py-6 px-6 md:px-10">
                    
                    <div className="p-4 ">
                        <p className='text-2xl text-center md:text-left'>Payment Method<span className=''>(Please select a payment method)</span></p>
                    </div>
                    <hr className='text-gray-300' />
                    <div className="cash-on-delivery  gap-4 items-center justify-center md:justify-start my-4 ">
                        <div className=" py-6 ">
                            <p className="text-xl">Pay After Delivary</p>
                        </div>
                        <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md">
                            <input type="radio" name="payment" id="cash-on-delivery" value="cash-on-delivery" className='w-5 h-5' />
                            <GiTakeMyMoney className='text-3xl' />
                            <p>Cash On Delivary</p>
                        </div>
                    </div>
                    <hr className='text-gray-300' />
                    <div className="cash-on-delivery  gap-4 items-center justify-center md:justify-start my-4 ">
                        <div className=" py-6 ">
                            <p className="text-xl">Mobile Wallet/Banking</p>
                        </div>
                        <div className=" flex flex-col gap-4 md:flex-row items-center justify-center md:justify-start my-4 ">
                            <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md">
                                <input type="radio" name="payment" id="cash-on-delivery" value="cash-on-delivery" className='w-5 h-5' />
                                <SiFreelancer className='text-3xl' />
                                <p>bKash</p>
                            </div>
                            <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md">
                                <input type="radio" name="payment" id="cash-on-delivery" value="cash-on-delivery" className='w-5 h-5' />
                                <GiTakeMyMoney className='text-3xl' />
                                <p>Nagad</p>
                            </div>
                            <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md">
                                <input type="radio" name="payment" id="cash-on-delivery" value="cash-on-delivery" className='w-5 h-5' />
                                <GiPaperPlane className='text-3xl' />
                                <p>Rocket</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
      </div>
      
    </section >
  )
}

export default Payment
