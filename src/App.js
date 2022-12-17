import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Culture from "./components/Culture";
import Home from "./components/Home";
import Journalism from "./components/Journalism";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Reading from "./components/Reading";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aktualnosci" element={<News />} />
        <Route path="/publicystyka" element={<Journalism />} />
        <Route path="/czytelnia" element={<Reading />} />
        <Route path="/kultura" element={<Culture />} />
      </Routes>
    </>
  );
}

export default App;
