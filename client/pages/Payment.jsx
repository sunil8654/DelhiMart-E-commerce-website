import React, { useState } from 'react';
import "./payment.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card payment
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [upiId, setUpiId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform payment processing logic here
    console.log('Payment submitted');
    if (paymentMethod === 'card') {
      // Process card payment
    } else {
      // Process UPI payment
    }
  };

  return (
    <div className='payment-container'>
      <h2>Payment Details</h2>
      <form className='payment-form ' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>
        
        {paymentMethod === 'card' && (
          <>
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="expiry">Expiry:</label>
              <input
                type="text"
                id="expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="name">Name on Card:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </>
        )}

        {paymentMethod === 'upi' && (
          <div>
            <label htmlFor="upiId">UPI ID:</label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
