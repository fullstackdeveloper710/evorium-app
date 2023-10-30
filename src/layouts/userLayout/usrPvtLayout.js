import React from "react";
import { FooterEvorium, Header, SideBar } from "../../components/user";
import { Outlet } from "react-router-dom";
import "../../styles/user/global.scss";

function usrPvtLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterEvorium/>
    </>
  );
}

export default usrPvtLayout;
