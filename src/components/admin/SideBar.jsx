import React from "react";
import { Image } from "react-bootstrap";
import { logo } from "../../assets/images/admin";
import {
  about,
  categories,
  conditions,
  dashboard,
  faqs,
  logout,
  payment,
  privacy,
  programs,
  sociallinks,
  speakers,
  support,
  user,
  tags,
} from "../../assets/icons/admin";
import "../../styles/admin/sidebar.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../navigation/constants";

function SideBar() {
  const {
    adLogin,
    adDashboard,
    adUserDetail,
    adUserList,
    adProgramList,
    adAddprogram,
    adCategories,
    adTags,
    adPayment,
    adSpeaker,
    adFaq,
    adFaqList,
  } = ROUTES;
  return (
    <div className="sidebar">
      <div className="brand-log">
        <Link to="#" className="logo_link">
          <Image src={logo} />
        </Link>
      </div>

      <div className="sidebar_links">
        <ul>
          <li className="active">
            <Link to={adDashboard}>
              <Image src={dashboard} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={adUserList}>
              <Image src={user} />
              Users
            </Link>
          </li>
          <li>
            <Link to={adSpeaker}>
              <Image src={speakers} />
              Speakers
            </Link>
          </li>
          <li>
            <Link to={adCategories}>
              <Image src={categories} />
              Categories
            </Link>
          </li>
          <li>
            <Link to={adTags}>
              <Image src={tags} />
              Tags
            </Link>
          </li>
          <li>
            <Link to={adProgramList}>
              <Image src={programs} />
              Programs
            </Link>
          </li>
          <li>
            <Link to={adPayment}>
              <Image src={payment} />
              Payments
            </Link>
          </li>
          <li>
            <Link to={adFaqList}>
              <Image src={faqs} />
              FAQ’s
            </Link>
          </li>
          <li>
            <Link to="#">
              <Image src={sociallinks} />
              Social Media Link’s
            </Link>
          </li>
          <li>
            <Link to="#">
              <Image src={about} />
              About Us
            </Link>
          </li>
          <li>
            <Link to="#">
              <Image src={privacy} />
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#">
              <Image src={conditions} />
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="#">
              <Image src={support} />
              Support
            </Link>
          </li>
          <li>
            <Link to="#">
              <Image src={logout} />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
