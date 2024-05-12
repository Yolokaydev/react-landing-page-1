import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout"; // Assuming Layout component exists
import Home from "./routes/home"; // Assuming Home component exists

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap routes with Layout for consistent structure
    children: [
      { path: "/", element: <Home /> }, // Home route nested within Layout
      // Add other routes here, nested within Layout if needed for structure
      { path: "*", element: <div>404: Not Found</div> }, // Catch-all for unmatched routes
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
