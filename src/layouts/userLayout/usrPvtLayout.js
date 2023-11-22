import React from "react";
import { FooterEvorium, Header } from "../../components/user";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../../navigation/constants";
import "../../styles/user/global.scss";

function UsrPvtLayout() {
  const { userAuthtoken } = useSelector((state) => state.userAuth);
  const { usrLogin } = ROUTES;
  if (userAuthtoken) {
    return (
      <div>
        <Header />
        <Outlet />
        <FooterEvorium />
      </div>
    );
  } else {
    return <Navigate to={usrLogin} />;
  }
}

export default UsrPvtLayout;
