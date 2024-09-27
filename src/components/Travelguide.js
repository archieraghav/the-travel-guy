import React from "react";
import './Travelguide.css';

function Travelguide({ history }) {
    const handleButtonClick = () => {
        history.push('/BlogForm'); // Navigate to '/BlogForm' when button is clicked
    };
    const handleImageClick = (destination) => {
        console.log(`Clicked on ${destination}`);
    };

    return (
        <div>
            <div className="featured">Travel Guides</div>
            {/* Image gallery */}
            <div className="image-gallery">
                <div className="image-container">
                    <img
                        src="/images/destination-1.jpg"
                        alt="Destination 1"
                        className="clickable-image"
                        onClick={() => handleImageClick('Destination 1')}
                    />
                    <div className="caption">HOW TO VISIT THE PYRAMIDS IN EGYPT</div>
                </div>
                <div className="image-container">
                    <img
                        src="/images/destination-2.jpg"
                        alt="Destination 2"
                        className="clickable-image"
                        onClick={() => handleImageClick('Destination 2')}
                    />
                    <div className="caption">NUSA PENIDA ISLAND GUIDE FOR BALI</div>
                </div>
                <div className="image-container">
                    <img
                        src="/images/destination-3.jpg"
                        alt="Destination 3"
                        className="clickable-image"
                        onClick={() => handleImageClick('Destination 3')}
                    />
                    <div className="caption">22 BEST THINGS TO DO IN JAPAN</div>
                </div>
                <div className="image-container">
                    <img
                        src="/images/destination-4.jpg"
                        alt="Destination 4"
                        className="clickable-image"
                        onClick={() => handleImageClick('Destination 4')}
                    />
                    <div className="caption">10 BEST THINGS TO DO AT MACHU PICCHU</div>
                </div>
                <div className="image-container">
                    <img
                        src="/images/destination-5.jpg"
                        alt="Destination 5"
                        className="clickable-image"
                        onClick={() => handleImageClick('Destination 5')}
                    />
                    <div className="caption">PETRA JORDAN TRAVEL GUIDE</div>
                </div>
                <div className="image-container">
                    <img
                        src="/images/destination-6.jpg"
                        alt="Destination 6"
                        className="clickable-image"
                        onClick={() => handleImageClick('Destination 6')}
                    />
                    <div className="caption">18 BEST WATERFALLS IN INDONESIA</div>
                </div>
            </div>
            <div className="button01">
                <button className="button" onClick={handleButtonClick}> ✈️ More Destinations</button>
            </div>
        </div>
    );
}

export default Travelguide;
