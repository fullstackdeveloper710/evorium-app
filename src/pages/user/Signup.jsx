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

const Signup = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
      .required("required field")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  function submit() {
    setShow(true);
  }

  function showClose() {
    setShow(false);
    window.open("/login", "_self");
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignUp(formData));
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
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values, "values%%");
              setShow(false);
              window.open("/login", "_self");
            }}
          >
            {({
              values,
              isSubmitting,
              errors,
              touched,
              // handleChange,
              // handleSubmit,
              handleBlur,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12}>
                    <div className="inputRow">
                      <input
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {" "}
                        {errors.name && touched.name && errors.name}
                      </span>
                    </div>
                  </Col>

                  <Col md={12}>
                    <div className="inputRow">
                      <input
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {errors.email && touched.email && errors.email}
                      </span>
                    </div>
                  </Col>

                  <Col md={12}>
                    <div className="inputRow">
                      <div className="inputRow__icon">
                        <input
                          name="password"
                          placeholder="Enter Password"
                          type="password"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />

                        <span className="inputRow__iconGroup">
                          <EyeLock />
                        </span>
                      </div>
                      <span style={{ color: "red" }}>
                        {errors.password && touched.password && errors.password}
                      </span>
                    </div>
                  </Col>

                  <Col md="12">
                    {/* <Button title={"Signup"} className="submitBtn" submit={submit} />
                     */}
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
                            <Link to="/">
                              <FacebookIcon />
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <GoogleIcon />
                            </Link>
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
