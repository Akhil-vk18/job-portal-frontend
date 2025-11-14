import React from "react";
import Navbar from "./components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <AppRoutes />

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
