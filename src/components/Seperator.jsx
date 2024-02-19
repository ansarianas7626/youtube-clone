import React from 'react'
import { useSelector } from 'react-redux';

const Seperator = () => {

  // Theme Mode
  const mode = useSelector((store)=> store.app.toggleTheme);

  return (
    <div className={`${mode===true? "border-stone-600" : "border-stone-200"} border-b-[1px] my-3`}/>
  )
}

export default Seperator
