import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { TextField, Button } from '@mui/material'

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#4B5563',
                    },
                    '&:hover fieldset': {
                      borderColor: '#DC2626',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#DC2626',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#9CA3AF',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#4B5563',
                    },
                    '&:hover fieldset': {
                      borderColor: '#DC2626',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#DC2626',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#9CA3AF',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#4B5563',
                    },
                    '&:hover fieldset': {
                      borderColor: '#DC2626',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#DC2626',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#9CA3AF',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: '#4B5563',
                    },
                    '&:hover fieldset': {
                      borderColor: '#DC2626',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#DC2626',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#9CA3AF',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#DC2626',
                  '&:hover': {
                    bgcolor: '#B91C1C',
                  },
                  py: 1.5,
                }}
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">Our Location</h2>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576171!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactUsPage

