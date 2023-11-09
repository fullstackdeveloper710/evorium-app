import React, { useCallback, useRef, useState } from "react";
import {
  LoginSocialGoogle,
  LoginSocialFacebook,

} from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
  
} from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000";

const SocialMedia = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  // const amazonRef = useRef();
  // const instagramRef = useRef();
  // const googleRef = useRef();
  // const facebookRef = useRef();
  // const microsoftRef = useRef();
  // const linkedinRef = useRef();
  // const githubRef = useRef();
  // const pinterestRef = useRef();
  // const twitterRef = useRef();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  return (
    <>
      <div className={`App ${provider && profile ? "hide" : ""}`}>
        <LoginSocialFacebook
          // ref={facebookRef}
          appId={"431451242017946"}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log(err);
          }}
          redirect_uri={REDIRECT_URI}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
          // ref={googleRef}
          client_id="821353603223-ue9aberp764eb2tjsd8ikau2bm4hsldg.apps.googleusercontent.com"
          onLogoutFailure={onLogoutFailure}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log("hbhbdhd", err);
          }}
          redirect_uri={REDIRECT_URI}

        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
    </>
  );
};

export default SocialMedia;