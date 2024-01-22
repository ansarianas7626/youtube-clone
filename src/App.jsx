import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import ShortSideBar from './components/ShortSideBar'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const { isMenuOpen } = useSelector((state)=> state.app)
  const [progress, setProgress] = useState(0);
  let location = useLocation();

  useEffect(()=>{
    setProgress(100);
  },[location]);

  return (
    <div className='w-full h-screen overflow-hidden'>
      {/* Top Loading bar */}
      <LoadingBar
        color='#ff0000'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* Navbar */}
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