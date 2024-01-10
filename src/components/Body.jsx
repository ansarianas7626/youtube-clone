import React from 'react'
import SideBar from './SideBar'
import ShortSideBar from './ShortSideBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {

  const { isMenuOpen } = useSelector((state)=> state.app)

  return (
    <div className='flex'>
      <div className='hidden md:block'>
        {isMenuOpen ? <ShortSideBar/> : <SideBar/>}
      </div>
      <Outlet/>
    </div>
  )
}

export default Body
