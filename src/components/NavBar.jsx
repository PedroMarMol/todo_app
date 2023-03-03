import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEllipsis, AiOutlineUser } from 'react-icons/ai'

const NavBar = () => {
  const style = {
    nav: `bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mb-5`,
    navBar: `container flex flex-wrap items-center justify-between mx-auto`,
    buttons: `hidden w-full md:block md:w-auto relative`,
    branding: `flex items-center`,
    logo: `h-6 mr-3 sm:h-9`,
    name: `self-center text-xl font-semibold whitespace-nowrap dark:text-white`,
    list: `flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`,
    defaultButton: `text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`,
    homeButton: `text-base block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page`,
    accountButton: `flex space-x-1 border border-gray-300 rounded-lg p-3 transition duration-2000 ease-in-out hover:shadow-xl`
  }

  const [extend, setExtend] = useState(false)
  
  const handleClick = () => {
    setExtend(!extend)
  }


  return (
    <nav className={style.nav}>
      <div className={style.navBar}>
        <Link to="/" className={style.branding}>
          <img src="https://flowbite.com/docs/images/logo.svg" className={style.logo} alt="Deja Vu Logo" />
          <span className={style.name}>Deja Vu</span>
        </Link>
        <div className={style.buttons} id="navbar-default">
          <ul className={style.list}>
            <li>
              <Link to="/" className={style.homeButton}>Home</Link>
            </li>
            <li>
              <Link to="/list" className={style.defaultButton}>List</Link>
            </li>
            <li>
              <button onClick={handleClick} className={style.accountButton}><AiOutlineEllipsis size={17}/><AiOutlineUser size={17}/></button>
              {extend && 
                <div className="absolute top-16 right-4 w-48 bg-white border rounded-lg">
                  <div className=''>
                    <ul className="pt-2 pb-1 px-3">
                      <li>
                        <Link to="/login" onClick={handleClick} className={style.defaultButton}>Log in</Link>
                      </li>
                      <li>
                        <Link to="/signup" onClick={handleClick} className={style.defaultButton}>Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='border-t border-gray-300'>
                    <ul className='pt-1 pb-2 px-3'>
                      <li>
                        <Link to="/account" onClick={handleClick} className={style.defaultButton}>Account Information</Link>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/pedro-martos-molero-172318124/" onClick={handleClick} className={style.defaultButton}>About the creator</a>
                      </li>
                    </ul>
                  </div>
                </div>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar