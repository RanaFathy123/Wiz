import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./modules/HomeModule/Home";
import NotFound from "./modules/SharedModule/NotFound/components/NotFound";
import MasterLayout from "./modules/SharedModule/MasterLayout/components/MasterLayout";
import Services from "./modules/ServiceModule/components/Services";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <Services /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
