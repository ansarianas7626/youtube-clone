import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { RiLiveLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { LiaBarsSolid } from "react-icons/lia";
import { YOUTUBE_API_KEY, YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
import { Link, useNavigate } from 'react-router-dom';
import { cacheResults } from '../redux/searchSlice';
import { addVideos } from '../redux/videosSlice';
import ThemeToggleBtn from './ThemeToggleBtn';
import { RxCross1 } from "react-icons/rx";
import { PiUserCircleThin } from "react-icons/pi";
import logoLightMode from "../assets/Youtube-Logo-Light-Mode.png"
import logoDarktMode from "../assets/Youtube-Logo-Dark-Mode.png"


const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([]);
  const [showSearchResults, setshowSearchResults] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const searchInputRef = useRef();

  const searchCache = useSelector((store)=> store.search)

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);


  const handleToggle = ()=>{
    dispatch(toggleMenu())
  }

  useEffect(()=>{
    setActiveSuggestion(0);
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

  const fetchVideoBySearchhcKeyword = async(s)=>{
    setSearchQuery(s);
    setshowSearchResults(false);
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&eventType=none&maxResults=50&order=relevance&q=${searchQuery}&regionCode=IN&safeSearch=none&key=${YOUTUBE_API_KEY}`);
    const json = await data.json();
    // console.log("searched videos",json.items);
    dispatch(addVideos(json.items));
    navigate("/")
  }

  const HandleKeyDown = (e)=>{
    if(e.key==="ArrowDown" && suggestions?.length>0){
      e.preventDefault();
      setActiveSuggestion((prevIndex)=>(prevIndex < suggestions.length - 1? prevIndex+1: prevIndex))
    }
    else if(e.key==="ArrowUp" && suggestions?.length>0){
      e.preventDefault();
      setActiveSuggestion((prevIndex)=>(prevIndex > 0 ? prevIndex-1: prevIndex))
    }
    else if(e.key==="Enter" && suggestions?.length>0){
      e.preventDefault();
      setSearchQuery(suggestions[activeSuggestion]);
      fetchVideoBySearchhcKeyword(suggestions[activeSuggestion]);
      searchInputRef.current.blur();
    }
  }
  
  return (
    <div className={`${mode===true ? "bg-youTube-dark" : "bg-white"} w-full h-fit grid grid-cols-12 md:flex items-center justify-between px-2 md:px-4 pb-3 md:pb-0 sticky top-0 z-10 shadow-md`}>

      {/* hamburger & logo */}
      <div className='flex items-center order-1 col-span-5'>
        {/* Humburger Logo */}
        <div onClick={handleToggle} className={`${mode===true? "text-white hover:bg-stone-800" : ""} hidden w-10 h-10 md:flex justify-center items-center cursor-pointer rounded-full text-2xl hover:bg-gray-200 transition-all`}>
          <LiaBarsSolid />
        </div>

        <Link to="/">
          <div className='w-fit h-14 flex items-center cursor-pointer ml-3 relative'>
            {/* <img className='h-5 ' src={youtube_logo} alt="YouTube-Logo" /> */}
            <img className='h-5 ' src={mode===true ?logoDarktMode : logoLightMode} alt="YouTube-Logo" />
            <span className={`${mode===true? "text-white" : "text-black"} absolute text-[10px] -right-4 top-3`}>IN</span>
          </div>
        </Link>
      </div>

      {/* Search Bar */}
      <div className='flex items-center order-3 md:order-2 col-span-12'>

        {/* seach input and button */}
        <div className='w-full md:w-[40vw] lg:w-[32vw] flex items-center h-10'>
          <div className='w-[90%] flex flex-col h-full relative'>
            <div className='relative h-full w-full'>
              <input 
              className={`${mode === true? "bg-youTube-dark border-stone-700 placeholder:text-stone-400 text-white" : "bg-white border-stone-300 placeholder:text-black text-black"} h-full w-full outline-none px-3 rounded-l-full border-[1px]  focus:border-blue-800`} 
              type="text" 
              placeholder='Search'
              value={searchQuery}
              onChange={(e)=>{setSearchQuery(e.target.value)}}
              onFocus={()=>setshowSearchResults(true)}
              onKeyDown={HandleKeyDown} 
              ref={searchInputRef}
              />

              {searchQuery.length> 0 && <span onClick={()=>setSearchQuery("")} className='absolute text-2xl right-2 top-[50%] -translate-y-[50%] cursor-pointer text-stone-500 '><RxCross1 /></span>}
            </div>

            {/* Search Suggestion list */}
            {(showSearchResults && suggestions.length >=1) && <div className={`${mode===true ? "bg-stone-800 text-white" : "bg-white text-black"} w-full h-fit absolute top-10 rounded-lg py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
              <ul>
                {suggestions?.map((suggsn, idx) => <li onClick={()=>fetchVideoBySearchhcKeyword(suggsn)} 
                key={suggsn} 
                className={`flex items-center hover:bg-stone-200 hover:text-black px-3 py-1 cursor-default ${idx===activeSuggestion? "bg-stone-200 text-black" : ""}`}>
                  <IoIosSearch className='mr-3'/>
                  {suggsn}
                </li>)}
              </ul>
            </div>}
          </div>

          <button onClick={fetchVideoBySearchhcKeyword} className={`${mode===true ? "bg-stone-800 text-stone-300 border-stone-700" : "bg-gray-100 text-black hover:bg-gray-200 border-stone-300"} text-2xl  h-full px-5 flex justify-center items-center border-[1px] rounded-r-full border-l-0`}>
            <IoIosSearch />
          </button>
        </div>

        {/* Microphone */}
        <span className={`${mode === true? "text-white bg-stone-800 hover:bg-stone-700" : "text-black hover:bg-gray-200"} w-10 h-10 flex justify-center items-center rounded-full text-lg cursor-pointer bg-gray-100 hover:bg-gray-200 ml-5`}><FaMicrophone /></span>
      </div>

      {/* Right icons */}
      <div className='flex flex-row-reverse items-center gap-2 pr-5 order-2 col-span-7'>
        

        <div className='flex items-center space-x-1 cursor-pointer border-[1px] border-stone-300 rounded-full text-2xl md:px-2 md:py-1 p-1'>
          <PiUserCircleThin/>
          <span className='text-sm hidden md:block'>Sign In</span>
        </div>

        <div className={`${mode === true? "text-white hover:bg-stone-800" : "text-black hover:bg-gray-200"} w-10 h-10 flex justify-center items-center cursor-pointer rounded-full text-2xl transition-all`}><RiLiveLine /></div>

        <div className={`${mode === true? "text-white hover:bg-stone-800" : "text-black hover:bg-gray-200"} w-10 h-10 flex justify-center items-center cursor-pointer rounded-full text-2xl transition-all`}><CiBellOn /></div>

        <ThemeToggleBtn/>

        {/* When logged in image will show */}
        {/* <div className='w-8 h-8 flex justify-center items-center cursor-pointer rounded-full text-2xl bg-stone-200 transition-all'></div> */}
      </div>

    </div>
  )
}

export default Header
