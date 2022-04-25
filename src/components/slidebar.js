import React from 'react'
import { Link } from 'react-router-dom'

function Slidebar({ handleClick }) {
  return (
    <div className='flex flex-col items-center justify-center absolute h-screen w-screen space-y-10 bg-black opacity-80 text-white text-2xl '>
      <button className='transition ease-in-out hover:translate-x-5 p-3' onClick={handleClick}>
        <Link to='/'>Home</Link>
      </button >
      <button className='transition ease-in-out hover:translate-x-5 p-3' onClick={handleClick}>
        <Link to='/services'>Services</Link>
      </button>
      <button className='transition ease-in-out hover:translate-x-5 p-3' onClick={handleClick}>
        <Link to='/products'>Products</Link>
      </button>
      <button className='transition ease-in-out hover:translate-x-5 p-3 rounded-3xl border-2 border-white' onClick={handleClick}>
        <Link to='/get-started'>Get Started</Link>
      </button>
    </div >
  )
}

export default Slidebar