import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'
import gamesReducer from './games/reducer'
import adminReducer from './admin/reducer'
import commentsReducer from "./comments/reducer"

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    game:gamesReducer,
    games:adminReducer,
    comments:commentsReducer,
  }
})