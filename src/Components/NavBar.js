import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <header>
            <nav>
                <div className="logo"><a href="/">Home</a></div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/project">Projects</a></li>
                    <li><a href="/publication">Publications</a></li>
                    <li><a href="/collaboration">Collaborations</a></li>
                    <li><a href="/award">Awards/Honours</a></li>
                    <li><a href="/people">People</a></li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
