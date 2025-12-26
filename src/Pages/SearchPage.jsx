import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { SAMPLE_PRODUCTS } from '../Utils/constants'
import { useCart } from '../Utils/hooks'
import { ShoppingCart } from '@mui/icons-material'

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchResults, setSearchResults] = useState([])
  const { addToCart } = useCart()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (query.trim()) {
      const results = SAMPLE_PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.type.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [query])

  const handleAddToCart = (product, size = 'M', color = 'Black') => {
    addToCart(product, size, color)
    alert('Product added to cart!')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Search Results
        </h1>
        {query && (
          <p className="text-gray-400 text-center mb-12">
            Results for "{query}"
          </p>
        )}
        
        {searchResults.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl mb-4">
              {query ? 'No products found matching your search.' : 'Enter a search query to find products.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2">{product.name}</h3>
                  <p className="text-red-600 font-bold text-xl mb-4">₹{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default SearchPage

