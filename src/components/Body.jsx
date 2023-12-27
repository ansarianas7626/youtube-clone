import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'
import ShortSideBar from './ShortSideBar'

const Body = ({ showSidebar }) => {
  return (
    <div className='flex'>
      {showSidebar ? <ShortSideBar/> : <SideBar/>}
      <VideoContainer showSidebar={showSidebar}/>
    </div>
  )
}

export default Body
