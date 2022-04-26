import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-800 font-bold text-white border-box pt-20 pb-10'>
      <h1 className='text-center text-xl md:text-2xl mb-5'>Join the Adventure newsletter to recieve our best vacations deals</h1>
      <h3 className='text-center md:text-xl mb-5'>You can subscribe at any time</h3>
      <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 justify-center items-center mb-10'>
        <input className='w-80 md:w-fit px-3 text-black py-2 rounded' type="text" placeholder='Enter your email' />
        <button className='w-80 md:w-fit font-bold transition px-6 py-2 duration-500 hover:bg-white hover:text-black rounded border-2 border-white'>Subscribe</button>
      </div>
      <div className='flex md:space-x-10 pl-5 flex-wrap justify-center'>
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
      <div className='flex justify-center md:justify-end space-x-3 pt-5 px-10'>
        <img src="./images/instagram.png" alt="" />
        <img src="./images/facebook.png" alt="" />
        <img src="./images/youtube.png" alt="" />
        <img src="./images/twitter.png" alt="" />
      </div>
    </div >
  )
}

export default Footer