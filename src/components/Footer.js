import React from 'react';
import './Footer.css';

const Footer = ({ year }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} Webhook Test Application. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#support">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
