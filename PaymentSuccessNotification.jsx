// PaymentSuccessNotification.jsx
import React, { useEffect, useState } from 'react';
import './Notification.css'; // Shared styles for all notifications

const PaymentSuccessNotification = ({ onClose }) => {
  const [timer, setTimer] = useState(22);

 const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          onClose(); // Auto-close after countdown
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onClose]);

  return (
    <div className="notification-container">
      <div className="notification-box">
        <button className="close-button" onClick={onClose}>✕</button>
        <div className="notification-icon">✅</div>
        <h2 className="notification-title">Payment Successful</h2>
        <p className="notification-message">Thank you for the payment</p>
        <div className="notification-actions">
          <button className="primary-button" onClick={onClose}>
            Redirect to Main Page
          </button>
        </div>
        <p className="redirect-timer">Page will be redirected in {timer} seconds</p>
      </div>
    </div>
  );
};

export default PaymentSuccessNotification;
