import React from 'react'

function Cards() {
  return (
    <div className='xl:grid xl:grid-cols-6 md:space-y-10 p-12 md:px-60 md:mx-20 xl:m-0 xl:px-40 gap-7 font-bold text-lg space-y-10 xl:space-y-0'>
      <div className='drop-shadow-lg hover:cursor-pointer rounded-xl overflow-hidden col-span-3'>
        <div className='overflow-hidden'>
          <img className='h-80 w-full hover:scale-110 transition delay-100 duration-300' src="./images/amazon.jpg" alt="" />
        </div>
        <div className='bg-white w-full bottom-0 p-3'>Explore the hidden waterfall depp in the Amazon Jungle</div>
      </div>
      <div className='drop-shadow-lg hover:cursor-pointer rounded-xl overflow-hidden col-span-3'>
        <div className='overflow-hidden'>
          <img className='h-80 w-full hover:scale-110 transition delay-100 duration-300' src="./images/bali.jpg" alt="" />
        </div>
        <div className='bg-white w-full bottom-0 p-3'>Travel through the islands of Bali in a Private Cruise</div>
      </div>
      <div className='drop-shadow-lg hover:cursor-pointer rounded-xl overflow-hidden col-span-2'>
        <div className='overflow-hidden'>
          <img className='h-80 w-full xl:h-64 hover:scale-110 transition delay-100 duration-300' src="./images/ocean.jpg" alt="" />
        </div>
        <div className='bg-white w-full bottom-0 p-3'>Set sail in the Atlantic Ocean visiting Uncharted Waters</div>
      </div>
      <div className='drop-shadow-lg hover:cursor-pointer rounded-xl overflow-hidden col-span-2'>
        <div className='overflow-hidden'>
          <img className='h-80 w-full xl:h-64 hover:scale-110 transition delay-100 duration-300' src="./images/futbol.jpg" alt="" />
        </div>
        <div className='bg-white w-full bottom-0 p-3'>Experience Football on Top of the Himilayan Mountains</div>
      </div>
      <div className='drop-shadow-lg hover:cursor-pointer rounded-xl overflow-hidden col-span-2'>
        <div className='overflow-hidden'>
          <img className='h-80 w-full xl:h-64 hover:scale-110 transition delay-100 duration-300' src="./images/sahara.jpg" alt="" />
        </div>
        <div className='bg-white w-full bottom-0 p-3'>Ride through the Sahara Desert on a guided camel tour</div>
      </div>
    </div>
  )
}

export default Cards