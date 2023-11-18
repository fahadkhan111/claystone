import './ExpertiseAnimation.css';
import expertise from '../assets/expertise.png'
function ExpertiseAnimation() {
  return (
    <div className="jellyfish-animation-container">
      <img src={expertise} alt="Jellyfish" className="animated-jellyfish" />
    </div>
  );
};

export default ExpertiseAnimation;
