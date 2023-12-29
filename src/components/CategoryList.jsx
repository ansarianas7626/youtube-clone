import React from 'react'
import CategoryButton from './CategoryButton'

const CategoryList = () => {

  const buttonLists = [
    "All",
    "Mixes",
    "Music",
    "Gaming",
    "Melodies",
    "Business Instruments",
    "Instrumentals",
    "All",
    "Mixes",
    "Music",
    "Gaming",
    "Melodies",
    "Business Instrumen",
    "Instrumentals",
    "Mixes",
    "Music",
    "Gaming",
    "Melodies",
    "Business Instrumen",
    "Instrumentals",
    "Mixes",
    "Music",
    "Gaming",
    "Melodies",
    "Business Instrumen",
    "Instrumentals",
    "Mixes",
    "Music",
    "Gaming",
    "Melodies",
    "Business Instrumen",
    "Instrumental"]

  return (
    <div className='w-full flex space-x-3 scrollbar-hide overflow-y-hidden overflow-x-scroll pt-3 pb-9 sticky top-0 px-5 whitespace-nowrap'>
      {buttonLists.map((btn)=><CategoryButton key={btn+Math.random()*10} title={btn}/>)}
    </div>
  )
}

export default CategoryList
