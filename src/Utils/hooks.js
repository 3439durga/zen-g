import { useSelector, useDispatch } from 'react-redux'
import { useAppContext } from './context'
import * as actions from './actions'

export const useCart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return {
    items: cart.items,
    addToCart: (product, size, color) => dispatch(actions.addToCart(product, size, color)),
    removeFromCart: (id, size, color) => dispatch(actions.removeFromCart(id, size, color)),
    updateQuantity: (id, size, color, quantity) => dispatch(actions.updateQuantity(id, size, color, quantity)),
    clearCart: () => dispatch(actions.clearCart()),
    totalItems: cart.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  }
}

export const useWishlist = () => {
  const wishlist = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()

  return {
    items: wishlist.items,
    addToWishlist: (product) => dispatch(actions.addToWishlist(product)),
    removeFromWishlist: (id) => dispatch(actions.removeFromWishlist(id)),
    clearWishlist: () => dispatch(actions.clearWishlist()),
  }
}

export const useAuth = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return {
    user: auth.user,
    isAuthenticated: auth.isAuthenticated,
    login: (phoneNumber) => dispatch(actions.login(phoneNumber)),
    logout: () => dispatch(actions.logout()),
  }
}

export const useSearch = () => {
  const { searchQuery, setSearchQuery } = useAppContext()
  return { searchQuery, setSearchQuery }
}

export const useFilters = () => {
  const { filters, setFilters } = useAppContext()
  return { filters, setFilters }
}

