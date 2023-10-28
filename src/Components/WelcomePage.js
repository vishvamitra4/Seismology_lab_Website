// WelcomePage.js
import React from 'react';
import './WelcomePage.css';

function WelcomePage() {
    return (
        <div className="welcome-page">
            <div className="side-text">
                <h1>Welcome to Our Website</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="side-images">
                <div className="image-grid">
                    <div className="image">
                        <img src="https://media.istockphoto.com/id/1365329728/photo/african-male-lion-wildlife-animal-black-and-white-but-with-colored-eyes.webp?b=1&s=170667a&w=0&k=20&c=htVsEvFs7iDLj5k3SWwfe9Su3QxorNxcYKHvgENPdF8=" alt="Image 1" />
                        <p>Image 1 Description</p>
                    </div>
                    <div className="image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQMjTBx4EJtyxJjGmJaFwJjj_yBFarB0xEg&usqp=CAU" alt="Image 2" />
                        <p>Image 2 Description</p>
                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="Image 3" />
                        <p>Image 3 Description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
