import React from "react";

const ResultadoApellido = ({ paciente }) => {
  return (
    <>
      <div className="container">
        <div className="bg-white  m-2 p-3 rounded shadow ">
          <p style={{ fontWeight: "bold" }}>
            Nombre Paciente :{paciente.nombre}
          </p>
          <p className="">Apellidos :{paciente.apellido}</p>
          <p className="">Rut :{paciente.rut}</p>
          <p className="">Email de Contacto:{paciente.email}</p>

          <div className="d-flex justify-content-between"></div>
        </div>
      </div>
    </>
  );
};

export default ResultadoApellido;
