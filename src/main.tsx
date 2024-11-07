import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SnackbarProvider } from 'notistack';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import App from './App.tsx'
import './index.css'
import { Buffer } from 'buffer';
window.Buffer = Buffer;
globalThis.Buffer = Buffer;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider maxSnack={3}>
      <TonConnectUIProvider manifestUrl="https://minter.ton.org/tonconnect-manifest.json">
        <App />
      </TonConnectUIProvider>
    </SnackbarProvider>
  </StrictMode>,
)
