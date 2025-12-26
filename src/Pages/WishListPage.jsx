import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useWishlist, useCart } from '../Utils/hooks'
import { Delete, ShoppingCart } from '@mui/icons-material'

const WishListPage = () => {
  const { items, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleAddToCart = (product, size = 'M', color = 'Black') => {
    addToCart(product, size, color)
    alert('Product added to cart!')
  }

  const handleRemove = (id) => {
    removeFromWishlist(id)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Wish List</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl mb-4">Your wishlist is empty</p>
            <Link
              to="/collections"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => (
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
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                    >
                      <Delete />
                    </button>
                  </div>
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

export default WishListPage

