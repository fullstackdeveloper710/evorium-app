import React, { useState } from "react";
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
import Select from "react-select";

// import { object, string, number, date, InferType } from "yup";

const UserProfile = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryChange = (selectedCountry) => {
    console.log(selectedCountry);
    setSelectedCountry(selectedCountry);
  };

  const CountryOptions = [
    { value: "India", label: "India" },
    { value: "Italy", label: "Italy" },
    { value: "USA", label: "USA" },
    { value: "China", label: "China" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
  ];

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const nameRefExp = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;
  const passwordRefExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const initValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    country: "",
  };

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
  const [selectedImage, setSelectedImage] = useState(null);

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
          <h1 className="auth__title text-center">Edit Profile</h1>
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
                      <div className="editProfileUser">
                        <input
                          id="editUser"
                          type="file"
                          accept="image/*"
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
                    <div className="inputRow">
                      {/* <div className="inputRow__icon"> */}
                      <Select
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
                      />

                      <span className="inputRow__iconGroup">
                        <DownArrow />
                      </span>
                      <span style={{ color: "red" }}>
                        {" "}
                        {errors.country && touched.country && errors.country}
                      </span>
                    </div>
                    {/* </div> */}
                  </Col>
                  <Col md="12">
                    <Button
                      type="submit"
                      title={"Save Changes"}
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
