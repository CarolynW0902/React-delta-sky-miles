import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> 
    </div>
  );
}

export default App;
