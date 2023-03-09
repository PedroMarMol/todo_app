import React from 'react'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Account from './components/Account' 
import { Route, Routes} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import List from './components/List'
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import { ToastContainer } from 'react-toastify'

function App() {
  const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`
    }
  return (
    <div className={style.bg}>
      <AuthContextProvider>
        <NavBar />
        <div className={style.container}>
          <Routes>
            <Route
              exact path='/'
              element={
                <Homepage />
              }
            />
            <Route 
              path='/login' 
              element={
                <PublicRoute>
                  <LogIn />
                </PublicRoute>}
            />
            <Route 
              path='/signup' 
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>}
            />
            <Route 
              path='/account'
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route
              path='/list'
              element={
                <PrivateRoute>
                  <List />
                </PrivateRoute>}
            />
            <Route
              path='*'
              element={
                <PrivateRoute>
                  <Homepage />
                </PrivateRoute>}
            />
          </Routes>  
        </div>
      </AuthContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;