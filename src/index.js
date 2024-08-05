import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import NotFound from './NotFound';
import UseStateExample from './UseStateExample';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <NotFound/>
  },
  {
    path: "/profiles",
    element: <ProfilePage/>,
  },
  {
    path: "/UseStateExample",
    element: <UseStateExample/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
