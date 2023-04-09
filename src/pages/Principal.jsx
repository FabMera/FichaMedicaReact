import React, { useContext, useEffect, useState } from "react";
import FormularioFicha from "../components/FormularioFicha";
import axios from "axios";
import MiContext from "../Context/MiContext";


const Principal = () => {
  const { pacientes, setPacientes } = useContext(MiContext);
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
    <>
      <div className="container">
        <h1 className="text-center m-3">Registro de Pacientes Ficha Medica</h1>
        <FormularioFicha
          regiones={regiones}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
      </div>
    </>
  );
};

export default Principal;
