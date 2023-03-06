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


	const createUser = (email, password) => {
	  return createUserWithEmailAndPassword(auth, email, password)
	}
	
	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logOut = () => {
		return signOut(auth)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
		})
			return () => unsubscribe()
	}, [])
	return (
	  <UserContext.Provider value={{ createUser, user, logOut, logIn, path, setPath }}> 
			{children}
	  </UserContext.Provider>
	)
}

export const useUserAuth = () => {
  return useContext(UserContext)
}