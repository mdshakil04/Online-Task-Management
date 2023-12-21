import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './Firebase/AuthProvider.jsx';
import routes from './Routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
  </React.StrictMode>,
)
