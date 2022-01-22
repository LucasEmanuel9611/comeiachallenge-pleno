import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Screens
import Home from '../pages/Home'
import Weather from '../pages/Weather'


export default function Rotas() {

  return (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/weather/:city" element={<Weather />} />
        </Routes>
      
  );
}
