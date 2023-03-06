import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/AuthContext'
import { HiOutlineMail } from 'react-icons/hi'
import { BiLockAlt } from 'react-icons/bi'
import { toast } from "react-toastify"

const LogIn = (props) => {
  const style = {
		bg: `max-w-[700px] mx-auto my-4`,
		container: `grid place-items-center gap-4`,
		header: `text-2xl font-bold py-2`,
		form: `grid place-items-center gap-4`,
		formContainer: `flex items-baseline`,
		inputContainer: `relative mb-3 xl:w-96 data-te-input-wrapper-init`,
		input: `w-241 peer min-h-[auto] rounded border-0 bg-transparent py-[0.32rem]
			px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100
			data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 
			dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`,
		label: `pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0]
			truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 
			ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary 
			peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] 
			motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-neutral-400`,
		button: `text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`
	}
	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
	const navigate = useNavigate()
	const { logIn } = useUserAuth()

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

	const useHandleSubmit = async (event) => {
		event.preventDefault()
		setError('')
		try {
      toast.info('You are logging in!')
      await delay(800)
			await logIn(email, password)
			navigate('/list')
		} catch(event) {
			setError(event.message)
			toast.warn(event.message)
		}
	}

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <img src='https://flowbite.com/docs/images/logo.svg' alt='deja vu logo'/>
        <h1 className={style.header}>Welcome back</h1>
        <form className={style.form} onSubmit={useHandleSubmit}>
          <div className={style.formContainer}>
            <HiOutlineMail size={17}/>
            <div className={style.inputContainer}>
              <input 
                onChange={(event) => setEmail(event.target.value)} 
                className={style.input}
                type='email'
                id='email'
                placeholder='E-mail address'
              />
              <label 
                className={style.label}
                htmlFor='email' 
              >
                Email
              </label>
            </div>
          </div>
          <div className={style.formContainer}>
            <BiLockAlt size={17}/>
            <div className={style.inputContainer}>
              <input 
                onChange={(event) => setPassword(event.target.value)} 
                className={style.input}
                type='password'
                id='password'
                placeholder='Password'
              />
              <label 
                className={style.label}
                htmlFor='password' 
              >
                Password
              </label>
            </div>
          </div>
          <button className={style.button}>
          	Log in to your account
          </button>
        </form>
        <p className='py-2'>
          Just getting started? <Link to='/signup' className='underline'>Create an account</Link>
        </p>
      </div>
    </div>
  )
};

export default LogIn;