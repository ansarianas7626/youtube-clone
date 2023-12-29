import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../redux/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  // console.log(searchParams.get("v"));


  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (
    <div className='w-[calc(100vw-80px)] min-h-fit flex justify-between bg-orange-300 pl-5 pr-28 pt-7'>
      {/* Left container */}
      <div className='bg-green-200 w-[75%] h-full'>
        <div className='bg-white w-full h-[650px] rounded-lg overflow-hidden'>
          <iframe 
          className='w-full h-full'
          // width="560" 
          // height="315" 
          src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
        </div>
        
        {/* info container */}
        <div className='flex flex-col space-y-4 pt-3'>
          {/* Video title */}
          <h3 className='font-semibold text-xl'>We Rated SmartPhone Brands in Tiers!</h3>
          
          {/* channel detail and button container */}
          <div className='flex items-center justify-between'>
            {/* left */}
            <div className='flex space-x-2'>
              <div className='rounded-full h-10 w-10 bg-gray-300'></div>
              <span className='font-semibold'>Channel name</span>
              <button className='bg-gray-200 rounded-3xl px-4 font-semibold'>subscribe</button>
            </div>

            {/* right */}
            <div className='flex space-x-3'>
              <button className='bg-gray-200 rounded-3xl px-4 py-2 font-semibold'>Like</button>
              <button className='bg-gray-200 rounded-3xl px-4 py-2 font-semibold'>Share</button>
              <button className='bg-gray-200 rounded-3xl px-4 py-2 font-semibold'>Download</button>
              <button className='bg-gray-200 rounded-3xl px-4 py-2 font-semibold'>Thanks</button>
              <button className='bg-gray-200 rounded-3xl px-4 py-2 font-semibold'>Clips</button>
              <button className='bg-gray-200 rounded-3xl px-4 py-2 font-semibold'>...</button>
            </div>
          </div>

          {/* description box container */}
          <div className='w-full h-28 bg-gray-300 rounded-lg'>

          </div>

          {/* comments container */}
          <div className='w-full bg-gray-200'>
            <h3 className='font-semibold text-xl'>Comments</h3>
          </div>

        </div>


      </div>

      {/* Right Container */}
      <div className='w-[24%] bg-gray-200'>
        right recommendation
      </div>
    </div>
  )
}

export default WatchPage
