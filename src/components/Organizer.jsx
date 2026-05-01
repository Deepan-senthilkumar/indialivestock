import { Award, Users, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import './Organizer.css';

import orgLogo from '../assets/image.png';

const Organizer = () => {
  return (
    <section className="section organizer-authority">
      <div className="container">
        <div className="authority-layout">
          {/* Left Side: Introduction & Stats */}
          <div className="authority-intro">
            <span className="subtitle">Legacy & Trust</span>
            <h2>The Organizer Authority</h2>
            <p className="intro-paragraph">
              Prompt Trade Fairs India Pvt Ltd is a premier B2B exhibition organizer 
              with a proven track record of creating high-impact industrial platforms 
              across South India.
            </p>

            <div className="authority-stats-strip">
              <div className="stat-item">
                <strong>1200+</strong>
                <span>Exhibitions</span>
              </div>
              <div className="stat-item">
                <strong>25+</strong>
                <span>Years</span>
              </div>
              <div className="stat-item">
                <strong>PAN</strong>
                <span>India</span>
              </div>
            </div>

            <ul className="authority-bullets">
              <li>
                <CheckCircle2 size={20} className="bullet-icon" />
                <div>
                  <strong>Strategic Alliances</strong>
                  <span>Partnered with major industrial & trade bodies.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="bullet-icon" />
                <div>
                  <strong>B2B Specialists</strong>
                  <span>Deep expertise in industrial and agricultural sectors.</span>
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="bullet-icon" />
                <div>
                  <strong>End-to-End Execution</strong>
                  <span>Comprehensive event management and lead generation.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Authority Showcase Card */}
          <div className="authority-showcase">
            <div className="showcase-card">
              <div className="card-top">
                <img src={orgLogo} alt="Prompt Trade Fairs" className="showcase-logo" />
              </div>
              
              <div className="card-middle">
                <div className="trust-metric">
                  <Award size={24} />
                  <div>
                    <strong>25+ Years Legacy</strong>
                    <span>Consistent Industry Leadership</span>
                  </div>
                </div>
                <div className="trust-metric">
                  <Globe size={24} />
                  <div>
                    <strong>Pan India Presence</strong>
                    <span>Exhibitions in all major cities</span>
                  </div>
                </div>
                <div className="trust-metric">
                  <Users size={24} />
                  <div>
                    <strong>1200+ Completed</strong>
                    <span>Proven Event Track Record</span>
                  </div>
                </div>
              </div>

              <div className="card-bottom">
                <div className="trust-badges">
                  <span className="badge">ISO 9001:2015</span>
                  <span className="badge">B2B SPECIALISTS</span>
                </div>
                <button className="btn btn-outline-white btn-full">
                  About Organizer <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizer;
