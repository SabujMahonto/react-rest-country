import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='menu mt-1'>
            <h1>Welcome to Our rest countries</h1>
            <nav>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Countries">Countries</a>
                <a href="/Blogs">Blogs</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;