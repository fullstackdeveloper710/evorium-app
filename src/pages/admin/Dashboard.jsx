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
import { video_card } from "../../assets/images/admin";
import "../../styles/admin/dashboard.scss";
import { TableUser } from "../../components/admin";
import { useDispatch, useSelector } from "react-redux";
import { getAdminDashStats } from "../../redux/thunk/admin/adDashboard";
import { getAdminNotifications , deleteNotification, deleteNotifications } from "../../redux/thunk/admin/adNotification";
import { getAdminLatestPrograms } from "../../redux/thunk/admin/adLatestPrograms";




function Dashboard() {
  const dispatch = useDispatch();

  const { adminAuthtoken } = useSelector((state) => state.adAuth);

  const {adminDashboard: { data:data1 },} = useSelector((state) => state.adDashboard);

  const {adminNotification: { data: notification_data },} = useSelector((state) => state.adNotification);
  const {adminLatestPrograms:{data},} = useSelector((state) => state.adLatestProgram);



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
                <span className="number">{data?.categories_count}</span>
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
          {data.map((item, index) => (
            <div className="card_uploads" key={index._id}>
              <div className="left_video_block">
                <div className="img_block">
                  <Image src={video_card} />
                  <span className="available">Available</span>
                </div>
                <div className="text_block">
                  <h3>{item.description}</h3>
                  <p>
                    {item.speaker} <b>{item.course_type}</b>
                  </p>
                </div>
              </div>
              <div className="right_action_icons_block">
                <button className="action_btn">
                  <Image src={view} />
                </button>
                <button className="action_btn">
                  <Image src={trash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Col>
          <Col md={5}>
            <div className="notification_block">
              <h3 className="title">Notifications</h3>
              <ul className="notification_list">

           
                {notification_data?.map((i) => (

                  
                  <li key={i._id}>{i.notification_text}
                   <Image key={i._id} src={trash} onClick={() => dispatch(deleteNotification({adminAuthtoken : adminAuthtoken, value: i._id}))}/>
                  </li>
                ))}

              </ul>

              {notification_data.length === 0 ? <div className="no_notification"><span>No Notification</span></div> :  <button className="clear_btn" onClick={() => dispatch(deleteNotifications({adminAuthtoken: adminAuthtoken}))}>Clear All</button>}
             
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
