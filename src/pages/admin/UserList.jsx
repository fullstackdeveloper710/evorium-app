import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdminUser,
  filterAdminUserbyDate,
  getAdminUserList,
  searchAdminUserList,
} from "../../redux/thunk/admin/adUser";
import "../../styles/admin/user.scss";
import { ConfirmPopUp, ReactDataTable } from "../../components/common";
import { Image } from "react-bootstrap";
import { demopic } from "../../assets/images/admin";
import { dateFormater } from "../../utility/methods";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../navigation/constants";
import { trash, view } from "../../assets/icons/admin";
import { useSearch, useDateFilter, useConfirmation } from "../../utility/hooks";

function UserList() {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminUsers } = useSelector((state) => state.adUser);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Router functions
  const navigate = useNavigate();

  //Custom hooks
  const { search, onSearchChange, onSearchHandler } = useSearch({
    action: searchAdminUserList,
  });

  const { dateFilter, onDateChange, clearFilter } = useDateFilter({
    action: filterAdminUserbyDate,
  });

  const {
    id,
    setId,
    showConfirm,
    handleConfirmShow,
    handleConfirmClose,
    onConfirmHandler,
  } = useConfirmation({
    action: deleteAdminUser,
  });

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
              handleConfirmShow();
              setId(row._id);
            }}
          >
            <Image src={trash} />
          </button>
          <ConfirmPopUp
            confirmationMsg="Are you sure to delete?"
            showConfirm={showConfirm}
            handleConfirmClose={handleConfirmClose}
            onConfirmHandler={onConfirmHandler}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="user_tab">
      <ReactDataTable
        data={adminUsers.data}
        columns={columns}
        pagination={true}
        searchBar={true}
        showDateFilter={true}
        header="users"
        subHeader={true}
        onSearch={onSearchHandler}
        onSearchChange={onSearchChange}
        onDateChange={onDateChange}
        dateFilter={dateFilter}
        // onDateFilter={onDateFilterHandler}
        clearFilter={clearFilter}
        search={search}
      />
    </div>
  );
}

export default UserList;
