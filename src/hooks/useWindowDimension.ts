import { useEffect, useState } from 'react';
console.log('hi');

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

const debounce = <T extends (...args: unknown[]) => unknown>(callback: T, waitFor: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    let result: ReturnType<T> | undefined;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(...args) as ReturnType<T>;
    }, waitFor);
    return result;
  };
};

export default useWindowDimension;
