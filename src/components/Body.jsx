import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'
import ShortSideBar from './ShortSideBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {

  const { isMenuOpen } = useSelector((state)=> state.app)

  return (
    <div className='flex'>
      {isMenuOpen ? <ShortSideBar/> : <SideBar/>}
      <Outlet/>
      {/* <VideoContainer/> */}
    </div>
  )
}

export default Body
