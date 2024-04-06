import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const duration = 18000; // 15 seconds in milliseconds
    const interval = setInterval(() => {
      if (counter >= 100) {
        clearInterval(interval);
      } else {
        setCounter(prevCounter => prevCounter + 1);
      }
    }, 147);
  
    // Clear the interval after the specified duration
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, duration);
  
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [counter]);
  


  return (
    <div className="Main_body">
      <div className="circle">
      <span id="number">{counter}%</span>

      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="59px"
        height="59px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          cx="29.5"
          cy="29.5"
          r="28"
          stroke="url(#GradientColor)"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default App;
