import React from 'react'
import { PulseLoader } from 'react-spinners'

function LoadingIndicator() {
  return (
    <div className='flex justify-center m-10'>
      <PulseLoader color="#2F80ED" />
    </div>
  )
}

export default LoadingIndicator