import React from 'react';
import { Briefcase, Zap, Globe } from 'lucide-react';
import './Highlights.css';

const Highlights = () => {
  const steps = [
    {
      icon: <Briefcase size={32} />,
      title: 'Premium Stalls',
      desc: 'Pre-fabricated aluminum octonorm systems with custom fascia and ply panels.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Full Utilities',
      desc: 'Includes spot lights, 5A power sockets, tables, chairs, and waste paper baskets.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Event Services',
      desc: 'Dedicated house-keeping, security, and drinking water provided at the venue.'
    }
  ];

  return (
    <section className="section highlights-unique">
      <div className="side-watermark left">
        <img src="/cow.png" alt="" />
      </div>
      <div className="side-watermark right">
        <img src="/cow.png" alt="" />
      </div>
      <div className="container">
        <div className="section-header center">
          <span className="subtitle">Convenience</span>
          <h2>Service to Exhibitors</h2>
          <p>We provide comprehensive on-site support to ensure a seamless exhibition experience.</p>
        </div>

        <div className="opp-simple-flow">
          {steps.map((step, i) => (
            <div key={i} className="opp-step-card">
              <div className="step-icon-circle">{step.icon}</div>
              <div className="step-text">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
