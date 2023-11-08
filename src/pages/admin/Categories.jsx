import React, { useEffect } from "react";
import { Col, Row, Table, Image } from "react-bootstrap";
import { trash } from "../../assets/icons/admin";
import { Pagination } from "../../components/admin";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdminCategory,
  deleteAdminCategory,
  getAdminCategories,
} from "../../redux/thunk/admin/adCategories";
import { dateFormater } from "../../utility/methods";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { BtnGroup, Button, Input } from "../../components/common";
import "../../styles/admin/categories.scss";
import ReactDataTable from "../../components/common/DataTable";
function Categories() {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminCategories } = useSelector((state) => state.adCategories);
  const { data } = adminCategories;

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
    dispatch(getAdminCategories(data));
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
    dispatch(addAdminCategory(data));
  };

  const onCancelHandler = (resetForm) => {
    resetForm();
  };

  const deleteUserHandler = (id) => {
    const data = {
      adminAuthtoken,
      values: {
        id,
      },
    };
    dispatch(deleteAdminCategory(data));
  };

  const columns = [
    { name: "S.No.", selector: (row, index) => index + 1 },
    {
      name: "Category Name",
      selector: (row) => row.title,
    },
    {
      name: "Created On",
      selector: (row) => dateFormater(row?.createdAt),
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="delete_action">
          <button
            className="action_btn"
            onClick={() => {
              deleteUserHandler(row._id);
            }}
          >
            <Image src={trash} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="categories_section">
      <h3 className="title">Categories</h3>
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

      <ReactDataTable
        data={data}
        columns={columns}
        pagination={true}
        subHeader={true}
        header="Categories Logs"
      />
    </div>
  );
}

export default Categories;
