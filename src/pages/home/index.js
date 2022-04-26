import React from 'react'
import { Link } from 'react-router-dom'
import { BsPlayCircle } from 'react-icons/bs'
import Cards from './cards'

function index(handleClick) {
  return (
    <div>
      <div className='h-screen flex flex-col justify-center items-center bg-slate-800 space-y-12'>
        <h1 className='text-white text-4xl font-bold md:text-7xl xl:text-8xl'>ADVENTURE AWAITS</h1>
        <p className='text-3xl md:text-4xl text-white'>What are you waiting for?</p>
        <div className='flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0'>
          <button className='text-xl w-60 font-bold transition px-5 py-3 duration-300 text-white hover:text-black hover:bg-white rounded border-2 border-white' onClick={handleClick}>
            <Link to='/get-started'>GET STARTED</Link>
          </button>
          <button className='text-xl w-60 font-bold flex items-center space-x-2 transition px-5 py-3 bg-white duration-300 hover:text-white hover:bg-inherit rounded border-2 border-white' onClick={handleClick}>
            <Link to='/get-started'>WATCH TRAILER</Link>
            <i><BsPlayCircle /></i>
          </button>
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </div>

  )
}

export default index