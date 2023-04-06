import axios from "axios";
import React, { useEffect, useState } from "react";

const FormularioFicha = ({ regiones }) => {
  const endPointCiudad = "/Ciudades.json";
  const [regionId, setRegionId] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [comunas, setComunas] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleRegion = (e) => {
    const getRegionId = e.target.value;
    setRegionId(getRegionId);
    console.log(getRegionId);
  };

  const dataCiudades = async () => {
    const response = await axios.get(endPointCiudad);
    const info = response.data.ciudades;
    setCiudades(info);
  };

  useEffect(() => {
    dataCiudades();
  }, [regiones]);

  const handleComuna = (e) => {
    const getComuna = e.target.value;
    setComunas(getComuna);
    console.log(getComuna);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="p-5 shadow rounded-4 bg-white mb-3"
    >
      <div className="mb-2">
        <label className="form-label">Nombres</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese su Nombre"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Apellidos</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese sus Apellidos"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Direccion</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese su Direccion"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Seleccione su Region y Comuna</label>
        <select
          name="region"
          onChange={(e) => handleRegion(e)}
          className="form-select mb-4"
          type="text"
        >
          <option value="">--Seleccione una Region--</option>
          {regiones.map((reg) => (
            <option key={reg.id} value={reg.id}>
              {reg.region}
            </option>
          ))}
        </select>
        {regionId && (
          <select
            value={comunas}
            onChange={(e) => handleComuna(e)}
            className="form-select"
            type="text"
          >
            <option value="">--Seleccione una Comuna--</option>
            {ciudades[regionId - 1].comunas.map((ciu, index) => (
              <option key={index} value={ciu}>
                {ciu}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="mb-2">
        <label className="form-label">Email:</label>
        <input
          className="form-control"
          type="email"
          placeholder="Ej correo@correo.com"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Telefono </label>
        <input
          className="form-control"
          type="text"
          placeholder="Escriba su numero de telefono"
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Fecha de Nacimiento</label>
        <input className="form-control" type="date" />
      </div>
      <div className="mb-2">
        <label className="form-label">Estado Civil</label>
        <select
          className="form-select"
          type="text"
          placeholder="Ingrese sus Apellidos"
        >
          <option value="">Escoga una opcion</option>
          <option value="soltero">Soltero (a)</option>
          <option value="casado">Casado(a)</option>
        </select>
      </div>
      <div className="mb-2">
        <label className="form-label">Comentarios</label>
        <textarea
          className="form-control mb-3"
          placeholder="Escriba su mensaje"
        />
      </div>
      <div className="mb-2 text-center">
        <button type="submit" className="btn btn-primary m-2">
          Guardar
        </button>
        <button type="button" className="btn btn-success m-2">
          Limpiar
        </button>
        <button type="button" className="btn btn-danger m-2">
          Salir
        </button>
      </div>
    </form>
  );
};

export default FormularioFicha;
