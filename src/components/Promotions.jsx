import { Newspaper, Tv, Mail, MapPin, Globe } from 'lucide-react';
import './Promotions.css';

const Promotions = () => {
  const strategy = [
    { icon: <Newspaper />, title: 'Print Media', desc: 'English & Tamil Dailies' },
    { icon: <Tv />, title: 'Television', desc: 'National & Tamil Channels' },
    { icon: <Globe />, title: 'Digital Ads', desc: 'Google, FB, YT, WhatsApp' },
    { icon: <MapPin />, title: 'Outdoor', desc: 'Strategic Pole Signs' },
    { icon: <Mail />, title: 'Direct Reach', desc: 'Invitations & SMS' }
  ];

  return (
    <section id="promotions" className="promo-industrial-split">
      <div className="promo-container">
        
        {/* LEFT PANEL: BOLD TITLE */}
        <div className="promo-side-panel">
          <div className="side-content">
            <span className="side-badge">Strategy</span>
            <h2>Visibility <br/> & <span className="text-primary">Reach</span></h2>
            <div className="side-divider"></div>
            <p>Massive Marketing Impact Strategy for ILS 2027.</p>
          </div>
        </div>

        {/* RIGHT PANEL: CHANNELS */}
        <div className="promo-main-panel">
          <div className="channels-list">
            {strategy.map((item, i) => (
              <div key={i} className="channel-row">
                <div className="channel-icon">{item.icon}</div>
                <div className="channel-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Promotions;
