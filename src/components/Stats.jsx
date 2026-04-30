import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: '200+', label: 'Exhibitors' },
    { number: '25,000+', label: 'Trade Visitors' },
    { number: '15,000+', label: 'Sq. Meters' },
    { number: '15+', label: 'Countries' },
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
