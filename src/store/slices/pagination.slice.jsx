import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
	name: 'cardsPerPage',
    initialState: 4,
    reducers: {
        changeUser: (state, action) =>{
            return action.payload
        }
    }
})

export const { changeUser } = paginationSlice.actions;

export default paginationSlice.reducer;