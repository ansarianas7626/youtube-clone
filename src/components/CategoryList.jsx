import React from 'react'
import CategoryButton from './CategoryButton'
import { buttonLists } from '../utils/constants'

const CategoryList = () => {

  return (
    <div className='w-full flex space-x-3 scrollbar-hide overflow-y-hidden overflow-x-scroll pt-3 pb-9 sticky top-0 px-5 whitespace-nowrap'>
      {buttonLists.map((btn)=><CategoryButton key={btn+Math.random()*10} title={btn}/>)}
    </div>
  )
}

export default CategoryList
