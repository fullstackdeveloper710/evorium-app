import React, { useCallback, useRef, useState } from "react";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { Col } from "react-bootstrap";
import { GoogleIcon } from "../../assets/icons/user";
import { userFacebookLogin, userGoogleLogin } from "../../redux/thunk/user/usrMain";
import { ROUTES } from "../../navigation/constants";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const REDIRECT_URI = "http://localhost:3000";

const SocialMedia = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const dispatch = useDispatch();
  const location = useLocation()

  const navigate = useNavigate();

  const {state} = location;

  const onLoginStart = useCallback((profile) => {
    const val=""
   
    }, []);
  
    

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);


  const {usrPrograms}=ROUTES

  const onSubmitHandler = (values) => {
    console.log(values, " google signup------------");
    const data = {
      values:{
        idToken:values.access_token,
        email:values.email,
        full_name:values.given_name,
        profile_pic:values.picture,


      }
      
    };
    dispatch(userGoogleLogin(data));
  };
// facebook
const onSubmitHandlerFacebook = (values) => {
  console.log(values, " google signup------------");
  const data = {
    values:{
      access_token:values.access_token,
      email:values.email,
      full_name:values.given_name,
      profile_pic:values.picture,


    }
    
  };
  dispatch(userFacebookLogin(data));
};

  return (
    <>
      <Col md={12} onSubmit={onSubmitHandler}>
        <div className="auth__socialWrap" style={{ display: "flex" }}>
        {/* <div className="auth__socialWrap__icon" > */}

          <div className={`auth__socialWrap__icon ${provider && profile ? "hide" : ""}`}>
            <ul>
              <li>
                <LoginSocialFacebook
                  // ref={facebookRef}
                  appId="1083604836218636"
                  // onLoginStart={onLoginStart}
                  onLogoutSuccess={onLogoutSuccess}
                  onResolve={({ provider, data }) => {
                    setProvider(provider);
                    setProfile(data);
                    console.log(data, "data");
                    console.log(provider, "provider");
                    onSubmitHandlerFacebook(data);

                    

                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                  redirect_uri={REDIRECT_URI}
                >
                  <FacebookLoginButton 
                  text=""/>
                </LoginSocialFacebook>
              </li>

              <li>
                {" "}
                <LoginSocialGoogle
                  // ref={googleRef}
                  client_id="821353603223-ue9aberp764eb2tjsd8ikau2bm4hsldg.apps.googleusercontent.com"
                  onLogoutFailure={onLogoutFailure}
                  
                  onLoginStart={onLoginStart}
                  onLogoutSuccess={onLogoutSuccess}
                  onResolve={({ provider, data }) => {
                    setProvider(provider);
                    setProfile(data);
                    console.log(data, "data here from google");
                    console.log(provider, "provider");
                    onSubmitHandler(data);
                  }}
                  onReject={(err) => {
                    console.log("hbhbdhd", err);
                  }}
                  redirect_uri={REDIRECT_URI}
                >
                  <GoogleLoginButton
                  text=""
                  
                  />
                </LoginSocialGoogle>
              </li>
            </ul>
          </div>
          </div>
        {/* </div> */}
      </Col>
    </>
  );
};

export default SocialMedia;
