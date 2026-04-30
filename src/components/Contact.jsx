import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="split-layout">
          <div className="contact-info-panel">
            <div className="section-header">
              <span className="subtitle">Connect</span>
              <h2>Get in Touch</h2>
              <p>Assisting you with bookings, sponsorship, and registrations.</p>
            </div>

            <div className="contact-methods">
              <div className="method-item">
                <div className="m-icon"><Phone size={18} /></div>
                <div className="m-text">
                  <strong>Phone Support</strong>
                  <span>+91 91591 66466</span>
                </div>
              </div>
              <div className="method-item">
                <div className="m-icon"><Mail size={18} /></div>
                <div className="m-text">
                  <strong>Email Inquiry</strong>
                  <span>prompttradefairs@gmail.com</span>
                </div>
              </div>
              <div className="method-item">
                <div className="m-icon"><MapPin size={18} /></div>
                <div className="m-text">
                  <strong>Office Location</strong>
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form className="business-form">
              <div className="form-grid">
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="field">
                  <label>Mobile</label>
                  <input type="tel" placeholder="Phone Number" />
                </div>
              </div>
              <div className="field">
                <label>Inquiry</label>
                <select>
                  <option>Exhibitor Registration</option>
                  <option>Visitor Inquiry</option>
                  <option>Sponsorship</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Inquiry <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
