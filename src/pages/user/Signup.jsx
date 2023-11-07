import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button, Alert } from "../../components/user";
import "../../styles/user/auth.scss";
import {
  AppleIcon,
  CheckIcon,
  EmailIcon,
  EyeLock,
  FacebookIcon,
  GoogleIcon,
} from "../../assets/icons/user";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { userSignUp } from "../../redux/thunk/user/usrMain";
import { useDispatch } from "react-redux";
import { Input } from "../../components/common";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
// import FacebookLogin from "facebook-login";
// import {FacebookLogin} from "react-facebook-login";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const initValues = {
    full_name: "",
    email: "",
    password: "",
    phone: "",
    country_code: "",
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Handle the Google Sign-In response here
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "Name can only contain Latin letters."
      )
      .max(50)
      .required("required field"),
    email: Yup.string().email().required("Enter your E-mail"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("required field"),
  });
  function submit() {
    setShow(true);
  }

  function showClose() {
    setShow(false);
    window.open("/login", "_self");
  }


  const componentClicked = () => {
    console.log("Button clicked");
  };
  
  const responseFacebook = (response) => {
    console.log(response);
    // Handle the Facebook login response here
  };

  const onSubmitHandler = (values) => {
    console.log(values, "signup------------");
    const data = {
      ...values,
    };
    dispatch(userSignUp(data));
    setShow(true);
  };
  
  return (
    <>
      <Alert
        title={"Success"}
        body={"Congratulations, you have completed your registration!"}
        btnTitle={"Done"}
        icon={<CheckIcon />}
        showClose={showClose}
        show={show}
      />

      <section className="auth">
        <div className="auth__inner">
          <h1 className="auth__title">Sign Up to your account</h1>

          <Formik
            initialValues={initValues}
            // validationSchema={validationSchema}
            onSubmit={onSubmitHandler}
          >
            {({
              values,
              isSubmitting,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <Input
                      className="inputRow"
                      type="text"
                      placeholder="Name"
                      name="full_name"
                      value={values.full_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.full_name &&
                        touched.full_name &&
                        errors.full_name
                      }
                    />
                  </Col>

                  <Col md={12}>
                    <Input
                      className="inputRow"
                      type="email"
                      placeholder="E-mail"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.email && touched.email && errors.email}
                    />
                  </Col>

                  <Col md={12}>
                    <div className="inputRow">
                      <div className="inputRow__icon">
                        <input
                          name="password"
                          placeholder="Enter Password"
                          type={showPass ? "text" : "password"}
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />

                        <span
                          className="inputRow__iconGroup"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowPass(!showPass);
                          }}
                        >
                          {showPass ? <EyeLock /> : <EyeLock />}
                        </span>
                      </div>
                      <span style={{ color: "red" }}>
                        {errors.password && touched.password && errors.password}
                      </span>
                    </div>
                  </Col>

                  <Col md={12}>
                    <Input
                      className="inputRow"
                      type="text"
                      placeholder="Country Code"
                      name="country_code"
                      value={values.country_code}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.country_code &&
                        touched.country_code &&
                        errors.country_code
                      }
                    />
                  </Col>
                  <Col md={12}>
                    <Input
                      className="inputRow"
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      value={values.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.phone && touched.phone && errors.phone}
                    />
                  </Col>

                  <Col md="12">
                    <Button
                      type="submit"
                      title={"Save Changes"}
                      className="submitBtn"
                      // submit={submit}
                    />
                  </Col>

                  <Col md={12}>
                    <div className="auth__socialWrap">
                      <p>Or Continue with</p>
                      <div className="auth__socialWrap__icon">
                        <ul>
                          <li>
                          
                            <FacebookLogin
                              appId="1083604836218636"
                            textButton="facebook"

                              fields="name,email,picture"
                              onClick={componentClicked}
                              callback={responseFacebook}
                              icon="fa-facebook"
                            
                            
                            />
                          </li>
                          <li>
                            {/* <Link to="/">
                              <GoogleIcon />
                            </Link> */}
                        
                            <GoogleLogin
                              clientId="821353603223-ue9aberp764eb2tjsd8ikau2bm4hsldg.apps.googleusercontent.com"
                              buttonText=""
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={"single_host_origin"}
                              // redirectUri=""
                            />
                          </li>

                          <li>
                            <Link to="/">
                              <AppleIcon />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <p className="signingText">
                        By signing up, you agree to our{" "}
                        <Link to="/">Terms</Link> ,
                        <Link to="/">Data Policy</Link> and{" "}
                        <Link to="/">Cookies Policy</Link>.
                      </p>
                    </div>
                  </Col>
                  <Col md="12">
                    <p className="newUserLink">
                      Already Have an Account?
                      <span onClick={() => window.open("/login", "_self")}>
                        Login
                      </span>
                    </p>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Signup;
