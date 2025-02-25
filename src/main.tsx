import App from '@/App'
import { StrictMode } from 'react'
import { ChakraCustomProvider } from '@/providers/ChakraCustomProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { MapProvider } from 'react-map-gl/maplibre'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraCustomProvider>
      <BrowserRouter>
        <MapProvider>
          <App />
        </MapProvider>
      </BrowserRouter>
    </ChakraCustomProvider>
  </StrictMode>
)
