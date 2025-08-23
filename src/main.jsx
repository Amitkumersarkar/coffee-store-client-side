import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layouts & Providers
import Root from "./Layouts/Root";
import AuthProvider from "./Providers/AuthProvider";

// Pages
import Home from "./Components/Home";
import AddCoffee from "./Pages/AddCoffee";
import UpdateCoffee from "./Pages/UpdateCoffee";
import ViewDetails from "./Pages/ViewDetails";
import ErrorPage from "./Pages/ErrorPage";
import Navbar2 from "./Components/Headers/Navbar2";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

// ✅ Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5500/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updatedCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5500/coffee/${params.id}`),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5500/coffee/${params.id}`),
      },
      {
        path: "/navbar",
        element: <Navbar2 />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

// ✅ Root render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
