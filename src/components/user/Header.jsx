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
import { Link } from "react-router-dom";
import "../../styles/user/header.scss";

function Header() {
  const [show, setShow] = useState(true);

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

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" className="custom-header">
          <Container>
            <Navbar.Brand href="/">
              <Image src={mainLogo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="me-auto left-nav">
                <Nav className="">
                  <Nav.Link href="/">home</Nav.Link>
                  <Nav.Link href="/programs">programs</Nav.Link>
                </Nav>
                <div className="social-icons">
                  <a href="#">
                    <Image src={insta} />
                  </a>
                  <a href="#">
                    <Image src={twiter} />
                  </a>
                  <a href="#">
                    <Image src={union} />
                  </a>
                  <a href="#">
                    <Image src={tiktok} />
                  </a>
                  <a href="#">
                    <Image src={facebook} />
                  </a>
                </div>
              </div>
              <Nav className="right-nav">
                <NavDropdown title="English" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
                </NavDropdown>
                {localStorage.getItem("login") === "true" ? (
                  <Nav.Link
                    onClick={() => localStorage.removeItem("login")}
                    href="edit-profile"
                    //  className="login-btn"
                  >
                    <Image
                      src={thumbnail}
                      roundedCircle={true}
                      style={{
                        borderRadius: "20%",
                        height: "50px",
                        width: "50px",
                      }}
                    ></Image>{" "}
                  </Nav.Link>
                ) : (
                  <>
                  <Nav.Link href="login" className="login-btn">
                    Login
                  </Nav.Link>

                  <span className="headeruser"><UserIcon/></span>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}

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
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
            <Link to="/">
              <SiteLogo className="siteLogo" />
            </Link>

            {show && (
              <div className="customHeader__dropMenu">
                <ul className="customHeader__menu">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="/programs">Programs</Link>
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
                  {localStorage.getItem("login") === "true" ? (
                    <Nav.Link
                      onClick={() => localStorage.removeItem("login")}
                      href="edit-profile"
                      className="p-0 eprofile"
                    >
                      <span
                        className="headeruser"
                        onClick={() => localStorage.removeItem("login")}
                      >
                        <UserIcon />
                      </span>
                    </Nav.Link>
                  ) : (
                    <>
                      <Nav.Link href="login" className="login-btn">
                        Login
                      </Nav.Link>
                      <Nav.Link
                        onClick={() => localStorage.removeItem("login")}
                        href="edit-profile"
                        className="p-0 eprofile"
                      >
                        <span className="headeruser">
                          <UserIcon />
                        </span>
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </div>
            )}

            <button
              onClick={() => localStorage.removeItem("login")}
              href="edit-profile"
              className="mobileLogin"
            >
              <span className="headeruser">
                <UserIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
