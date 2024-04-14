import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const clearTimer = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center mb-4">
        <h1>{formatTime(time)}</h1>
      </div>
      <div>
        <button
          className="btn btn-success m-2"
          onClick={isRunning ? null : startTimer}
        >
          Start
        </button>
        <button className="btn btn-danger m-2" onClick={clearTimer}>
          Clear
        </button>
        <Link to="/">
          <button className="btn btn-primary m-2">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Stopwatch;