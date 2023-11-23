import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "../../components/user";
import { useDispatch } from 'react-redux';
const UserPubLayout = () => {
  
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default UserPubLayout;
