import React, { useEffect } from "react";
import { Col, Row, Table, Image } from "react-bootstrap";
import { CommonButtons } from "../../components/admin";
import { trash } from "../../assets/icons/admin";
import { Pagination } from "../../components/admin";
import { Link } from "react-router-dom";
import "../../styles/admin/categories.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAdminSpeakers } from "../../redux/thunk/admin/adSpeakers";
import { dateFormater } from "../../utility/methods";
function Speaker() {
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminSpeakers } = useSelector((state) => state.adSpeaker);
  const { data } = adminSpeakers;
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      adminAuthtoken,
      values: {
        pageNo: 1,
        pageSize: 4,
      },
    };
    dispatch(getAdminSpeakers(data));
  }, []);

  return (
    <div className="categories_section">
      <h3 className="title">Categories</h3>
      <Row>
        <Col md={6}>
          <div className="input_label_wrap">
            <label>Speaker Name</label>
            <input type="tel" placeholder="0 123 456 7890" />
          </div>
          <div className="input_label_wrap">
            <label>Select Categories</label>
            <select>
              <option>Cryptocurrency</option>
              <option>Cryptocurrency</option>
              <option>Cryptocurrency</option>
              <option>Cryptocurrency</option>
            </select>
          </div>
          <CommonButtons firstBtn="Add" secondBtn="CANCEL" />
        </Col>
      </Row>

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
