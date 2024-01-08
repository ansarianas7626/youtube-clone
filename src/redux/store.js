import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/appSlice"
import videosSlice from "./videosSlice";
import searchSlice from "./searchSlice";



const store = configureStore({
    reducer:{
        app : appSlice,
        videos: videosSlice,
        search: searchSlice
    }
})

export default store;
