import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Homescreen";
import About from "./Pages/About/AboutPage";
import Footer from "./components/Footer";
import Project from "./Pages/Project/Project";
import ContactPage from "./Pages/Contact/ContactPage";
function App() {
  return (
    <div className="App">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/Project" element={<Project/>}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
