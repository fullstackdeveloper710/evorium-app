import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {Button} from "../../components/user";
import "../../styles/user/auth.scss";
import * as Yup from "yup";
import { EyeLock } from "../../assets/icons/user";
import { Form, Formik } from "formik";

const Login = () => {
  const [show, setShow] = useState(false);
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const initValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("required field"),
    password: Yup.string()
      .required("required field")
      .matches(
        passwordRegExp,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  function submit() {
    console.log("login");
    // setShow(true);
    localStorage.setItem("login", true);
    window.open("/programs", "_self");
  }

  return (
    <>
      <section className="auth">
        <div className="auth__inner">
          <h1 className="auth__title">Login into the account</h1>
          <Formik
            initialValues={initValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values, "values%%");
              localStorage.setItem("login", true);
              window.open("/programs", "_self");
            }}
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

                  <Col md={12}>
                    <div className="authRemember">
                      <div className="remember-text">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                      </div>

                      <button
                        className="forgotLink"
                        onClick={() =>
                          window.open(
                            "/reset_password",
                            "_self"
                          )
                        }
                      >
                        Forgot Password?
                      </button>
                    </div>
                  </Col>

                  <Col md="12">
                    {/* <Button title={"Login"} className="submitBtn" submit={submit} /> */}
                    <Button
                      type="submit"
                      title={"Save Changes"}
                      className="submitBtn"
                      // submit={submit}
                    />
                  </Col>
                  <Col md="12">
                    <p className="newUserLink">
                      New user?
                      <span
                        onClick={() =>
                          window.open(
                            "/signup",
                            "_self"
                          )
                        }
                      >
                        Signup
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

export default Login;
