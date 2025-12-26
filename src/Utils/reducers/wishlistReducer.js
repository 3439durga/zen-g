const initialState = {
  items: [],
}

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      const exists = state.items.find((item) => item.id === action.payload.id)
      if (exists) {
        return state
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }
    case 'CLEAR_WISHLIST':
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export default wishlistReducer

