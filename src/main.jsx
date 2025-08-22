import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import AddCoffee from './Pages/AddCoffee';
import Root from './Layouts/Root';
import UpdateCoffee from './Pages/UpdateCoffee';
import ErrorPage from './Pages/ErrorPage';
import Navbar2 from './Components/Headers/Navbar2';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5500/coffee')

      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/updatedCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`http://localhost:5500/coffee/${params.id}`)
      },
      {
        path: '/navbar',
        element: <Navbar2></Navbar2>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
