import React, { useState, useEffect } from 'react';
import './Nav.css';
import background1 from "./background1.webp";
import Header from './Header';

const Nav = () => {
  const sentences = [
    "Order Fresh, Eat Fresh",
    "Savor Every Bite, Delivered Fast",
    "Hot Meals, Right to Your Door",
    "Convenient Home Delivery"
  ];

  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const handleSearch = () => {
    const selectedLocation = document.getElementById('locationselect').value;
    if (selectedLocation === "coimbatore") {
      window.location.href = '/Cbe';
    } else if (selectedLocation === "trichy") {
      window.location.href = '/trichy';
    } 
    else if (selectedLocation === "namakal") {
      window.location.href = '/namakkal';
    }
    
    else {
      alert('Select the Location');
    }
  };

  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        const newPosition = prevPosition + (1 * direction);
        if (newPosition >= 50 || newPosition <= -10) {
          setDirection(-direction);
        }
        return newPosition;
      });
    }, 20); // shorter interval for smoother movement

    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    const sentenceInterval = setInterval(() => {
      setSentenceIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % sentences.length;
        return newIndex;
      });
    }, 2000); // Change sentence every 3 seconds

    return () => clearInterval(sentenceInterval);
  }, []);

  useEffect(() => {
    setCurrentSentence(sentences[sentenceIndex]);
  }, [sentenceIndex]);

  return (
    <>
      <Header />
      <div id='heropage'>
        <div className="dropdowncontainer">
          <div className="text-container">
            <h1>{currentSentence}</h1>
            <p>Get It Delivered Right To Your Door!</p>
          </div>
          <div className="search-container">
            <select id='locationselect'>
              <option value="">Select the location</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="trichy">Trichy</option>
              <option value="namakal">Namakkal</option>
            </select>
            <button className='selectbtn' onClick={handleSearch}>SEARCH</button>
          </div>
          <div className="icon-container">
            <div className="icon">
              <span role="img" aria-label="Salad">🥗</span>
              <p>Salad</p>
            </div>
            <div className="icon">
              <span role="img" aria-label="Burger">🍔</span>
              <p>Burger</p>
            </div>
            <div className="icon">
              <span role="img" aria-label="Fries">🍟</span>
              <p>Pizza</p>
            </div>
            <div className="icon">
              <span role="img" aria-label="Drink">🍹</span>
              <p>Drink</p>
            </div>
            <div className="icon">
              <span role="img" aria-label="Meals">🍱</span>
              <p>Dessert</p>
            </div>
          </div>
        </div>

        <div id='navcontainer'>
          <img
            src="https://www.foodiv.com/wp-content/themes/foodiv/img/Best-Online-Food-Ordering-System.svg?tr=w-437,h-483"
            alt=""
            style={{ height: '470px', transform: `translateY(${position}px)`, transition: 'transform 0.02s linear' }}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
