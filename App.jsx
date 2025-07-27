import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import CustomPackagePage from './pages/CustomPackagePage'
import LoginRegisterPage from './pages/LoginRegisterPage'
import EditPaymentMethod from './pages/EditPaymentMethod'
import PaymentPage from './pages/PaymentPage'
import Chatbot from './pages/Chatbot'

// Components
import ModernNavbar from './components/ModernNavbar'
import ModernFooter from './components/ModernFooter'
import { ToastProvider } from './components/ui/toast-provider'

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <ModernNavbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/customPackages" element={<CustomPackagePage />} />
            <Route path="/auth" element={<LoginRegisterPage />} />
            <Route path="/login" element={<LoginRegisterPage />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/edit-payment" element={<EditPaymentMethod />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>

          <ModernFooter />

          {/* Global Toast Provider */}
          <ToastProvider />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
