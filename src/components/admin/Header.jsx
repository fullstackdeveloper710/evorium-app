import React, { useEffect, useState } from "react";
import { Image, Dropdown, DropdownButton } from "react-bootstrap";
import { notification } from "../../assets/icons/admin";
import { burger } from "../../assets/images/admin";
import "../../styles/admin/header.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUserDetail } from "../../redux/thunk/admin/adUser";

const Header = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const full_name = useSelector((state) => state.adAuth?.full_name);
 
  const {adminNotification: { data: notification_data },} = useSelector((state) => state.adNotification);
  
  



  // const unreadNotificationsCount = notifications.filter(
  //   (notification) => !notification.read
  // ).length;

  // useEffect(() => {
  //   dispatch(getAdminUserDetail());

  // }, []);
  return (
    <div className="header_admin">
      <div className="title_block">
        <h3>Welcome,{full_name}!</h3>
        <p>Ready to jump back in?</p>
      </div>
      <div className="right_notifications">
        <div className="notification_message">
          <Image src={notification} />
          <span className="messages">{notification_data.length}</span>
        </div>
        <div className="my_account_drop_down">
          <DropdownButton id="dropdown-basic-button" title="My Account">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>

        <div
          className="mobile_burger d-block d-md-none"
          onClick={() => setShow(!show)}
        >
          <Image src={burger} className="toggle_burger" />
        </div>
      </div>
    </div>
  );
};

export default Header;
