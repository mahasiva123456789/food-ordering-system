import React, { useState, useEffect } from 'react';
import './OrderHistoryPage.css';
import Header from './Header';

function OrderHistoryPage() {
  const orderData = JSON.parse(localStorage.getItem('orderHistory'));
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isCancellable, setIsCancellable] = useState(true);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    if (!orderData) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsCancellable(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [orderData]);

  const handleCancelOrder = () => {
    if (isCancellable) {
      setIsCancelled(true);
      setIsCancellable(false);
      setTimeLeft(0);
      localStorage.removeItem('orderHistory');
      // Additional logic to update order status in backend can be added here
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="order-history-container">
      <Header />
      <div className='history-head'>
        <h1>Your <span>Orders</span></h1>
      </div>
      {orderData && !isCancelled && (
        <div className="order-details">
          <div className='history-left'>
            <h2>Order Details</h2>
            <p>Total Amount: ₹{orderData.totalAmount}</p>
            <p>Address: {orderData.address}</p>
            <p>Mobile: {orderData.mobile}</p>
          </div>

          <div className='history-right'>
            <h3>Items:</h3>
            <ul className="items-list">
              {orderData.items.map((item, index) => (
                <li key={index}>
                  <span>{item.name}</span> - Quantity: {item.quantity}, Total: ₹{item.total}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="cancel-order-section">
        <button
          onClick={handleCancelOrder}
          disabled={!isCancellable || isCancelled}
          className="cancel-button"
        >
          Cancel Order
        </button>
        {isCancelled && <p className="cancel-message">Your order has been cancelled.</p>}
        {orderData && (
          <p className="cancel-note">
            You can cancel your order within 10 minutes. Time left: {formatTime(timeLeft)}
          </p>
        )}
      </div>
    </div>
  );
}

export default OrderHistoryPage;
