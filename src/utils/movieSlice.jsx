import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
        addPopularMovies: null,
        addUpcomingMovies: null,
        addTopRatedTV: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.addPopularMovies = action.payload;
        },
        addTopRatedTV: (state, action) => {
            state.addTopRatedTV = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.addUpcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    }
})

export const { 
        addNowPlayingMovies, 
        addTrailerVideo, 
        addPopularMovies, 
        addTopRatedTV, 
        addUpcomingMovies 
    } = movieSlice.actions;
    
export default movieSlice.reducer;
