import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/AuthContext'
import { HiOutlineMail } from 'react-icons/hi'
import { BiLockAlt } from 'react-icons/bi'
import { toast } from 'react-toastify'
import useInputVisibility from '../hooks/useInputVisibility'
import handleFirebaseError from '../utils/handleFirebaseError'
import addDelay from '../utils/addDelay'
import { style } from '../utils/styles'

const LogIn = (props) => {
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const { logIn } = useUserAuth()
  const isEmailFilled = useInputVisibility('inputEmail')
  const isPasswordFilled = useInputVisibility('inputPassword')

	const handleSubmit = async (event) => {
    event.preventDefault()
    toast.info('You are logging in!')
    try {
      await addDelay(1000)
			await logIn(email, password)
			navigate('/list')
		} catch(error) {
			handleFirebaseError(error)
    }
	}

return (
    <div className={style.bg}>
      <div className={style.container}>
        <img src='https://flowbite.com/docs/images/logo.svg' alt='deja vu logo'/>
        <h1 className={style.header}>Welcome back</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formContainer}>
            <HiOutlineMail size={17}/>
            <div className={style.inputContainer}>
              <input 
                onChange={(event) => setEmail(event.target.value)} 
                type='email'
                className='peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 &:not([data-te-input-placeholder-active]):placeholder:opacity-0'
                id='inputEmail'
              />
              <label 
                className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 ${isEmailFilled ? 'hidden' : ''}`}
                htmlFor='inputEmail' 
              > Email
              </label>
            </div>
          </div>
          <div className={style.formContainer}>
            <BiLockAlt size={17}/>
            <div className={style.inputContainer}>
              <input 
                onChange={(event) => setPassword(event.target.value)} 
                type='password'
                className='peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 &:not([data-te-input-placeholder-active]):placeholder:opacity-0'
                id='inputPassword'
              />
              <label 
                htmlFor='inputPassword' 
                className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200 ${isPasswordFilled ? 'hidden' : ''}`}
              > Password
              </label>
            </div>
          </div>
          <button className={style.button}> Log in to your account</button>
        </form>
        <p className='py-2'>
          Just getting started? <Link to='/signup' className='underline'>Create an account</Link>
        </p>
      </div>
    </div>
  )
}
export default LogIn;