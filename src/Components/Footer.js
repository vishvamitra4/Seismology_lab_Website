import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="institute-info">
                <img src="https://hindubabynames.info/wp-content/themes/hbn_download/download/education-companies/iit-dhanbad-logo.png" alt="Institute Logo" className="institute-logo" />
                <p className="institute-name">seismology lab @iitism</p>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()}.All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
