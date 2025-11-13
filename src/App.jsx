import React from "react";
import Navbar from "./components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import Job from "./pages/Job";
const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Job />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
