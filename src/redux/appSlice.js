import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen: false,
        toggleTheme: false,
    },
    reducers:{
        toggleMenu:(state, action)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state, action)=>{
            state.isMenuOpen = true;
        },
        toggleThemeMode:(state, action)=>{
            state.toggleTheme = !state.toggleTheme;
        }
    }
})

export const { toggleMenu, closeMenu, toggleThemeMode } = appSlice.actions;

export default appSlice.reducer;