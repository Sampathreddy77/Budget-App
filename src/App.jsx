import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//libraries
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import ErrorScreen from "./pages/ErrorScreen";
import Main, { mainLoader } from "./layouts/Main";
//Actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action:dashboardAction,
        errorElement:<ErrorScreen/>
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorScreen />,
  },
]);
function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
