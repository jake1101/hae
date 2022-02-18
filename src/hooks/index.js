import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, initState) => {
  const [isActive, setIsActive] = useState(initState);

  useEffect(() => {
    const clickHandler = e => {
      if(el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if(isActive) {
      window.addEventListener('click', clickHandler);
    }

    return () => {
      window.removeEventListener('click', clickHandler);
    }
  }, [isActive, el])

  return [isActive, setIsActive];
}