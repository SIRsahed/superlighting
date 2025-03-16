import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='bg-green-200'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="">
                    logo
                </div>
                <div className="">
                  Navbar
                </div>
                <ul className="flex">
                    Navlinks
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
