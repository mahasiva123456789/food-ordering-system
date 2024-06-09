import React, { useState, useEffect } from 'react';
import './AdminForm.css';

const AdminForm = () => {
    const [hotelImage, setHotelImage] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [hotelPlace, setHotelPlace] = useState('');
    const [hotelTime, setHotelTime] = useState('');
    const [hotelRating, setHotelRating] = useState('');
    const [hotels, setHotels] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        // Fetch hotels data from local storage when the component mounts
        const storedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
        setHotels(storedHotels);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHotel = {
            hotelImage,
            hotelName,
            hotelPlace,
            hotelTime,
            hotelRating,
        };

        if (editIndex !== null) {
            const updatedHotels = [...hotels];
            updatedHotels[editIndex] = newHotel;
            localStorage.setItem('hotels', JSON.stringify(updatedHotels));
            setHotels(updatedHotels);
            setEditIndex(null);
            alert('Hotel edited successfully.');
        } else {
            const updatedHotels = [...hotels, newHotel];
            localStorage.setItem('hotels', JSON.stringify(updatedHotels));
            setHotels(updatedHotels);
            alert('Hotel added successfully.');
        }

        // Clear the form
        setHotelImage('');
        setHotelName('');
        setHotelPlace('');
        setHotelTime('');
        setHotelRating('');
    };

    const handleDelete = (index) => {
        const updatedHotels = [...hotels];
        updatedHotels.splice(index, 1);
        localStorage.setItem('hotels', JSON.stringify(updatedHotels));
        setHotels(updatedHotels);
        alert('Hotel deleted successfully.');
    };

    const handleEdit = (index) => {
        const hotelToEdit = hotels[index];
        setHotelImage(hotelToEdit.hotelImage);
        setHotelName(hotelToEdit.hotelName);
        setHotelPlace(hotelToEdit.hotelPlace);
        setHotelTime(hotelToEdit.hotelTime);
        setHotelRating(hotelToEdit.hotelRating);
        setEditIndex(index);
    };

    return (
        <>
            <div id='admin'>
                <h1 className="heading">Administrator <span>Panel</span></h1>
            </div>
            <div className="admincontent">
                <div className="left-container">
                    <form onSubmit={handleSubmit} className="form-group">
                        <label className="label">Hotel Image URL:</label>
                        <input 
                            type="text" 
                            value={hotelImage} 
                            onChange={(e) => setHotelImage(e.target.value)} 
                            className="input-field1"
                            required 
                        />
                        <br /><br />
                        <label className="label">Hotel Name:</label>
                        <input 
                            type="text" 
                            value={hotelName} 
                            onChange={(e) => setHotelName(e.target.value)} 
                            className="input-field2"
                            required 
                        />
                        <br /><br />
                        <label className="label">Place:</label>
                        <input 
                            type="text" 
                            value={hotelPlace} 
                            onChange={(e) => setHotelPlace(e.target.value)} 
                            className="input-field3"
                            required 
                        />
                        <br /><br />
                        <label className="label">Opening Time:</label>
                        <input 
                            type="text" 
                            value={hotelTime} 
                            onChange={(e) => setHotelTime(e.target.value)} 
                            className="input-field4"
                            required 
                        />
                        <br /><br />
                        <label className="label">Rating:</label>
                        <input 
                            type="text" 
                            value={hotelRating} 
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*\.?\d*$/.test(value) || value === '') {
                                    setHotelRating(value);
                                }
                            }} 
                            className="input-field5"
                            required 
                        />
                        <br /><br />
                        <button 
                            type="submit" 
                            className="submit-button"
                        >
                            {editIndex !== null ? 'Update Hotel' : 'Add Hotel'}
                        </button>
                    </form>
                    <a href="/rest"><button  className="submit-button2">Restaurant List</button></a>
                </div>
                <div className="right-container">
                    <h2 className="added-hotels">Added <span>Hotels</span></h2>
                    {hotels.map((hotel, index) => (
                        <div key={index} className="hotel-item">
                            <img src={hotel.hotelImage} alt="Hotel" className="hotel-image" />
                            <p className="hotel-details">
                                <span className="hotel-name">{hotel.hotelName}</span><br />
                                <span className="hotel-place">{hotel.hotelPlace}</span>
                            </p>
                            <button 
                                onClick={() => handleEdit(index)} 
                                className="edit-button"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => handleDelete(index)} 
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminForm;
