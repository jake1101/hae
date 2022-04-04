import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, initState, callback=null) => {
  const [isOutside, setIsOutside] = useState(initState);

  useEffect(() => {
    const clickHandler = e => {
      if(el.current !== null && !el.current.contains(e.target)) {
        callback && callback();
        setIsOutside(!isOutside);
      }
    };

    isOutside && window.addEventListener('click', clickHandler);
    return () => window.removeEventListener('click', clickHandler);
  }, [isOutside, el])

  return [isOutside, setIsOutside];
}