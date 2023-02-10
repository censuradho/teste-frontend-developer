import { SignInWithEmailPasswordPayload, SignInWithEmailPasswordResponse } from "@/service/api/auth/types"

export interface Auth {
  access_token: string
}

export interface AuthContextProps {
  auth: Auth | null
  onLoginWithEmailPassword: (payload: SignInWithEmailPasswordPayload) => Promise<SignInWithEmailPasswordResponse>
}