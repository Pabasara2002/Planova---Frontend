import React from 'react';
import './HeroSection.css'; // Import the CSS

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Your Vision. Your Style. Your Passion. Your Day. <br />
          We make it Happen.
        </h1>
        <p>We are The Wedding Planner.</p>
        <a href="#!" className="btn">Here We Are</a>
      </div>
    </section>
  );
};

export default HeroSection;
