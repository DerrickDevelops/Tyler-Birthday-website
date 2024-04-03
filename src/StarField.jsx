// StarField.jsx

import React, { useEffect } from 'react';

const StarField = () => {
  const numStars = 300;
  const minSize = 0.5;
  const maxSize = 1.5;

  useEffect(() => {
    const starsContainer = document.querySelector('.stars');

    const createStar = () => {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.width = `${randomSize(minSize, maxSize)}px`;
      star.style.height = `${randomSize(minSize, maxSize)}px`;
      star.style.left = `${randomPosition(0, 100)}%`;
      star.style.top = `${randomPosition(0, 100)}%`;
      starsContainer.appendChild(star);
    };

    const randomSize = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomPosition = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    for (let i = 0; i < numStars; i++) {
      createStar();
    }

    // Cleanup function to remove stars when component unmounts
    return () => {
      starsContainer.innerHTML = '';
    };
  }, []);

//   return <div className="stars" />;
};

export default StarField;
