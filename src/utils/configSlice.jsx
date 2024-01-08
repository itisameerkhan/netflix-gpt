import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: 'english',
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;