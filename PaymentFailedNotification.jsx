// PaymentFailedNotification.jsx
import React from 'react';
import './Notification.css';

const PaymentFailedNotification = ({ onRetry, onCancel }) => {
  return (
    <div className="notification-container">
      <div className="notification-box">
        <button className="close-button" onClick={onCancel}>✕</button>
        <div className="notification-icon error">❌</div>
        <h2 className="notification-title">There was a problem with your transaction</h2>
        <p className="notification-message">
          Please try adding funds with a different method
        </p>
        <div className="notification-actions">
          <button className="primary-button" onClick={onRetry}>Retry</button>
          <button className="secondary-button" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailedNotification;
