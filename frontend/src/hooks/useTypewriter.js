import { useState, useEffect } from 'react';

/**
 * Custom hook for typewriter text effect
 * @param {string} text - The full text to type out
 * @param {number} speed - Milliseconds per character (default: 38ms)
 * @param {number} startDelay - Milliseconds before typing begins (default: 600ms)
 * @returns {{ displayed: string, done: boolean }}
 */
export default function useTypewriter(text, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;
    let index = 0;

    setDisplayed('');
    setDone(false);

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        if (index <= text.length) {
          setDisplayed(text.slice(0, index));
        } else {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
