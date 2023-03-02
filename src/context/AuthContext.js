import { 
	createContext, 
	useContext, 
	useEffect, 
	useState } from "react"
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"


const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const defaultPath = "/Signup"
	const [path, setPath] = useState(defaultPath)
	const [fetchingSession, setFetchingSession] = useState()


	const useCreateUser = (email, password) => {
	  return createUserWithEmailAndPassword(auth, email, password)
	}
	
	const useLogIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const useLogOut = () => {
		return signOut(auth)
	}

	useEffect(() => {
		setFetchingSession(true)
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
			setFetchingSession(false)
		})
			return () => unsubscribe()
	}, [])
	return (
	  <UserContext.Provider value={{ useCreateUser, user, useLogOut, useLogIn, path, setPath, fetchingSession }}> 
			{children}
	  </UserContext.Provider>
	)
}

export const UserAuth = () => {
  return useContext(UserContext)
}