import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { SAMPLE_PRODUCTS, PRODUCT_SIZES, PRODUCT_COLORS } from '../Utils/constants'
import { useCart, useWishlist } from '../Utils/hooks'
import { 
  Checkbox, 
  FormControlLabel, 
  Slider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Drawer,
  IconButton,
} from '@mui/material'
import {
  Close as CloseIcon,
  FilterList,
  Favorite,
  FavoriteBorder,
  ShoppingCart
} from '@mui/icons-material'
import { Snackbar, Alert } from '@mui/material'

const ProductDetailPage = () => {
  const { category, type } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { items: wishlistItems, addToWishlist, removeFromWishlist } = useWishlist()
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [priceRange, setPriceRange] = useState([0, 10000])
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  // Scroll to top when category or type changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [category, type])

  // Filter products based on category and type
  const filteredProducts = SAMPLE_PRODUCTS.filter(
    (product) => {
      const productCategory = product.category.toLowerCase()
      const urlCategory = category?.toLowerCase()
      return (
        productCategory === urlCategory &&
        (type ? product.type === type : true) &&
        (selectedTypes.length === 0 || selectedTypes.includes(product.type)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (selectedSizes.length === 0 || selectedSizes.some((size) => product.sizes.includes(size))) &&
        (selectedColors.length === 0 || selectedColors.some((color) => product.colors.includes(color)))
      )
    }
  )

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const handleSizeFilter = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    )
  }

  const handleColorFilter = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    )
  }

  const handleTypeFilter = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue)
  }

  const handleAddToCart = (product, e) => {
    e.stopPropagation()
    // Add with default size and color
    addToCart(product, product.sizes[0] || 'M', product.colors[0] || 'Black')
    setSnackbarMessage(`${product.name} added to cart!`)
    setSnackbarOpen(true)
  }

  const handleWishlistToggle = (product, e) => {
    e.stopPropagation()
    const isInWishlist = wishlistItems.some((item) => item.id === product.id)
    if (isInWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const clearFilters = () => {
    setSelectedSizes([])
    setSelectedColors([])
    setSelectedTypes([])
    setPriceRange([0, 10000])
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbarOpen(false)
  }

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId)
  }

  // Filter sidebar content
  const FilterSidebar = () => (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-800">
        <h2 className="text-lg font-bold text-white uppercase">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-red-600 hover:text-red-700 text-xs font-medium uppercase"
        >
          Clear All
        </button>
      </div>

      {/* Results Count */}
      <div className="text-gray-400 text-xs">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
      </div>

      {/* Product Type Filter */}
      {!type && (
        <div>
          <h3 className="text-white font-semibold mb-2 text-xs uppercase tracking-wide">Product Type</h3>
          <div className="flex flex-wrap gap-1.5">
            {['basic', 'core', 'premium'].map((productType) => (
              <button
                key={productType}
                onClick={() => handleTypeFilter(productType)}
                className={`px-3 py-1.5 rounded text-xs border transition-all capitalize ${
                  selectedTypes.includes(productType)
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-red-600'
                }`}
              >
                {productType}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Filter */}
      <div>
        <h3 className="text-white font-semibold mb-2 text-xs uppercase tracking-wide">Size</h3>
        <div className="flex flex-wrap gap-1.5">
          {PRODUCT_SIZES.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeFilter(size)}
              className={`px-3 py-1.5 rounded text-xs border transition-all min-w-[40px] ${
                selectedSizes.includes(size)
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-red-600'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-white font-semibold mb-2 text-xs uppercase tracking-wide">Color</h3>
        <div className="flex flex-wrap gap-1.5">
          {PRODUCT_COLORS.map((color) => (
            <button
              key={color}
              onClick={() => handleColorFilter(color)}
              className={`px-3 py-1.5 rounded text-xs border transition-all ${
                selectedColors.includes(color)
                  ? 'bg-red-600 border-red-600 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-red-600'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-white font-semibold mb-2 text-xs uppercase tracking-wide">Price</h3>
        <div className="px-1">
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            min={0}
            max={10000}
            step={100}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `₹${value}`}
            size="small"
            sx={{
              color: '#DC2626',
              '& .MuiSlider-thumb': {
                backgroundColor: '#DC2626',
                width: 14,
                height: 14,
              },
              '& .MuiSlider-track': {
                backgroundColor: '#DC2626',
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#374151',
              },
            }}
          />
          <div className="flex justify-between text-gray-400 text-xs mt-1">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white">
                Home
              </button>
              <span className="text-gray-600">/</span>
              <button onClick={() => navigate('/collections')} className="text-gray-400 hover:text-white">
                Collections
              </button>
              <span className="text-gray-600">/</span>
              <span className="text-white capitalize">{category?.replace(/-/g, ' ')}</span>
              {type && (
                <>
                  <span className="text-gray-600">/</span>
                  <span className="text-white capitalize">{type}</span>
                </>
              )}
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Desktop Filters Sidebar */}
            <aside className="hidden lg:block lg:w-64">
              <div className="sticky top-20 bg-gray-900 p-4 rounded-lg border border-gray-800">
                <FilterSidebar />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header with Sort and Mobile Filter */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 capitalize">
                    Men's {type ? `${type} ` : ''}{category?.replace(/-/g, ' ')}
                  </h1>
                  <p className="text-gray-400 text-sm">
                    Showing {filteredProducts.length} of {SAMPLE_PRODUCTS.filter(p => p.category === category && (type ? p.type === type : true)).length} men's products
                  </p>
                </div>
                
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setMobileFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <FilterList />
                    <span>Filters</span>
                  </button>

                  {/* Sort Dropdown */}
                  <FormControl className="min-w-[180px]">
                    <Select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      sx={{
                        color: 'white',
                        backgroundColor: '#1F2937',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#374151',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#DC2626',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#DC2626',
                        },
                        '& .MuiSvgIcon-root': {
                          color: 'white',
                        },
                      }}
                    >
                      <MenuItem value="featured">Featured</MenuItem>
                      <MenuItem value="price-low">Price: Low to High</MenuItem>
                      <MenuItem value="price-high">Price: High to Low</MenuItem>
                      <MenuItem value="name">Name: A to Z</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {sortedProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => navigate(`/product/${product.id}`)}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      className="group bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative"
                    >
                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => handleWishlistToggle(product, e)}
                        className="absolute top-2 right-2 z-10 bg-black/50 backdrop-blur-sm p-1.5 rounded-full hover:bg-black/70 transition-all"
                      >
                        {isInWishlist(product.id) ? (
                          <Favorite className="text-red-600" sx={{ fontSize: 18 }} />
                        ) : (
                          <FavoriteBorder className="text-white" sx={{ fontSize: 18 }} />
                        )}
                      </button>

                      {/* Product Image */}
                      <div className="aspect-square overflow-hidden bg-gray-800 relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Quick Add Button on Hover */}
                        {hoveredProduct === product.id && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300">
                            <button
                              onClick={(e) => handleAddToCart(product, e)}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all transform hover:scale-105 flex items-center gap-1.5"
                            >
                              <ShoppingCart sx={{ fontSize: 18 }} />
                              <span>Quick Add</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="text-white font-semibold text-sm md:text-base mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-red-600 font-bold text-lg">₹{product.price}</p>
                          <div className="flex items-center gap-1">
                            {product.colors.slice(0, 3).map((color, idx) => (
                              <div
                                key={idx}
                                className="w-4 h-4 rounded-full border border-gray-600"
                                style={{
                                  backgroundColor: color.toLowerCase() === 'black' ? '#000' :
                                                  color.toLowerCase() === 'white' ? '#fff' :
                                                  color.toLowerCase() === 'red' ? '#DC2626' :
                                                  color.toLowerCase() === 'blue' ? '#2563EB' :
                                                  color.toLowerCase() === 'green' ? '#10B981' :
                                                  color.toLowerCase() === 'gray' ? '#6B7280' :
                                                  color.toLowerCase() === 'beige' ? '#D2B48C' :
                                                  color.toLowerCase() === 'navy' ? '#1E3A8A' : '#000'
                                }}
                                title={color}
                              />
                            ))}
                            {product.colors.length > 3 && (
                              <span className="text-gray-500 text-xs">+{product.colors.length - 3}</span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-400 text-xs mt-2">
                          Available in {product.sizes.join(', ')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-xl mb-4">No products found matching your filters.</p>
                  <button
                    onClick={clearFilters}
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <Drawer
          anchor="left"
          open={mobileFilterOpen}
          onClose={() => setMobileFilterOpen(false)}
          PaperProps={{
            sx: {
              width: '85%',
              maxWidth: 400,
              backgroundColor: '#111827',
              color: 'white',
            },
          }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Filters</h2>
              <IconButton onClick={() => setMobileFilterOpen(false)} className="text-white">
                <CloseIcon />
              </IconButton>
            </div>
            <FilterSidebar />
          </div>
        </Drawer>
      </main>
      <Footer />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: '70px' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', backgroundColor: '#16a34a', color: 'white' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default ProductDetailPage
