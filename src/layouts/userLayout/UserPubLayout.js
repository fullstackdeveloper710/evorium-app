import React, { useEffect } from "react";
// import { Outlet, useNavigate } from "react-router";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { FooterEvorium, Header } from "../../components/user";
import { useSelector  } from "react-redux";
import { CustomModal } from "../../components/common";
import { useModal } from "../../utility/hooks";
import { ROUTES } from "../../navigation/constants";



const UserPubLayout = () => {
  const {
    show,
    handleClose,
    handleShow,
    shareShow,
    handleShareClose,
    handleShareShow,
  } = useModal();


  const { userAuthtoken, userData } = useSelector((state) => state.userAuth);
  
  const { usrLogin, usrOtp } = ROUTES;
  const navigate = useNavigate();
  

  useEffect(() => {
    if( userAuthtoken !== null && userData?.verified === false ) {
      alert('this is public route')
      navigate(usrOtp)
      
    }
  }, []);
  return (
    <div>
      <Header />

      <Outlet />

      <FooterEvorium />
    </div>
  );
};

export default UserPubLayout;
