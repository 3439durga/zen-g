import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, Favorite, Menu, Close } from '@mui/icons-material'
import { useCart, useWishlist, useSearch } from '../Utils/hooks'
import logoImage from '../assets/images/zen-g.webp';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)
  const { totalItems } = useCart()
  const { items: wishlistItems } = useWishlist()
  const { searchQuery, setSearchQuery } = useSearch()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const menuItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Collections',
      path: '/collections',
      hasDropdown: true,
    },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'About Us', path: '/about-us' },
  ]

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-[100] relative w-full">
      <div className="w-full relative">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="ZEN-G Logo" 
              className="h-10 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setIsCollectionsOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsCollectionsOpen(false)}
              >
                <Link
                  to={item.path}
                  className="text-white hover:text-red-600 transition-colors block py-2"
                >
                  {item.label}
                </Link>
                
                {/* Collections Dropdown - Full width responsive dropdown */}
                {item.hasDropdown && isCollectionsOpen && (
                  <>
                    <div
                      className="fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 py-6 shadow-2xl z-[9999] w-full"
                      onMouseEnter={() => setIsCollectionsOpen(true)}
                      onMouseLeave={() => setIsCollectionsOpen(false)}
                    >
                      <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
                          {['Hoodies', 'T Shirts', 'Jeans', 'Cargoes', 'Oversized T Shirts', 'Beige Jeans'].map((category) => (
                            <div key={category} className="space-y-2">
                              <h3 className="text-white font-semibold mb-3 text-sm md:text-base">{category}</h3>
                              {['Basic', 'Core', 'Premium'].map((type) => (
                                <Link
                                  key={type}
                                  to={`/collections/${category.toLowerCase().replace(/\s+/g, '-')}/${type.toLowerCase()}`}
                                  className="block text-gray-400 hover:text-red-600 transition-colors py-1 md:py-2 text-xs md:text-sm"
                                  onClick={() => setIsCollectionsOpen(false)}
                                >
                                  {type}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Invisible bridge to prevent gap */}
                    <div
                      className="absolute top-full left-0 right-0 h-2 -mt-2 z-[9998]"
                      onMouseEnter={() => setIsCollectionsOpen(true)}
                      onMouseLeave={() => setIsCollectionsOpen(false)}
                    />
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="bg-gray-900 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-64"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition-colors"
              >
                <Search />
              </button>
            </form>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative text-white hover:text-red-600 transition-colors"
            >
              <Favorite />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-white hover:text-red-600 transition-colors"
            >
              <ShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Sign In */}
            <Link
              to="/sign-in"
              className="hidden md:block text-white hover:text-red-600 transition-colors px-4 py-2 border border-gray-700 rounded hover:border-red-600"
            >
              Sign In
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/sign-in"
                className="text-white hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </nav>
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-4 flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="bg-gray-900 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 flex-1"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-lg"
              >
                <Search />
              </button>
            </form>
          </div>
        )}

        </div>
      </div>
    </header>
  )
}

export default Header

