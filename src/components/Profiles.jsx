import { 
  Wheat, 
  FlaskConical, 
  Settings, 
  MonitorDot, 
  PawPrint, 
  Briefcase, 
  Microscope, 
  ShieldCheck,
  Truck
} 
from 'lucide-react';
import './Profiles.css';

const Profiles = () => {
  const exhibitorHub = [
    {
      icon: <Wheat size={32} />,
      title: 'Nutrition & Feed',
      items: ['Livestock Feed Manufacturers', 'Animal Nutrition', 'Feed Additives'],
      color: 'red'
    },
    {
      icon: <FlaskConical size={32} />,
      title: 'Health & Biotechnology',
      items: ['Veterinary Products & Services', 'Animal Biotechnology / Biosecurity', 'Herbal Animal Health Products', 'Pharmaceutical Products'],
      color: 'blue'
    },
    {
      icon: <Settings size={32} />,
      title: 'Machinery & Equipment',
      items: ['Cattle Feed Machinery', 'Farming Equipment', 'Packing Equipment & Materials', 'Egg Trays'],
      color: 'grey'
    },
    {
      icon: <MonitorDot size={32} />,
      title: 'Technology & Production',
      items: ['IT/Software Technologies', 'Incubation Systems', 'Animal Laboratory / Instruments', 'Livestock Technology & Product Traders'],
      color: 'dark'
    },
    {
      icon: <PawPrint size={32} />,
      title: 'Breeding & Agriculture',
      items: ['Animal Breeders', 'Cattle Farming', 'Meat & Meat Products', 'Fisheries & Agriculture'],
      color: 'red'
    }
  ];

  const visitorHub = [
    {
      icon: <Briefcase size={28} />,
      title: 'Business & Trade',
      items: ['Trade Industry & Trade Media', 'Investors & Entrepreneurs', 'Consultants']
    },
    {
      icon: <Microscope size={28} />,
      title: 'Science & Education',
      items: ['Scientists & Technologists','Agricultural Research Institutions', 'Educationalists & Students']
    },
    {
      icon: <PawPrint size={28} />,
      title: 'Field & Operations',
      items: ['Farmers', 'Farm Contractors', 'Dealers & Distributors']
    },
    {
      icon: <Truck size={28} />,
      title: 'Logistics & Governance',
      items: ['Transport & Logistics Experts', 'Government Authorities', 'Bankers']
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Global & Organizations',
      items: ['Importers & Exporters', 'Trade Organisations', 'NGOs']
    }
  ];

  return (
    <section id="profiles" className="section profiles-hub">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="hub-intro">
          <div className="hub-title-block">
            <div className="about-watermark">
              <img src="/download.png" alt="" />  
            </div>
            <span className="hub-badge">Industry Network</span>
            <h2>Who <span className="text-primary">Participates?</span></h2>
          </div>
          <p>
            Connecting the entire livestock value chain—from laboratory research to field production.
          </p>
        </div>

        {/* EXHIBITORS SMART GRID */}
        <div className="hub-grid exhibitors-hub">
          <div className="sub-hub-header">
            <h3>Exhibitor Profile</h3>
            <div className="accent-line"></div>
          </div>
          <div className="smart-cards">
            {exhibitorHub.map((card, i) => (
              <div key={i} className={`smart-card border-${card.color}`}>
                <div className="card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <ul>
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* VISITORS SMART GRID */}
        <div className="hub-grid visitors-hub">
          <div className="sub-hub-header">
            <h3>Visitor Profile</h3>
            <div className="accent-line"></div>
          </div>
          <div className="smart-cards">
            {visitorHub.map((card, i) => (
              <div key={i} className="smart-card visitor-card">
                <div className="card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <ul>
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Profiles;
