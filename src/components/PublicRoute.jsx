import { React, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'
import LoadingIndicator from './LoadingIndicator'

const PublicRoute = ({ children }) => {
  const { user } = useUserAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [alertShown, setAlertShown] = useState(false)

  useEffect(() => {
    // Delay showing the loading icon for 2 seconds
    const delayLoading = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    // Clean up the setTimeout when the component unmounts or the state changes
    return () => clearTimeout(delayLoading)
  }, [])

  useEffect(() => {
    // show the alert only if the user is not defined and the loading has finished
    if (user && !isLoading && !alertShown) {
      toast.warn('You are already logged in!')
      setAlertShown(true)
    }
  }, [user, isLoading, alertShown])

  return (
    <div>
      {
          isLoading ? <LoadingIndicator />
        : user ? <Navigate to='/account' /> 
        : children
      }
    </div>
  )
}

export default PublicRoute