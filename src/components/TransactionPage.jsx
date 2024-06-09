import React from 'react';
import './TransactionPage.css'; // Ensure this CSS file is created

function TransactionPage({ address, mobile, totalAmount }) {
  const handleContinueShopping = async () => {
    try {
      const response = await fetch('http://localhost:5000/items', { method: 'DELETE' });
      if (response.ok) {
        window.location.href = '/nav';
      } else {
        console.error('Failed to delete items:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to delete items:', error);
    }
  };

  return (
    <div className="transaction-page-overlay">
      <div className="transaction-page">
        <h2>Transaction Page</h2>
        <img src="https://cashfreelogo.cashfree.com/website/landings/instant-settlements/payment-done.png" style={{ width: '350px', height: '350px' }} alt="" />
        <div className="transaction-details">
          <p><strong>Food will be delivered to:</strong></p>
          <p><strong>Address:</strong> {address}</p>
          <p><strong>Mobile:</strong> {mobile}</p>
          <p><strong>Total Amount:</strong> ₹{totalAmount}</p>
          <button className='transbtn' onClick={handleContinueShopping}>continue shopping</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionPage;
