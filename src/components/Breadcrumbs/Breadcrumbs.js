import React from 'react';
import { Link } from 'react-router-dom';
import './styles/breadcrumbs.css'; 

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs-container">
      {items.map((item) => (
        <Link key={item.id} to={item.path} className="breadcrumb-item">
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Breadcrumbs;