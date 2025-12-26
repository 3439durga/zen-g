import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { SAMPLE_PRODUCTS } from '../Utils/constants'
import { useCart, useWishlist } from '../Utils/hooks'
import { 
  Favorite, 
  FavoriteBorder, 
  Share,
  Facebook,
  LinkedIn,
  Pinterest,
  Link as LinkIcon,
  Add,
  Remove
} from '@mui/icons-material'

const ProductViewPage = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { items: wishlistItems, addToWishlist, removeFromWishlist } = useWishlist()
  
  const product = SAMPLE_PRODUCTS.find(p => p.id === parseInt(productId))
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)

  // Scroll to top when productId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [productId])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
            <button
              onClick={() => navigate('/collections')}
              className="text-red-600 hover:text-red-700"
            >
              Back to Collections
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Use images array if available, otherwise use single image
  const productImages = product.images || [product.image, product.image, product.image, product.image]
  const currentPrice = product.originalPrice ? product.price : product.price
  const originalPrice = product.originalPrice || null
  const discount = originalPrice ? originalPrice - currentPrice : 0

  const isInWishlist = wishlistItems.some((item) => item.id === product.id)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    if (!selectedColor) {
      alert('Please select a color')
      return
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize, selectedColor)
    }
    alert('Product added to cart!')
  }

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const text = `Check out ${product.name} on ZEN-G!`
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'pinterest':
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`, '_blank')
        break
      case 'link':
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
        break
      default:
        if (navigator.share) {
          navigator.share({ title: product.name, text, url })
        } else {
          navigator.clipboard.writeText(url)
          alert('Link copied to clipboard!')
        }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Image Gallery */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 order-2 md:order-1">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-red-600 scale-105'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 order-1 md:order-2">
                <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  <img
                    src={productImages[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6">
              {/* Category */}
              <div className="text-red-600 text-sm font-semibold uppercase tracking-wide">
                COLLECTIONS
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {product.name}
              </h1>

              {/* Pricing */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {originalPrice && (
                    <span className="text-gray-500 text-xl line-through">
                      ₹{originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-red-600 text-3xl md:text-4xl font-bold">
                    ₹{currentPrice.toLocaleString()}
                  </span>
                </div>
                {discount > 0 && (
                  <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-red-700 transition-colors">
                    Save ₹{discount.toLocaleString()}
                  </button>
                )}
              </div>

              {/* Size Selection */}
              <div>
                <label className="block text-white font-semibold mb-2 text-xs uppercase tracking-wide">
                  CLOTHING-SIZE
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all min-w-[50px] ${
                        selectedSize === size
                          ? 'bg-red-600 border-red-600 text-white'
                          : 'bg-gray-900 border-gray-700 text-gray-300 hover:border-red-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-3">
                {/* Quantity Selector */}
                <div className="flex items-center border-2 border-gray-700 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    <Remove sx={{ fontSize: 18 }} />
                  </button>
                  <span className="px-4 py-2 text-white font-semibold min-w-[50px] text-center text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    <Add sx={{ fontSize: 18 }} />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-900 transition-colors"
                >
                  ADD TO CART
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={handleWishlistToggle}
                  className="flex items-center gap-1.5 px-4 py-2.5 border-2 border-gray-700 rounded-lg hover:border-red-600 transition-colors"
                >
                  {isInWishlist ? (
                    <Favorite className="text-red-600" sx={{ fontSize: 20 }} />
                  ) : (
                    <FavoriteBorder className="text-white" sx={{ fontSize: 20 }} />
                  )}
                  <span className="text-white text-sm font-semibold hidden md:inline">ADD TO WISHLIST</span>
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2 pt-4 border-t border-gray-800">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>SKU: {product.sku || `ZEN-${product.id}`}</span>
                  <span>Category: {product.category}</span>
                </div>
                {product.description && (
                  <p className="text-gray-300 mt-4">{product.description}</p>
                )}
              </div>

              {/* Share Options */}
              <div className="pt-4 border-t border-gray-800">
                <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  SHARE
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare('default')}
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Share className="text-white" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Facebook className="text-white" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <LinkedIn className="text-white" />
                  </button>
                  <button
                    onClick={() => handleShare('pinterest')}
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Pinterest className="text-white" />
                  </button>
                  <button
                    onClick={() => handleShare('link')}
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <LinkIcon className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductViewPage

