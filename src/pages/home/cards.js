import React from 'react'

function Cards() {
  return (
    <div className='md:grid md:grid-cols-6 w-screen p-12 md:px-40 gap-7 font-bold text-lg space-y-10 md:space-y-0'>
      <div className='rounded-xl relative col-span-3 border-black border-2 h-96 bg-violet-300 overflow-hidden'>
        <img src="" alt="" />
        <div className='absolute bottom-0 left-0 p-5 bg-white w-full'>Explore the hidden waterfall depp in the Amazon Jungle</div>
      </div>
      <div className='rounded-xl relative col-span-3 border-black border-2 h-96 bg-violet-300 overflow-hidden'>
        <img src="" alt="" />
        <div className='absolute bottom-0 left-0 p-5 bg-white w-full'>Travel through the islands of Bali in a Private Cruise</div>
      </div>
      <div className='rounded-xl relative col-span-2 border-black border-2 h-96 md:h-72 bg-violet-300 overflow-hidden'>
        <img src="" alt="" />
        <div className='absolute bottom-0 left-0 p-5 bg-white w-full'>Set sail in the Atlantic Ocean visiting Uncharted Waters</div>
      </div>
      <div className='rounded-xl relative col-span-2 border-black border-2 h-96 md:h-72 bg-violet-300 overflow-hidden'>
        <img src="" alt="" />
        <div className='absolute bottom-0 left-0 p-5 bg-white w-full'>Experience Football on Top of the Himilayan Mountains</div>
      </div>
      <div className='rounded-xl relative col-span-2 border-black border-2 h-96 md:h-72 bg-violet-300 overflow-hidden'>
        <img src="" alt="" />
        <div className='absolute bottom-0 left-0 p-5 bg-white w-full'>Ride through the Sahara Desert on a guided camel tour</div>
      </div>
    </div>
  )
}

export default Cards