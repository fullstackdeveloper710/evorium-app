import React, { useEffect } from "react";
import { TableUser } from "../../components/admin";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdminUser,
  getAdminUserList,
  searchAdminUserList,
} from "../../redux/thunk/admin/adUser";
import "../../styles/admin/user.scss";
import ReactDataTable from "../../components/common/DataTable";
import { Image } from "react-bootstrap";
import { demopic } from "../../assets/images/admin";
import { dateFormater } from "../../utility/methods";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../navigation/constants";
import { trash, view } from "../../assets/icons/admin";
import useSearch from "../../customHooks/useSearch";

function UserList() {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminUsers } = useSelector((state) => state.adUser);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Router functions
  const navigate = useNavigate();

  //Custom hook
  const { search, onSearchChange } = useSearch();

  //Datatable columns
  const columns = [
    {
      name: "Name",
      selector: (row, index) => (
        <div className="user_name">
          <Image src={row.profile_pic !== "" ? row.profile_pic : demopic} />
          <span className="name">{row.full_name}</span>
        </div>
      ),
    },
    {
      name: "Email Address",
      selector: (row) => (
        <div className="email">
          <Link to="user-listing" className="email_link">
            {row.email}
          </Link>
        </div>
      ),
    },
    {
      name: "Phone Number",
      selector: (row) => (
        <div className="number">
          <span>
            {row.country_code && row.phone ? row.country_code + row.phone : ""}
          </span>
        </div>
      ),
    },
    {
      name: "Created On",
      selector: (row) => (
        <div className="date">
          <span>{dateFormater(row.createdAt)}</span>
        </div>
      ),
    },
    {
      name: "Address",
      selector: (row) => (
        <div className="location">
          <span>
            <Image />
            London, UK
          </span>
        </div>
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="actions_btns">
          <button className="action_btn" onClick={() => onViewHandler(row._id)}>
            <Image src={view} />
          </button>
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

  //Methods
  const onViewHandler = (id) => {
    navigate(ROUTES.adUserDetail, { state: { id: id } });
  };

  useEffect(() => {
    if (search === "") {
      const data = {
        adminAuthtoken,
        values: {
          pageNo: 1,
          pageSize: 4,
        },
      };
      dispatch(getAdminUserList(data));
    }
  }, [search]);

  const deleteUserHandler = (id) => {
    const data = {
      adminAuthtoken,
      values: {
        id,
      },
    };
    dispatch(deleteAdminUser(data));
  };

  const onSearchHandler = () => {
    const data = {
      adminAuthtoken,
      query: {
        search,
      },
    };
    dispatch(searchAdminUserList(data));
  };

  const onDateFilterHandler = (values) => {
    console.log(values, "values here");
  };
  return (
    <div className="user_tab">
      <ReactDataTable
        data={adminUsers.data}
        columns={columns}
        pagination={true}
        searchBar={true}
        dateFilter={true}
        header="users"
        subHeader={true}
        onSearch={onSearchHandler}
        onSearchChange={onSearchChange}
        onDateFilter={onDateFilterHandler}
        search={search}
      />
    </div>
  );
}

export default UserList;
