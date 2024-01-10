import React from 'react'
import { YOUTUBE_API_KEY } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addVideos } from '../redux/videosSlice';

const CategoryButton = ({ active, index, setActive, categoryData }) => {

  const { title } = categoryData?.snippet;
  const { id } = categoryData;

  const dispatch = useDispatch();

  const handleClick = ()=>{
    setActive();
    fetchCategoryVideos()
  }


  const fetchCategoryVideos = async()=>{
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&hl=en&maxResults=50&regionCode=IN&videoCategoryId=${id}&key=${YOUTUBE_API_KEY}`)

    const json = await data.json();
    dispatch(addVideos(json.items))
    console.log(json.items);
  }

  // console.log("from btn", categoryData)

  

  return (
    <button onClick={handleClick} className={`${active === index ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-200"} px-3 py-[6px] h-fit text-sm rounded-md font-semibold cursor-pointer transition-all`}>{title}</button>
  )
}

export default CategoryButton
