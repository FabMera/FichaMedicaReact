import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import MiContext from "../Context/MiContext";
import ResultadoApellido from "../components/ResultadoApellido";
import Spinner from "../components/Spinner";

const Home = () => {
  const { pacientes } = useContext(MiContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState(""); //busqueda por includes en el apellido
  const [busqueda, setBusqueda] = useState([{}]); //muestro los resultados de search
  const [cargando, setCargando] = useState(false);
  const handleInput = (e) => {
    setSearch(e.target.value);
    searchPaciente(e.target.value);
  };

  const searchPaciente = (buscar) => {
    const resultado = pacientes.filter((paciente) => {
      if (
        paciente.apellido.toLowerCase().includes(buscar.toLocaleLowerCase())
      ) {
        return paciente;
      }
    });
    setCargando(true);
    setTimeout(() => {
      setBusqueda(resultado);
      setCargando(false);
    }, 3000);
  };
  console.log(pacientes);

  return (
    <>
      <div className="container bg-info shadow mt-5 rounded">
        <h1 className="text-center text-white p-4">Fichas de Pacientes</h1>
        <div className="row justify-content-center ">
          <div className="col-12 col-md-4 m-3">
            <button
              onClick={() => navigate("/principal")}
              className="btn btn-primary w-100"
            >
              Ingresar Ficha Paciente
            </button>
          </div>
          <div className="col-12 col-md-4 m-3">
            <input
              value={search}
              onChange={handleInput}
              className="form-control"
              type="search"
              placeholder="busqueda por apellido"
            />
          </div>
        </div>
      </div>
      {cargando ? <Spinner /> : null}
      {search.length > 0 &&
        busqueda.map((paciente) => {
          return (
            <>
              <ResultadoApellido paciente={paciente} />
            </>
          );
        })}
    </>
  );
};

export default Home;
