import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
    initialState: false,
    reducers: {
        changeTheme: (state, action) =>{
            return !state
        }
    }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;