import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Countdown = () => {
  const [countdownTime, setCountdownTime] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);

  const handleNumberClick = (num) => {
    if (!isRunning) {
      let newTime = countdownTime.replace(/:/g, "");
      newTime += num;
      newTime = newTime.slice(-6); // Take the last 6 characters to ensure the format
      const hours = parseInt(newTime.slice(0, 2), 10);
      const minutes = parseInt(newTime.slice(2, 4), 10);
      const seconds = parseInt(newTime.slice(4), 10);
      let adjustedSeconds = seconds;
      let adjustedMinutes = minutes;
      let adjustedHours = hours;
      if (adjustedSeconds >= 60) {
        adjustedMinutes += Math.floor(adjustedSeconds / 60);
        adjustedSeconds %= 60;
      }
      if (adjustedMinutes >= 60) {
        adjustedHours += Math.floor(adjustedMinutes / 60);
        adjustedMinutes %= 60;
      }
      adjustedSeconds = adjustedSeconds.toString().padStart(2, "0");
      adjustedMinutes = adjustedMinutes.toString().padStart(2, "0");
      adjustedHours = adjustedHours.toString().padStart(2, "0");
      setCountdownTime(
        `${adjustedHours}:${adjustedMinutes}:${adjustedSeconds}`
      );
    }
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCountdownTime((prevTime) => {
          const [hours, minutes, seconds] = prevTime.split(":").map(Number);
          if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            setIsRunning(false);
            return prevTime;
          }
          let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
          const newHours = Math.floor(totalSeconds / 3600);
          totalSeconds %= 3600;
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          return `${String(newHours).padStart(2, "0")}:${String(
            newMinutes
          ).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const clearCountdown = () => {
    setCountdownTime("00:00:00");
    setIsRunning(false);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center mb-4">
        <h1>{countdownTime}</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center mb-4">
        {[...Array(10).keys()].map((num) => (
          <button
            key={num}
            className="btn btn-primary m-2"
            onClick={() => handleNumberClick(num)}
            disabled={isRunning}
          >
            {num}
          </button>
        ))}
      </div>
      <div>
        <button
          className="btn btn-success m-2"
          onClick={startCountdown}
          disabled={isRunning}
        >
          Start
        </button>
        <button className="btn btn-danger m-2" onClick={clearCountdown}>
          Clear
        </button>
        <Link to="/">
          <button className="btn btn-primary m-2">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Countdown;