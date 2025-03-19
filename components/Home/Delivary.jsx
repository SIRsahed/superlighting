import React from 'react'
import Image from 'next/image'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'




function Delivary() {
  return (
   <section className="py-0">
   <div className="container mx-auto flex items-center gap-20 px-20">
   <div className=" ">
   <Image className="w-40 h-35"src={icon1}></Image>
    <h3>FREE SHIPPING</h3>
    <h6>Capped At $59 Per Order</h6>
   </div>

   <div>
   <Image className="w-30 h-25"src={icon2}></Image>
    <h3>14-DAY RETURNS</h3>
    <h6>Shop With Confidence</h6>
   </div>

   <div>
   <Image className="w-30 h-25 "src={icon3}></Image>
    <h3>SECURETY PAYMENTS</h3>
    <h6>Up To 12 Months Installments</h6>
   </div>
   <div>
   <Image className="w-30 h-25"src={icon4}></Image>
    <h3>FREE FABRIC SWATCHES</h3>
    <h6>Delivered To Your Door</h6>
   </div>




    
  
  

</div>



















    
   </section>
  )
}

export default Delivary

