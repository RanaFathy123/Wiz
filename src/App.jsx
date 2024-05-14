// import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./modules/HomeModule/Home";
import Services from "./modules/ServiceModule/components/Services";
// import NotFound from "./modules/SharedModule/components/NotFound/components/NotFound";
import MasterLayout from "./modules/SharedModule/components/MasterLayout/components/MasterLayout";
import "./App.css";
import Blogs from "./modules/Blogs/Blogs";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      // errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <Services /> },
        { path: "blogs", element: <Blogs /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
