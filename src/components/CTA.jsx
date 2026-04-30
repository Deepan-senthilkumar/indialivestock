import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-card-industrial">
          <div className="cta-content">
            <h2>Ready to Secure Your Space?</h2>
            <p>Join 200+ global brands and showcase your innovations to 25,000+ trade visitors.</p>
          </div>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">Book Stall <ArrowRight size={18} /></a>
            <a href="#contact" className="btn btn-outline">Download Brochure</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
