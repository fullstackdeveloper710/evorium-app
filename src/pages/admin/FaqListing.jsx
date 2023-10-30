import React from "react";
import { Table, Image } from "react-bootstrap";
import { trash, view } from "../../assets/icons/admin";
import { Pagination } from "../../components/admin";
import { Link } from "react-router-dom";
import "../../styles/admin/faqlisting.scss";
function FaqListing() {
  return (
    <div className="faq_listing_section">
      <div className="top_bar">
        <h3 className="title">FAQ’s</h3>
        <div className="search_bar">
          <input type="text" placeholder="Search" />
          <button type="" className="search_btn">
            Search
          </button>
        </div>
      </div>
      <div className="faq_listing_table_section">
        <div className="comn_table">
          <Table striped>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Question Title</th>
                <th>Answer</th>
                <th>Created On</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>How I can sign up ?</td>
                <td className="answer_td">
                  <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...</p>
                </td>
                <td>+19872345275</td>
                <td>
                  <div className="delete_action">
                    <Link to="/backoffice/faq" className="view_btn">
                      <Image src={view} className="" />
                    </Link>
                    <Link to="#" className="delete_btn">
                      <Image src={trash} className="" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>How I can sign up ?</td>
                <td className="answer_td">
                  <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...</p>
                </td>
                <td>+19872345275</td>
                <td>
                  <div className="delete_action">
                    <Link to="/backoffice/faq" className="view_btn">
                      <Image src={view} className="" />
                    </Link>
                    <Link to="#" className="delete_btn">
                      <Image src={trash} className="" />
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td>1.</td>
                <td>How I can sign up ?</td>
                <td className="answer_td">
                  <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...</p>
                </td>
                <td>+19872345275</td>
                <td>
                  <div className="delete_action">
                    <Link to="/backoffice/faq" className="view_btn">
                      <Image src={view} className="" />
                    </Link>
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

export default FaqListing;
