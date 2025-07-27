import { Toaster } from 'react-hot-toast'

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          color: '#1f2937',
          fontSize: '14px',
          fontWeight: '500',
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: '#ffffff',
          },
          style: {
            border: '1px solid rgba(16, 185, 129, 0.2)',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff',
          },
          style: {
            border: '1px solid rgba(239, 68, 68, 0.2)',
          },
        },
        loading: {
          iconTheme: {
            primary: '#8b5cf6',
            secondary: '#ffffff',
          },
          style: {
            border: '1px solid rgba(139, 92, 246, 0.2)',
          },
        },
      }}
    />
  )
}

export { ToastProvider }
