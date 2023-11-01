import React from "react";
import { Header, SideBar } from "../../components/admin";
import { Navigate, Outlet } from "react-router-dom";
import "../../styles/admin/App.scss";
import { useSelector } from "react-redux";
import { ROUTES } from "../../navigation/constants";

function AdPvtLayout() {
  const { adminAuthtoken } = useSelector((state) => state.admin);
  const { adLogin } = ROUTES;
  if (adminAuthtoken) {
    return (
      <div className="main_wrapper">
        <SideBar />
        <div className="right_section">
          <Header />
          <div className="admin-content-section">
            <Outlet />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={adLogin} />;
  }
}

export default AdPvtLayout;
