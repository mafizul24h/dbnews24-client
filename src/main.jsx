import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/Router.jsx';
import AuthProvider from './providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} >
      </RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
