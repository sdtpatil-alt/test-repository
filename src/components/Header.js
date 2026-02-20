import React from 'react';
// Test modification 3 - Modified Header.js
import './Header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
