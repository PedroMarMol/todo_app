import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  const style = {
    container: `text-center`,
    header: `text-2xl font-bold pt-2`,
    button: `text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`,
  }
  return (
    <div className={style.container}>
      <h1 className={style.header}>Make a To-Do list </h1>
      <h2>so you can keep your ideas in order</h2>
      <h3 className='py-4'>Never forget an appointment  again!</h3>
      <button className={style.button}><Link to='/signup'>Sign Up</Link></button>
      <button className={style.button}><Link to='/login'>Log In</Link></button>
    </div>
  )
}

export default Homepage