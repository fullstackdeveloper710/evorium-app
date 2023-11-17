import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { trash } from "../../assets/icons/admin";
import {
  BtnGroup,
  Button,
  ConfirmPopUp,
  ReactDataTable,
} from "../../components/common";
import { useDispatch, useSelector } from "react-redux";
import { dateFormater } from "../../utility/methods";
import {
  deleteAdminFaq,
  getAdminFaqs,
  searchAdminFaqList,
} from "../../redux/thunk/admin/adFaqs";
import { useConfirmation, useSearch } from "../../utility/hooks";
import "../../styles/admin/faqlisting.scss";
function FaqListing() {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminFaqs } = useSelector((state) => state.adFaqs);
  const { data } = adminFaqs;

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Custom hooks
  const { search, onSearchChange, onSearchHandler } = useSearch({
    action: searchAdminFaqList,
  });

  const {
    setId,
    showConfirm,
    handleConfirmShow,
    handleConfirmClose,
    onConfirmHandler,
  } = useConfirmation({
    action: deleteAdminFaq,
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
    dispatch(getAdminFaqs(data));
  }, [adminAuthtoken, dispatch]);

  //Datatable columns
  const columns = [
    {
      name: "S.No.",
      selector: (row, index) => index + 1,
      // width: "50px",
    },
    {
      name: "Question Title",
      selector: (row) => row.question_title,
      // width: "100px",
    },
    {
      name: "Answer",
      selector: (row) => row.answer,
      // width: "100px",
    },
    {
      name: "Created On",
      selector: (row) => dateFormater(row.createdAt),
      // width: "100px",
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
              handleConfirmShow();
              setId(row._id);
            }}
          />
          <ConfirmPopUp
            showConfirm={showConfirm}
            handleConfirmClose={handleConfirmClose}
            onConfirmHandler={onConfirmHandler}
          />
        </BtnGroup>
      ),
      // width: "200px",
    },
  ];

  return (
    <div className="faq_listing_section">
      <ReactDataTable
        data={data}
        columns={columns}
        pagination={true}
        searchBar={true}
        header="FAQ’s"
        subHeader={true}
        onSearch={onSearchHandler}
        onSearchChange={onSearchChange}
        search={search}
      />
    </div>
  );
}

export default FaqListing;