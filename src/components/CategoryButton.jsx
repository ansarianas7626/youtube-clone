import React from 'react'

const CategoryButton = ({ active, index, setActive, categoryData }) => {

  const handleClick = ()=>{
    setActive();
  }

  console.log("from btn", categoryData)

  const { title } = categoryData?.snippet;

  return (
    <button onClick={handleClick} className={`${active === index ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-200"} px-3 py-[6px] h-fit text-sm rounded-md font-semibold cursor-pointer transition-all`}>{title}</button>
  )
}

export default CategoryButton
