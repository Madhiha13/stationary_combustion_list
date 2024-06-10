import React from 'react';

const ProgressBar = ({ progress }) => {
  
  const filledRectangles = Math.floor(progress / (100 / 12));
  const rectangles = Array.from({ length: 12 }, (_, index) => {
    const isFilled = index < filledRectangles;

    return (
      <div
        key={index}
        className={`rectangle ${isFilled ? 'filled' : 'empty'}`}
      ></div>
    );
  });

  return (
    <div className="progress-bar">
      {rectangles}
    </div>
  );
};

export default ProgressBar;
