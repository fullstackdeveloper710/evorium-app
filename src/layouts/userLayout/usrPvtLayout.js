import React from "react";
import { FooterEvorium, Header, SideBar } from "../../components/user";
import { Outlet } from "react-router-dom";
import "../../styles/user/global.scss";
import { useSelector } from "react-redux";

function usrPvtLayout() {
  // const { userAuthtoken } = useSelector((state) => state.userAuth);
  // const { usrLogin } = ROUTES;
  // if (userAuthtoken) {
    return (
      <>
        <Header />
        <Outlet />
        <FooterEvorium />
      </>
  //   );
  // } else {
  //   return <Navigate to={usrLogin} />;
  // }
    )
}

export default usrPvtLayout;
