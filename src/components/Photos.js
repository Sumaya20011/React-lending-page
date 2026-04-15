import React, { useState } from 'react';
import './Photos.css';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&h=500&fit=crop', thumb: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=150&h=150&fit=crop' },
  { id: 2, src: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=500&fit=crop', thumb: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=150&h=150&fit=crop' },
  { id: 4, src: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&h=500&fit=crop', thumb: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=150&h=150&fit=crop' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop', thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=150&h=150&fit=crop' },
  { id: 6, src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop', thumb: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=150&h=150&fit=crop' },
];

function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="photos">
      <h2 className="photos-title">Фотографии</h2>

      <div className="photos-main">
        <img src={photos[currentIndex].src} alt={`Фото ${currentIndex + 1}`} />
      </div>

      <div className="photos-thumbs-wrapper">
        <button className="photos-arrow photos-arrow-left" onClick={handlePrev}>
          ←
        </button>

        <div className="photos-thumbs">
          {photos.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.thumb}
              alt={`Миниатюра ${index + 1}`}
              className={`photo-thumb ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleThumbClick(index)}
            />
          ))}
        </div>

        <button className="photos-arrow photos-arrow-right" onClick={handleNext}>
          →
        </button>
      </div>
    </section>
  );
}

export default Photos;
