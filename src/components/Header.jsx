import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { RiLiveLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { LiaBarsSolid } from "react-icons/lia";
import { YOUTUBE_LOGO, YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import { cacheResults } from '../redux/searchSlice';



const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const searchCache = useSelector((store)=> store.search)

  const handleToggle = ()=>{
    dispatch(toggleMenu())
  }

  useEffect(()=>{
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])

      }else{
        getSearchResults()
      }
  },200)

    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSearchResults = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchQuery);
    const text = await data.text();
    const textItems = text.split("[");
    const mainText = textItems
        .map((element, index) => {
          if (
            !element.split('"')[1] ||
            index === 1 ||
            index === textItems.length - 1
          ) {
            return null;
          }
          return element.split('"')[1];
        })
        .filter((element) => element !== null);

    setSuggestions(mainText);

    dispatch(cacheResults({
      [searchQuery]: mainText
    }));
  }

  
  return (
    <div className='w-full h-14 flex items-center justify-between pl-4 pr-6 sticky top-0 z-10'>

      {/* hamburger & logo */}
      <div className='flex items-center space-x-1'>
        <div onClick={handleToggle} className='w-10 h-10 flex justify-center items-center cursor-pointer rounded-full text-2xl hover:bg-gray-200 transition-all'>
          <LiaBarsSolid />
        </div>
          <div className='flex items-center cursor-pointer'>
              {/* <Link to="/"> */}
              <a href="/">
                <img className='h-14' src={YOUTUBE_LOGO} alt="YouTube-Logo" />
              </a>
              {/* </Link> */}
          </div>
      </div>

      {/* Search Bar */}
      <div className='flex items-center'>
        <div className='flex items-center w-[650px] h-10'>

          <div className='w-[90%] flex flex-col h-full relative'>
            <input 
            className='h-full w-full outline-none  px-3 placeholder:font-semibold rounded-l-full border-[1px] border-stone-300 focus:border-blue-800' type="text" placeholder='Search'
            value={searchQuery}
            onChange={(e)=>{setSearchQuery(e.target.value)}}/>

            {/* Search Suggestion list */}
            {suggestions?.length>0 && <div className='w-full h-fit bg-white absolute top-10 rounded-lg py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
              <ul>
                {suggestions?.map((s) => <li key={s} className='flex items-center hover:bg-stone-200 px-3 py-1 cursor-default'><IoIosSearch className='mr-3'/>{s}</li>)}
              </ul>
            </div>}
          </div>

          <button className='text-2xl bg-gray-100 hover:bg-gray-200 h-full px-5 flex justify-center items-center border-[1px] border-stone-300 transition-all rounded-r-full border-l-0'>
            <IoIosSearch />
          </button>

        </div>

        <span className='w-10 h-10 flex justify-center items-center rounded-full text-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all ml-5'><FaMicrophone /></span>
      </div>

      {/* Right icons */}
      <div className='flex items-center gap-2 pr-5'>
        <div className='w-10 h-10 flex justify-center items-center cursor-pointer rounded-full text-2xl hover:bg-gray-200 transition-all'><RiLiveLine /></div>
        <div className='w-10 h-10 flex justify-center items-center cursor-pointer rounded-full text-2xl hover:bg-gray-200 transition-all'><CiBellOn /></div>
        <div className='w-8 h-8 flex justify-center items-center cursor-pointer rounded-full text-2xl bg-gray-600 transition-all'></div>
      </div>

    </div>
  )
}

export default Header
