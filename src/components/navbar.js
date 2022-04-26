import React, { useState } from 'react'
import Slidebar from './slidebar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div>
      <div className={`md:hidden fixed w-screen -translate-x-full ${click ? ' transition duration-500 translate-x-0' : 'transition duration-500'}`}>
        <Slidebar handleClick={handleClick} />
      </div>
      <nav className={`md:flex md:justify-between bg-neutral-900 text-white `}>
        <div className={`flex justify-between px-5 items-center py-2`}>
          <div className='flex items-center space-x-2'>
            <img src="./images/travel.png" alt="" />
            <p className='text-4xl font-bold'>TRVL</p>
          </div>
          <button className={`md:hidden absolute right-5 ${click ? 'transition duration-300 -rotate-90' : 'transition duration-300 rotate-0'}`} onClick={handleClick}> <img src="./images/menu(1).png" alt="" /></button>
        </div>
        <div className='hidden px-10 space-x-10 md:flex my-3 p-1'>
          <button className='font-bold hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/'>Home</Link>
          </button>
          <button className='font-bold hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/services'>Services</Link>
          </button>
          <button className='font-bold hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/products'>Products</Link>
          </button>
          <button className='font-bold transition px-3 py-1 duration-500 hover:bg-white hover:text-black rounded border-2 border-white' onClick={handleClick}>
            <Link to='/get-started'>SIGN UP</Link>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar