import React, { useEffect } from "react";
import { Col, Row, Table, Image } from "react-bootstrap";
import { trash } from "../../assets/icons/admin";
import { Pagination } from "../../components/admin";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdminTags,
  deleteAdminTag,
  getAdminTags,
} from "../../redux/thunk/admin/adTags";
import { dateFormater } from "../../utility/methods";
import * as Yup from "yup";
import "../../styles/admin/categories.scss";
import { Form, Formik } from "formik";
import {
  BtnGroup,
  Button,
  Input,
  ReactDataTable,
} from "../../components/common";
function Tags() {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminTags } = useSelector((state) => state.adTags);
  const { data } = adminTags;

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Formik initial state
  const initValues = {
    title: "",
    date: "",
  };

  //Yup validation schema
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Name field is required"),
    date: Yup.string().required("Date field is required"),
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
    dispatch(getAdminTags(data));
  }, []);

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
    dispatch(addAdminTags(data));
  };

  const onCancelHandler = (resetForm) => {
    resetForm();
  };

  const deleteTagHandler = (id) => {
    const data = {
      adminAuthtoken,
      values: {
        id,
      },
    };
    dispatch(deleteAdminTag(data));
  };
  const columns = [
    {
      name: "S.No.",
      selector: (row, index) => <div>{index + 1}</div>,
    },
    {
      name: "Tag Name",
      selector: (row) => <div>{row.title}</div>,
    },
    {
      name: "Created On",
      selector: (row) => <div>{dateFormater(row.createdAt)}</div>,
    },
    {
      name: "Action",
      selector: (row) => (
        <BtnGroup className="delete_action">
          <Button
            title={<Image src={trash} />}
            type="button"
            className="action_btn delete_btn "
            onClick={() => {
              deleteTagHandler(row._id);
            }}
          />
        </BtnGroup>
      ),
    },
  ];
  return (
    <div className="categories_section tags_section">
      <h3 className="title">Tags</h3>
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
                  label="category name"
                  type="text"
                  placeholder="Enter text..."
                  name="title"
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.title && touched.title && errors.title}
                />
                <Input
                  className="input_label_wrap"
                  label="date"
                  type="date"
                  name="date"
                  value={values.date}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.date && touched.date && errors.date}
                />
                <BtnGroup className="common_btns">
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

      <ReactDataTable
        data={data}
        columns={columns}
        pagination={true}
        header="Tags Logs"
        subHeader={true}
      />
    </div>
  );
}

export default Tags;
