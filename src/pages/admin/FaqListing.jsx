import React, { useEffect } from "react";
import { Table, Image } from "react-bootstrap";
import { trash, view } from "../../assets/icons/admin";
import { Pagination } from "../../components/admin";
import { Link } from "react-router-dom";
import { BtnGroup, Button, ReactDataTable } from "../../components/common";
import "../../styles/admin/faqlisting.scss";
import { useDispatch, useSelector } from "react-redux";
import { dateFormater } from "../../utility/methods";
import { deleteAdminFaq, getAdminFaqs, searchAdminFaqList } from "../../redux/thunk/admin/adFaqs";
import { useSearch } from "../../utility/hooks";
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

  const deleteFaqHandler = (id) => {
    const data = {
      adminAuthtoken,
      values: {
        id,
      },
    };
    dispatch(deleteAdminFaq(data));
  };

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
            className="action_btn"
            onClick={() => {
              deleteFaqHandler(row._id);
            }}
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

// <div className="faq_listing_table_section">
//   <div className="comn_table">
//     <Table striped>
//       <thead>
//         <tr>
//           <th>S.No.</th>
//           <th>Question Title</th>
//           <th>Answer</th>
//           <th>Created On</th>
//           <th className="text-center">Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1.</td>
//           <td>How I can sign up ?</td>
//           <td className="answer_td">
//             <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...</p>
//           </td>
//           <td>+19872345275</td>
//           <td>
//             <div className="delete_action">
//               <Link to="/backoffice/faq" className="view_btn">
//                 <Image src={view} className="" />
//               </Link>
//               <Link to="#" className="delete_btn">
//                 <Image src={trash} className="" />
//               </Link>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td>1.</td>
//           <td>How I can sign up ?</td>
//           <td className="answer_td">
//             <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...</p>
//           </td>
//           <td>+19872345275</td>
//           <td>
//             <div className="delete_action">
//               <Link to="/backoffice/faq" className="view_btn">
//                 <Image src={view} className="" />
//               </Link>
//               <Link to="#" className="delete_btn">
//                 <Image src={trash} className="" />
//               </Link>
//             </div>
//           </td>
//         </tr>
//         <tr>
//           <td>1.</td>
//           <td>How I can sign up ?</td>
//           <td className="answer_td">
//             <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum ...</p>
//           </td>
//           <td>+19872345275</td>
//           <td>
//             <div className="delete_action">
//               <Link to="/backoffice/faq" className="view_btn">
//                 <Image src={view} className="" />
//               </Link>
//               <Link to="#" className="delete_btn">
//                 <Image src={trash} className="" />
//               </Link>
//             </div>
//           </td>
//         </tr>
//       </tbody>
//     </Table>
//   </div>
//   <Pagination />
// </div>;
