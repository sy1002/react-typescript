import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ThemeProvider} from "styled-components";

const theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
    },
    fontSizes: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.25rem',
        xlarge: '1.5rem',
    }
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </StrictMode>,
)
