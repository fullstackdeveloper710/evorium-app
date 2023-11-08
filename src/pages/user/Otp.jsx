import React, { useState } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import { Button } from "../../components/user";
import "../../styles/user/auth.scss";
import "../../styles/user/otp.scss";
import * as Yup from "yup";
import { CheckIcon, EyeLock } from "../../assets/icons/user";
import { Form, Formik } from "formik";
import { userVerifyNum } from "../../redux/thunk/user/usrMain";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { ROUTES } from "../../navigation/constants";
import { useLocation, useNavigate, useParams } from "react-router";

const Otp = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation()
  const params = useParams();
  const { id } = params;
  
  const {state} = location;

  const initValues = {
    otp: "",
  };

  function showClose() {
    setShow(false);
    window.open("/login", "_self");
  }
  const validationSchema = Yup.object().shape({
    // email: Yup.string().email().required("required field"),
  });

  const { usrLogin } = ROUTES;

  const onSubmitHandler = (values) => {
    console.log(values, "values%%");
    const data = {
      // userAuthtoken,
      values: {
        user_id: state.id,
        otp:state.otp,
      },
    };
    dispatch(userVerifyNum(data)).then(({ payload }) => {
      if (payload.status) {
        navigate(usrLogin);
        setShow(true);
      }
    });
  };

  return (
    <>
      <Alert
        title={"Success"}
        body={"registration successful"}
        btnTitle={"Done"}
        icon={<CheckIcon />}
        showClose={showClose}
        show={show}
      />
      <section className="auth">
        <div className="auth__inner otp_wrapper">
          <h1 className="auth__title text-center">Enter Otp</h1>
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
                  {/* <div className="otp_inputs">
                      <input
                        type="text"
                      />
                       <input
                        type="text"
                      />
                       <input
                        type="text"
                      />
                       <input
                        type="text"
                      />  
                    </div> */}
                  <Col md={12}>
                    <div className="otp_inputs">
                      <input
                        name="otp"
                        placeholder="Enter OTP"
                        type="text"
                        maxLength="4"
                        value={values.otp}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {errors.otp && touched.otp && errors.otp}
                      </span>
                    </div>
                  </Col>

                  <Col md="12">
                    {/* <Button title={"Login"} className="submitBtn" submit={submit} /> */}
                    <Button
                      type="submit"
                      title={"Submit"}
                      className="submitBtn"
                      // submit={submit}
                    />
                  </Col>
                  <Col md="12">
                    <p className="newUserLink">
                      New user?
                      <span onClick={() => window.open("/signup", "_self")}>
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

export default Otp;
