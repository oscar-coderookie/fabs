import React, {useState} from 'react';
import './Slide2.scss';

const Slide2 = ({photos}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
    };
  
    const handleNextClick = () => {
      setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
    };
  return (
    <div className="galeria">
    <div className="galeria__slide-container">
      {photos.map((image, index) => (
        <div
          className={`galeria__slide ${
            index === currentIndex ? 'galeria__slide--active' : ''
          }`}
          key={index}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <button className="galeria__prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="galeria__next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  </div>
  )
}

export default Slide2