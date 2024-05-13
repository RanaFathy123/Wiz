import React from "react";
import { Outlet } from "react-router-dom";

import Header from './../../Header/components/Header';
import Footer from "../../Footer/Footer";


const MasterLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MasterLayout;
