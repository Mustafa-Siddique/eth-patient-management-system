import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SuperUsers } from "./pages/SuperUsers";
import { Hospitals } from "./pages/Hospitals";
import { Doctors } from "./pages/Doctors";
import { Patient } from "./pages/Patient";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/superusers" element={<SuperUsers />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patient />} />
      </Routes>
    </div>
  );
}

export default App;
