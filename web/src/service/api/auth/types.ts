export interface SignInWithEmailPasswordPayload {
  email: string
  password: string
}

export interface SignInWithEmailPasswordResponse {
  access_token: string
}