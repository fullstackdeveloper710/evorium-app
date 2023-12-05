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
import { FlagIcon } from 'react-flag-kit';
import Select from 'react-select';
import CountryFlag from 'react-country-flag';
import countryList from 'react-select-country-list';

import { useDispatch, useSelector } from "react-redux";
import { CustomModal, ImageCropper, Input } from "../../components/common";
import { nameRefExp, passwordRefExp, phoneRegExp } from "../../utility/regax";
import { useCropper, useModal } from "../../utility/hooks";

const UserProfile = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  //Redux state
  const [Initialvalues, setInitialvalues] = useState(false);

  const { userAuthtoken } = useSelector((state) => state.userAuth);
  const { userDetails } = useSelector((state) => state.userProfile);
  //Redux action dispatcher
  const dispatch = useDispatch();

  //Custom hooks
  const { show, handleClose, handleShow } = useModal();
  const { updateCroppedImg, cancelCrop } = useCropper();
  const cropperRef = useRef(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const countries = countryList().getData();

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
  const CountryOptions = [
    { value: "India", label: "India" },
    { value: "Italy", label: "Italy" },
    { value: "USA", label: "USA" },
    { value: "China", label: "China" },
    { value: "Canada", label: "Canada" },
    { value: "UK", label: "UK" },
  ];
  // const CountryOptions = [
  //   { value: "India", label: "India", country_code: "+91" },
  //   { value: "Italy", label: "Italy", country_code: "+39" },
  //   { value: "USA", label: "USA", country_code: "+1" },
  //   // ... other country options
  // ];
  
  //Formik initial values
  const initValues = {
    full_name: userDetails?.full_name ?? "",
    email: userDetails?.email ?? "",
    phone: userDetails?.phone ?? "",
    // password: userDetails?.password ?? "",
    country_code: userDetails?.country_code ?? "",
    profile_pic:  userDetails?.profile_pic ?? "",
    file: userDetails?.file ?? "",
    address:userDetails?.address ?? "",
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
      values: {
        full_name: userDetails?.full_name,
        // email: userDetails?.email,
      },
    };
    console.log("my account ", data);
    dispatch(getMyAccount(data));
  }, [userAuthtoken, dispatch]);

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  const onSubmitHandler = (values) => {
    const data = {
      userAuthtoken,
      values: {
        ...values,
      },
    };
    console.log("first", values);

    dispatch(userEditProfile(data));
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
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        // Update the Formik values with the selected image
        setFieldValue("profile_pic", reader.result);
      };
  
      reader.readAsDataURL(file);
    }
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
      {/* Input for selecting an image */}
      <input
        id="editUser"
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, setFieldValue)}
      />

      <label htmlFor="editUser">
        <div className="editUser__figure">
          {/* Display the selected image or default UserIcon */}
          {values.profile_pic ? (
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "100%",
              }}
              src={values.profile_pic}
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
  <CustomModal
    show={show}
    handleClose={handleClose}
    modalHead="Image cropper"
  >
    {/* Pass the selected image to ImageCropper */}
    <ImageCropper
      updateCroppedImg={updateCroppedImg}
      image={values.profile_pic}
      file={values.file}
      cancelCrop={cancelCrop}
    />
  </CustomModal>
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
                  {/* <Col md={12}>
                    <div className="inputRow">
                      <input
                        name="address"
                        placeholder="Address"
                        type="text"
                        value={values.address}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {errors.address && touched.address && errors.address}
                      </span>
                    </div>
                  </Col> */}
{/* 
<Col md={12}>
  <div className="inputRow">
    <div className="inputRow__icon">
      <Select
        id="countrySelect" // You can remove this if not needed
        styles={{
          control: (styles) => ({
            ...styles,
            color: values.isFocused ? 'black' : 'black',
            backgroundColor: values.isFocused ? 'white' : 'white',
          }),
        }}
        name="address"
        onBlur={handleBlur}
        value={CountryOptions.find((option) => option.value === values.address)}
        options={CountryOptions}
        onChange={(selectedOption) => {
          handleCountryChange(selectedOption.value);
          handleChange("address")(selectedOption.value);
        }}
        components={{
          Option: ({ innerProps, label, data }) => (
            <div {...innerProps}>
              <CountryFlag
                countryCode={data.value}
                style={{ marginRight: '8px' }}
                svg
              />
              {label}
            </div>
          ),
        }}
      />

      <span style={{ color: "red" }}>
        {errors.address && touched.address && errors.address}
      </span>
    </div>
  </div>
</Col> */}

<Col md={12}>
      <div className="inputRow">
        <div className="inputRow__icon">
          {/* Country Select Dropdown */}
          <Select
            id="countrySelect"
            name="address"
            onBlur={handleBlur}
            value={countries.find((option) => option.value === values.address)}
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

          {/* Error message for country code */}
          <span style={{ color: 'red' }}>
            {errors.address && touched.address && errors.address}
          </span>
        </div>
      </div>
    </Col>



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
