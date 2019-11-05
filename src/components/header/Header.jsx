import React, { Component } from 'react';
import styles from './Header.scss';

function Header() {
    return (
        <header className="hdr">
            <h1>Weather</h1>
            <input type="text" placeholder="Enter a City"></input>
        </header>
    );
}
export default Header;