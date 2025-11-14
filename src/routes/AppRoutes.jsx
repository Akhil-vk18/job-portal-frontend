import React from "react";
import Home from "../pages/Home";
import Job from "../pages/Job";
import { Route,Routes } from "react-router-dom";
function AppRoutes() {
  return (
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Job />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
