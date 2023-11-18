import React, { useEffect, useState } from "react";
import ResultImage from "../assets/results.png";
import "./ResultAnimation.css";

function ResultAnimation() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const animationSpeed = 2; // Adjust this for animation speed
    const animationInterval = setInterval(() => {
      setPosition((prevPosition) => ({
        top: prevPosition.top + animationSpeed,
        left: prevPosition.left + animationSpeed,
      }));
    }, 16); // About 60 frames per second

    return () => clearInterval(animationInterval);
  }, []);
  return (
    <div className="image-container">
      <img src={ResultImage} alt="Animated Image" className="diagonal-image" />
    </div>
  );
}

export default ResultAnimation;
