import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import {Button} from "../../components/user";
import { EyeLock } from "../../assets/icons/user";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const CreateNewPassword = () => {
  const [show, setShow] = useState(false);

  const initValues = {
    password: "",
    confirmpassword: "",
  };
  const validationSchema = Yup.object().shape({
    // password: Yup.string().required("Enter Password"),
    // confirmpassword: Yup.string().required("Confirm Password"),
    password: Yup.string().required('Password is required'),
    confirmpassword: Yup.string()
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
       .required('Password is required'),
  
  });

  function submit() {
    // console.log("login");
    localStorage.setItem('login',true)
    window.open("/login", "_self");
  }

  return (
    <section className="auth">
      <div className="auth__inner">
        <h1 className="auth__title mb-0">Create New password</h1>
        <p className="auth__subTitle">
          Your new password must be differnet from previous used passwords.
        </p>
        <Formik
          initialValues={initValues}
          validationSchema={validationSchema}
         
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

                    <span className="infotext">
                      Must be at least 8 characters
                    </span>
                  </div>
                </Col>

                <Col md={12}>
                  <div className="inputRow">
                    <div className="inputRow__icon">
                      <input
                        name="password"
                        placeholder="Confirm Password"
                        type="password"
                        value={values.confirmpassword}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <span className="inputRow__iconGroup">
                        <EyeLock />
                      </span>
                    </div>
                    <span style={{ color: "red" }}>
                      {errors.confirmpassword &&
                        touched.confirmpassword &&
                        errors.confirmpassword}
                    </span>
                    <span className="infotext">Both passwords must match</span>
                  </div>
                </Col>

                <Col md="12">
                  <Button
                    title={"Confirm"}
                    className="submitBtn"
                    submit={submit}
                  />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default CreateNewPassword;
