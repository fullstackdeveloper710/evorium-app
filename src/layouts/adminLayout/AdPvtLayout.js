import React from "react";
import {Header,SideBar} from "../../components/admin";
import { Outlet } from "react-router-dom";
import "../../styles/admin/App.scss";

function AdPvtLayout() {
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
}

export default AdPvtLayout;
