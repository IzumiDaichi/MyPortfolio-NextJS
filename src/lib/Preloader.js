// components/Preloader.js
import React from 'react';
import './Preloader.css'; // Optional for styling
import Loading from '../Images/loading.gif'
import Image from 'next/image';

const Preloader = () => {
  return (
    <div className="preloader">
      <Image layout='fill' src={Loading} alt="Loading..." />
    </div>
  );
};

export default Preloader;
