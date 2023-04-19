import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/darkmodeSlice";

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
});

export default store