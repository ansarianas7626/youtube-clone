import React, { useState } from 'react'
import CategoryButton from './CategoryButton'
import { buttonLists } from '../utils/constants'

const CategoryList = () => {

  const [active, setActive] = useState(0);

  return (
    <div className='w-full flex space-x-3 scrollbar-hide overflow-y-hidden overflow-x-scroll pt-3 pb-9 sticky top-0 px-5 whitespace-nowrap'>
      {buttonLists.map((btn,index)=><CategoryButton 
      key={index+Math.random()*10} 
      title={btn}
      index={index}
      active={active}
      setActive={()=>{setActive(index)}}
      />)}
    </div>
  )
}

export default CategoryList
