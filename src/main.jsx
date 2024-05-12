import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout"; // Assuming Layout component exists
import Home from "./routes/home"; // Assuming Home component exists
import Portfolio from "./routes/portfolio";
import Services from "./routes/services";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/services", element: <Services /> },
      { path: "/contacts", element: <Contact /> },
      { path: "*", element: <div>404: Not Found</div> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
