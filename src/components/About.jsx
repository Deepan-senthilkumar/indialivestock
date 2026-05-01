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
              The India Livestock Show, held annually at the CODISSIA Trade Fair Complex in Coimbatore, is one of South India’s leading exhibitions for the livestock and agricultural sectors. It showcases innovations in animal husbandry, feed production, veterinary products, incubation systems, and processing technologies, while providing a strong platform for exhibitors to introduce advanced solutions to industry professionals. <br />
              <br/>
              The event also hosts conferences and knowledge-sharing sessions, bringing together breeders, farmers, exporters, and service providers. By encouraging collaboration, innovation, and sustainable practices, the India Livestock Show plays a vital role in advancing India’s livestock industry and supporting regional economic growth.</p>
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
