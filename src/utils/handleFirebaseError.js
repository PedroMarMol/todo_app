import { toast } from "react-toastify"

export default function handleFirebaseError(error) {
  switch (error.code) {
    case 'auth/invalid-email':
      toast.error('Invalid email!')
      break
    case 'auth/wrong-password':
      toast.error('Wrong password!')
      break
    case 'auth/email-already-in-use':
      toast.error('Email already in use!')
      break
    default:
      toast.error('Internal error')
      break
  }
}