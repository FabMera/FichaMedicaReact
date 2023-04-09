import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <div className="mt-5 p-5 text-dark text-center display-5 ">
      <p className="mt-5">404|Not Found Page</p>
      <p className="fw-bold">Vuelve a registrar tu ficha</p>
      <button onClick={()=>navigate('/')} className='btn btn-danger'>Regresar</button>
    </div>
  )
}

export default NotFound