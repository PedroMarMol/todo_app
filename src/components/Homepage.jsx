import React from 'react'
import { Link } from 'react-router-dom'
import { style } from '../utils/styles'

function Homepage() {
  return (
    <div className='text-center'>
      <h1 className={style.header}>Make a To-Do list </h1>
      <h2>so you can keep your ideas in order</h2>
      <h3 className='py-4'>Never forget an appointment  again!</h3>
      <button className={style.button}><Link to='/signup'>Sign Up</Link></button>
      <button className={style.button}><Link to='/login'>Log In</Link></button>
    </div>
  )
}

export default Homepage