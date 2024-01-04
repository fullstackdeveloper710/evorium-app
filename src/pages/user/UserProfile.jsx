import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Button } from "../../components/user";
import {
  UserIcon,
  CameraIcon,
  EyeLock,
  DownArrow,
} from "../../assets/icons/user";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  getMyAccount,
  userEditProfile,
} from "../../redux/thunk/user/usrProfile";
import { FlagIcon } from "react-flag-kit";
import Select from "react-select";
import CountryFlag from "react-country-flag";
import countryList from "react-select-country-list";
import { useLocation, useNavigate, useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { CustomModal, ImageCropper, Input } from "../../components/common";
import { nameRefExp, passwordRefExp, phoneRegExp } from "../../utility/regax";
import { useCropper, useModal } from "../../utility/hooks";

import { ROUTES } from "../../navigation/constants";
import Swal from "sweetalert2"; // Import SweetAlert
import { userLogin } from "../../redux/thunk/user/usrMain";

import { CountryOptions } from "../../utility/CountryList";

const UserProfile = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const [imageFile, setImageFile] = useState(null);
  const [file, setFile] = useState(null);

  //Redux state
  const [Initialvalues, setInitialvalues] = useState(false);

  const { userAuthtoken } = useSelector((state) => state.userAuth);

  const { userDetails } = useSelector((state) => state.userProfile);
  // const verified = userDetails?.verified; // Check the correct nesting
  // console.log("show status", verified);
  //Redux action dispatcher
  const dispatch = useDispatch();

  //Custom hooks
  const { show, handleClose, handleShow } = useModal();
  const { updateCroppedImg, cancelCrop } = useCropper();
  const cropperRef = useRef(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const countries = countryList().getData();
  const fullNameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

  const handleCrop = () => {
    if (cropperRef.current) {
      // Get the cropped image data
      const croppedDataUrl = cropperRef.current.getCroppedCanvas().toDataURL();

      // Update the state with the cropped image data
      setCroppedImage(croppedDataUrl);

      // Call the parent component's function to handle the cropped image
      updateCroppedImg(croppedDataUrl);
    }
  };

  // country selebox options
  // const CountryOptions = [
  //   { value: "India", label: "India" },
  //   { value: "Italy", label: "Italy" },
  //   { value: "USA", label: "USA" },
  //   { value: "China", label: "China" },
  //   { value: "Canada", label: "Canada" },
  //   { value: "UK", label: "UK" },
  // ];

  //Formik initial values
  const initValues = {
    full_name: userDetails?.full_name ?? "",
    email: userDetails?.email ?? "",
    phone: userDetails?.phone ?? "",
    //password: userDetails?.password ?? "",
    country_code: userDetails?.country_code ?? "",

    address: userDetails?.address ?? "",
    profile_pic: userDetails?.profile_pic,

    // profile_pic: null,
  };

  //Formin validation schema
  const validationSchema = Yup.object().shape({
    full_name: Yup.string()
      .matches(nameRefExp, "*Name can only contain Latin letters.")
      .test("full_name", "Please enter both first and last names", (value) => {
        // Check if both first and last names are present
        const names = value.split(" ");
        return names.length === 2 && names.every((name) => name.trim() !== "");
      })
      .max(50)
      .required("*Enter Your Full Name"),
    email: Yup.string().email().required("*Enter your E-mail"),
    phone: Yup.string()
      .matches(phoneRegExp, "*Enter a valid Phone Number")
      .max(13)

      .required("*Enter a valid Phone Number"),

    // password: Yup.string()
    //   .required("required field")
    //   .matches(
    //     passwordRefExp,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    //   ),
    // address: Yup.string().required("must select country"),
  });
  const { usrEditProfile, usrOtp } = ROUTES;
  const navigate = useNavigate();

  //Methods
  const showNumberVerificationAlert = () => {
    Swal.fire({
      title: "Success",
      text: "Updation successful",
      icon: "success",
      confirmButtonText: "Done",
    }).then(() => {
      // Navigate to the desired page after the alert is closed
      navigate(usrEditProfile);
    });
  };
  const showUnsuccessfulAlert = () => {
    Swal.fire({
      title: "Error",
      text: "Number verification unsuccessful. Please try again.",
      icon: "error",
      confirmButtonText: "redirect to otp page ",
    }).then(() => {
      navigate(usrOtp);
    });
  };
  useEffect(() => {
    const data = {
      userAuthtoken,
      values: {
        full_name: userDetails?.full_name,

        // email: userDetails?.email,
      },
    };

    dispatch(getMyAccount(data));
  }, [userAuthtoken, dispatch]);

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  const onSubmitHandler = (values) => {
    const { full_name, email, phone } = values;
    if (values.phone === userDetails.phone) {
      delete values.phone;
    }
    console.log(values, "valuesssss");
    const data = {
      userAuthtoken,
      values: {
        profile_pic: file,
        full_name: userDetails?.full_name,
        otp: +values.otp,
      },
      values: values,
    };
    console.log("Values sent to userEditProfile action:", data);

    dispatch(userEditProfile(data)).then(({ payload }) => {
      if (payload.status) {
        console.log("ngkfjghkjgjgj", payload.verified);
        if (payload.verified) {
          // Show a success alert
          showNumberVerificationAlert();
        } else {
          // Show an error alert for unsuccessful verification
          showUnsuccessfulAlert();
        }
      }
    });
  };

  // const handleImageChange = (e, setFieldValue) => {
  //   const file = e.target.files[0];
  //   console.log(file, "file");
  //   if (file) {
  //     handleShow();
  //   }
  //   setFieldValue("file", file);
  //   // console.log(URL.createObjectURL(file), "URL.createObjectURL(file)");
  // };
  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    console.log(e.target.files[0], "e.target.files[0];");
    setFile(e.target.files[0]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Update the Formik values with the selected image
        setFieldValue("profile_pic", reader.result);
      };

      // reader.readAsDataURL(file);
    }

    // console.log(file)

    setImageFile(file);
    setFieldValue("profile_pic", file);
  };

  return (
    <>
      <section className="auth">
        <div className="auth__inner">
          <h1 className="auth__title text-center">Edit Profile</h1>
          <Formik
            enableReinitialize={true}
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
              setFieldValue,
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
                          onChange={(e) => handleImageChange(e, setFieldValue)}
                        />
                        <label for="editUser">
                          <div className="editUser__figure">
                            {values.profile_pic ? (
                              <Image
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "100%",
                                }}
                                src={
                                  file
                                    ? URL.createObjectURL(file)
                                    : values.profile_pic
                                }
                                alt="user_pro"
                              />
                            ) : (
                              <UserIcon role="img" />
                            )}
                          </div>
                          <div className="editUser__icon">
                            <CameraIcon onClick={handleShow} />
                          </div>
                        </label>
                      </div>
                    </div>
                    {/* <CustomModal
                      show={show}
                      handleClose={handleClose}
                      modalHead="Image cropper"
                    >
                      <ImageCropper
                        updateCroppedImg={updateCroppedImg}
                        image={values.profile_pic}
                        file={values.file}
                        cancelCrop={cancelCrop}
                      />
                    </CustomModal> */}
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
                        className={
                          touched.full_name &&
                          (!fullNameRegex.test(values.full_name) ||
                            !/^[a-zA-Z]+(?: [a-zA-Z]+)*\s+[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(
                              values.full_name
                            )) &&
                          "invalid-input"
                        }
                      />
                      <span style={{ color: "red" }}>
                        {touched.full_name &&
                          (!fullNameRegex.test(values.full_name) ||
                            !/^[a-zA-Z]+(?: [a-zA-Z]+)*\s+[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(
                              values.full_name
                            )) &&
                          "Invalid full name"}
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
                        <select
                          name="address"
                          onBlur={handleBlur}
                          value={values.address} // Set the selected value
                          onChange={(e) => {
                            handleCountryChange(e.target.value);
                            handleChange("address")(e.target.value);
                          }}
                        >
                          <option value="" disabled>
                            Select a country
                          </option>
                          {CountryOptions.map((country) => (
                            <option key={country.value} value={country.value}>
                              <FlagIcon countryCode={country.value} />
                              {country.label}
                            </option>
                          ))}
                        </select>

                        <span className="inputRow__iconGroup">
                          <DownArrow />
                        </span>

                        {/* Error message for country code */}
                        <span style={{ color: "red" }}>
                          {errors.address && touched.address && errors.address}
                        </span>
                      </div>
                    </div>
                  </Col>

                  {/* <Col md={12}>
      <div className="inputRow">
        <div className="inputRow__icon">
          <Select
            id="countrySelect"
            name="address"
            value={values.address}  // Set the selected value

            onBlur={handleBlur}
            options={countries}
            onChange={(selectedOption) => {
              // handleCountryChange and handleChange should be updating the state appropriately
              handleCountryChange(selectedOption.value);
              handleChange('address')(selectedOption.value);

              // Log the selected country code to check if it's correct
              const countryCode = selectedOption.value;
              console.log('Selected Country Code:', countryCode);
            }}
            components={{
              Option: ({ innerProps, label, data }) => (
                <div {...innerProps}>
                  <CountryFlag countryCode={data.value} style={{ marginRight: '8px' }} svg />
                  {label}
                </div>
              ),
            }}
          />

          <span style={{ color: 'red' }}>
            {errors.address && touched.address && errors.address}
          </span>
        </div>
      </div>
    </Col> */}

                  {/* <Col md={12}>
                    <Input
                      className="inputRow"
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={values.address}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.address &&
                        touched.address &&
                        errors.address
                      }
                    />
                  </Col> */}
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
