import { Route, Routes } from "react-router";
import { adminRoutes } from "./navigation/routes/adminRoutes";
import AdPvtLayout from "./layouts/adminLayout/AdPvtLayout";
import UsrPvtLayout from "./layouts/userLayout/usrPvtLayout";
import { userRoutes } from "./navigation/routes/userRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsrPvtLayout />}>
          {userRoutes.map(
            ({ path, type, Auth, Component, defaultComp, id }) => {
              console.log(path, "path here");
              return (
                <Route
                  key={id}
                  path={path}
                  index={defaultComp}
                  element={<Component />}
                />
              );
            }
          )}
        </Route>

        <Route path="/backoffice" element={<AdPvtLayout />}>
          {adminRoutes.map(
            ({ path, type, Auth, Component, defaultComp, id }) => {
              console.log(path, "path here");
              return (
                <Route
                  key={id}
                  path={path}
                  index={defaultComp}
                  element={<Component />}
                />
              );
            }
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
