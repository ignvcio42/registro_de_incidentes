import { Routes, Route, NavLink } from "react-router-dom";
import IncidentForm from "./components/IncidentForm";
import IncidentList from "./components/IncidentList";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Vistas */}
      <div className="px-4 py-12">
        <Routes>
          <Route path="/" element={<IncidentForm />} />
          <Route path="/incidentes" element={<IncidentList />} />
        </Routes>
      </div>
    </div>
  );
}
