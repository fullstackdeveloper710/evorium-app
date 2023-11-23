import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
import {
  UserIcon,
  FacebookIcon,
  TikTokIcon,
  TwitterIcon,
  InstagramIcon,
  SiteLogo,
  OpenSea,
} from "../../assets/icons/user";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../navigation/constants";
import { Button } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/reducers/userSlices/userAuth";
import "../../styles/user/header.scss";

function Header() {
  const [show, setShow] = useState(true);

  //Redux state
  const { userAuthtoken } = useSelector((state) => state.userAuth);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Router functions
  const navigate = useNavigate();
  const { usrHome, usrPrograms, usrEditProfile, usrLogin } = ROUTES;

  //Methods
  useEffect(() => {
    if (window.innerWidth < 992) {
      setShow(false);
    } else {
      setShow(true);
    }
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onLogouthandler = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <div className="customHeader">
        <div className="container">
          <div className="customHeader__innerHeader">
            <button className="hamburgerMenu" onClick={() => setShow(!show)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 7h18M3 12h18M3 17h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <Link to={usrHome}>
              <SiteLogo className="siteLogo" />
            </Link>

            {show && (
              <div className="customHeader__dropMenu">
                <ul className="customHeader__menu">
                  <li>
                    <Link to={usrHome}>Home</Link>
                  </li>
                  <li>
                    <Link to={usrPrograms}>Programs</Link>
                  </li>
                </ul>

                <ul className="customHeader__socialIcons">
                  <li>
                    <Link to="/">
                      <InstagramIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Image src={OpenSea} alt="union" className="openSea" />
                      {/* <UnionIcon/> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <TikTokIcon />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FacebookIcon />
                    </Link>
                  </li>
                </ul>

                <Nav className="right-nav">
                  <NavDropdown title="English" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      English
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Español
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.2">
                      Français
                    </NavDropdown.Item>
                  </NavDropdown>

                  {!userAuthtoken ? (
                    <Link to={usrLogin} className="login-btn">
                      Login
                    </Link>
                  ) : (
                    <>
                      <Button
                        loading={false}
                        loadMsg={false}
                        type="button"
                        title="Logout"
                        className="logout-btn "
                        onClick={onLogouthandler}
                      />
                      <Link to={usrEditProfile} className="p-0 eprofile">
                        <span className="headeruser">
                          <UserIcon />
                        </span>
                      </Link>
                    </>
                  )}
                </Nav>
              </div>
            )}

            {userAuthtoken && (
              <button
                onClick={() => navigate(usrEditProfile)}
                className="mobileLogin"
              >
                <span className="headeruser">
                  <UserIcon />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
