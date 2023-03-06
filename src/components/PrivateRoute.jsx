import { React, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/AuthContext'
import { ImSpinner2 } from 'react-icons/im'

const PrivateRoute = ({ children }) => {
  const { user } = useUserAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Delay showing the loading icon for 2 seconds
    const delayLoading = setTimeout(() => {
      setIsLoading(false)
    }, 200)
    // Clean up the setTimeout when the component unmounts or the state changes
    return () => clearTimeout(delayLoading)
  }, [])

  return (
    <div>
      {isLoading ? (<ImSpinner2 size={30}/>) 
      : (
       user ? children : <Navigate to='/signup' />
      )}
    </div>
  )


}

export default PrivateRoute