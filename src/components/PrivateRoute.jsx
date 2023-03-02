import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { ImSpinner2 } from 'react-icons/im'

const PrivateRoute = ({ children }) => {
  const { user, fetchingSession } = UserAuth()
  if (fetchingSession) {
    return <ImSpinner2 size={30}/> // Improve styling
  } if (!user) {
    return <Navigate to='/signup' />
  }
  return children
}

export default PrivateRoute