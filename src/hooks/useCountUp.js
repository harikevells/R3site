import { useState, useEffect } from 'react';

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    // Extract numerical value from string if needed (e.g., "1000+" -> 1000)
    const targetNum = typeof target === 'string' ? parseInt(target.replace(/[^0-9]/g, '')) : target;
    
    if (isNaN(targetNum)) {
        setCount(target); // Fallback for non-numeric like "Many"
        return;
    }

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * targetNum);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Ensure final value reflects the original string format (e.g., adds back the "+")
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
};

export default useCountUp;
