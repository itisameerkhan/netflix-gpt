import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../utils/userSlice';
import moviesReducer from "./movieSlice";
import gptReducer from './gptSlice';
import configReducer from "./configSlice";
import favoriteReducer from './favoriteSlice';

const appStore = configureStore({
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducer,
            favorite: favoriteReducer,
        }
})

export default appStore;