import axios from 'axios'
import toast from 'react-hot-toast'

// Base API configuration
const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    // Handle successful responses
    if (response.data?.message && response.config.method !== 'get') {
      toast.success(response.data.message)
    }
    return response
  },
  (error) => {
    // Handle error responses
    const message = error.response?.data?.message || 'Something went wrong'

    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      localStorage.removeItem('auth_token')
      localStorage.removeItem('user')
      window.location.href = '/login'
      toast.error('Session expired. Please login again.')
    } else if (error.response?.status === 429) {
      // Handle rate limiting
      toast.error('Too many requests. Please slow down.')
    } else if (error.response?.status >= 500) {
      // Handle server errors
      toast.error('Server error. Please try again later.')
    } else {
      // Handle other errors
      toast.error(message)
    }

    return Promise.reject(error)
  }
)

// API endpoints
export const endpoints = {
  // Auth endpoints
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    enable2FA: '/auth/enable-2fa',
    verify2FA: '/auth/verify-2fa',
  },

  // Event endpoints
  events: '/events',

  // Contact endpoints
  contact: '/contact',

  // Service endpoints
  services: '/services',

  // Custom package endpoints
  customPackage: '/custom-package',

  // Chatbot endpoints
  chatbot: '/chatbot',

  // Gallery endpoints
  gallery: '/gallery',

  // Payment endpoints
  payment: {
    createCheckout: '/payment/create-checkout',
  },

  // Cart endpoints
  cart: '/cart',

  // Utility endpoints
  health: '/health',
  securityStatus: '/security-status',
}

// Helper functions for common API calls
export const apiHelpers = {
  // Get with loading toast
  async getWithLoading(endpoint, loadingMessage = 'Loading...') {
    const loadingToast = toast.loading(loadingMessage)
    try {
      const response = await api.get(endpoint)
      toast.dismiss(loadingToast)
      return response
    } catch (error) {
      toast.dismiss(loadingToast)
      throw error
    }
  },

  // Post with success toast
  async postWithSuccess(endpoint, data, successMessage) {
    const response = await api.post(endpoint, data)
    if (successMessage) {
      toast.success(successMessage)
    }
    return response
  },
}

export default api
