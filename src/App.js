import React from "react";
import Rotas from "./routes/main.routes";
import {
  BrowserRouter as Router,

} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Rotas />
    </Router>
  );
}
