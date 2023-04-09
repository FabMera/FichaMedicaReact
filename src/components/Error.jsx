import React from 'react'

const Error = ({children}) => {
  return (
    <div>
        <p className='text-center text-danger bold mt-2'>{children}</p>
    </div>
  )
}

export default Error