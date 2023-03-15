import { React, useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEllipsis, AiOutlineUser } from 'react-icons/ai'
import { useUserAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const NavBar = (props) => {
  const style = {
    nav: `bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded mb-5`,
    navBar: `container flex flex-wrap items-center justify-between mx-auto`,
    buttons: `w-full md:w-auto relative`,
    branding: `flex items-center`,
    logo: `h-6 mr-3 sm:h-9`,
    name: `self-center text-xl font-semibold whitespace-nowrap`,
    list: `flex items-center space-x-6 md:space-x-8 md:text-sm md:font-medium w-full md:w-auto`,
    listSm: `p-2 mt-2 md:p-0 md:mt-0`,
    defaultButton: `text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#2F80ED] md:p-0`,
    homeButton: `text-base block py-2 pl-3 pr-4 md:bg-transparent md:text-[#2F80ED] md:p-0 aria-current='page'`,
    accountButton: `flex space-x-1 border border-gray-300 rounded-lg p-3 transition duration-2000 ease-in-out hover:shadow-xl`
  }
  
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useUserAuth()
  const listItemRef = useRef()

  const handleClick = (event) => {
    if (listItemRef.current && !listItemRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [isOpen])

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  const handleLogOut = async () => {
    try {
      toast.info('You are logging out');
      await delay(800) // delays the log out function
      await logOut()
    } catch (error) {
      toast.warn(error.message)
    }
  }
  

  return (
    <nav className={style.nav}>
      <div className={style.navBar}>
        <Link to='/' className={style.branding}>
          <img src='https://flowbite.com/docs/images/logo.svg' className={style.logo} alt='Deja Vu Logo' />
          <span className={style.name}>Deja Vu</span>
        </Link>
        <div className={style.buttons} id='navbar-default'>
        <ul className={`${style.list} ${style.listSm}`}>
            <li>
              <Link to='/' className={style.homeButton}>Home</Link>
            </li>
            <li>
              <Link to='/list' className={style.defaultButton}>List</Link>
            </li>
            <li ref={listItemRef}>
              <button onClick={() => setIsOpen(!isOpen)} className={style.accountButton}><AiOutlineEllipsis size={17}/><AiOutlineUser size={17}/></button>
              {isOpen && 
                <div className='absolute top-16 right-4 w-48 bg-white border rounded-lg'>
                  <div className=''>
                    {/* show login/signup if user is undefined // show logout is defined */}
                    { !user && 
                      <ul className='pt-2 pb-1 px-3'>
                        <li>
                          <Link to='/login' className={style.defaultButton}>Log in</Link>
                        </li>
                        <li>
                          <Link to='/signup' className={style.defaultButton}>Sign Up</Link>
                        </li>
                      </ul>
                    }
                    { user &&
                      <ul className='pt-2 pb-1 px-3'>
                        <li>
                          <Link to='/' onClick={handleLogOut} className={style.defaultButton}>Log Out</Link>
                        </li>
                      </ul>
                    }
                  </div>
                  <div className='border-t border-gray-300'>
                    <ul className='pt-1 pb-2 px-3'>
                      <li>
                        <Link to='/account' className={style.defaultButton}>Account Information</Link>
                      </li>
                      <li>
                        <a href='https://www.linkedin.com/in/pedro-martos-molero-172318124/' className={style.defaultButton}>About the creator</a>
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
