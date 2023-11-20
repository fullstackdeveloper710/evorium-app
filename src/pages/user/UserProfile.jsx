import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "../../components/user";
import {
  UserIcon,
  CameraIcon,
  EyeLock,
  DownArrow,
} from "../../assets/icons/user";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { getMyAccount } from "../../redux/thunk/user/usrMain";
import { ROUTES } from "../../navigation/constants";
import { userEditProfile } from "../../redux/thunk/user/usrProfile";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/common";
import { nameRefExp, passwordRefExp, phoneRegExp } from "../../utility/regax";

const UserProfile = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  //Redux state
  const { userAuthtoken } = useSelector((state) => state.userAuth);
  const { userDetails } = useSelector((state) => state.userAuth);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Router functions
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  //country selebox options
  const CountryOptions = [
    { value: "India", label: "India" },
    { value: "Italy", label: "Italy" },
    { value: "USA", label: "USA" },
    { value: "China", label: "China" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
  ];

  //Formik initial values
  const initValues = {
    full_name: userDetails?.full_name ?? "",
    email: userDetails?.email ?? "",
    phone: userDetails?.phone ?? "",
    password: userDetails?.password ?? "",
    country_code: userDetails?.country_code ?? "",
  };

  //Formin validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(nameRefExp, "Name can only contain Latin letters.")
      .max(50)
      .required("required field"),
    email: Yup.string().email().required("required field"),
    phone: Yup.string()
      .matches(phoneRegExp, "Enter a valid Phone Number")
      .max(12)
      .required("Enter a valid Phone Number"),

    password: Yup.string()
      .required("required field")
      .matches(
        passwordRefExp,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    country: Yup.string().required("must select country"),
  });

  //Methods
  useEffect(() => {
    const data = {
      userAuthtoken,
      values: {},
    };
    dispatch(getMyAccount(data));
  }, [userAuthtoken, dispatch]);

  const handleCountryChange = (selectedCountry) => {
    console.log(selectedCountry);
    setSelectedCountry(selectedCountry);
  };

  const onSubmitHandler = (values) => {
    const data = {
      userAuthtoken,
      values: {
        ...values,
      },
    };
    dispatch(userEditProfile(data));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  function submit() {
    // console.log("login");
    // setShow(true);
    localStorage.setItem("login", true);
    window.open("/programs", "_self");
  }

  return (
    <>
      <section className="auth">
        <div className="auth__inner">
          <h1 className="auth__title">Edit Profile</h1>
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
                    <div className="inputRow">
                      <div className="editProfileUser">
                        <input
                          id="editUser"
                          type="file"
                          accept="image/*"
                          value={values.profile_pic}
                          onChange={handleImageChange}
                        />
                        <label for="editUser">
                          <div className="editUser__figure">
                            <UserIcon />
                          </div>
                          <div className="editUser__icon">
                            <CameraIcon />
                          </div>
                        </label>
                      </div>
                    </div>
                  </Col>

                  <Col md={12}>
                    <div className="inputRow">
                      <input
                        name="full_name"
                        placeholder="Name"
                        type="text"
                        value={values.full_name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {" "}
                        {errors.full_name &&
                          touched.full_name &&
                          errors.full_name}
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
                      <input
                        name="phone"
                        placeholder="Phone Number"
                        type="text"
                        value={values.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {errors.phone && touched.phone && errors.phone}
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
                    {/* <div className="inputRow"> */}
                    {/* <div className="inputRow__icon"> */}
                    {/* <Select
                       styles={{
                        
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          color : state.isFocused ? 'black' : "black",
                        
                          backgroundColor: state.isFocused ? 'white' : 'white'
                        }),}}
                        placeholder="Country"
                        onBlur={handleBlur}
                        value={selectedCountry}
                        onChange={(selectedOption) => {
                          handleCountryChange(selectedOption);

                          handleChange("country")(selectedOption.value);
                        }}
                        // isSearchable={true}
                        options={CountryOptions}
                        name="country"
                      /> */}

                    {/* <span className="inputRow__iconGroup">
                        <DownArrow />
                      </span>
                      <span style={{ color: "red" }}>
                        {" "}
                        {errors.country && touched.country && errors.country}
                      </span>
                    </div> */}
                    {/* </div> */}
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
                  <Col md="12">
                    <Button
                      type="submit"
                      title={"Save"}
                      className="submitBtn"
                      // submit={submit}
                    />
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

export default UserProfile;
