import React from "react";
import { FooterEvorium, Header, SideBar } from "../../components/user";
import { Navigate, Outlet } from "react-router-dom";
import "../../styles/user/global.scss";
import { useSelector } from "react-redux";
import { ROUTES } from "../../navigation/constants";

function UsrPvtLayout() {
  const { userAuthtoken } = useSelector((state) => state.userAuth);
  const { usrHome } = ROUTES;
  if (userAuthtoken) {
    return (
      <div className="main_wrapper">
        {/* <SideBar /> */}
        <div className="right_section">
          <Header />
          <div className="admin-content-section">
            <Outlet />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={usrHome} />;
  }
}

export default UsrPvtLayout;
