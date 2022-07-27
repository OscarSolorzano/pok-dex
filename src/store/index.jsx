import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './slices/user.slice'
import themeSlice from './slices/theme.slice'
import  paginationSlice  from './slices/pagination.slice' 

export default configureStore({
  reducer: {
    user : userSlice,
    theme: themeSlice,
    cardsPerPage: paginationSlice
	}
})