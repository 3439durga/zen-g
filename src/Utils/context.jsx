import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}

export function AppProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    priceRange: [0, 10000],
  })

  const value = {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

