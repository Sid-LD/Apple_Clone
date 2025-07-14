import React from 'react'
import {appleImg, bagImg, searchImg} from "../utils"
import {navLists} from "../constants"

const Navbar = () => {
  return (
    <div>
        <header className='w-full p-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="Apple" width={22} height={22} />
                <div className='flex flex-1 justify-center max-sm:hidden '>
                    {navLists.map((nav,i)=>(
                        <div key={i} className='px-5 cursor-pointer text-gray-200 hover:text-white transition-all  '>
                            {nav}
                        </div>
                    ))}
                </div>
                <div className='flex gap-10 items-baseline max-sm:justify-end max-sm:flex-1'>
                <div >
                    <img src={searchImg} alt="Search" width={20} height={20} />
                </div>
                <div>
                    <img src={bagImg} alt="Bag" width={20} height={20} />
                </div>

                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
