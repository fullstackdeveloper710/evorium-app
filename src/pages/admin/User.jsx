import React from "react";
import "../../styles/admin/user.scss";
import { TableUser } from "../../components/admin";

function User() {
  console.log("user ");
  return (
    <>
      <div className="user_tab">
        <div className="tob_bar">
          <h3 className="title pt-2 mb-0">Users</h3>
          <div className="right_search_bar">
            <div className="search_block">
              <input type="text" placeholder="Search" />
              <button type="" className="search_btn">
                Search
              </button>
            </div>
            <div className="date_block">
              <div className="input_wraper">
                <label>From Date</label>
                <input type="date" />
              </div>
              <div className="input_wraper">
                <label>To date</label>
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
        <TableUser />
      </div>
    </>
  );
}

export default User;
