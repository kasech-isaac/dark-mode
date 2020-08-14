import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';


const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage('dark-mode-enabled');
  useEffect(
    () => {
      const className = 'dark-mode';
      const element = window.document.body;
      if (someValue) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [someValue] 
  );
  return [someValue, setSomeValue];
};
export default useDarkMode;