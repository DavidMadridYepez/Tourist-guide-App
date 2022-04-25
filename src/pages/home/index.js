import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlayCircle } from 'react-icons/bs'

function index(handleClick) {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-slate-800 space-y-10'>
      <h1 className='text-white text-8xl'>ADVENTURE AWAITS</h1>
      <p className='text-4xl text-white'>What are you waiting for?</p>
      <div className='flex space-x-3'>
        <button className='transition px-3 py-2 duration-500 text-white hover:text-black hover:bg-white rounded border-2 border-white' onClick={handleClick}>
          <Link to='/get-started'>GET STARTED</Link>
        </button>
        <button className='flex items-center transition px-3 py-2 bg-white duration-500 hover:text-white hover:bg-inherit rounded border-2 border-white' onClick={handleClick}>
          <Link to='/get-started'>WATCH TRAILER</Link>
          <i><BsPlayCircle /></i>
        </button>
      </div>
    </div>
  )
}

export default index