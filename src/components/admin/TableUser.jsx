import React from "react";
import { Image, Table } from "react-bootstrap";
import { view, trash } from "../../assets/icons/admin";
import { demopic } from "../../assets/images/admin";
import { Link } from "react-router-dom";
import "../../styles/admin/tableUser.scss";
function TableUser() {
  return (
    <>
      <div className="user_table">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Created On</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="user_name">
                  <Image src={demopic} />
                  <span className="name">Darlene Robertson</span>
                </div>
              </td>
              <td>
                <div className="email">
                  <Link to="user-listing" className="email_link">
                    john@gmail.com
                  </Link>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>26 Nov,23</span>
                </div>
              </td>
              <td>
                <div className="number">
                  <span>+19872345275</span>
                </div>
              </td>
              <td>
                <div className="location">
                  <span>
                    <Image />
                    London, UK
                  </span>
                </div>
              </td>
              <td>
                <div className="actions_btns">
                  <button className="action_btn">
                    <Image src={view} />
                  </button>
                  <button className="action_btn">
                    <Image src={trash} />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="user_name">
                  <Image src={demopic} />
                  <span className="name">Darlene Robertson</span>
                </div>
              </td>
              <td>
                <div className="email">
                  <Link to="user-listing" className="email_link">
                    john@gmail.com
                  </Link>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>26 Nov,23</span>
                </div>
              </td>
              <td>
                <div className="number">
                  <span>+19872345275</span>
                </div>
              </td>
              <td>
                <div className="location">
                  <span>
                    <Image />
                    London, UK
                  </span>
                </div>
              </td>
              <td>
                <div className="actions_btns">
                  <button className="action_btn">
                    <Image src={view} />
                  </button>
                  <button className="action_btn">
                    <Image src={trash} />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="user_name">
                  <Image src={demopic} />
                  <span className="name">Darlene Robertson</span>
                </div>
              </td>
              <td>
                <div className="email">
                  <Link to="user-listing" className="email_link">
                    john@gmail.com
                  </Link>
                </div>
              </td>
              <td>
                <div className="date">
                  <span>26 Nov,23</span>
                </div>
              </td>
              <td>
                <div className="number">
                  <span>+19872345275</span>
                </div>
              </td>
              <td>
                <div className="location">
                  <span>
                    <Image />
                    London, UK
                  </span>
                </div>
              </td>
              <td>
                <div className="actions_btns">
                  <button className="action_btn">
                    <Image src={view} />
                  </button>
                  <button className="action_btn">
                    <Image src={trash} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TableUser;
