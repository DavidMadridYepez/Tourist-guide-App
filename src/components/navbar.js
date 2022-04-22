import React, { useState } from 'react'
import Slidebar from './slidebar'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div>
      <div className={`-translate-x-full ${click ? 'transition duration-500' : 'translate-x-0  transition duration-500'}`}>
        <Slidebar handleClick={handleClick} />
      </div>
      <nav className={`static md:flex md:justify-between bg-slate-700 text-white `}>
        <div className={`flex justify-between px-10 items-center py-5`}>
          <i>logo</i>
          <button className={`md:hidden absolute top-5 right-5 ${click ? 'transition duration-300 rotate-0' : 'transition duration-300 -rotate-90'}`} onClick={handleClick}><FaBars /></button>
        </div>
        <div className='hidden md:flex px-10 space-x-10'>
          <button className='hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/'>Home</Link>
          </button>
          <button className='hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/services'>Services</Link>
          </button>
          <button className='hover:scale-x-125 transition ease-in-out hover:-translate-y-1'>
            <Link to='/products'>Products</Link>
          </button>
        </div>
      </nav>
    </div>

  )
}

export default Navbar