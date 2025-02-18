import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Component/Error Page/ErrorPage.jsx'
import Login from './Component/Login/Login.jsx'
import Register from './Component/Register/Register.jsx'
import AddUser from './Component/Add User/AddUser.jsx'
import ViewUser from './Component/View User/ViewUser.jsx'
import Home from './Component/Home/Home.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/addnew',
        element: <AddUser />
      },
      {
        path: '/view',
        element: <ViewUser />,
        loader: async() => {
          return await fetch('http://localhost:5000/users')
          .then( res=> res.json())
          .then(data=> data)
        }
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
