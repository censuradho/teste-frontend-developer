import { SignInWithEmailPasswordPayload, SignInWithEmailPasswordResponse } from "@/service/api/auth/types"

export interface Auth {
  access_token: string
}

export interface AuthContextProps {
  auth: Auth | null
  isLoading: boolean
  isSigned: boolean
  onLoginWithEmailPassword: (payload: SignInWithEmailPasswordPayload) => Promise<SignInWithEmailPasswordResponse>
  onSignOut: () => void
}