import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Profiles from './components/Profiles';
import Promotions from './components/Promotions';
import Highlights from './components/Highlights';
import Venue from './components/Venue';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Profiles />
        <Promotions />
        <Highlights />
        <Venue />
      </main>
      <Footer />
    </div>
  );
}

export default App;
