import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/components/Footer";
import Header from "../../Header/components/Header";

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
