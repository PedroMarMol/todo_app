import React from 'react'
import { useUserAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { style } from '../utils/styles'

const Account = (props) => {
  const { user, logOut } = useUserAuth()
  const userEmail= user.email
  const userId = user.uid

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
    <div className='text-center'>
      <h1 className={style.header}>Account Details</h1>
      <div className={style.info}>
        <p className={style.subheader}>User Email</p>
        {userEmail}
        <p className={style.subheader}>User ID</p>
        {userId}
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