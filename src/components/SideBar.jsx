import React, { useState } from 'react'
import { MdHomeFilled, MdOutlineSubscriptions, MdOutlineOutlinedFlag, MdOutlineHelpOutline, MdOutlineFeedback } from "react-icons/md";
import { SiYoutubegaming, SiYoutubestudio, SiYoutubemusic } from "react-icons/si";
import { PiMusicNote, PiFilmSlate, PiLightbulb, PiUserSquareLight } from "react-icons/pi";
import { IoNewspaperOutline, IoSettingsOutline, IoBagHandleOutline } from "react-icons/io5";
import { LiaAngleRightSolid, LiaAngleDownSolid } from "react-icons/lia";
import { RiVideoLine, RiFireLine } from "react-icons/ri";
import { LuClock5, LuPodcast } from "react-icons/lu";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHistory } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { HiMiniSignal } from "react-icons/hi2";
import { CiTrophy } from "react-icons/ci";
import { GiHanger } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { YOUTUBE_KIDS_LOGO } from '../utils/constants';
import { Link } from 'react-router-dom';
import Seperator from './Seperator';
import { useSelector } from 'react-redux';



const SideBar = () => {

  const [showSliderThumb, setShowSliderThumb] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

   // Theme Mode
   const mode = useSelector((store)=> store.app.toggleTheme);

  return (
    <div 
    onMouseEnter={()=>{setShowSliderThumb(!showSliderThumb)}} 
    onMouseLeave={()=>{setShowSliderThumb(!showSliderThumb)}} 
    className={`${mode===true ? "bg-youTube-dark " : "bg-white"}h-screen max-w-60 px-3 overflow-scroll overflow-x-hidden ${showSliderThumb? "" : "scrollbar-hide"} sticky left-0`}>

        <ul className={`${mode===true ? "text-white" : " text-black "} pt-3`}>
          <Link to="/"><li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="0" className={`${activeTab == 0 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <MdHomeFilled className='mr-5 text-xl'/>Home
          </li></Link>

          <Link to="/shorts"><li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="1" className={`${activeTab == 1 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <SiYoutubeshorts className='mr-5 text-xl'/>Shorts
          </li></Link>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="2" className={`${activeTab == 2 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <MdOutlineSubscriptions className='mr-5 text-xl'/>Subscription
          </li>

          <Seperator/>
          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="3" className={`${activeTab == 3 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center font-semibold text-lg`}>
            You<LiaAngleRightSolid className='text-sm ml-1'/>
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="4" className={`${activeTab == 4 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <PiUserSquareLight className='mr-5 text-xl'/>Your channel
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="5" className={`${activeTab == 5 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <GoHistory className='mr-5 text-xl'/>History
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="6" className={`${activeTab == 6 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <RiVideoLine className='mr-5 text-xl'/> Your videos
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="7" className={`${activeTab == 7 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <LuClock5 className='mr-5 text-xl'/>Watch Later
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="8" className={`${activeTab == 8 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <BiLike className='mr-5 text-xl'/>Liked Videos
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="9" className={`${activeTab == 9 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <LiaAngleDownSolid className='mr-5'/>Show more
          </li>

          <Seperator/>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="10" className='px-2 py-2 rounded-lg transition-all flex items-center font-semibold text-lg'>
            Subscription
          </li>
          
          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="11" className={`${activeTab == 11 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>
            <span>channel 1</span>
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="12" className={`${activeTab == 12 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>
            <span>channel 2</span>
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="13" className={`${activeTab == 13 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>
            <span>channel 3</span>
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="14" className={`${activeTab == 14 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>
            <span>channel 4</span>
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="15" className={`${activeTab == 15 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>
            <span>channel 5</span>
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="16" className={`${activeTab == 16 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>
            <span>channel 6</span>
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="17" className={`${activeTab == 17 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <div className='w-8 h-8 rounded-full bg-gray-200 mr-5'></div>
            <span>channel 7</span>
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="18" className={`${activeTab == 18 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <LiaAngleDownSolid className='mr-5'/>Show more
          </li>

          <Seperator/>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="19" className={`${activeTab == 19 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all font-semibold text-lg`}>Explore
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="20" className={`${activeTab == 20 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <RiFireLine className='mr-5 text-xl'/>Trending
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="21" className={`${activeTab == 21 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <IoBagHandleOutline className='mr-5 text-xl'/>Shopping
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="22" className={`${activeTab == 22 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <PiMusicNote className='mr-5 text-xl'/>Music
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="23" className={`${activeTab == 23 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <PiFilmSlate className='mr-5 text-xl'/>Films
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="24" className={`${activeTab == 24 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <HiMiniSignal className='mr-5 text-xl'/>Live
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="25" className={`${activeTab == 25 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <SiYoutubegaming className='mr-5 text-xl'/>Gaming
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="26" className={`${activeTab == 26 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <IoNewspaperOutline className='mr-5 text-xl'/>News
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="27" className={`${activeTab == 27 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <CiTrophy className='mr-5 text-xl'/>Sport
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="28" className={`${activeTab == 28 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <PiLightbulb className='mr-5 text-xl'/>Learning
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="29" className={`${activeTab == 29 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <GiHanger className='mr-5 text-xl'/>Fashion & beauty
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="30" className={`${activeTab == 30 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <LuPodcast className='mr-5 text-xl'/>Podcasts
          </li>

          <Seperator/>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="31" className={`${activeTab == 31 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <FaYoutube className='mr-5 text-2xl text-youTube-red'/>YouTube Premium
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="32" className={`${activeTab == 32 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <SiYoutubestudio className='mr-5 text-2xl text-youTube-red'/> YouTube Studio
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="33" className={`${activeTab == 33 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <SiYoutubemusic className='mr-5 text-2xl text-youTube-red'/>YouTube Music
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="34" className={`${activeTab == 34 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <img className='w-6 mr-5' src={YOUTUBE_KIDS_LOGO} alt="" /> YouTube Kids
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="35" className={`${activeTab == 35 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <IoSettingsOutline className='mr-5 text-xl'/>Settings
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="36" className={`${activeTab == 36 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <MdOutlineOutlinedFlag className='mr-5 text-xl'/>Report history
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="37" className={`${activeTab == 37 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <MdOutlineHelpOutline className='mr-5 text-xl'/>Help
          </li>

          <li onClick={(e)=>{setActiveTab(e.currentTarget.id)}} id="38" className={`${activeTab == 38 ? "bg-gray-100 text-black" : ""} hover:bg-gray-100 hover:text-black px-2 py-2 rounded-lg cursor-pointer transition-all flex items-center`}>
            <MdOutlineFeedback className='mr-5 text-xl'/>Send feedback
          </li>
          
          <Seperator/>
        </ul>

      <div className='${activeTab == 0 ? "bg-gray-100 text-black" : ""} h-60 flex flex-co hover:text-blackl py-3 pl-2 pr-3 space-y-3 text-sm font-semibold text-stone-500 mr-1'>
        <p>About Press Copyright Contact us Creator Advertise Developers</p>
        <p>Terms Privacy Policy & SafetyHow YouTube worksTest new features</p>
        <p className='text-stone-400 text-xs'>© 2023 Google LLC</p>
      </div>
    </div>
  )
}

export default SideBar



