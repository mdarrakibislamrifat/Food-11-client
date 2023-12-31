import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routers.jsx'
import AuthProviders from './Components/AuthProviders/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
    </HelmetProvider>
    
  </React.StrictMode>,
)
