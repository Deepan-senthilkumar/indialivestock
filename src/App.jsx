import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Features from './components/Features';
import Profiles from './components/Profiles';
import Highlights from './components/Highlights';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Organizer from './components/Organizer';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Features />
        <Profiles />
        <Highlights />
        <Venue />
        <Gallery />
        <Organizer />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
