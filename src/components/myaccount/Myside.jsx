// import React from 'react'

// const myside = () => {
//   return (
//     <section className='myaccount '>
//         <div className="container w-full mx-auto flex flex-col md:flex-row gap-8 items-center">
//             <div className="w-full md:w-1/2 flex flex-col gap-6  ">
//                 <div className="w-full md:w-1/3 border-2 border-gray-200 py-6 px-6 md:px-10">
                    
//                     <div className="sidebar">

//                     </div>
                    
//                 </div>
//             </div>
//             {/* <div className="w-full md:w-1/2 flex flex-col gap-6  ">
//                 <div className="w-full md:w-1/2 border-2 border-gray-200 py-6 px-6 md:px-10">
                    
//                         <div className="p-4">
//                             <p className="text-2xl text-center md:text-left">We are Here To Help You</p>
//                         </div>
                    
//                 </div>
//             </div> */}
//         </div>
//     </section>
//   )
// }

// export default myside
import React from 'react';

const myside = () => {
  const menuItems = [
    'My Account',
    'My Orders',
    'My eBook Library',
    'My Lists',
    'My Bookshelf',
    'My Wishlist',
    'My Interests',
    'My Rating & Reviews',
  ];

  return (
    <section className='myaccount py-10'>
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 border-2 border-gray-200 p-4 bg-white shadow-sm">
          <div className="mb-6 text-center">
            <img 
              src="https://via.placeholder.com/80" 
              alt="User avatar" 
              className="rounded-full mx-auto mb-2"
            />
            <p className="font-semibold text-gray-800">Hello,</p>
            <p className="text-green-600">iftykhar alam</p>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-gray-700">
            {menuItems.map((item, index) => (
              <li key={index} className="hover:bg-green-100 px-3 py-2 rounded cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main content can be placed here */}
        <div className="w-full md:w-3/4 border-2 border-gray-200 p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          {/* You can render account form/info here */}
          <p>Coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default myside;
