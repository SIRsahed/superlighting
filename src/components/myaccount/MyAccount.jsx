import React from 'react'

const MyAccount = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Account</h2>
      <p className="text-gray-600">This is the My Account section.</p>
      <hr />
      <div className="">
        <form action="" method="post">
            <div className="">
                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="">
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            
            <div className="">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
        </form>
      </div>
    </div>
  );
  
  export default MyAccount;
  
