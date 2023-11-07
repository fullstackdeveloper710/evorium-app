import React from "react";
import { Route, Routes } from "react-router";
import { adminRoutes } from "./routes/AdminRoutes";
import { userRoutes } from "./routes/userRoutes";
import AdPvtLayout from "../layouts/adminLayout/AdPvtLayout";
import UsrPvtLayout from "../layouts/userLayout/usrPvtLayout";
import AdPubLayout from "../layouts/adminLayout/AdPubLayout";
import { ROUTES } from "./constants";
import UserPubLayout from "../layouts/userLayout/UserPubLayout";

const Navigation = () => {
  const { adLogin } = ROUTES;
  const {usrHome} = ROUTES;
  return (
    <Routes>
      <Route path={usrHome} element={<UserPubLayout />}>
        {userRoutes.map(({ path, type, Auth, Component, defaultComp, id }) => {
          console.log(path, "public");
            return (
            <Route
              key={id}
              path={path}
              index={defaultComp}
              element={<Component />}
            />
          );

            
        })}
      </Route>
      {/* user routes */}
      <Route path={usrHome} element={<UsrPvtLayout />}>
        {userRoutes.map(({ path, type, Auth, Component, defaultComp, id }) => {
          console.log(path, "private");
            return (
            <Route
              key={id}
              path={path}
              index={defaultComp}
              element={<Component />}
            />
          );

            
        })}
      </Route>

      {/*Admin Routes */}
      <Route path={adLogin} element={<AdPubLayout />}>
        {adminRoutes.map(({ path, type, Auth, Component, defaultComp, id }) => {
          if (type === "public") {
            return (
              <Route
                key={id}
                path={path}
                index={defaultComp}
                element={<Component />}
              />
            );
          }
        })}
      </Route>

      <Route path={adLogin} element={<AdPvtLayout />}>
        {adminRoutes.map(({ path, type, Auth, Component, defaultComp, id }) => {
          if (type === "private") {
            return (
              <Route
                key={id}
                path={path}
                index={defaultComp}
                element={<Component />}
              />
            );
          }
        })}
      </Route>
    </Routes>
  );
};

export default Navigation;
