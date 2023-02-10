import { useLocalStorage } from "@/hooks";
import { authService } from "@/service/api/auth";
import { SignInWithEmailPasswordPayload } from "@/service/api/auth/types";
import { createContext, PropsWithChildren, useContext } from "react";
import { Auth, AuthContextProps } from "./types";

const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider ({ children }: PropsWithChildren) {
  const [auth, setAuth] = useLocalStorage<Auth | null>('@teste-frontend', null)

  const handleLoginWithEmailPassword = async (payload: SignInWithEmailPasswordPayload) => {
    const { data } = await authService.signInWithEmailPassword(payload)
    setAuth(data)
    return data
  }

  const handleSignOut = () => {}
  return (
    <AuthContext.Provider
      value={{
        auth,
        onLoginWithEmailPassword: handleLoginWithEmailPassword,
        onSignOut: handleSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)