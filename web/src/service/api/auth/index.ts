import { api } from ".."
import { 
  SignInWithEmailPasswordPayload, 
  SignInWithEmailPasswordResponse 
} from "./types"

function signInWithEmailPassword (payload: SignInWithEmailPasswordPayload) {
  return api.post<SignInWithEmailPasswordResponse>('/auth/login', payload)
}

export const authService = {
  signInWithEmailPassword
}