import { useEffect, useState } from 'react';

function useWindowDimension() {
  const [dimension, setDimension] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const resizeHandler = debounce(() => {
      setDimension([window.innerWidth, window.innerHeight]);
    }, 200); // ms

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return dimension;
}

const debounce = <T extends (...args: any[]) => any>(callback: T, waitFor: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(...args);
    }, waitFor);
    return result;
  };
};

export default useWindowDimension;
