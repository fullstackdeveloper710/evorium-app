import React, { useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";

import {
  videos,
  dashboarduser,
  dashboard_payment,
  dashboard_categories,
  view,
  trash,
} from "../../assets/icons/admin";
import { thumbnail, video_card } from "../../assets/images/admin";
import "../../styles/admin/dashboard.scss";
import { TableUser } from "../../components/admin";
import { useDispatch, useSelector } from "react-redux";
import { getAdminDashStats } from "../../redux/thunk/admin/adDashboard";
import {
  getAdminNotifications,
  deleteNotification,
  deleteNotifications,
} from "../../redux/thunk/admin/adNotification";
import {
  deleteAdminLatestPrograms,
  getAdminLatestPrograms,
} from "../../redux/thunk/admin/adLatestPrograms";
import {
  useConfirmation,
  useFetch,
  usePagination,
  useSearch,
} from "../../utility/hooks";
import { BtnGroup, Button, ConfirmPopUp } from "../../components/common";
import {
  deleteAdminLatestProgram,
  deleteAdminProgram,
  getAdminProgramList,
  searchAdminProgram,
} from "../../redux/thunk/admin/adPrograms";
import { itemsPerPage } from "../../utility/methods";

function Dashboard() {
  const dispatch = useDispatch();

  const { adminAuthtoken } = useSelector((state) => state.adAuth);

  const {
    adminDashboard: { data: data1 },
  } = useSelector((state) => state.adDashboard);

  const {
    adminNotification: { data: notification_data },
  } = useSelector((state) => state.adNotification);
  const {
    adminLatestPrograms: { data },
  } = useSelector((state) => state.adLatestProgram);
  console.log("data latest", data);
  const { adminLatestPrograms } = useSelector((state) => state.adPrograms);

  const { data: data2, count } = adminLatestPrograms;
  console.log("data adminLatestPrograms", data2);

  const {
    setId,
    showConfirm,
    handleConfirmShow,
    handleConfirmClose,
    onConfirmHandler,
  } = useConfirmation({
    action: deleteAdminLatestProgram,
  });

  // Use onConfirmHandlerWithReload where you handle the confirmation

  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage,
    onSelectPage,
  } = usePagination({
    totalItems: count,
    itemsPerPage,
  });

  const { search, onSearchChange, onSearchHandler } = useSearch({
    action: searchAdminProgram,
  });

  useFetch({
    search,
    action: getAdminLatestPrograms,
    currentPage,
    itemsPerPage,
  });

  useEffect(() => {
    const data = {
      adminAuthtoken,
    };
    dispatch(getAdminDashStats(data));
    dispatch(getAdminNotifications(data));
    dispatch(getAdminLatestPrograms(data));
  }, [dispatch, adminAuthtoken]);

  return (
    <>
      <div className="top_cards">
        <Row>
          <Col md={3}>
            <div className="cards_dashboard videos">
              <span className="icons">
                <Image src={videos} />
              </span>
              <div className="right_text">
                <span className="number">{data1?.program_count}</span>
                <p className="text_card">Videos Posted</p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="cards_dashboard users">
              <span className="icons">
                <Image src={dashboarduser} />
              </span>
              <div className="right_text">
                <span className="number">{data1?.user_count}</span>
                <p className="text_card">Users</p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="cards_dashboard payments">
              <span className="icons">
                <Image src={dashboard_payment} />
              </span>
              <div className="right_text">
                <span className="number">{data1?.payment_count}</span>
                <p className="text_card">Payments</p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="cards_dashboard categories">
              <span className="icons">
                <Image src={dashboard_categories} />
              </span>
              <div className="right_text">
                <span className="number">{data1?.categories_count}</span>
                <p className="text_card">Categories</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="latest_uploads_section">
        <Row>
          <Col md={7}>
            <div className="latest_uploads_block">
              <h3 className="title">Latest Uploads</h3>
              {data2?.length > 0 ? (
                data2?.map(
                  (
                    {
                      _id,
                      speaker,
                      course_type,
                      description,
                      thumbnail_url,
                      video_duration,
                      view_count,
                    },
                    index
                  ) => {
                    return (
                      <div className="card_uploads" key={index._id}>
                        <div className="left_video_block">
                          <div className="img_block">
                            <Image
                              src={thumbnail_url}
                              className="custom-thumbnail" // You can also apply a custom class for additional styling
                              style={{
                                width: "100px", // Adjust the width as needed
                                height: "100px", // Adjust the height as needed
                                // Add any additional styling properties as necessary
                              }}
                              alt="Thumbnail"
                            />

                            <span className="available">Available</span>
                          </div>
                          <div className="text_block">
                            <h3>{description}</h3>
                            <p>
                              {speaker} <b>{course_type}</b>
                            </p>
                          </div>
                        </div>
                        <div className="right_action_icons_block">
                          <button className="action_btn">
                            <Image src={view} />
                          </button>
                          {/* <button className="action_btn">
                <Image src={trash}  />
                </button> */}
                          <BtnGroup className="delete_action">
                            <Button
                              title={<Image src={trash} />}
                              type="button"
                              className="action_btn delete_btn"
                              onClick={() => {
                                handleConfirmShow();
                                setId(_id);
                              }}
                            />
                            {/* <ConfirmPopUp
                              showConfirm={showConfirm}
                              handleConfirmClose={handleConfirmClose}
                              onConfirmHandler={onConfirmHandler}
                            /> */}
                          </BtnGroup>
                        </div>
                      </div>
                    );
                  }
                )
              ) : (
                <div>There are no records to display</div>
              )}

              <ConfirmPopUp
                showConfirm={showConfirm}
                handleConfirmClose={handleConfirmClose}
                onConfirmHandler={onConfirmHandler}
              />
            </div>
          </Col>
          <Col md={5}>
            <div className="notification_block">
              <h3 className="title">Notifications</h3>
              <ul className="notification_list">
                {notification_data?.map((i) => (
                  <li key={i._id}>
                    {i.notification_text}
                    <Image
                      key={i._id}
                      src={trash}
                      onClick={() =>
                        dispatch(
                          deleteNotification({
                            adminAuthtoken: adminAuthtoken,
                            value: i._id,
                          })
                        )
                      }
                    />
                  </li>
                ))}
              </ul>

              {notification_data.length === 0 ? (
                <div className="no_notification">
                  <span>No Notification</span>
                </div>
              ) : (
                <button
                  className="clear_btn"
                  onClick={() =>
                    dispatch(
                      deleteNotifications({ adminAuthtoken: adminAuthtoken })
                    )
                  }
                >
                  Clear All
                </button>
              )}
            </div>
          </Col>
        </Row>
      </div>

      <div className="user_section">
        <h3 className="title">Recent Users</h3>
        <TableUser />
      </div>
    </>
  );
}

export default Dashboard;
