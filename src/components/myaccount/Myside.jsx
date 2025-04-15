// import React from 'react';
// import logo from '@/../public/assets/customer3.png';

// const myside = () => {
//   const menuItems = [
//     'My Account',
//     'My Orders',
//     'My Lists',
//     'My Wishlist',
//   ];

//   return (
//     <section className='myaccount py-10'>
//       <div className="container mx-auto flex flex-col md:flex-row gap-8 items-start">
//         {/* Sidebar */}
//         <div className="w-full md:w-1/4  p-4 bg-gray-100 shadow-sm">
//           <div className="mb-6 text-center">
//             <img 
//               src={logo} 
//                 width={80}
//                 height={80}
//               alt="User avatar" 
//               className="rounded-full mx-auto mb-2"
//             />
//             <p className="font-semibold text-gray-800">Hello,</p>
//             <p className="text-green-600">iftykhar alam</p>
//           </div>
//           <ul className="flex flex-col gap-2 text-sm text-gray-700">
//             {menuItems.map((item, index) => (
//               <li key={index} className="hover:bg-green-100 px-3 py-2 rounded cursor-pointer">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

        
//         <div className="w-full md:w-3/4  p-6 bg-gray-100 shadow-sm">
//           <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          
//           <p>Coming soon...</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default myside;

// import React from 'react';
// import Image from 'next/image';

// const MySide = () => {
//   const menuItems = [
//     'My Account',
//     'My Orders',
//     'My Lists',
//     'My Wishlist',
//   ];

//   return (
//     <section className='myaccount py-10'>
//       <div className="container mx-auto flex flex-col md:flex-row gap-8 items-start">
//         {/* Sidebar */}
//         <div className="w-full md:w-1/4 p-4 bg-gray-100 shadow-sm">
//           <div className="mb-6 text-center">
//             <Image
//               src="/assets/customer3.png"
//               width={80}
//               height={80}
//               alt="User avatar"
//               className="rounded-full mx-auto mb-2"
//             />
//             <div className="">
//                 <p className="font-semibold text-gray-800">Hello,</p>
//                 <p className="text-green-600">iftykhar alam</p>
//             </div>
            
//           </div>
//           <ul className="flex flex-col gap-2 text-sm text-gray-700">
//             {menuItems.map((item, index) => (
//               <li key={index} className="hover:bg-green-100 px-3 py-2 rounded cursor-pointer">
//                 <p className='text-xl'>{item}</p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="w-full md:w-3/4 p-6 bg-gray-100 shadow-sm">
//           <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
//           <p>Coming soon...</p>

//         </div>
//       </div>
//     </section>
//   );
// };

'use client';

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MyAccount from './MyAccount';
import MyOrders from './MyOrders';
// import MyLists from './MyLists';
import MyWishlist from './MyWishlist';

const MySide = () => {
  const [selected, setSelected] = useState('My Account');

  const renderContent = () => {
    switch (selected) {
      case 'My Account':
        return <MyAccount />;
      case 'My Orders':
        return <MyOrders />;
    //   case 'My Lists':
    //     return <MyLists />;
      case 'My Wishlist':
        return <MyWishlist />;
      default:
        return <p>Coming soon...</p>;
    }
  };

  return (
    <section className="my-account py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-start">
        <Sidebar selected={selected} setSelected={setSelected} />
        <div className="w-full md:w-3/4 p-6 bg-gray-100 shadow-sm rounded">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default MySide;
