import React from "react";
import { Outlet } from "react-router";
import { Header } from "../../components/user";

const UserPubLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default UserPubLayout;
