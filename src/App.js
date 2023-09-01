import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home/Homescreen";
import About from "./Pages/About/AboutPage";
import Footer from "./components/Footer";
import Project from "./Pages/Project/Project";
import ContactPage from "./Pages/Contact/ContactPage";
import BlogTemplate from "./components/ProjectTemplate";
function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    {
      path: "/project/:slug",
      element: <BlogTemplate />,
    },
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route path={route?.path} element={route?.element}></Route>
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
