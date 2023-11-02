import React from "react";
import { Image } from "react-bootstrap";
import { logo } from "../../assets/images/admin";

import "../../styles/admin/sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../navigation/constants";
import { adminSidebarList } from "../../utility/sidebarList";

function SideBar() {
  const location = useLocation();
  const { pathname } = location;

  const logoutHandler = () => {
    console.log("logut function call");
  };
  return (
    <div className="sidebar">
      <div className="brand-log">
        <Link to="#" className="logo_link">
          <Image src={logo} />
        </Link>
      </div>

      <div className="sidebar_links">
        <ul>
          {adminSidebarList.map(
            ({ id, path, title, icon, type, activeFor }, index) => {
              if (type === "link") {
                return (
                  <li
                    key={id}
                    className={activeFor.includes(pathname) && "active"}
                  >
                    <Link to={path}>
                      <Image src={icon} />
                      {title}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={id} onClick={logoutHandler}>
                    <Link to={path}>
                      <Image src={icon} />
                      {title}
                    </Link>
                  </li>
                );
              }
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
