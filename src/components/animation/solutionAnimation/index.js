import React from 'react'
import WaveAnimationImg from '../assets/solutions.png'
import "./solutionAnimation.css"
function SolutionAnimation() {
  return (
    <div className="solution-image-container">
    <img src={WaveAnimationImg} alt="Waving Image" className="waving-image"  />
  </div>
  )
}

export default SolutionAnimation
