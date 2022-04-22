import React from 'react'
import { Link } from 'react-router-dom'

function Slidebar({ handleClick }) {
  return (
    <div className='text-white space-y-10 text-2xl flex absolute flex-col bg-neutral-700 items-center justify-center h-screen w-screen'>
      <button className='transition ease-in-out hover:translate-x-5 p-3' onClick={handleClick}>
        <Link to='/'>Home</Link>
      </button >
      <button className='transition ease-in-out hover:translate-x-5 p-3' onClick={handleClick}>
        <Link to='/services'>Services</Link>
      </button>
      <button className='transition ease-in-out hover:translate-x-5 p-3' onClick={handleClick}>
        <Link to='/products'>Products</Link>
      </button>
    </div >
  )
}

export default Slidebar