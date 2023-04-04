import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./SlideShow.scss";

const SlideShow = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= photos.length ? 0 : nextIndex;
    });
  }

  function handlePrevClick() {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? photos.length - 1 : nextIndex;
    });
  }

  return (
    <div className="slide">
      <img
        className="slide__img"
        src={photos[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <div className="slide__buttonbar">
        <button className="slide__btn" onClick={handlePrevClick}>
            <FaChevronLeft className="slide__icons"/>
        </button>
        <button className="slide__btn" onClick={handleNextClick}>
            <FaChevronRight className="slide__icons"/>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
