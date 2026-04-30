import React from 'react';
import { 
  Package, Shield, Microscope, Settings, 
  Droplets, Pill, Sun, Building
} from 'lucide-react';
import './Profiles.css';

const Profiles = () => {
  const sectors = [
    { icon: <Package />, name: 'Livestock Feed', desc: 'Advanced nutrition solutions' },
    { icon: <Shield />, name: 'Veterinary', desc: 'Healthcare & medicine' },
    { icon: <Microscope />, name: 'Biotech', desc: 'Genetics & breeding' },
    { icon: <Settings />, name: 'Machinery', desc: 'Dairy & farm automation' },
    { icon: <Droplets />, name: 'Equipment', desc: 'Modern farm tools' },
    { icon: <Pill />, name: 'Pharma', desc: 'Animal life sciences' },
    { icon: <Sun />, name: 'Incubation', desc: 'Poultry tech' },
    { icon: <Building />, name: 'Trade Org', desc: 'Global associations' },
  ];

  return (
    <section id="profiles" className="section sectors-block-section">
      <div className="container">
        <div className="section-header center">
          <span className="subtitle">Scope</span>
          <h2>Major Industry Verticals</h2>
          <p>Structured exhibition zones covering the complete B2B livestock ecosystem.</p>
        </div>

        <div className="sectors-block-grid">
          {sectors.map((sector, i) => (
            <div key={i} className="sector-block-item">
              <div className="s-block-icon">{sector.icon}</div>
              <div className="s-block-text">
                <h3>{sector.name}</h3>
                <p>{sector.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
