import React, { useRef } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const photos = [
    { src: '/real-gallery1.jpg', label: 'B2B Networking' },
    { src: '/real-gallery2.jpg', label: 'Trade Show Floor' },
    { src: '/real-hero.jpg', label: 'Live Demonstrations' },
    { src: '/real-about.jpg', label: 'Technology Launch' },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Scroll by the width of the visible viewport
      const scrollAmount = current.clientWidth; 
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="media" className="section gallery-neat-section">
      <div className="container">
        <div className="gallery-header-flex">
          <div className="section-header">
            <span className="subtitle">Media</span>
            <h2>Exhibition Moments</h2>
          </div>
          <div className="gallery-controls">
            <button className="control-btn" onClick={() => scroll('left')} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button className="control-btn" onClick={() => scroll('right')} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-viewport-wrapper">
        <div className="gallery-viewport" ref={scrollRef}>
          <div className="gallery-shelf">
            {photos.map((photo, i) => (
              <div key={i} className="gallery-tile">
                <img src={photo.src} alt={photo.label} />
                <div className="tile-info">
                  <span>{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
