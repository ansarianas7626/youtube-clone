import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: "videos",
    initialState:{
        videosData: null,
        watchPageVideo: null
    },
    reducers:{
        addVideos: (state, action)=>{
            state.videosData = action.payload
        },
        addWatchpageVideo:(state, action)=>{
            state.watchPageVideo = action.payload
        }
    }
})


export const { addVideos, addWatchpageVideo } = videosSlice.actions;
export default videosSlice.reducer;