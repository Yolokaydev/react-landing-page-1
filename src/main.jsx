import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Services from "./routes/Services";
import NotFound from "./routes/NotFound";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "portfolio", element: <Portfolio /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }, // Catch-all for 404
      { path: "", element: <Home /> }, // Home route should be last
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
