import React from 'react';
import { MapPin, Plane, Train, Car, Info } from 'lucide-react';
import './Venue.css';

const Venue = () => {
  const accessibility = [
    { icon: <Plane size={18} />, label: 'Airport', text: '15 Mins Drive' },
    { icon: <Train size={18} />, label: 'Railway', text: '20 Mins Drive' },
    { icon: <Car size={18} />, label: 'Parking', text: '2000+ Capacity' },
    { icon: <Info size={18} />, label: 'Hall Size', text: '30,000 Sq.Mtr' },
  ];

  return (
    <section id="venue" className="section venue-section">
      <div className="container">
        <div className="venue-card-industrial">
          <div className="venue-info-panel">
            <span className="subtitle">Location & Access</span>
            <h2>Codissia Trade Fair Complex</h2>
            
            <div className="address-block">
              <p>Avinashi Road, Coimbatore, Tamil Nadu, India.</p>
            </div>

            <div className="access-grid-dense">
              {accessibility.map((item, i) => (
                <div key={i} className="access-item-small">
                  <div className="icon-wrapper" style={{ color: 'var(--primary)' }}>{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-brand-dark"
            >
              Get Directions
            </a>
          </div>

          <div className="venue-visual-large">
            <img src="/venue.png" alt="Venue Overview" />
            <div className="venue-badge-overlay">
              <h4>Hall A, B & C</h4>
              <p>State-of-the-art infrastructure for international B2B events with centralized AC.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
