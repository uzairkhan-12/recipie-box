import { configureStore } from '@reduxjs/toolkit'
import recipieSlice from '../redux/features/recipieSlice'
export const store = configureStore({
  reducer: {
    recpies:recipieSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch