import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-800 font-bold text-white border-box py-10'>
      <h1 className='text-center text-xl p-5'>Join the Adventure newsletter to recieve our best vacations deals</h1>
      <h3 className='text-center p-5'>You can subscribe at any time</h3>
      <div className='flex flex-col space-y-3'>
        <input className='py-2' type="text" placeholder='Enter your email' />
        <button className='border-2 py-2 text-white font-bold border-white rounded'>Subscribe</button>
      </div>
      <div className='flex md:space-x-10 flex-wrap justify-center items-center'>
        <div className='border-2 border-white p-3 m-3'>
          <h1>About Us</h1>
          <p>How it works</p>
          <p>Testimonials</p>
          <p>Carrer</p>
          <p>Investors</p>
        </div>
        <div className='border-2 border-white p-3 m-3'>
          <h1>Contact Us</h1>
          <p>Contact</p>
          <p>Support</p>
          <p>Destinations</p>
          <p>Sponsorship</p>
        </div>
        <div className='border-2 border-white p-3 m-3'>
          <h1>Videos</h1>
          <p>Submit Video</p>
          <p>Ambassadors</p>
          <p>Agency</p>
          <p>Influencer</p>
        </div>
        <div className='border-2 border-white p-3 m-3'>
          <h1>Social Media</h1>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Youtube</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  )
}

export default Footer