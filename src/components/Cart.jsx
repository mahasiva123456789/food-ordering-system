import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css'; // Ensure this CSS file is created
import payment from './payment.gif';
import qrcode from './qrcode.jpeg';
import qrscan from './qrscan.gif';
import TransactionPage from './TransactionPage'; // Ensure this component is created

function ItemList() {
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [showScanPage, setShowScanPage] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [timer, setTimer] = useState(null);
  const [amount, setAmount] = useState(1500);
  const [showTransactionPage, setShowTransactionPage] = useState(false); // State to show transaction page
  const [paymentOption, setPaymentOption] = useState(''); // State to track selected payment option
  const [errors, setErrors] = useState({}); // State for error messages

  useEffect(() => {
    fetchItems(); // Fetch items when component mounts
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      // Initialize quantity to 1 if not present
      const itemsWithQuantity = response.data.map(item => ({ ...item, quantity: item.quantity || 1 }));
      setItems(itemsWithQuantity);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  };

  const increaseQuantity = (itemId) => {
    const updatedItems = items.map(item => {
      if (item._id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedItems = items.map(item => {
      if (item._id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/items/${itemId}`);
      const updatedItems = items.filter(item => item._id !== itemId);
      setItems(updatedItems);
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const handleScanOptionClick = () => {
    setShowScanPage(true);
    startCountdown();
  };

  const handleScanPageClose = () => {
    setShowScanPage(false);
    resetCountdown();
  };

  const startCountdown = () => {
    setTimer(
      setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(timer);
            setShowScanPage(false);
          }
          return prevCountdown - 1;
        });
      }, 1000)
    );
  };

  const resetCountdown = () => {
    clearInterval(timer);
    setCountdown(60);
  };

  useEffect(() => {
    if (showScanPage && countdown === 0) {
      setShowScanPage(false);
    }
  }, [countdown, showScanPage]);

  const handlePayment = () => {
    const newErrors = {};
  
    // Validation: Check if address is filled
    if (address === '') newErrors.address = 'Please fill your address.';
    
    // Validation: Check if exactly ten numbers are added for mobile number
    if (mobile === '' || mobile.length !== 10 || isNaN(mobile)) {
      newErrors.mobile = 'Please fill a valid 10-digit mobile number.';
    }
  
    // Validation: Check if payment option is selected
    if (paymentOption === '') newErrors.paymentOption = 'Please select a payment option.';
  
    // Validation: Check if there is at least one item in the cart
    if (items.length === 0) newErrors.cart = alert('Please add at least one item to the cart.');
  
    setErrors(newErrors);
  
    // If there are errors, return and prevent further execution
    if (Object.keys(newErrors).length > 0) return;
  
    // Store order data in local storage
    const orderData = {
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        total: item.price * item.quantity
      })),
      totalAmount: calculateTotal(),
      address: address,
      mobile: mobile
    };
    localStorage.setItem('orderHistory', JSON.stringify(orderData));
  
    // Show the transaction page
    setShowTransactionPage(true);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      setAmount(value);
    } else if (name === "paymentOption") {
      setPaymentOption(value);
    }
  };

  return (
    <div className="container">
      {showTransactionPage && (
        <TransactionPage
          address={address}
          mobile={mobile}
          totalAmount={calculateTotal()}
        />
      )}
      <div className="cart-section">
        <h1>Shopping Cart 🛒</h1>
        <h2 style={{marginBottom:'25px'}}>{calculateTotalItems()} Items🥗</h2>
        <div className="item-header">
          <span>Product Details</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
        {items.map((item, index) => (
          <div key={index} className="item">
            <div className="item-details">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <button className="remove-button" onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            </div>
            <div className="quantity-control">
              <button onClick={() => decreaseQuantity(item._id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item._id)}>+</button>
            </div>
            <span className="item-price">₹{item.price}</span>
            <span className="item-total">₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="continue-shopping">
          <a href="/menupage">⬅️ Continue Shopping</a>
        </div>
      </div>
      <div className="summary-section">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Items</span>
          <span>{calculateTotalItems()}</span>
        </div>
        <div className="summary-item">
          <span>Total Cost</span>
          <span>₹{calculateTotal()}</span>
        </div>
        <div className="address-input">
          <h3>Address <span id='star'>*</span></h3>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Enter your address" 
            required // Add required attribute
          />
          {errors.address && <div className="error-message">{errors.address}</div>}
        </div>
        <div className="mobile-input">
          <h3>Mobile Number  <span id='star'>*</span></h3>
          <input 
            type="text" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            placeholder="Enter your mobile number" 
            required // Add required attribute
          />
          {errors.mobile && <div className="error-message">{errors.mobile}</div>}
        </div>
        <div className='payopt'>Payment Option  <span id='star'>*</span></div><br />
        <div className="payment-options">
          <div>
            <input style={{marginLeft:'20px'}}
              type="checkbox" 
              id="cashOnDelivery" 
              name="paymentOption" 
              value="cashOnDelivery" 
              onChange={handleChange}
              required // Add required attribute
            />
            <label className="radio-label" htmlFor="cashOnDelivery"style={{marginLeft:'10px',color:'grey'}}><strong>Cash On Delivery</strong></label>
          </div>
          <div className="paymethod" onClick={handleScanOptionClick} style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', marginLeft: '10px' }}>
            <img src={qrscan} style={{ width: "50px", height: "50px", marginTop:'20px' }} alt="qrscan" />
            <p style={{ marginTop: '20px' }}>Scan and Pay</p>
          </div>
          <div className="paymethod" style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', marginLeft: '10px' }}>
            <img src={payment} style={{ width: "50px", height: "50px", marginTop:'20px', marginLeft: '15px'}} alt="payment" />
            <p style={{ marginTop: '20px' }}>Online Payment</p>
          </div>
          {errors.paymentOption && <div className="error-message">{errors.paymentOption}</div>}
        </div>
        <button className="checkout-button" onClick={handlePayment}>Payment</button>
      </div>
      {showScanPage && (
        <div className="scan-page-overlay">
          <div className="scan-page">
            <h2>Scan and Pay</h2>
            <button onClick={handleScanPageClose}>✖</button>
            <img src={qrcode} alt="qrcode" />
            <p>{countdown}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemList;
