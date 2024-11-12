import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Usestate from "./components/Usestate";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cart" element={<Usestate />} />
      </Routes>
    </Router>
  );
};

export default App;
