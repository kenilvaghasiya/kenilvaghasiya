import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { AboutPage, ContactPage, PortfolioPage } from './pages/routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
