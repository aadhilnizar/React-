import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(10); // Start from 10 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    if (isRunning) {
      // Run every 1 second
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1500);

      // Stop after 10 seconds
      timeout = setTimeout(() => {
        clearInterval(interval);
        setIsRunning(false);
      }, 10000);
    }

    // Cleanup on unmount or re-render
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRunning]);

  const startTimer = () => {
    setTimeLeft(10);
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="text-black bg-white">
      <h2>Countdown: {timeLeft}s</h2>
      <button onClick={startTimer} disabled={isRunning}>
        {isRunning ? "Running..." : "Start Countdown"}
      </button>
    </div>
  );
}

export default CountdownTimer;