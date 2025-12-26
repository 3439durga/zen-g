import HomePage from '../Pages/HomePage'
import CollectionsPage from '../Pages/CollectionsPage'
import ContactUsPage from '../Pages/ContactUsPage'
import AboutUsPage from '../Pages/AboutUsPage'
import WishListPage from '../Pages/WishListPage'
import SignInLoginPage from '../Pages/SignInLoginPage'
import GoToCartPage from '../Pages/GoToCartPage'
import SearchPage from '../Pages/SearchPage'
import ProductDetailPage from '../Pages/ProductDetailPage'
import ProductViewPage from '../Pages/ProductViewPage'

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/collections', element: <CollectionsPage /> },
  { path: '/collections/:category', element: <ProductDetailPage /> },
  { path: '/collections/:category/:type', element: <ProductDetailPage /> },
  { path: '/product/:productId', element: <ProductViewPage /> },
  { path: '/contact-us', element: <ContactUsPage /> },
  { path: '/about-us', element: <AboutUsPage /> },
  { path: '/wishlist', element: <WishListPage /> },
  { path: '/sign-in', element: <SignInLoginPage /> },
  { path: '/cart', element: <GoToCartPage /> },
  { path: '/search', element: <SearchPage /> },
]

