import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const NavBar = () => {
  // console.log(UserAuth)
  const style = {
    nav: `bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900`,
    navBar: `container flex flex-wrap items-center justify-between mx-auto`,
    buttons: `hidden w-full md:block md:w-auto`,
    logo: `h-6 mr-3 sm:h-9`,
    name: `self-center text-xl font-semibold whitespace-nowrap dark:text-white`,
    list: `flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`,
    defaultButton: `block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`,
    homeButton: `block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page`,
  }
  return (
    <nav className={style.nav}>
      <div className={style.navBar}>
        <Link to="/" className='flex items-center'>
          <img src="https://flowbite.com/docs/images/logo.svg" className={style.logo} alt="Deja Vu Logo" />
          <span className={style.name}>Deja Vu</span>
        </Link>
        <div className={style.buttons} id="navbar-default">
          <ul className={style.list}>
            <li>
              <Link to="/" className={style.homeButton}>Home</Link>
            </li>
            <li>
              <Link to="/login" className={style.defaultButton}>Log in</Link>
            </li>
            <li>
              <Link to="/list" className={style.defaultButton}>List</Link>
            </li>
            <li>
              <Link to="/account" className={style.defaultButton}>Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar