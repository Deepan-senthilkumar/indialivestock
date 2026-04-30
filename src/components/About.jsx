import React from 'react';
import { History, Target, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-industrial">
      <div className="container">
        <div className="about-split-dense">
          <div className="about-content">
            <span className="subtitle">About The Show</span>
            <h2>Bridging the Gap in Livestock Excellence</h2>
            <p className="prose-business">
              The India Livestock Show 2027 is a mission-driven B2B platform engineered 
              to accelerate the modernization of India's animal husbandry sector. 
              We bring together the brightest minds and the most advanced technologies 
              under one roof at Coimbatore.
            </p>
            
            <div className="value-pillars">
              <div className="pillar">
                <Target size={24} className="pillar-icon" />
                <div>
                  <h3>Direct B2B ROI</h3>
                  <p>Focused on converting booth traffic into long-term business contracts.</p>
                </div>
              </div>
              <div className="pillar">
                <Users size={24} className="pillar-icon" />
                <div>
                  <h3>Industry Network</h3>
                  <p>Unparalleled access to policy makers and industry decision leaders.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-industrial">
            <img src="/about-collage.png" alt="Show Scale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
