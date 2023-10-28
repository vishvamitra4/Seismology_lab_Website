import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg',
  'https://images.pexels.com/photos/8981855/pexels-photo-8981855.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/12068528/pexels-photo-12068528.jpeg?auto=compress&cs=tinysrgb&w=600',
]; // Add your image URLs here

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <div className="image-slider-container">
      <div className="image-slider">
        <img
          src={currentImage}
          alt="Slider"
          className="slider-image"
        />
        <div className="slider-text">
            <h1>Topic</h1>
            <h3>This is will be out text..</h3>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
