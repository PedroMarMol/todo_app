import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
	const navigate = useNavigate()
	const { useCreateUser } = UserAuth()

	const HandleSubmit = async (event) => {
		event.preventDefault()
		setError('')
		try{
			await useCreateUser(email, password)
			navigate('/list')
		}	catch (event) {
			setError(event.message)
			alert(event.message)
		}

	}

  return (
  	<div className='max-w-[700px] mx-auto my-16 p-4'>
  	  <div>
  	    <h1 className='text-2xl font-bold py-2'>Sign up</h1>
  	    <p className='py-2'>
  	      <Link to='/login' className='underline'>Sign in</Link> if you already have an account.
  	    </p>
  	    <form onSubmit={HandleSubmit}>
  	      <div className='flex flex-col'>
  	        <label className='py-2 font-medium' htmlFor='email'>Email</label>
  	        <input 
  	          onChange={(event) => setEmail(event.target.value)} 
  	          className='border p-3' 
  	          type='email'
  	          id='email'
  	        />
  	      </div>
  	      <div className='flex flex-col py-2'>
  	        <label className='py-2 font-medium' htmlFor='password'>Password</label>
  	        <input 
  	          onChange={(event) => setPassword(event.target.value)} 
  	          className='border p-3' 
  	          type='password' 
  	        />
  	      </div>
  	      <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
  	        Sign Up
  	      </button>
  	    </form>
  	  </div>
  	</div>
  )
}