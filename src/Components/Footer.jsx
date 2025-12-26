import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, YouTube, LinkedIn, CheckCircle } from '@mui/icons-material'
import { SOCIAL_MEDIA_LINKS } from '../Utils/constants'
import logoImage from '../assets/images/zen-g.webp'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const whyShopPoints = [
    'Contemporary Fashion That Keeps Up with You',
    'Effortless Online Shopping Experience',
    'Premium Fabrics, Trend-Driven Designs, & Smart Tailoring',
    'Seamless Shopping Flexibility - Shop Anywhere, Anytime',
    'Fashion for Every Season, Occasion & Mood',
  ]

  return (
    <footer className="bg-black mt-auto">
      {/* Why Shop Section */}
      <div className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Why Shop at ZEN-G?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {whyShopPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-red-600 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center max-w-3xl mx-auto text-sm md:text-base">
            Your men's wardrobe should work as hard as you do. ZEN-G makes men's fashion easy, exciting, and accessible—whether you're scrolling from your couch or browsing our men's collections.
          </p>
        </div>
      </div>

      {/* Upgrade Experience Section */}
      <div className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Upgrade Your Shopping Experience - Explore ZEN-G Today!
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6 text-sm md:text-base">
            Ready to redefine your men's wardrobe? Shop the latest men's fashion online. From comfortable men's hoodies and stylish men's t-shirts to premium men's jeans and trendy men's cargoes, ZEN-G has it all for the modern man.
          </p>
          <p className="text-white text-center font-semibold text-lg">
            Stay ahead of trends. Elevate your style. Shop ZEN-G now! 🔥
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <img 
                src={logoImage} 
                alt="ZEN-G Logo" 
                className="h-16 md:h-20 w-auto object-contain mb-4"
              />
              <p className="text-gray-400 text-sm mb-4">
                Premium men's fashion store offering the latest trends in men's clothing and accessories.
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a
                  href={SOCIAL_MEDIA_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook fontSize="small" />
                </a>
                <a
                  href={SOCIAL_MEDIA_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram fontSize="small" />
                </a>
                <a
                  href={SOCIAL_MEDIA_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <Twitter fontSize="small" />
                </a>
                <a
                  href={SOCIAL_MEDIA_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                  aria-label="YouTube"
                >
                  <YouTube fontSize="small" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedIn fontSize="small" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-us" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Return/Exchange Policy
                  </a>
                </li>
                <li>
                  <Link to="/contact-us" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/wishlist" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Download App Section */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Download App</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-black font-bold text-xs">App</span>
                      </div>
                      <div className="text-left">
                        <p className="text-white text-xs">Download on the</p>
                        <p className="text-white font-semibold text-sm">App Store</p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                        <span className="text-black font-bold text-xs">Play</span>
                      </div>
                      <div className="text-left">
                        <p className="text-white text-xs">Get it on</p>
                        <p className="text-white font-semibold text-sm">Google Play</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} ZEN-G. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
