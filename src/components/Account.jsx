import React from "react"
import { useUserAuth } from "../context/AuthContext"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Account = (props) => {
  const { user, logOut } = useUserAuth()
  const userId = user.uid
  const userEmail= user.email
  const toastStyling = 
  {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const handleLogout = async () => {
    try {
      toast.info('You are logging out', toastStyling);
      await delay(2000) // delays the log out function
      await logOut()
    } catch (error) {
      toast.warn(error.message,toastStyling)
    }
  }
  
  return (
    <div className="">
      <h1 className="text-2xl font-bold py-4">
          Account
      </h1>
      <p>User Email: {userEmail}</p>
      <p>User ID: {userId}</p>
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
          Logout
      </button>
    </div>
  )
};

export default Account