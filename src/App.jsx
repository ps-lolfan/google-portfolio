import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DSA from "./pages/DSA";
import SystemDesign from "./pages/SystemDesign";
import Frontend from "./pages/Frontend";
import InterviewPrep from "./pages/InterviewPrep";
import Portfolio from "./pages/Portfolio";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <HeroSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/system-design" element={<SystemDesign />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
