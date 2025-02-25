import App from '@/App'
import { StrictMode } from 'react'
import { ChakraCustomProvider } from '@/providers/ChakraCustomProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraCustomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraCustomProvider>
  </StrictMode>
)
