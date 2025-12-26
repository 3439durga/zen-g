import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducer'
import wishlistReducer from './reducers/wishlistReducer'
import authReducer from './reducers/authReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
})

