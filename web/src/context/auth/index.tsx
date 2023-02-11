import { paths } from "@/constants/routes";
import { useLocalStorage } from "@/hooks";
import { api } from "@/service/api";
import { authService } from "@/service/api/auth";
import { SignInWithEmailPasswordPayload } from "@/service/api/auth/types";
import { useRouter } from "next/router";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { Auth, AuthContextProps } from "./types";

const AuthContext = createContext({} as AuthContextProps)

export const AUTH_KEY = '@teste-frontend'

export function AuthProvider ({ children }: PropsWithChildren) {
  const router = useRouter()

  const [auth, setAuth] = useLocalStorage<Auth | null>(AUTH_KEY, null)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoginWithEmailPassword = async (payload: SignInWithEmailPasswordPayload) => {
    try {
      setIsLoading(true)
      const { data } = await authService.signInWithEmailPassword(payload)
      setAuth(data)
      return data
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignOut = () => {
    authService.signOut()
    router.push(paths.auth.signIn)
    setAuth(null)
  }

  
  return (
    <AuthContext.Provider
      value={{
        auth,
        isLoading,
        isSigned: !!auth,
        onLoginWithEmailPassword: handleLoginWithEmailPassword,
        onSignOut: handleSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)