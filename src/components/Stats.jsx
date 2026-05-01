import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: '10,000+', label: 'Indigenous Live Cattle' },
    { number: '10+ Cr.', label: 'Prize Money' },
    { number: '1000+', label: 'Stall Exhibitors' },
    { number: '5 Lakh+', label: 'Expected Footfall' },
  ];

  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-flex">
          {stats.map((s, i) => (
            <div key={i} className="stat-block">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
