import { Plane, Train } from 'lucide-react';
import venueImg from '../assets/Codissia-Coimbatore.webp';
import './Venue.css';

const Venue = () => {
  return (
    <section id="venue" className="section venue-section">
      <div className="container">
        <div className="venue-card-industrial">
          <div className="venue-info-panel">
            <span className="badge">Location & Access</span>
            <h2>Codissia Trade Fair Complex</h2>
            
            <div className="address-block">
              <p>Avinashi Road, Coimbatore,</p>
              <p>Tamil Nadu, India.</p>
            </div>

            <p className="venue-description-text">
              Known as the <strong>"Manchester of South India,"</strong> Coimbatore is a thriving industrial hub. 
              The CODISSIA Trade Fair Complex is a world-class venue, perfectly equipped to host 
              South India's premier livestock event with state-of-the-art infrastructure.
            </p>

            <div className="access-metrics">
              <div className="metric-row">
                <Plane size={20} />
                <span>05 KM from Coimbatore International Airport</span>
              </div>
              <div className="metric-row">
                <Train size={20} />
                <span>15 KM from Coimbatore Railway Station</span>
              </div>
            </div>

            <p className="venue-description-text">
              The complex is strategically located for easy access via National Highways, 
              ensuring smooth transit for both domestic and international participants.
            </p>
            
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
            <img src={venueImg} alt="Venue Overview" />
            <div className="venue-badge-overlay">
              <h4>Premier Event Hub</h4>
              <p>Strategically located in South India's industrial core to maximize regional market access.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
