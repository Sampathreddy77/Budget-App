import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import ErrorScreen from "./pages/ErrorScreen";
import Main, { mainLoader } from "./layouts/Main";
//Actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
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
      </div>
    </>
  );
}

export default App;
