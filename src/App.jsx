import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/Principal";
import NotFound from "./pages/NotFound";
import MiContext from "./Context/MiContext";

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  useEffect(() => {
    const obtenerPacientes =
      JSON.parse(localStorage.getItem("pacientes")) ?? [];
    setPacientes(obtenerPacientes);
  }, []);
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  return (
    <>
      <MiContext.Provider value={{ pacientes, setPacientes }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="principal" element={<Principal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MiContext.Provider>
    </>
  );
};

export default App;
