import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        addPopularMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.addPopularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
