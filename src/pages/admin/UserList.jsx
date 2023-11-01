import React, { useEffect } from "react";
import { TableUser } from "../../components/admin";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUserList } from "../../redux/thunk/admin/adUser";
import "../../styles/admin/user.scss";

function UserList() {
  const dispatch = useDispatch();
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminUsers } = useSelector((state) => state.adUser);

  useEffect(() => {
    const data = {
      adminAuthtoken,
      values: {
        pageNo: 1,
        pageSize: 4,
      },
    };
    dispatch(getAdminUserList(data));
  }, []);
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
        <TableUser data={adminUsers.data} />
      </div>
    </>
  );
}

export default UserList;
