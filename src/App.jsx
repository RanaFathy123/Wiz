// import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./modules/HomeModule/Home";
import Services from "./modules/ServiceModule/components/Services";
// import NotFound from "./modules/SharedModule/components/NotFound/components/NotFound";
import MasterLayout from "./modules/SharedModule/components/MasterLayout/components/MasterLayout";
import "./App.css";
import Blogs from "./modules/Blogs/Blogs";
import About from "./modules/about-us/About";
import ServiceDetails from "./modules/ServiceDetails/ServiceDetails";
import Aos from "aos";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000 
    });
  }, [])
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      // errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "services", element: <Services /> },
        { path: "blogs", element: <Blogs /> },
        { path: "about", element: <About /> },
        {path:"services/details",element:<ServiceDetails/>}
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
