import React from 'react';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import './Features.css';

const Features = () => {
  const exhibitors = [
    'Direct access to 25,000+ trade visitors',
    'Product launch platforms with media coverage',
    'Pre-scheduled B2B matchmaking sessions',
    'Exclusive networking with policy makers'
  ];

  const visitors = [
    '1000+ innovative products on display',
    'Technical seminars by global experts',
    'Live demonstrations of dairy machinery',
    'Government subsidy & loan guidance'
  ];

  return (
    <section className="dual-focus-section">
      <div className="dual-grid">
        <div className="focus-panel exhibit-panel">
          <div className="panel-content-wrapper left">
            <div className="panel-tag">Opportunities</div>
            <h2>Why Exhibit?</h2>
            <p>Position your brand at the center of the livestock technology revolution.</p>
            
            <ul className="focus-list">
              {exhibitors.map((item, i) => (
                <li key={i}>
                  <TrendingUp size={20} className="focus-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="btn btn-primary">Book Your Stall</a>
          </div>
        </div>

        <div className="focus-panel visit-panel">
          <div className="panel-content-wrapper right">
            <div className="panel-tag">Knowledge</div>
            <h2>Why Visit?</h2>
            <p>Upgrade your farm technology and knowledge with world-class insights.</p>
            
            <ul className="focus-list">
              {visitors.map((item, i) => (
                <li key={i}>
                  <CheckCircle2 size={20} className="focus-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="btn btn-brand-dark">Register to Visit</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
