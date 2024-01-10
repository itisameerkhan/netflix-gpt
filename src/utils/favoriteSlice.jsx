import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        list: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.list.push(action.payload);
        },
    }
})

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;