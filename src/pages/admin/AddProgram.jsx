import React, { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { upload } from "../../assets/icons/admin";
import { thumbnail, video } from "../../assets/images/admin";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../navigation/constants";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  BtnGroup,
  Button,
  Input,
  VideoUploader,
} from "../../components/common";
import SelectBox from "../../components/common/SelectBox";
import RadioBtn from "../../components/common/RadioBtn";
import RadioGroup from "../../components/common/RadioGroup";
import "../../styles/admin/addprogram.scss";
import { addAdminProgram } from "../../redux/thunk/admin/adPrograms";

function AddProgram() {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Router functions
  const navigate = useNavigate();
  const { adProgramList } = ROUTES;

  //Formik initial state
  const initValues = {
    title: "",
    description: "",
    category: "",
    speaker: "",
    selectedEpisode: "",
    course_type: "",
    tags: "",
    price: "",
    episodes: [],
    video: "",
    selectedThumbnail: "",
    thumbnails: [],
  };

  //Yup validation schema
  const validationSchema = Yup.object().shape({
    title: Yup.number().required("required field"),
    description: Yup.string().required("required field"),
    category: Yup.string().required("required field"),
    speaker: Yup.string().required("required field"),
    selectedEpisode: Yup.string().required("required field"),
    course_type: Yup.string().required("required field"),
    tags: Yup.string().required("required field"),
    price: Yup.string().required("required field"),
    // episodes: Yup.array().of(
    //   Yup.object().shape({
    //     label: Yup.string().required("Required field"),
    //     startTime: Yup.object().shape({
    //       hours: Yup.string().required("Required field"),
    //       minutes: Yup.string().required("Required field"),
    //       seconds: Yup.string().required("Required field"),
    //     }),
    //     endTime: Yup.object().shape({
    //       hours: Yup.string().required("Required field"),
    //       minutes: Yup.string().required("Required field"),
    //       seconds: Yup.string().required("Required field"),
    //     }),
    //   })
    // ),
  });

  //Methods
  const onSubmitHandler = (val) => {
    const data = {
      adminAuthtoken,
      values: {
        ...val,
        episodes: val.episodes.map((item) => {
          return {
            title: item.title,
            start: `${item.startTime.hours}:${item.startTime.minutes}:${item.startTime.seconds}`,
            end: `${item.endTime.hours}:${item.endTime.minutes}:${item.endTime.seconds}`,
          };
        }),
        thumbnail: val.selectedThumbnail,
      },
    };
    delete data.values.thumbnails;
    delete data.values.selectedThumbnail;
    delete data.values.selectedEpisode;

    console.log(data, "data here");
    dispatch(addAdminProgram(data));
  };

  const onCancelHandler = (resetForm) => {
    resetForm();
  };

  const catOptions = [
    {
      value: "",
      label: "Select option",
    },
    {
      value: "Cryptocurrency",
      label: "Cryptocurrency",
    },
    {
      value: "Cryptocurrency1",
      label: "Cryptocurrency1",
    },
  ];

  const speakerOptions = [
    {
      value: "",
      label: "Select option",
    },
    {
      value: "Speaker",
      label: "Speaker",
    },
    {
      value: "Speaker1",
      label: "Speaker1",
    },
  ];

  const episodesOptions = [
    {
      value: "",
      label: "Select option",
    },
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
  ];

  return (
    <div className="add_program_section">
      <h3 className="title mb-4">
        <Link to={adProgramList} className="me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="25"
            viewBox="0 0 35 25"
            fill="none"
          >
            <path
              d="M34.2508 24.9999C33.9504 24.9999 33.6748 24.8084 33.5568 24.4942C33.4702 24.2662 31.3053 18.8573 23.2113 17.786C21.5253 17.5581 19.5061 17.4411 17.0539 17.4207V24.1625C17.0539 24.4737 16.903 24.7558 16.655 24.9049C16.4084 25.0481 16.1132 25.0276 15.8836 24.8566L0.333258 13.197C0.123332 13.0406 0 12.7776 0 12.5014C0 12.2222 0.123332 11.9679 0.333258 11.8042L15.8901 0.14316C16.1197 -0.0336782 16.4123 -0.0453696 16.6616 0.100778C16.9109 0.249848 17.0592 0.531911 17.0592 0.834436V7.10854C20.4416 7.59959 35 10.5138 35 24.1698C35 24.5658 34.7494 24.9122 34.3978 24.9911C34.3492 24.9999 34.2981 24.9999 34.2508 24.9999Z"
              fill="black"
            ></path>
          </svg>
        </Link>
        Add New Program
      </h3>{" "}
      <Formik initialValues={initValues} validationSchema={validationSchema}>
        {({
          values,
          resetForm,
          isSubmitting,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="add_program_form">
              <Row>
                <Col md={7}>
                  <div className="left_block">
                    <Input
                      className="input_label_wrap"
                      label="Course Title"
                      type="text"
                      placeholder="0 123 456 7890"
                      name="title"
                      value={values.title}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.title && touched.title && errors.title}
                    />

                    <Input
                      className="input_label_wrap"
                      label="Description"
                      type="description"
                      placeholder="john@gmail.com"
                      name="description"
                      value={values.description}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.description &&
                        touched.description &&
                        errors.description
                      }
                    />

                    <SelectBox
                      className="input_label_wrap"
                      name="category"
                      label="Categories"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={catOptions}
                      error={
                        errors.category && touched.category && errors.category
                      }
                    />

                    <SelectBox
                      className="input_label_wrap"
                      name="speaker"
                      label="Speaker"
                      value={values.speaker}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      options={speakerOptions}
                      error={
                        errors.speaker && touched.speaker && errors.speaker
                      }
                    />

                    <SelectBox
                      className="input_label_wrap"
                      name="selectedEpisode"
                      label="Select number of Episodes"
                      value={values.selectedEpisode}
                      onChange={(e) => {
                        setFieldValue("selectedEpisode", e.target.value);
                        const newEpisodesFields = Array.from(
                          { length: parseInt(e.target.value, 10) },
                          (_, index) => ({
                            label: `episode ${index + 1}`,
                            title: "",
                            startTime: {
                              hours: "",
                              minutes: "",
                              seconds: "",
                            },
                            endTime: {
                              hours: "",
                              minutes: "",
                              seconds: "",
                            },
                          })
                        );
                        setFieldValue("episodes", newEpisodesFields);
                      }}
                      onBlur={handleBlur}
                      options={episodesOptions}
                      error={
                        errors.selectedEpisode &&
                        touched.selectedEpisode &&
                        errors.selectedEpisode
                      }
                    />

                    <div className="episode_section">
                      <FieldArray name="episodes">
                        {({ insert, remove, push }) => (
                          <div>
                            {values.episodes.map(
                              ({ label, startTime, endTime }, index) => (
                                <Row className="episodes_wrap" key={index}>
                                  <Col xs lg="4">
                                    <Input
                                      className="input_label_wrap"
                                      label={label}
                                      type="text"
                                      placeholder="Enter Episode Title"
                                      name={`episodes.${index}.title`}
                                      // value={name}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      // error={
                                      //   errors.number &&
                                      //   touched.number &&
                                      //   errors.number
                                      // }
                                    />
                                  </Col>
                                  <Col xs lg="4">
                                    <div className="start_input commn_input">
                                      <span className="start_end_title">
                                        Start
                                      </span>
                                      <div className="timing_block">
                                        <div className="hour">
                                          <input
                                            type="number"
                                            value={startTime.hours}
                                            name={`episodes.${index}.startTime.hours`}
                                            placeholder="00"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                          />
                                          <label>Hour</label>
                                        </div>
                                        <div className="minute">
                                          <span className="dot">:</span>
                                          <input
                                            type="number"
                                            value={startTime.minutes}
                                            name={`episodes.${index}.startTime.minutes`}
                                            placeholder="00"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                          />
                                          <label>Minute</label>
                                        </div>
                                        <div className="seconds">
                                          <span className="dot">:</span>
                                          <input
                                            type="number"
                                            value={startTime.seconds}
                                            name={`episodes.${index}.startTime.seconds`}
                                            placeholder="00"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                          />
                                          <label>Seconds</label>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col xs lg="4">
                                    <div className="start_input commn_input">
                                      <span className="start_end_title">
                                        End
                                      </span>
                                      <div className="timing_block">
                                        <div className="hour">
                                          <input
                                            type="number"
                                            value={endTime.hours}
                                            name={`episodes.${index}.endTime.hours`}
                                            placeholder="00"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                          />
                                          <label>Hour</label>
                                        </div>
                                        <div className="minute">
                                          <span className="dot">:</span>
                                          <input
                                            type="number"
                                            value={endTime.minutes}
                                            name={`episodes.${index}.endTime.minutes`}
                                            placeholder="00"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                          />
                                          <label>Minute</label>
                                        </div>
                                        <div className="seconds">
                                          <span className="dot">:</span>
                                          <input
                                            type="number"
                                            value={endTime.seconds}
                                            name={`episodes.${index}.endTime.seconds`}
                                            placeholder="00"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                          />
                                          <label>Seconds</label>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              )
                            )}
                          </div>
                        )}
                      </FieldArray>
                    </div>
                    <div className="radio_btns">
                      <RadioGroup
                        groupClass="course_type"
                        title="Course Type"
                        error={
                          errors.course_type &&
                          touched.course_type &&
                          errors.course_type
                        }
                      >
                        <RadioBtn
                          id="paid"
                          name="course_type"
                          label="Paid"
                          checked={values.course_type === "Paid"}
                          value={values.course_type}
                          onChange={() => setFieldValue("course_type", "Paid")}
                        />
                        <RadioBtn
                          id="free"
                          name="course_type"
                          label="Free"
                          checked={values.course_type === "Free"}
                          value={values.course_type}
                          onChange={() => setFieldValue("course_type", "Free")}
                        />
                      </RadioGroup>

                      <RadioGroup
                        groupClass="tags"
                        title="Tags"
                        error={errors.tags && touched.tags && errors.tags}
                      >
                        <RadioBtn
                          id="popular"
                          name="tags"
                          label="popular"
                          value={values.tags}
                          checked={values.tags === "popular"}
                          onChange={() => setFieldValue("tags", "popular")}
                        />
                        <RadioBtn
                          id="recommended"
                          name="tags"
                          label="recommended"
                          value={values.tags}
                          checked={values.tags === "recommended"}
                          onChange={() => setFieldValue("tags", "recommended")}
                        />
                      </RadioGroup>
                    </div>

                    <Input
                      className="input_label_wrap"
                      label="Price(in $)"
                      type="text"
                      placeholder="$100"
                      name="price"
                      value={values.price}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.price && touched.price && errors.price}
                    />

                    <BtnGroup className="common_btns">
                      <Button
                        title="Save"
                        type="submit"
                        className="primary_btn"
                        onClick={() => onSubmitHandler(values)}
                      />
                      <Button
                        title="cancel"
                        type="button"
                        className="secondry_btn"
                        onClick={() => onCancelHandler(resetForm)}
                      />
                    </BtnGroup>
                  </div>
                </Col>
                <Col md={5}>
                  <VideoUploader
                    video={values.video}
                    setFieldValue={setFieldValue}
                    thumbnails={values.thumbnails}
                    selectedThumbnail={values.selectedThumbnail}
                  />
                </Col>
              </Row>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProgram;
