// import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import Header from './../../Header/components/Header';
import Footer from "../../Footer/Footer";



const MasterLayout = () => {
  return (
    <div>
      <Header />
   
      <Outlet />
      <Footer />

      <ScrollRestoration />
    </div>
  );
};

export default MasterLayout;
