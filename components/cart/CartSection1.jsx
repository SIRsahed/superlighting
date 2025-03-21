import React from 'react'
import cart1 from '../../assets/cart1.jpg'
import cart2 from '../../assets/cart2.jpg'
import cart3 from '../../assets/cart3.jpg'
import Image from 'next/image'
import Link from 'next/link'


const CartSection1 = () => {
    const cartData = [
        {
            image: cart1,
            title: "LED High Bay Light-COB Type",
            power: "50w to 200w",
            price:'32',
        },
        {
            image: cart2,
            title: "LED Flood Light-COB Type",
            power: "10w to 400w",
            price:'32',
        },

        {
            image: cart3,
            title: "LED Panel Light",
            power: "03w to 48w",
            price:'32',
        },
     

    ];
    console.log(cartData);
    
    return (
        <section>
            <div className='container mx-auto'>
                {
                    cartData.length > 0 ? <div className='md:flex md:justify-between md:items-end'>
                    <div className='w-[85%] mx-auto md:w-[60%] ' >
                        <h2 className='text-2xl py-2 font border-b-2 w-fit border-[#bcef43]'>My Cart</h2>
                        <div className='my-4 border-b-2 pb-2 border-b-[#bcef43]'>
                            <ul className='flex list-none justify-between '> 
                                
                                <li className='w-[50%] '>Product</li>
                                <li className='w-[15%]'>Price</li>
                                <li className='w-[15%]'>Quantity</li>
                                <li className='w-[15%]'>Total</li>
                                
                            </ul>
                        </div>
              <div className='my-5'>
              {
                            cartData.map((item,id)=>{
                                return(

                        <div key={id} className='w-full flex gap-5 my-5  md:items-start md:justify-between shadow-md'>
                            <div className='w-1/4 md:w-1/5 focus:opacity-30 '>
                                <Image className='h-[85px] md:h-[100px]' src={item.image} alt={item.title} />
                            </div>
                            <div className='md:flex md:w-[75%] md:justify-between'>
                                <div className='md:w-[35%]'>
                                    <h2 className='text-sl font-sans '>{item
                                        .title}</h2>
                                    <p className='text-sm font-sans opacity-50'>{item.power}</p>
                                </div>

                                <div className='w-full  flex justify-between items-center md:w-[64%]'>
                                    <p className='w-[30%]'>${item.price}</p>
                                    <div className='w-[30%] h-[35px] border px-2 py-1 rounded-xl'>
                                        <input className='w-full outline-none' type="number" name="quantity" id="quantity" min={1} />

                                    </div>
                                    <p className='w-[30%]'>$2929</p>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
              </div>
              <div className='flex justify-between'>
                <button className='px-3 py-1 rounded-2xl mt-3 bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330]'><Link href={'/'}>Back to Home</Link></button>
                <button className='px-3 py-1 rounded-2xl mt-3 bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330]'>Clear Cart</button>
              </div>
                    </div>



                    <div className=' w-[85%] mx-auto shadow-xl px-5 py-5 mt-5 md:w-[35%] md:h-[300px] '>
                        <strong className='text-2xl font-semibold'>Order Summary</strong>
                        <div className='flex justify-between border-b-2 py-2'>
                            <h2 className='text-xl font-mono'>Order</h2>
                            <p>$33</p>

                        </div>
                        <div className='flex justify-between border-b-2 py-2'>
                            <h2 className='text-xl font-mono'>Delivery</h2>
                            <p>$33</p>

                        </div>
                        <div className='flex justify-between border-b-2 py-2'>
                            <h2 className='text-xl font-mono'>Total</h2>
                            <p>$33</p>

                        </div>
                        <button className=' px-5 py-2 rounded-2xl mt-3 bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330]'>Process To Checkout</button>
                    </div>



                </div>:
                 <div className='w-[80%] mx-auto text-center h-[50vh]'>
                    <p className='text-xl py-2'>Curd is Empty</p>
                    <p className='text-xl font-sans'>You Did not Add Anything</p>
                    <button className='px-5 py-2 rounded-2xl mt-3 bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330]'><Link href={'/'}>Back To Home</Link></button>
                </div>
                }
               

            </div>
        </section>
    )
}

export default CartSection1
