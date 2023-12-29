import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: false
    },
    reducers:{
        toggleMenu:(state, action)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state, action)=>{
            state.isMenuOpen = true;
        }
    }
})

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;