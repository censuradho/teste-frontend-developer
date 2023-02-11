import { AUTH_KEY } from '@/context';
import { Auth } from '@/context/auth/types';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'



function getStorage <T>(key: string) {
  const tokenStorage = localStorage.getItem(key)

  return tokenStorage ? (JSON.parse(tokenStorage) as T) : null
}


export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})