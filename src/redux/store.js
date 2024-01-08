import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/appSlice"
import videosSlice from "./videosSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";



const store = configureStore({
    reducer:{
        app : appSlice,
        videos: videosSlice,
        search: searchSlice,
        chat: chatSlice
    }
})

export default store;
