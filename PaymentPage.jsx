import React, { useState } from 'react';
import PaymentSuccessNotification from '../components/PaymentSuccessNotification';

const PaymentPage = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Simulate payment success
    setPaymentSuccess(true);
  };

  const handleCloseNotification = () => {
    setPaymentSuccess(false);
    window.location.href = '/'; // Redirect after close
  };

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>Make a Payment</h1>
      <p>Click the button below to simulate a payment:</p>
      <button onClick={handlePayment} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Pay Now
      </button>

      {paymentSuccess && (
        <PaymentSuccessNotification onClose={handleCloseNotification} />
      )}
    </div>
  );
};

export default PaymentPage;
