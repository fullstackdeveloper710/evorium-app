import React, { useEffect, useState } from "react";
import { Col, Row, Table, Image } from "react-bootstrap";
import { trash } from "../../assets/icons/admin";
import { Pagination } from "../../components/admin";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdminSpeaker,
  getAdminSpeakers,
} from "../../redux/thunk/admin/adSpeakers";
import { dateFormater } from "../../utility/methods";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/common/Button";
import BtnGroup from "../../components/common/BtnGroup";
import { Input } from "../../components/common";
import SelectBox from "../../components/common/SelectBox";
import "../../styles/admin/categories.scss";
function Speaker() {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminSpeakers } = useSelector((state) => state.adSpeaker);
  const { data } = adminSpeakers;

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Formik initial state
  const initValues = {
    name: "",
    category: "",
  };

  //Yup validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name field is required"),
    category: Yup.string().required("Category field is required"),
  });

  //Methods
  useEffect(() => {
    const data = {
      adminAuthtoken,
      values: {
        pageNo: 1,
        pageSize: 4,
      },
    };
    dispatch(getAdminSpeakers(data));
  }, [adminAuthtoken, dispatch]);

  const onSubmitHandler = (values) => {
    const data = {
      adminAuthtoken,
      values: {
        ...values,
      },
      pagination: {
        pageNo: 1,
        pageSize: 4,
      },
    };
    dispatch(addAdminSpeaker(data));
  };

  const onCancelHandler = (resetForm) => {
    resetForm();
  };

  const options = [
    {
      value: "",
      label: "Select option",
    },
    {
      value: "pro",
      label: "pro",
    },
    {
      value: "free",
      label: "free",
    },
  ];

  return (
    <div className="categories_section">
      <h3 className="title">Speakers</h3>
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
          resetForm,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Input
                  className="input_label_wrap"
                  label="Speaker Name"
                  type="text"
                  placeholder="Enter text..."
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.name && touched.name && errors.name}
                />
                <SelectBox
                  className="input_label_wrap"
                  name="category"
                  label="Select Categories"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  options={options}
                  error={errors.category && touched.category && errors.category}
                />
                <BtnGroup>
                  <Button
                    title="add"
                    type="submit"
                    className="primary_btn"
                    onClick={onSubmitHandler}
                  />
                  <Button
                    title="cancel"
                    type="button"
                    className="secondry_btn"
                    onClick={() => onCancelHandler(resetForm)}
                  />
                </BtnGroup>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>

      <div className="categories_logs_section">
        <h3 className="title">Speakers Logs</h3>
        <div className="categories_logs_table comn_table">
          <Table striped>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Speaker Name</th>
                <th>Categories</th>
                <th>Created On</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                data?.map(({ name, category, createdAt }, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}.</td>
                      <td>{name}</td>
                      <td>{category}</td>
                      <td>{dateFormater(createdAt)}</td>
                      <td>
                        <div className="delete_action">
                          <Link to="#" className="delete_btn">
                            <Image src={trash} className="" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div>No Record Found</div>
              )}
            </tbody>
          </Table>
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Speaker;
