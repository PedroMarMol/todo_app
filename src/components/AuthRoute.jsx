import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'
import LoadingIndicator from './LoadingIndicator'

const AuthRoute = ({ children, redirectPath, checkAuth }) => {
  const { user } = useUserAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [alertShown, setAlertShown] = useState(false)
  const navigate = useNavigate()

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
    if (!checkAuth(user) && !isLoading && !alertShown) {
      toast.warn(`You are not authorized to access this page.`)
      setAlertShown(true)
      setTimeout(() => {
        // Redirect the user to the appropriate page
        navigate(redirectPath)
      }, 2000)
    }
  }, [user, isLoading, alertShown, checkAuth, redirectPath, navigate])

  return (
    <div>
      {
          isLoading ? <LoadingIndicator />
        : checkAuth(user) ? children
        : null
      }
    </div>
  )
}

export const PublicRoute = ({ children }) => {
  const checkAuth = (user) => !user
  return <AuthRoute checkAuth={checkAuth} redirectPath="/account">{children}</AuthRoute>
}

export const PrivateRoute = ({ children }) => {
  const checkAuth = (user) => user
  return <AuthRoute checkAuth={checkAuth} redirectPath="/signup">{children}</AuthRoute>
}