import React from "react";
import { Col, Row, Table, Image } from "react-bootstrap";
import { CommonButtons } from "../../components/admin";
import { trash } from "../../assets/icons/admin";
import {Pagination} from "../../components/admin";
import { Link } from "react-router-dom";
import "../../styles/admin/categories.scss";
function Categories() {
  return (
    <div className="categories_section">
      <h3 className="title">Categories</h3>
      <Row>
        <Col md={6}>
          <div className="input_label_wrap">
            <label>Category Name</label>
            <input type="tel" placeholder="0 123 456 7890" />
          </div>
          <div className="input_label_wrap">
            <label>Date</label>
            <input type="date" />
          </div>
          <CommonButtons firstBtn="Add" secondBtn="CANCEL" />
        </Col>
      </Row>

      <div className="categories_logs_section">
        <h3 className="title">Categories Logs</h3>
        <div className="categories_logs_table comn_table">
          <Table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Category Name</th>
                <th>Created On</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Cryptocurrency</td>
                <td>26 Nov,23</td>
                <td>
                  <div className="delete_action">
                    <Link to="#" className="delete_btn">
                      <Image src={trash} className="" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Cryptocurrency</td>
                <td>26 Nov,23</td>
                <td>
                  <div className="delete_action">
                    <Link to="#" className="delete_btn">
                      <Image src={trash} className="" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Cryptocurrency</td>
                <td>26 Nov,23</td>
                <td>
                  <div className="delete_action">
                    <Link to="#" className="delete_btn">
                      <Image src={trash} className="" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Cryptocurrency</td>
                <td>26 Nov,23</td>
                <td>
                  <div className="delete_action">
                    <Link to="#" className="delete_btn">
                      <Image src={trash} className="" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Categories;
