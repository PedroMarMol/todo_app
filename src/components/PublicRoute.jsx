import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/AuthContext'

const PublicRoute = ({ children }) => {
  const { user } = useUserAuth()
  
  if (user) {
    return <Navigate to='/account' />
  }
  return children
}

export default PublicRoute