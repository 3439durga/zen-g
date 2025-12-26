import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { FEATURED_CATEGORIES } from '../Utils/constants'
import { ChevronRight } from '@mui/icons-material'

const CollectionsPage = () => {
  const navigate = useNavigate()

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleCategoryClick = (category) => {
    navigate(`/collections/${category}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Men's Collections</h1>
        <p className="text-gray-400 text-center mb-12 text-lg">Explore our premium range of men's fashion</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {FEATURED_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.category)}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-gray-900 aspect-[3/4] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50"
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
                <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-red-500 transition-colors">
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
      </main>
      <Footer />
    </div>
  )
}

export default CollectionsPage

