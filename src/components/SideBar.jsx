import React, { useState } from 'react'

const SideBar = () => {
  const [showSliderThumb, setShowSliderThumb] = useState(false);


  return (
    <div 
    onMouseEnter={()=>{setShowSliderThumb(!showSliderThumb)}} 
    onMouseLeave={()=>{setShowSliderThumb(!showSliderThumb)}} 
    className={`min-h-screen h-screen max-w-60 px-3 overflow-scroll overflow-x-hidden ${showSliderThumb? "" : "scrollbar-hide"} sticky left-0`}>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Home</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Shorts</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Subscription</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Your channel</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>History</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Your videos</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Watch Later</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Trending</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Shopping</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Music</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Films</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Live</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Gaming</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>News</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Sport</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Learning</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Fashion & beauty</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Podcasts</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Settings</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Report history</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Help</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Send feedback</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Settings</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Report history</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Help</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Send feedback</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Settings</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Report history</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Help</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Send feedback</li>
        </ul>
      </section>

      <section className='border-b-[1px] border-stone-200 py-3'>
        <ul>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Settings</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Report history</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Help</li>
          <li className='hover:bg-gray-100 px-2 py-2 rounded-lg cursor-pointer transition-all'>Send feedback</li>
        </ul>
      </section>

      <section className='py-3 space-y-3 text-sm font-semibold text-stone-500 mr-1'>
        <p>About Press Copyright Contact us Creator Advertise Developers</p>
        <p>Terms Privacy Policy & SafetyHow YouTube worksTest new features</p>
        <p className='text-stone-400 text-xs'>© 2023 Google LLC</p>
      </section>
    </div>
  )
}

export default SideBar



