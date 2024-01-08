import React, { useEffect, useRef, useState } from "react";
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
import { useTranslation } from "react-i18next";
import "../../styles/user/header.scss";
import {
  getMyAccount,
  userLanguageUpdate,
} from "../../redux/thunk/user/usrProfile";

function Header() {
  const [show, setShow] = useState(true);
  const dropdownRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [profilePic, setProfilePic] = useState(null); // State to store the profile picture URL

  // i18n translator functions
  const { t, i18n } = useTranslation();

  //Redux state
  const {
    userAuthtoken,
    userData: { language },
  } = useSelector((state) => state.userAuth);
  const { userDetails } = useSelector((state) => state.userProfile);
  console.log("Profile Picture URL:", userDetails.profile_pic);
  //Redux action dispatcher
  const dispatch = useDispatch();

  //Router functions
  const navigate = useNavigate();
  const { usrHome, usrPrograms, usrEditProfile, usrLogin } = ROUTES;

  //Methods

  useEffect(() => {
    const data = {
      userAuthtoken,
      values: {
        full_name: userDetails?.full_name,
        profile_pic: imageFile,

        // email: userDetails?.email,
      },
    };

    dispatch(getMyAccount(data));
  }, [userAuthtoken, dispatch]);

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
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the dropdown if the click is outside the dropdown area
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    // Add event listener to close dropdown on outside click
    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Remove event listener on component unmount
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const onLogouthandler = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    console.log(language, "language coming from db");
  }, []);

  const onLeanguageChange = (language) => {
    dispatch(userLanguageUpdate({ userAuthtoken, values: language }));
    i18n.changeLanguage(language);
  };

  const onButtonClick = () => {
    // Hide the dropdown when any button is clicked
    setShow(false);
  };
  return (
    <>
      <div className="customHeader" ref={dropdownRef}>
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
                  {/* <button onClick={() => onButtonClick()}> */}
                    <li>
                      <Link to={usrHome}>{t("home")}</Link>
                    </li>
                  {/* </button> */}

                  <li>
                    <Link to={usrPrograms}>{t("programs")}</Link>
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
                  <NavDropdown
                    title={
                      language === "es"
                        ? t("Español")
                        : language === "fr"
                        ? t("Français")
                        : t("English")
                    }
                    // title={t("language")}
                    id="collapsible-nav-dropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        onLeanguageChange("en");
                      }}
                    >
                      English
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        onLeanguageChange("es");
                      }}
                    >
                      Español
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        onLeanguageChange("fr");
                      }}
                    >
                      Français
                    </NavDropdown.Item>
                  </NavDropdown>

                  {!userAuthtoken ? (
                    <Link to={usrLogin} className="login-btn">
                      {t("login")}
                    </Link>
                  ) : (
                    <>
                      <Button
                        loading={false}
                        loadMsg={false}
                        type="button"
                        title={t("logout")}
                        className="logout-btn "
                        onClick={onLogouthandler}
                      />
                      <Link to={usrEditProfile} className="p-0 eprofile">
                        <span className="headeruser">
                          {userDetails?.profile_pic ? (
                            <img
                              src={userDetails.profile_pic}
                              alt="Profile"
                              style={{
                                width: "40px", // Adjust the size as needed
                                height: "40px", // Adjust the size as needed
                                borderRadius: "50%", // Creates a round shape
                              }}
                            />
                          ) : (
                            <UserIcon />
                          )}
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
