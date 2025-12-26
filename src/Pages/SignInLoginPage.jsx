import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { TextField, Button } from '@mui/material'
import { useAuth } from '../Utils/hooks'

const SignInLoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (phoneNumber.trim()) {
      login(phoneNumber)
      alert('Login successful!')
      navigate('/')
    } else {
      alert('Please enter your phone number')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">Sign In / Login</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <TextField
                fullWidth
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="Enter your phone number"
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
                Sign In / Login
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SignInLoginPage

