// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/countdown" element={<Countdown />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;