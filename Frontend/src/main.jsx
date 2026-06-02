import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./Features/Auth/Pages/Login.jsx";
import "./style.scss";
import Register from "./Features/Auth/Pages/Register.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import { PostContext, PostContextProvider } from "./Features/posts/postContext.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <PostContextProvider>
      <RouterProvider router={router} />
    </PostContextProvider>
    </AuthProvider>
  </StrictMode>,
);
