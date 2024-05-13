import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Home from "./modules/HomeModule/components/Home";


=======
import Home from "./modules/HomeModule/Home";
import NotFound from "./modules/SharedModule/NotFound/components/NotFound";
import MasterLayout from "./modules/SharedModule/MasterLayout/components/MasterLayout";
>>>>>>> 6d067100cca571da4bd48c1d8c4f97b0d834b2ca
import Services from "./modules/ServiceModule/components/Services";
import NotFound from './modules/SharedModule/components/NotFound/components/NotFound';
import MasterLayout from "./modules/SharedModule/components/MasterLayout/components/MasterLayout";

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
