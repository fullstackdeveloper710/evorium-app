import React, { useEffect } from "react";
import { Outlet } from "react-router";
import { Header } from "../../components/user";
import { useDispatch } from 'react-redux';
const UserPubLayout = () => {
  // const dispatch = useDispatch();
  // // const accessToken = useSelector((state) => state.auth.accessToken);

  // useEffect(() => {
  //   // Example: Check if the access token is expired and refresh if needed
  //   if (accessTokenIsExpired) {
  //     dispatch(usrtRefreshToken(/* pass refresh token here */));
  //   }
  // }, [accessToken, dispatch]);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default UserPubLayout;
