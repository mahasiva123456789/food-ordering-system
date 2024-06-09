import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Cbe.css'


const Cbe = () => {
      
       useEffect(() => {
              const boxes = document.querySelectorAll('.box1');
          
              boxes.forEach(box => {
                box.addEventListener('click', () => {
                  window.location.href = '/menupage';
                });
              });
          
              return () => {
                boxes.forEach(box => {
                  box.removeEventListener('click', () => {
                    window.location.href = '/menupage';
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
    <Header/>
    
    <div className='ctmcontainer'>
     <p id='loc'> Best Food in <span>Tirchy</span></p>
       <div className='showcase1'>
        <div className="box1"  >
              <img src='https://b.zmtcdn.com/data/pictures/chains/6/18938946/d74c31f2bde5530851209ad7790e2137_featured_v2.jpg?output-format=webp'></img>
              <div id='desc'>
              <b>AB's - Absolute Barbecues</b>
              <b id='rating'>4.4 ★</b>
              </div>
              <p id='add'>Lakshmi Mills, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 9 am - 10pm</p>
         
               </div>
        </div>
        <div className="box1">
              <img src='https://b.zmtcdn.com/data/pictures/chains/8/3000048/0fada51155b5fff789bf182ea730a0d0_featured_v2.jpg'></img>
              <div id='desc'>
              <b>Barbeque Nation</b>
              <b id='rating'>4.9 ★</b>
              </div>
              <p id='add'>Town Hall, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 11 am - 10pm</p>
              
               </div>
        </div>
        <div className="box1">
            <img src='https://b.zmtcdn.com/data/pictures/chains/0/3000040/aacc90b99aa895e44c8ef94d75bdad6d_featured_v2.jpg'></img>
              <div id='desc'>
              <b>KFC</b>
              <b id='rating'>3.9 ★</b>
              </div>
              <p id='add'>Podanur, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 9 am - 10pm</p>
              
               </div>
        </div>
    </div>
    <div className='showcase1'>
        <div className="box1">
              <img src='https://media.timeout.com/images/106035990/750/422/image.jpg'></img>
              <div id='desc'>
              <b>McDonald's</b>
              <b id='rating'>3.3 ★</b>
              </div>
              <p id='add'>Brookefields Mall, RS Puram, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 11 am - 09pm</p>
               
               </div>
        </div>
        <div className="box1">
              <img src='https://b.zmtcdn.com/data/pictures/chains/5/3000095/52a3b0fd51941d2fc936dbae5a202559.jpg'></img>
              <div id='desc'>
              <b>Pizza Hut</b>
              <b id='rating'>4.1 ★</b>
              </div>
              <p id='add'>Ganapathy, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 11 am - 10pm</p>
              
               </div>
        </div>
        <div className="box1">
              <img src='https://b.zmtcdn.com/data/pictures/chains/0/3002360/08c9ca1fa6ab9ac6aeafe2f4dcda1600_featured_v2.jpg'></img>
              <div id='desc'>
              <b>Burger King</b>
              <b id='rating'>4.0 ★</b>
              </div>
              <p id='add'>Brookefields Mall, RS Puram, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 10 am - 12pm</p>
              
               </div>
        </div>
    </div>
    <div className='showcase1'>
        <div className="box1">
              <img src='https://b.zmtcdn.com/data/pictures/2/19845882/86991ee26e68297bb23b42ac86f9d378_featured_v2.jpg?output-format=webp'></img>
              <div id='desc'>
              <b>SS Hyderabad Biryani</b>
              <b id='rating'>4.0 ★</b>
              </div>
              <p id='add'>Gandhipuram, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 11 am - 12pm</p>
              
               </div>
        </div>
        <div className="box1">
              <img src='https://b.zmtcdn.com/data/pictures/6/3000906/438afe834c4da77c486742528aacca61_featured_v2.jpg'></img>
              <div id='desc'>
              <b>Hotel Cheap and Best</b>
              <b id='rating'>4.0 ★</b>
              </div>
              <p id='add'>Town Hall, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 12 am - 10pm</p>
               </div>
        </div>
        <div className="box1">
              <img src='https://b.zmtcdn.com/data/pictures/chains/6/18938946/d74c31f2bde5530851209ad7790e2137_featured_v2.jpg?output-format=webp'></img>
              <div id='desc'>
              <b>AB's - Absolute Barbecues</b>
              <b id='rating'>4.4 ★</b>
              </div>
              <p id='add'>Lakshmi Mills, Coimbatore</p>

              <div id="time">
               <p id='timing'> opens : 9 am - 10pm</p>
               </div>
        </div>
        
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
    </div>
    </>
  )
}

export default Cbe
