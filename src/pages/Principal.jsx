import React from 'react'
import FormularioFicha from '../components/FormularioFicha'

const Principal = ({regiones,ciudades}) => {
  return (
    <>
        <h1 className='text-center m-3'>Registro de Pacientes Ficha Medica</h1>
        <FormularioFicha regiones={regiones} ciudades={ciudades}/>
    </>
  )
}

export default Principal