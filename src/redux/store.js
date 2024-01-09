import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import appSlice from "../redux/appSlice"
import videosSlice from "./videosSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducers = combineReducers({
    app : appSlice,
    videos: videosSlice,
    search: searchSlice,
    chat: chatSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
export const persistor = persistStore(store);
