import React from 'react';
import { Briefcase, Zap, Globe } from 'lucide-react';
import './Highlights.css';

const Highlights = () => {
  const steps = [
    {
      icon: <Briefcase size={32} />,
      title: 'B2B Matchmaking',
      desc: 'Direct interaction between global tech providers and local farmers.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation Launch',
      desc: 'Showcasing 50+ startups focused on dairy and poultry automation.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Export',
      desc: 'Dedicated wing for international trade policy and networking.'
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
          <span className="subtitle">Our Roadmap</span>
          <h2>Business Opportunities</h2>
          <p>A structured approach to maximize ROI for every stakeholder.</p>
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
