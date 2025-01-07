import React from 'react';
import './Breadcrum.css';
import breadcrum_icon from '../../assets/breadcrum_arrow.png';
import { Link } from 'react-router-dom';

const Breadcrum = ({ product }) => {
  return (
    <div className='breadcrum'>
      <Link to="/">HOME</Link>
      <img src={breadcrum_icon} alt="arrow" className="breadcrumb-arrow" /> 
      <Link to={`/category/${product.category.toLowerCase()}`}>{product.category.toUpperCase()}</Link>
      <img src={breadcrum_icon} alt="arrow" className="breadcrumb-arrow" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
