import React, { useState } from 'react'

import { useSelector } from 'react-redux';
import ShortVideo from './ShortVideo';


const ShortsPage = () => {

  const { isMenuOpen } = useSelector((state)=> state.app);
  const [currentShort, setCurrentShort] = useState(0);

  const dummyArray = new Array(5).fill(0);

  var scrollPosition = window.scrollY;

  // Log the scroll position to the console
  const handleScroll = () =>{
    console.log("Current scroll position: " + scrollPosition);
  }

  // export const getShortVideos = async channelId => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/search`, {
  //       params: {
  //         part: 'id',
  //         channelId: channelId,
  //         maxResults: 50, // You can adjust this number as needed
  //         type: 'short',
  //         key: YOUTUBE_API_KEY,
  //         order: 'date',
  //       },
  //     });
  
  //     const videos = response.data.items.map(item => {
  //       return item.id.videoId;
  //     });
  
  //     return videos;
  //   } catch (error) {
  //     console.error('Error fetching data:', JSON.stringify(error, null, 2));
  //     return [];
  //   }
  // };

  return (
    <div onScroll={handleScroll} className={`flex flex-col items-center max-h-[calc(100vh-56px)] ${isMenuOpen? "md:w-[calc(100vw-80px)]" : "md:w-[calc(100vw-240px)]"} overflow-y-scroll overflow-x-hidden pt-7`}>
      {dummyArray.map((video, idx)=> <ShortVideo key={idx}/>)}
    </div>
  )
}

export default ShortsPage
