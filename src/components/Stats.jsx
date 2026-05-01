import React from 'react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: '100+', label: 'Exhibitors' },
    { number: '500+', label: 'Buyer Seller Meetings' },
    { number: '2400', label: 'Sq.m Area' },
    { number: '5000+', label: 'Trade Visitors' },
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
