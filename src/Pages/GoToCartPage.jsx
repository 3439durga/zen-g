import { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useCart } from '../Utils/hooks'
import { Delete, Add, Remove } from '@mui/icons-material'

const GoToCartPage = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item.id, item.size, item.color)
    } else {
      updateQuantity(item.id, item.size, item.color, newQuantity)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl mb-4">Your cart is empty</p>
            <a
              href="/collections"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="bg-gray-900 rounded-lg p-6 flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-32 h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-semibold text-xl mb-2">{item.name}</h3>
                    <p className="text-gray-400 mb-2">Size: {item.size}</p>
                    <p className="text-gray-400 mb-4">Color: {item.color}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item, item.quantity - 1)}
                          className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition-colors"
                        >
                          <Remove />
                        </button>
                        <span className="text-white font-semibold px-4">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item, item.quantity + 1)}
                          className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition-colors"
                        >
                          <Add />
                        </button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-red-600 font-bold text-xl">
                          ₹{item.price * item.quantity}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors"
                        >
                          <Delete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between text-white font-bold text-xl">
                      <span>Total</span>
                      <span>₹{totalPrice}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default GoToCartPage

