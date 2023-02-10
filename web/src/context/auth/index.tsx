import { paths } from "@/constants/routes";
import { useLocalStorage } from "@/hooks";
import { authService } from "@/service/api/auth";
import { SignInWithEmailPasswordPayload } from "@/service/api/auth/types";
import { useRouter } from "next/router";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Auth, AuthContextProps } from "./types";

const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider ({ children }: PropsWithChildren) {
  const router = useRouter()

  const [auth, setAuth] = useLocalStorage<Auth | null>('@teste-frontend', null)
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