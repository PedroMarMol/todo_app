import React from "react"
import { useUserAuth } from "../context/AuthContext"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Account = (props) => {
  const style = {
    container: `text-center`,
    header: `text-3xl font-bold text-center text-gray-800 p-2`,
    info: `mb-2`,
    subheader: `text-xl`,
    button: `text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`,
  }
  const { user, logOut } = useUserAuth()
  const userId = user.uid
  const userEmail= user.email

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const handleLogout = async () => {
    try {
      toast.info('You are logging out');
      await delay(800) // delays the log out function
      await logOut()
    } catch (error) {
      toast.warn(error.message)
    }
  }
  
  return (
    <div className={style.container}>
      <h1 className={style.header}>Account Details</h1>
      <div className={style.info}>
        <p className={style.subheader}>User Email</p>
        {userEmail}
      </div>
      <div>
        <button onClick={handleLogout} className={style.button}>
            Logout
        </button>
      </div>
    </div>
  )
};

export default Account