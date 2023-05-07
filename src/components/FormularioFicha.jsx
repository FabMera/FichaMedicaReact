import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Error from "./Error";
import { useNavigate } from "react-router";
import MiContext from "../Context/MiContext";

const FormularioFicha = ({ regiones }) => {
  const { pacientes, setPacientes } = useContext(MiContext);

  const {
    register,
    handleSubmit,
    reset,
    onChange,
    formState: { errors },
  } = useForm();

  const endPointCiudad = "/Ciudades.json";
  const [regionId, setRegionId] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [comunas, setComunas] = useState("");

  const handleSubmitForm = (data, e) => {
    e.preventDefault();
    setPacientes([...pacientes, data]);
    e.target.reset();
    console.log(pacientes);
  };

  const handleRegion = (e) => {
    const getRegionId = e.target.value;
    setRegionId(getRegionId);
    console.log(regionId);
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
  };

  const cleanInfo = () => {
    reset();
  };
  const navigate = useNavigate();

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="p-5 shadow rounded-4 bg-white mb-3 w-75 mx-auto"
    >
      <div className="mb-2">
        <label className="form-label">Rut Paciente</label>

        <div className="row d-flex justify-content-start">
          <div className="col col-md-6 col-lg-6">
            <input
              name="rut"
              className="form-control mr-2 "
              type="text"
              placeholder="digite su rut sin puntos ni guion"
              {...register("rut", {
                required: true,
                minLength: 9,
                maxLength: 9,
              })}
            />
            {errors.rut?.type === "required" && (
              <Error> *El campo Rut es obligatorio</Error>
            )}
            {errors.rut?.type === "minLength" && (
              <Error> *El campo rut debe tener 9 digitos</Error>
            )}
            {errors.rut?.type === "maxLength" && (
              <Error> *El campo rut debe tener 9 digitos</Error>
            )}
          </div>
        </div>
      </div>

      <div className="mb-2">
        <label className="form-label">Nombres</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese su Nombre"
          {...register("nombre", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.nombre?.type === "required" && (
          <Error> *El campo nombres es obligatorio</Error>
        )}
        {errors.nombre?.type === "pattern" && (
          <Error> *El campo nombres solo acepta letras</Error>
        )}
      </div>
      <div className="mb-2">
        <label className="form-label">Apellidos</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese sus Apellidos"
          {...register("apellido", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.apellido?.type === "required" && (
          <Error> *El campo apellidos es obligatorio</Error>
        )}
        {errors.apellido?.type === "pattern" && (
          <Error> *El campo apellidos solo acepta letras</Error>
        )}
      </div>
      <div className="mb-2">
        <label className="form-label">Direccion</label>
        <input
          className="form-control"
          type="text"
          placeholder="Ingrese su Direccion"
          {...register("direccion", { required: true })}
        />
        {errors.direccion?.type === "required" && (
          <Error> *El campo direccion es obligatorio</Error>
        )}
      </div>
      <div className="mb-2">
        <label className="form-label">Seleccione su Region y Comuna</label>
        <select
          name="region"
          className="form-select mb-4"
          type="text"
          {...register("region", {
            required: true,
            onChange: (e) => handleRegion(e),
          })}
        >
          <option value="">--Seleccione una Region--</option>
          {regiones.map((reg) => (
            <option key={reg.id} value={reg.id}>
              {reg.region}
            </option>
          ))}
        </select>
        {errors.region?.type === "required" && (
          <Error> *Debe seleccionar una Region</Error>
        )}
        {regionId ? (
          <select
            name="comunas"
            value={comunas}
            className="form-select"
            type="text"
            {...register("comunas", {
              required: true,
              onChange: (e) => handleComuna(e),
            })}
          >
            <option value="">--Seleccione una Comuna--</option>
            {ciudades[regionId - 1].comunas.map((ciu, index) => (
              <option key={index} value={ciu}>
                {ciu}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      {errors.comunas?.type === "required" && (
        <Error> *Debe seleccionar una Comuna</Error>
      )}

      <div className="mb-2">
        <label className="form-label">Email:</label>
        <input
          name="email"
          className="form-control"
          type="text"
          placeholder="Ej correo@correo.com"
          {...register(
            "email",
            { required: true },
            {
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            }
          )}
        />
        {errors.email?.type === "required" && (
          <Error> *El campo email es obligatorio</Error>
        )}
        {errors.email?.type === "pattern" && (
          <Error> *El campo email debe ser un correo valido</Error>
        )}
      </div>
      <div className="mb-2">
        <label className="form-label">Telefono: </label>
        <input
          className="form-control"
          type="tel"
          placeholder="Ej 912345678"
          {...register("telefono", {
            required: true,
            minLength: 9,
            maxLength: 9,
          })}
        />
        {errors.telefono?.type === "required" && (
          <Error> *El campo telefono es obligatorio</Error>
        )}
        {errors.telefono?.type === "minLength" && (
          <Error> *El campo telefono debe tener 9 digitos</Error>
        )}
        {errors.telefono?.type === "maxLength" && (
          <Error> *El campo telefono debe tener 9 digitos</Error>
        )}
      </div>

      <div className="mb-2">
        <label className="form-label">Fecha de Nacimiento:</label>
        <input
          className="form-control"
          type="date"
          {...register("date", { required: true })}
        />
      </div>
      {errors.date?.type === "required" && (
        <Error> *El campo fecha de nacimiento es obligatorio</Error>
      )}
      <div className="mb-2">
        <label className="form-label">Estado Civil:</label>
        <select
          className="form-select"
          type="text"
          {...register("estadoCivil", { required: true })}
        >
          <option value="">Escoga una opcion:</option>
          <option value="soltero">Soltero (a)</option>
          <option value="casado">Casado(a)</option>
        </select>
        {errors.estadoCivil?.type === "required" && (
          <Error> *Seleccione una opcion</Error>
        )}
      </div>
      <div className="mb-2">
        <label className="form-label">Comentarios</label>
        <textarea
          type="text"
          className="form-control mb-3"
          placeholder="Escriba su mensaje,maximo 30 caracteres"
          {...register("comentarios", {
            required: true,
            minLength: 10,
            maxLength: 30,
          })}
        />
      </div>
      {errors.comentarios?.type === "required" && (
        <Error> *El campo comentarios es obligatorio</Error>
      )}
      {errors.comentarios?.type === "minLength" && (
        <Error> *El campo comentarios debe tener minimo 10 caracteres</Error>
      )}
      {errors.comentarios?.type === "maxLength" && (
        <Error> *El campo comentarios debe tener maximo 30 caracteres</Error>
      )}
      <div className="mb-2 text-center">
        <button type="submit" className="btn btn-primary m-2 col-12 col-md-6">
          Guardar
        </button>
        <button
          onClick={() => cleanInfo()}
          type="button"
          className="btn btn-success m-2 col-12 col-md-6"
        >
          Limpiar
        </button>
        <button
          onClick={() => navigate("/")}
          type="button"
          className="btn btn-danger m-2 col-12 col-md-6"
        >
          Salir
        </button>
      </div>
    </form>
  );
};

export default FormularioFicha;
