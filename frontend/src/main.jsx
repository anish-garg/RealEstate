import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-bjwz0an11tmivxrs.us.auth0.com'
      clientId='E2xoxCOxivkYf0Zzfu7w9PjiQvJbunaz'
      authorizationParams={{
        redirect_uri: "https://real-estate-rk3y.vercel.app"
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode >
)
