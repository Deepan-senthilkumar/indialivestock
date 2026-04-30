import React from 'react';
import { Newspaper, Tv, MessageSquare, Mail, Search, Share2, Video, Smartphone, Layout } from 'lucide-react';
import './Promotions.css';

const Promotions = () => {
  const channels = [
    { icon: <Newspaper />, name: 'Newspaper Ads', desc: 'English & Tamil coverage' },
    { icon: <Tv />, name: 'TV Promotions', desc: 'Regional channel spots' },
    { icon: <MessageSquare />, name: 'SMS Campaigns', desc: 'Targeted farmer outreach' },
    { icon: <Mail />, name: 'Email Marketing', desc: 'Trade visitor database' },
    { icon: <Search />, name: 'Google Ads', desc: 'Search & Display network' },
    { icon: <Share2 />, name: 'Social Media', desc: 'FB & Instagram ads' },
    { icon: <Video />, name: 'YouTube', desc: 'Video promotions' },
    { icon: <Smartphone />, name: 'WhatsApp', desc: 'Business broadcasts' },
    { icon: <Layout />, name: 'Outdoor Ads', desc: 'Hoardings & Billboards' },
  ];

  return (
    <section className="section promotions">
      <div className="container">
        <div className="section-title">
          <h2>Marketing & Promotions</h2>
          <p>Our extensive campaign to ensure maximum trade visitor turnout.</p>
        </div>

        <div className="promo-grid">
          {channels.map((c, i) => (
            <div key={i} className="promo-card slide-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="promo-icon">{c.icon}</div>
              <h4>{c.name}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
