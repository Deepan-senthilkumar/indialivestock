import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import './Footer.css';
import orgLogo from '../assets/image.png';


const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Exhibitors', href: '#profiles' },
    { name: 'Visitors', href: '#features' },
    { name: 'Brochure', href: '#contact' },
    { name: 'Media', href: '#media' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-premium">
      <div className="container">
        <div className="footer-main-grid">
          {/* Left Column */}
          <div className="footer-brand-column">
            <div className="footer-logo-wrapper">
              <img src={orgLogo} alt="India Livestock Show 2027" className="footer-logo-main" />
            </div>
            <p className="footer-event-desc">
              South India's definitive B2B trade fair for livestock technology. 
              Connecting global innovation with the regional ecosystem.
            </p>
          </div>

          {/* Middle Column */}
          <div className="footer-links-column">
            <h4 className="footer-label">Quick Links</h4>
            <ul className="footer-nav-list">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <ChevronRight size={12} className="link-arrow" />
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="footer-info-column">
            <h4 className="footer-label">Event Details</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="footer-icon-minimal" />
                <span>Codissia Trade Fair Complex, Coimbatore</span>
              </li>
              <li>
                <Phone size={16} className="footer-icon-minimal" />
                <span>+91-9391391162, +91-9566187502</span>
              </li>
              <li>
                <Mail size={16} className="footer-icon-minimal" />
                <span>info@prompttradefairs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider-soft"></div>

        <div className="footer-bottom-strip">
          <p className="copyright-text">© 2027 India Livestock Show. All Rights Reserved.</p>
          <div className="footer-credit">
            <span>Developed and maintained by </span>
            <a href="https://oceansoftwares.com" target="_blank" rel="noopener noreferrer">
              Ocean Softwares
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
