import React from 'react'
import SideBar from './components/SideBar'
import ShortSideBar from './components/ShortSideBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const App = () => {

  const { isMenuOpen } = useSelector((state)=> state.app)

  return (
    <div>
      <Header/>

      <div className='flex'>
        <div className='hidden md:block'>
          {isMenuOpen ? <ShortSideBar/> : <SideBar/>}
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App