import React from 'react'

const CategoryButton = ({ title }) => {
  return (
    <button className='bg-gray-100 px-3 py-[6px] h-fit text-sm rounded-md font-semibold cursor-pointer hover:bg-gray-200 transition-all'>{title}</button>
  )
}

export default CategoryButton
