
import { AuthProvider } from '@/context/auth'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { globalStyle } from 'stitches.config'

export default function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()

  }, [])

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
