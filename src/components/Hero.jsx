import React from 'react';
import { Calendar, MapPin, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-split">
          <div className="hero-content">
            <div className="hero-badge">
              <ShieldCheck size={14} />
              <span>India's Largest Livestock Trade Fair</span>
            </div>
            <h1>Empowering the <span>Indigenous Cattle</span> Heritage of India</h1>
            <p className="hero-lead">
              Connecting international tech providers with India's massive animal husbandry 
              ecosystem for three days of high-value networking and trade.
            </p>
            
            <div className="hero-details">
              <div className="detail-item">
                <Calendar size={20} />
                <span>July 15-17, 2027</span>
              </div>
              <div className="detail-item">
                <MapPin size={20} />
                <span>Codissia, Coimbatore</span>
              </div>
            </div>

            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">Book Your Stall</a>
              <a href="#about" className="btn btn-outline">Explore Event</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-container">
              <img src="/real-hero.jpg" alt="India Livestock Show Hall" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
