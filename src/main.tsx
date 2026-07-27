import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import {AppProviders} from "./app/AppProviders.tsx";

import "./fonts.css";
import {HelmetProvider} from "react-helmet-async";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HelmetProvider>
          <AppProviders>
              <App />
          </AppProviders>
      </HelmetProvider>
  </StrictMode>,
)
