// app/providers.tsx
'use client'
import globalTheme from '../theme';

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider  theme={globalTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}