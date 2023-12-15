import React, { useCallback, useRef, useState } from "react";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { Col } from "react-bootstrap";
import { GoogleIcon } from "../../assets/icons/user";
import {
  userFacebookLogin,
  userGoogleLogin,
} from "../../redux/thunk/user/usrMain";

import { ROUTES } from "../../navigation/constants";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
// import GoogleLogin from "@leecheuk/react-google-login";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import { decodeJwt } from "jose";
import axios from "axios";

const REDIRECT_URI = "http://localhost:3000";

const SocialMedia = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const [ID_TOKEN, setIDToken] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { usrPrograms,usrEditProfile } = ROUTES;

  const { state } = location;


  const google_login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        let data = {
          values: {
            token: tokenResponse.access_token,
          },
        };

        dispatch(userGoogleLogin(data)).then(({ payload }) => {
          //  console.log(payload,'payload')
          if (payload.status) {
            navigate(usrPrograms);
          }
        });

        // const userInfo = await axios.get(
        //   "https://www.googleapis.com/oauth2/v3/userinfo",
        //   {
        //     headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        //   }
        // );

        // console.log("User Info:", userInfo.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
  });


  // const responseFacebook = (response) => {
  //   console.log(response);
  // }
  


  const onLoginStart = useCallback((profile) => {
    const val = "";
  }, []);

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const onSubmitHandler = (values) => {
    const data = {
      values: {
        idToken: values.credential,
        // email:values.email,
        // full_name:values.given_name,
        // profile_pic:values.picture,
      },
    };
    dispatch(userGoogleLogin(data));
  };
  // facebook

  const responseFacebook = (response) => {
    if (response && response.accessToken) {
      const data = {
        values: {
          access_token: response.accessToken,
          email: response.email,
          full_name: response.name,
          profile_pic: response.picture.data.url,
        },
      };

      dispatch(userFacebookLogin(data)).then(({ payload }) => {
        if (payload) {
          navigate(usrEditProfile);
        } else {
          console.error("Facebook login failed:", payload.message);
        }
      });
      
    } else {
      console.error("Invalid Facebook access token");
    }
  };

  return (
    <>
      <Col md={12} onSubmit={onSubmitHandler}>
        <div className="auth__socialWrap" style={{ display: "flex" }}>
          {/* <div className="auth__socialWrap__icon" > */}

          <div
            className={`auth__socialWrap__icon ${
              provider && profile ? "hide" : ""
            }`}
          >
            <ul>
              <li>
                {/* <LoginSocialFacebook
                  // isOnlyGetToken
                  appId="1083604836218636"
                  // onLoginStart={onLoginStart}
                  onLogoutSuccess={onLogoutSuccess}
                  onResolve={({ provider, data }) => {
                    setProvider(provider);
                    setProfile(data);

                    onSubmitHandlerFacebook(data);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                  // redirect_uri={REDIRECT_URI}
                >
                  <FacebookLoginButton text="" />
                </LoginSocialFacebook> */}
               <FacebookLogin
                  appId="1083604836218636"
                  autoLoad={false}
                  callback={responseFacebook}
                  fields="name,email,picture"
                  render={(renderProps) => (
                    <button onClick={renderProps.onClick}>
                      Login With Facebook
                    </button>
                  )}
                />
              </li>

              <li>
                <button
                  onClick={() => {
                    google_login();
                  }}
                >
                Login With Google
                </button>
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
