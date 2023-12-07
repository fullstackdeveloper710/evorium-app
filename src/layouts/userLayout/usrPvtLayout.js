import React, { useEffect } from "react";
import { FooterEvorium, Header } from "../../components/user";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../navigation/constants";
import { isExpired } from "react-jwt";
import "../../styles/user/global.scss";
import { userRefreshToken } from "../../redux/thunk/user/usrMain";

function UsrPvtLayout() {
  const { userAuthtoken, userData } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();

  const { usrLogin } = ROUTES;

  useEffect(() => {
    // const decoded = decodeToken(userAuthtoken);
    // const targetTimestamp = decoded?.exp;
    // const currentTimestamp = Math.floor(Date.now() / 1000);
    // const timeDifference = targetTimestamp - currentTimestamp;

    // dispatch(userRefreshToken({ userAuthtoken })).then((res) =>
    //   console.log(res)
    // );

    const timeoutId = setTimeout(() => {
      const data = {
        values: {
          refresh_token: userData.refresh_token,
        },
      };
      // dispatch(userRefreshToken(data)).then((res) => console.log(res));
    }, 10 * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  const isMyTokenExpired = isExpired(userAuthtoken);

  // if (userAuthtoken) {
  if (isMyTokenExpired) {
    return <Navigate to={usrLogin} replace={true} />;
  } else if (!isMyTokenExpired) {
    return (
      <div>
        <Header />
        <Outlet />
        <FooterEvorium />
      </div>
    );
  } else {
  }
}

export default UsrPvtLayout;
