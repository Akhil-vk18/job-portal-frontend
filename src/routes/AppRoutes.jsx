import React from "react";
import Home from "../pages/Home";
import Job from "../pages/Job";
import { Route,Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contacts";
function AppRoutes() {
  return (
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default AppRoutes;
