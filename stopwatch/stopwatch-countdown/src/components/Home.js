// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <Link to="/stopwatch">
          <button className="btn btn-primary m-2">Stopwatch</button>
        </Link>
        <Link to="/countdown">
          <button className="btn btn-primary m-2">Countdown</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;