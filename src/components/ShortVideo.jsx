import React from 'react'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdComment } from "react-icons/md";
import { IoIosShareAlt, IoIosMore } from "react-icons/io";
import { useSelector } from 'react-redux';

const ShortVideo = () => {

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);


  return (
    <div className='flex w-[1000px] min-h-[860px] mb-5'>
        {/* Short Video Container */}
        <div className='h-full w-[50%] rounded-lg overflow-hidden'>
          <iframe
          className='h-full w-full'  
        //   src="https://www.youtube.com/embed/bgcpyVsKTGM?autoplay=1&controls=0&showinfo=0"
          src="https://www.youtube.com/embed/bgcpyVsKTGM?autoplay=0&controls=0&showinfo=0"
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
          </iframe>
        </div>

        {/* info container */}
        <div className='flex flex-col-reverse h-full w-[50%] px-8'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <div className='w-14 h-14 rounded-full bg-gray-300'></div>
              <span className={`${mode===true?"text-white": "text-black"} font-semibold`}>@dustylumberco</span>
              <button className={`${mode===true?"bg-white text-black": "bg-black text-white"} text-sm rounded-full px-3 py-2 font-semibold`}>Subscribe</button>
            </div>

            <p className={`${mode===true?"text-white": "text-black"} text-3xl w-full font-bold tracking-tight`}>Freud finger joint bit and I definitely used way too much glue</p>

            <div className='flex space-x-5'>
              <div className='flex flex-col items-center'>
                <div className='w-11 h-11 flex justify-center items-center rounded-full bg-stone-200 hover:bg-stone-300 cursor-pointer text-2xl'><BiSolidLike /></div>
                <span className={`${mode===true?"text-white": "text-black"} font-semibold text-sm pt-1`}>2.9M</span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='w-11 h-11 flex justify-center items-center rounded-full bg-stone-200 hover:bg-stone-300 cursor-pointer text-2xl'><BiSolidDislike /></div>
                <span className={`${mode===true?"text-white": "text-black"} font-semibold text-sm pt-1`}>Dislike</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-11 h-11 flex justify-center items-center rounded-full bg-stone-200 hover:bg-stone-300 cursor-pointer text-2xl'><MdComment /></div>
                <span className={`${mode===true?"text-white": "text-black"} font-semibold text-sm pt-1`}>8.1K</span>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-11 h-11 flex justify-center items-center rounded-full bg-stone-200 hover:bg-stone-300 cursor-pointer text-2xl'><IoIosShareAlt /></div>
                <span className={`${mode===true?"text-white": "text-black"} font-semibold text-sm pt-1`}>Share</span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='w-11 h-11 flex justify-center items-center rounded-full bg-stone-200 hover:bg-stone-300 cursor-pointer text-2xl'><IoIosMore /></div>
              </div>
            </div>
          </div>

        </div>

      </div>
  )
}

export default ShortVideo
