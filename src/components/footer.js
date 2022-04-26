import React from 'react'

function Footer() {
  return (
    <div className='bg-neutral-800 font-bold text-white '>
      <h1>Join the Adventure newsletter to recieve our best vacations deals</h1>
      <h3>You can subscribe at any time</h3>
      <form action="">
        <input type="text" />
        <button>Subscribe</button>
      </form>
      <div className='flex space-x-10'>
        <div>
          <h1>About Us</h1>
          <p>How it works</p>
          <p>Testimonials</p>
          <p>Carrer</p>
          <p>Investors</p>
        </div>
        <div>
          <h1>Contact Us</h1>
          <p>Contact</p>
          <p>Support</p>
          <p>Destinations</p>
          <p>Sponsorship</p>
        </div>
        <div>
          <h1>Videos</h1>
          <p>Submit Video</p>
          <p>Ambassadors</p>
          <p>Agency</p>
          <p>Influencer</p>
        </div>
        <div>
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