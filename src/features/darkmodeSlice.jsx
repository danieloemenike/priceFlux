import { createSlice } from "@reduxjs/toolkit";
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialState = {
    mode: localStorage.getItem("theme") ? localStorage.getItem("theme") === "true"
    : prefersDarkMode,
}

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleThemeMode: (state, action) => {
            state.mode = !state.mode;
            localStorage.setItem('theme', state.mode);
            document.documentElement.setAttribute(
        "data-theme",
        state.mode ? "dark" : "light"
      );
        }
    }

})

export const { toggleThemeMode } = darkModeSlice.actions;
export default darkModeSlice.reducer