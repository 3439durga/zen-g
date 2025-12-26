import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { SAMPLE_PRODUCTS, SLIDER_IMAGES, FEATURED_CATEGORIES } from '../Utils/constants'
import { ArrowBackIos, ArrowForwardIos, ChevronRight, FavoriteBorder, Favorite, ShoppingCart } from '@mui/icons-material'
import { Snackbar, Alert } from '@mui/material'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [wishlist, setWishlist] = useState([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const handleProductClick = (category) => {
    navigate(`/collections/${category}`)
  }

  const handleCategoryClick = (category) => {
    navigate(`/collections/${category}`)
  }

  const toggleWishlist = (e, productId) => {
    e.stopPropagation()
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId)
      } else {
        return [...prev, productId]
      }
    })
  }

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    // Add to cart logic - using default size and color
    const defaultSize = product.sizes && product.sizes[0] ? product.sizes[0] : 'M'
    const defaultColor = product.colors && product.colors[0] ? product.colors[0] : 'Black'
    
    // Store in localStorage for now
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingItem = cart.find(item => 
      item.id === product.id && item.size === defaultSize && item.color === defaultColor
    )
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({
        ...product,
        size: defaultSize,
        color: defaultColor,
        quantity: 1
      })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    
    // Show snackbar notification
    setSnackbarMessage(`${product.name} added to cart!`)
    setSnackbarOpen(true)
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }

  // Get diverse products for featured section - mix different categories
  const featuredProducts = [
    SAMPLE_PRODUCTS[0], // Basic Hoodie
    SAMPLE_PRODUCTS[1], // Basic T-Shirt
    SAMPLE_PRODUCTS[2], // Core Jeans
    SAMPLE_PRODUCTS[3], // Basic Cargoes
    SAMPLE_PRODUCTS[4], // Premium Oversized T-Shirt
    SAMPLE_PRODUCTS[6], // Core Hoodie
    SAMPLE_PRODUCTS[8], // Premium Hoodie
    SAMPLE_PRODUCTS[9], // Core T-Shirt
  ]

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        {/* Hero Slider - Full Height with Smooth Transitions */}
        <section className="relative h-[90vh] md:h-[95vh] overflow-hidden z-0">
          {SLIDER_IMAGES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="relative z-[2] h-full flex items-center justify-center text-center px-4">
                <div className={`transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={() => navigate('/collections')}
                    className="bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-[3] group"
            aria-label="Previous slide"
          >
            <ArrowBackIos className="group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-[3] group"
            aria-label="Next slide"
          >
            <ArrowForwardIos className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-[3]">
            {SLIDER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-12 h-2 bg-red-600 rounded-full'
                    : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Men's Featured Categories</h2>
              <button
                onClick={() => navigate('/collections')}
                className="hidden md:flex items-center text-red-600 hover:text-red-700 transition-colors group"
              >
                <span className="mr-2 font-semibold">View All</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {FEATURED_CATEGORIES.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.category)}
                  className="group relative overflow-hidden rounded-lg cursor-pointer bg-gray-900 aspect-[3/4] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-red-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300">{category.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 text-white p-2 rounded-full">
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/collections')}
              className="md:hidden mt-8 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View All Categories
            </button>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Men's Featured Products</h2>
              <button
                onClick={() => navigate('/collections')}
                className="hidden md:flex items-center text-red-600 hover:text-red-700 transition-colors group"
              >
                <span className="mr-2 font-semibold">View All</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 md:gap-4">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-900/30 border border-gray-800 hover:border-red-600/50"
                >
                  {/* Image Container with Wishlist Button */}
                  <div className="relative aspect-square overflow-hidden bg-gray-800">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Wishlist Button - Top Right */}
                    <button
                      onClick={(e) => toggleWishlist(e, product.id)}
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm hover:bg-red-600 text-gray-800 hover:text-white p-1.5 rounded-full transition-all duration-300 transform hover:scale-110 z-10 shadow-lg"
                      aria-label="Add to wishlist"
                    >
                      {wishlist.includes(product.id) ? (
                        <Favorite className="text-red-600" sx={{ fontSize: 18 }} />
                      ) : (
                        <FavoriteBorder sx={{ fontSize: 18 }} />
                      )}
                    </button>

                    {/* Badge for Type */}
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase shadow-lg">
                      {product.type}
                    </div>
                  </div>

                  {/* Product Info Footer */}
                  <div className="p-3 space-y-1.5">
                    {/* Product Name */}
                    <h3 className="text-white font-semibold text-xs md:text-sm line-clamp-2 group-hover:text-red-500 transition-colors min-h-[32px]">
                      {product.name}
                    </h3>

                    {/* Price and Add to Cart Section */}
                    <div className="flex items-center justify-between gap-2 pt-1 border-t border-gray-700/50">
                      {/* Price */}
                      <div className="flex flex-col">
                        <span className="text-red-500 font-bold text-sm md:text-base">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-[10px] md:text-xs">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button - Icon Only */}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-600/50"
                        aria-label="Add to cart"
                      >
                        <ShoppingCart sx={{ fontSize: 18 }} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/collections')}
              className="md:hidden mt-8 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View All Products
            </button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join the ZEN-G Men's Community
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get exclusive offers, early access to new men's collections, and men's style inspiration delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Snackbar for Cart Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ marginTop: '70px' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{
            width: '100%',
            backgroundColor: '#16a34a',
            color: 'white',
            '& .MuiAlert-icon': {
              color: 'white'
            }
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default HomePage
