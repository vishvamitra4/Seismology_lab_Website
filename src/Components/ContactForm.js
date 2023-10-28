import React from 'react';
import './ContactForm.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>
                    <strong>Dr. Marianne Karplus</strong>
                </p>
                <p>
                    <strong>Office:</strong> Geol 317
                </p>
                <p>
                    <strong>Telephone:</strong> 915-747-5413
                </p>
                <p>
                    <strong>Email:</strong> mkarplus (at) utep (dot) edu
                </p>
                <p>
                    <strong>Department of Geological Sciences</strong>
                </p>
                <p>University of Texas at El Paso</p>
                <p>500 W. University Ave.</p>
                <p>El Paso, TX 79968</p>
                <p>
                    <strong>Lab:</strong> Geol 210
                </p>
            </div>
            <img src="https://people.iitism.ac.in/~download/images/employee/1155/1155_2022_11_08_02_11_32.png" alt="Contact" className="contact-image" />
        </div>
    );
};

export default Contact;
