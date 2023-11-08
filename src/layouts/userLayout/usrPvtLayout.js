import React from "react";
import { FooterEvorium, Header, SideBar } from "../../components/user";
import { Navigate, Outlet } from "react-router-dom";
import "../../styles/user/global.scss";
import { useSelector } from "react-redux";
import { ROUTES } from "../../navigation/constants";

function UsrPvtLayout() {
  const { userAuthtoken } = useSelector((state) => state.userAuth);
  const { usrLogin } = ROUTES;
  if (userAuthtoken) {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to={usrLogin} />;
  }
}

export default UsrPvtLayout;
