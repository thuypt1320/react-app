import React from 'react';
import { useEffect, useState } from 'react';

export const WindowDimension = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  return (
    <div>
      {' '}
      width: {width}; height: {height}
    </div>
  );
};

export const elementDimension = (selector = 'body') => {
  const element = window.document.querySelector(selector);
  if (element) {
    const width = element.clientWidth;
    const height = element.clientHeight;
    return { width, height };
  }
};
