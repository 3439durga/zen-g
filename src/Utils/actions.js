// Cart Actions
export const addToCart = (product, size, color) => ({
  type: 'ADD_TO_CART',
  payload: { ...product, size, color },
})

export const removeFromCart = (id, size, color) => ({
  type: 'REMOVE_FROM_CART',
  payload: { id, size, color },
})

export const updateQuantity = (id, size, color, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: { id, size, color, quantity },
})

export const clearCart = () => ({
  type: 'CLEAR_CART',
})

// Wishlist Actions
export const addToWishlist = (product) => ({
  type: 'ADD_TO_WISHLIST',
  payload: product,
})

export const removeFromWishlist = (id) => ({
  type: 'REMOVE_FROM_WISHLIST',
  payload: { id },
})

export const clearWishlist = () => ({
  type: 'CLEAR_WISHLIST',
})

// Auth Actions
export const login = (phoneNumber) => ({
  type: 'LOGIN',
  payload: { phoneNumber },
})

export const logout = () => ({
  type: 'LOGOUT',
})

