import React from "react"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { UserAuth } from "../context/AuthContext"

const Account = (props) => {
  const { user, useLogOut } = UserAuth()
  const userId = user.uid
  const userEmail= user.email

  const useHandleLogout = async () => {
    toast("You are logging out")
    try {
      await useLogOut()
      // navigate('/homepage') // maybe it is not needed
    } catch (event) {
      alert(event.message)
    }
  }
  
  return (
    <div className="">
      <h1 className="text-2xl font-bold py-4">
          Account
      </h1>
      <p>User Email: {userEmail}</p>
      <p>User ID: {userId}</p>
      <button onClick={useHandleLogout} className="border px-6 py-2 my-4">
          Logout
      </button>
      <ToastContainer />
    </div>
  )
};

export default Account