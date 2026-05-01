import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-clean">
      <div className="hero-background-base">
        <img src="src/assets/main_bg.jpg" alt="India Livestock Show 2027" />
        <div className="hero-simple-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content-simple">
          <div className="hero-location-label">
            <span>28, 29, 30 January 2027 • Coimbatore, India</span>
          </div>
          
          <h1 className="hero-title-neat">
            INDIA LIVESTOCK <br />
            SHOW 2027
          </h1>

          <p className="hero-tagline-neat">
            The Future of Livestock in South India
          </p>

          <div className="hero-actions-simple">
            <a href="#contact" className="btn btn-primary">Book Your Stall</a>
            <a href="#about" className="btn-outline-white">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
