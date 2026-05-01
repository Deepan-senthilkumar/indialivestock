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
      title: 'Health & Bio-Tech',
      items: ['Veterinary Products', 'Animal Biotechnology', 'Pharmaceutical Products'],
      color: 'blue'
    },
    {
      icon: <Settings size={32} />,
      title: 'Machinery & Tools',
      items: ['Cattle Feed Machinery', 'Farming Equipment', 'Packing Equipment'],
      color: 'grey'
    },
    {
      icon: <MonitorDot size={32} />,
      title: 'IT & Incubation',
      items: ['IT/Software Technologies', 'Incubation Systems', 'Technology Traders', 'Laboratory Instruments'],
      color: 'dark'
    },
    {
      icon: <PawPrint size={32} />,
      title: 'Breeding & Production',
      items: ['Animal Breeders', 'Meat and Meat Products', 'Fisheries & Agricultures'],
      color: 'red'
    }
  ];

  const visitorHub = [
    {
      icon: <Briefcase size={28} />,
      title: 'Business & Media',
      items: ['Trade Industry & Media', 'Investors & Entrepreneurs', 'Consultants', 'Bankers']
    },
    {
      icon: <Microscope size={28} />,
      title: 'Science & Research',
      items: ['Scientists & Technologists', 'Research Institutes']
    },
    {
      icon: <PawPrint size={28} />,
      title: 'Field & Farming',
      items: ['Progressive Farmers', 'Farm Contractors']
    },
    {
      icon: <Truck size={28} />,
      title: 'Logistics',
      items: ['Logistics Experts', 'Dealers & Distributors']
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Governance',
      items: ['Govt. Authorities', 'Importers and Exporters']
    }
  ];

  return (
    <section id="profiles" className="section profiles-hub">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="hub-intro">
          <div className="hub-title-block">
            <span className="hub-badge">Industry Network</span>
            <h2>Exhibitors <span className="text-primary">&</span> Visitors</h2>
          </div>
          <p>
            Connecting the entire livestock value chain—from laboratory research to field production.
          </p>
        </div>

        {/* EXHIBITORS SMART GRID */}
        <div className="hub-grid exhibitors-hub">
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
