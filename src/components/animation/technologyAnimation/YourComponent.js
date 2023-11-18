import React from 'react';
import './YourComponent.css'; // Create this CSS file for styling

import cylinderImage from '../assets/technology.png';

const YourComponent = () => {
  return (
    <div className="cylinder-container">
      <img src={cylinderImage} alt="Cylinder" className="cylinder-image" />
    </div>
  );
}

export default YourComponent;
