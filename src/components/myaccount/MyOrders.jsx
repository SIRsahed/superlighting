import React from 'react'
import Image from 'next/image'
// import floodlight from 'public/assets/LED1.jpg';

const MyOrders = () => (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      
      <div className="p-3 bg-gray-100 shadow-sm rounded overflow-x-auto">
        <table className="min-w-full bg-white rounded">
          <thead className="hidden md:table-header-group">
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Total</th>
              <th className="py-2 px-4 text-left">Product</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {Array.from({ length: 5 }, (_, index) => (
                <tr key={index} className="block md:table-row border-b md:border-0 hover:bg-gray-50">
                    <td className="py-2 px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Order ID: </span>
                      #12345
                    </td>
                    <td className="py-2 px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Date: </span>
                      2023-10-01
                    </td>
                    <td className="py-2 px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Status: </span>
                      Shipped
                    </td>
                    <td className="py-2 px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Total: </span>
                      $99.99
                    </td>
                    <td className="py-2 px-4 block md:table-cell">
                      <span className="font-bold md:hidden">Product: </span>
                      <img 
                          src="/assets/LED1.jpg"
                          width={80}
                          height={80}
                          alt="Product" 
                          className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
);
  
  export default MyOrders;
  