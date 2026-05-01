import { History, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-industrial">
      <div className="container">
        <div className="about-split-dense">
          <div className="about-content">
            <span className="subtitle">Welcome to ILS 2027</span>
            <h2>South India's Largest Livestock Industry Hub</h2>
            <p className="prose-business">
              The India Livestock Show is rapidly emerging as the largest and most influential among 
              South India. Our focus on innovation, sustainability, and regional market trends 
              stands out due to its sheer market size, consumption patterns, and rapid 
              industry transformation.
            </p>
            <p className="prose-business mt-small">
              Being South India’s one of the largest Livestock Industry, the sector has been 
              witnessing significant growth, driven by increasing demand for high-quality animal 
              products and modern breeding technologies.
            </p>
            
            <div className="value-pillars">
              <div className="pillar">
                <Target size={24} className="pillar-icon" />
                <div>
                  <h3>Innovation & Growth</h3>
                  <p>Setting the stage for leadership with insights and partnerships that shape the future.</p>
                </div>
              </div>
              <div className="pillar">
                <History size={24} className="pillar-icon" />
                <div>
                  <h3>Legacy Organizers</h3>
                  <p>Brought to you by Prompt Trade Fairs, with over 1200 successful exhibitions nationwide.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image-industrial">
            <img src="/real-about.jpg" alt="Livestock Industry Scale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
