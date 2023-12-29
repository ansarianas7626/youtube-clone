import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: "videos",
    initialState:{
        videosData: null
    },
    reducers:{
        addVideos: (state, action)=>{
            state.videosData = action.payload
        }
    }
})


export const { addVideos } = videosSlice.actions;
export default videosSlice.reducer;