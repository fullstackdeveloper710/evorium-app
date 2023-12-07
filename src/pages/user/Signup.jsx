import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button, Alert } from "../../components/user";
import { CheckIcon, EyeLock } from "../../assets/icons/user";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { userSignUp } from "../../redux/thunk/user/usrMain";
import { useDispatch } from "react-redux";
import { Input } from "../../components/common";
import { ROUTES } from "../../navigation/constants";
import SocialMedia from "../common/SocialMedia";
import "../../styles/user/auth.scss";
import PhoneInput from 'react-phone-number-input'
import parsePhoneNumber from 'libphonenumber-js';
import { nameRefExp, passwordRefExp, phoneRegExp } from "../../utility/regax";


const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [show, setShow] = useState(false);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Router functions
  const navigate = useNavigate();
  const { usrOtp, usrLogin } = ROUTES;

  //Formik initial state
  const initValues = {
    full_name: "",
    email: "",
    password: "",
    phone: "",
    country_code: "",
  };

  //Formik validation schema
  const validationSchema = Yup.object().shape({
    full_name: Yup.string()
      .matches(nameRefExp, "*Name can only contain Latin letters.")
      .max(50)
      .required("*Enter Your Full Name"),
    email: Yup.string().email().required("*Enter your E-mail"),
    phone: Yup.string()
      .matches(phoneRegExp, "*Enter a valid Phone Number")
      .max(12)
      .required("*Enter a valid Phone Number"),

    password: Yup.string()
      .required("required field")
      .matches(
        passwordRefExp,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    country_code: Yup.string().required("must select country"),
  });

  //Methods
  function showClose() {
    setShow(false);
    window.open("/login", "_self");
  }

  const onSubmitHandler = (values) => {
    const phoneNumber = parsePhoneNumber(values.phone, {
      defaultCountry: "US",
    }); // Change 'US' to your default country code
    const country_code = phoneNumber
      ? `+${phoneNumber.countryCallingCode}`
      : "";

    const data = {
      ...values,
      country_code,
    };

    dispatch(userSignUp(data)).then(({ payload }) => {
      if (payload) {
        setShow(true);
        navigate(usrOtp, {
          state: {
            id: payload.user_id,
            otp: payload.otp,
          },
        });
      }
    });
  };

  // const handlePhoneChange = (value) => {
  //   // setPhoneNumber(value);

  //   try {
  //     const phoneNumberObject = parsePhoneNumber(value);
  //     console.log('Country Code:', phoneNumberObject.countryCallingCode);
  //   } catch (error) {
  //     console.error('Invalid phone number:', error.message);
  //   }
  // };

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
          <h1 className="auth__title text-center">Sign Up to your account</h1>

          <Formik
            initialValues={initValues}
            validationSchema={validationSchema}
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
                    <div className="inputRow">
                      <PhoneInput
                        placeholder="Phone Number"
                        value={values.phone}
                        country={values.country_code}
                        onChange={(value, country) => {
                          handleChange({ target: { name: "phone", value } });

                          // Check if country is available before accessing its properties
                          if (country && country.countryCallingCode) {
                            const updatedCountryCode = `+${country.countryCallingCode}`;
                            handleChange({
                              target: {
                                name: "country_code",
                                value: updatedCountryCode,
                              },
                            });
                          } else {
                            handleChange({
                              target: {
                                name: "country_code",
                                value: values.country_code,
                              },
                            });
                          }
                        }}
                      />

                      <span style={{ color: "red" }}>
                        {errors.phone && touched.phone && errors.phone}
                      </span>
                    </div>
                  </Col>

                  <Col md="12">
                    <Button
                      type="submit"
                      title={"Sign Up"}
                      className="submitBtn"
                      // submit={submit}
                    />
                  </Col>

                  <Col md="12">
                    <p className="newUserLink">
                      Already Have an Account?
                      <span onClick={() => navigate(usrLogin)}>Login</span>
                    </p>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
          <SocialMedia />
        </div>
      </section>
    </>
  );
};

export default Signup;
