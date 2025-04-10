import React from 'react'
import Image from 'next/image'
import icon1 from '../components/public/icon1.png'
import icon2 from '../components/public/icon2.png'
import icon3 from '../components/public/icon3.png'
import icon4 from '../components/public/icon4.png'




function Delivary() {

  return (
   <section className="py-0">
   <div className="container mx-auto">
    <div className="flex items-center justify-between">
   <div className=" ">
   <Image src={icon1} alt='free' width={130} height={100}/> 
    <h3>FREE SHIPPING</h3>
    <h6>Capped At $59 Per Order</h6>
   </div>

   <div>
   <Image src={icon2} alt='shop' width={100} height={100}/>
    <h3>14-DAY RETURNS</h3>
    <h6>Shop With Confidence</h6>
   </div>

   <div>
   <Image src={icon3} alt='securety' width={100} height={100}/>
    <h3>SECURETY PAYMENTS</h3>
    <h6>Up To 12 Months Installments</h6>
   </div>
   <div>
   <Image src={icon4} alt='febric' width={100} height={100}/>
    <h3>FREE FABRIC SWATCHES</h3>
    <h6>Delivered To Your Door</h6>
   </div>
   </div>






    
  
  

</div>



















    
   </section>
  )
}

export default Delivary

