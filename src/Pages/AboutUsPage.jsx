import { useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">About Us</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to ZEN-G, your premier destination for <strong className="text-white">men's fashion</strong> and style. We are
              committed to providing high-quality <strong className="text-white">men's clothing</strong> that combines comfort, style, and
              affordability.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              At ZEN-G, we believe that <strong className="text-white">men's fashion</strong> should be accessible to everyone. Our carefully
              curated collection includes a wide range of <strong className="text-white">men's products</strong> from basic essentials to
              premium pieces, all designed to help you express your unique style.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to empower men to look and feel their best through quality
              fashion choices. We source our <strong className="text-white">men's clothing</strong> from trusted manufacturers and ensure that
              every item meets our high standards for quality and style.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're looking for casual <strong className="text-white">men's wear</strong>, formal attire, or something in between,
              ZEN-G has something for every man. We continuously update our <strong className="text-white">men's collections</strong> to stay
              ahead of fashion trends while maintaining timeless appeal.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">ZEN-G - Men's Fashion, Your Style.</strong> Thank you for choosing ZEN-G. We're excited to be part of your fashion journey!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUsPage
