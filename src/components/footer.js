import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-800 font-bold text-white border-box py-10'>
      <h1 className='text-center text-xl md:text-2xl'>Join the Adventure newsletter to recieve our best vacations deals</h1>
      <h3 className='text-center md:text-xl'>You can subscribe at any time</h3>
      <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center items-center'>
        <input className='p-2 rounded' type="text" placeholder='Enter your email' />
        <button className='border-2 py-2 px-5 text-white font-bold border-white rounded'>Subscribe</button>
      </div>
      <div className='flex md:space-x-10 flex-wrap justify-center'>
        <div className='w-40 m-3'>
          <h1 className='text-2xl py-3'>About Us</h1>
          <p>How it works</p>
          <p>Testimonials</p>
          <p>Carrer</p>
          <p>Investors</p>
        </div>
        <div className='w-40 m-3'>
          <h1 className='text-2xl py-3'>Contact Us</h1>
          < p > Contact</p >
          <p>Support</p>
          <p>Destinations</p>
          <p>Sponsorship</p>
        </div >
        <div className='w-40 m-3'>
          <h1 className='text-2xl py-3'>Videos</h1>
          < p > Submit Video</p >
          <p>Ambassadors</p>
          <p>Agency</p>
          <p>Influencer</p>
        </div >
        <div className='w-40 m-3'>
          <h1 className='text-2xl py-3'>Social Media</h1>
          <p > Instagram</p >
          <p>Facebook</p>
          <p>Youtube</p>
          <p>Twitter</p>
        </div >
      </div >
    </div >
  )
}

export default Footer