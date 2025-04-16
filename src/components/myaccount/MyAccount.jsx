import React from "react";

const MyAccount = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">My Account</h2>
    {/* <p className="text-gray-600">This is the My Account section.</p> */}
    <hr />
    <div className="">
      <form action="" method="post">
        <div className="">
          <label htmlFor="name" className="block py-4 text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="w-1/2 bg-white p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="">
          <label htmlFor="email" className="block py-4 text-gray-700">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="w-1/2 bg-white p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="">
          <label htmlFor="phone" className="block py-4 text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-1/2 bg-white p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="">
          <label htmlFor="password" className="block py-4 text-gray-700">
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            className="w-1/2 bg-white p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="">
          <label
            htmlFor="confirm-password"
            className="block py-4 text-gray-700"
          >
            Confirm Password
          </label>

          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="w-1/2 bg-white p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="">
          <label htmlFor="dob" className="block py-4 text-gray-700">
            Date of Birth
          </label>

          <input
            type="date"
            id="dob"
            name="dob"
            className="w-1/2 bg-white p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className=" py-4 ">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default MyAccount;
