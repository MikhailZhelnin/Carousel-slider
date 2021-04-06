import React, { useState } from 'react';

import data from '../data';
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr';

import './Slider.css';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const { image } = data[current];

  const prevSlider = () => {
    setCurrent((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = data.length - 1;
      }
      return newIndex;
    });
  };

  const nextSlider = () => {
    setCurrent((index) => {
      let newIndex = index + 1;
      if (newIndex > data.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <div className="slider">
      <GrCaretPrevious className="slider__btn btn-prev" onClick={prevSlider} />
      <GrCaretNext className="slider__btn btn-next" onClick={nextSlider} />
      <img className="slider__img" src={image} alt="funny image" />
    </div>
  );
};

export default Slider;
