import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Set visibility state based on whether element is in viewport
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

export default useScrollReveal;
