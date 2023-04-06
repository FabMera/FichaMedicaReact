import React, { useState, useEffect } from "react";
import Principal from "./pages/Principal";
import axios from "axios";

const App = () => {
  const endPointRegiones = "/Reg.json";

  const [regiones, setRegiones] = useState([]);

  const dataRegiones = async () => {
    const response = await axios.get(endPointRegiones);
    const info = response.data.regiones;
    setRegiones(info);
  };

  useEffect(() => {
    dataRegiones();
  }, []);

  return (
    <div className="container">
      <Principal regiones={regiones} />
    </div>
  );
};

export default App;
