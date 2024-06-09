import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Cbe.css'
import './Header.css'


const Rest = () => {
      
       useEffect(() => {
              const boxes = document.querySelectorAll('.box1');
          
              boxes.forEach(box => {
                box.addEventListener('click', () => {
                 
                });
              });
          
              return () => {
                boxes.forEach(box => {
                  box.removeEventListener('click', () => {
                  });
                });
              };
            }, []);

            const [hotels, setHotels] = useState([]);

            useEffect(() => {
                const fetchHotels = async () => {
                    try {
                        const response = await axios.get('http://localhost:5000/hotels');
                        setHotels(response.data);
                    } catch (error) {
                        console.error('Error fetching hotels:', error);
                    }
                };
                fetchHotels();
            }, []);
        
            const renderNewHotels = () => {
                const newHotels = JSON.parse(localStorage.getItem('hotels')) || [];
                return newHotels.map((hotel, index) => (
                    <div key={index} className="box1">
                        <img src={hotel.hotelImage} alt="Hotel" />
                        <div id='desc'>
                            <b>{hotel.hotelName}</b>
                            <b id='rating'>{hotel.hotelRating} ★</b>
                        </div>
                        <p id='add'>{hotel.hotelPlace}</p>
                        <div id="time">
                            <p id='timing'>opens : {hotel.hotelTime}</p>
                        </div>
                    </div>
                ));
            };
        

  return (
    <>  
    <header className="header">
    <div className="nav-container">
      <a href="/">
        <p className="nav-item nav-item-left">Exit</p>
      </a>
    </div>
  </header>
      <div className='ctmcontainer'>
     <p id='loc'> Best Restaurant in <span>Tamilnadu</span></p>
        
        <div className='showcase1'>
                {hotels.map((hotel, index) => (
                    <div key={index} className="box1">
                        <img src={hotel.hotelImage} alt="Hotel" />
                        <div id='desc'>
                            <b>{hotel.hotelName}</b>
                            <b id='rating'>{hotel.hotelRating} ★</b>
                        </div>
                        <p id='add'>{hotel.hotelPlace}</p>
                        <div id="time">
                            <p id='timing'>opens : {hotel.hotelTime}</p>
                        </div>
                        
                    </div>
                ))}
                {renderNewHotels()}
            </div>
    
    </div>
    </>
  )
}

export default Rest
