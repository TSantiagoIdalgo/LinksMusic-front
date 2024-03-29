import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };
  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportWidth; 
};