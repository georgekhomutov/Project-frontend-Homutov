import React from 'react';
import './styles/footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p className="copyright">&copy; {year} Company Name</p>
    </footer>
  );
};

export default Footer;