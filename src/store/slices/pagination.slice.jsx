import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
	name: 'cardsPerPage',
    initialState: 4,
    reducers: {
        changeCardsPerPage: (state, action) =>{
            return action.payload
        }
    }
})

export const { changeCardsPerPage } = paginationSlice.actions;

export default paginationSlice.reducer;