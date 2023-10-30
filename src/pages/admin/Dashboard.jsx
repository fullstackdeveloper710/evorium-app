import React from 'react';
import { Col, Row, Image} from 'react-bootstrap';

import {videos,dashboarduser,dashboard_payment,dashboard_categories,view,trash} from '../../assets/icons/admin';
import {video_card} from '../../assets/images/admin';
import '../../styles/admin/dashboard.scss';
import {TableUser} from '../../components/admin';

function Dashboard() {
  return (
 <>
   <div className='top_cards'>
    <Row>
        <Col md={3}>
            <div className='cards_dashboard videos'>
            <span className='icons'>
                <Image src={videos}/>
            </span>
            <div className='right_text'>
              <span className='number'>22</span>
              <p className='text_card'>Videos Posted</p>
            </div>
            </div>
        </Col>
        <Col md={3}>
        <div className='cards_dashboard users'>
            <span className='icons'>
                <Image src={dashboarduser}/>
            </span>
            <div className='right_text'>
              <span className='number'>22</span>
              <p className='text_card'>Users</p>
            </div>
            </div>
        </Col>
        <Col md={3}>
        <div className='cards_dashboard payments'>
            <span className='icons'>
                <Image src={dashboard_payment}/>
            </span>
            <div className='right_text'>
              <span className='number'>22</span>
              <p className='text_card'>Payments</p>
            </div>
            </div>
        </Col>
        <Col md={3}>
        <div className='cards_dashboard categories'>
            <span className='icons'>
                <Image src={dashboard_categories}/>
            </span>
            <div className='right_text'>
              <span className='number'>22</span>
              <p className='text_card'>Categories</p>
            </div>
            </div>
        </Col>
    </Row>
   </div>

   <div className='latest_uploads_section'>
    <Row>
        <Col md={7}>
            <div className='latest_uploads_block'>
              <h3 className='title'>Latest Uploads</h3>
              <div className='card_uploads'>
            <div className='left_video_block'>
              <div className='img_block'>
               <Image src={video_card} />
               <span className='available'>Available</span>
              </div>
              <div className='text_block'>
               <h3>Basic: how to ride your skateboard comfortly</h3>
               <p>Andy William <b>Free</b></p>
              </div>
            </div>
            <div className='right_action_icons_block'>
          <button className='action_btn'><Image src={view}/></button>
          <button className='action_btn'><Image src={trash}/></button>
            </div>
              </div>
              <div className='card_uploads'>
            <div className='left_video_block'>
              <div className='img_block'>
               <Image src={video_card} />
               <span className='available'>Available</span>
              </div>
              <div className='text_block'>
               <h3>Basic: how to ride your skateboard comfortly</h3>
               <p>Andy William <b>Free</b></p>
              </div>
            </div>
            <div className='right_action_icons_block'>
          <button className='action_btn'><Image src={view}/></button>
          <button className='action_btn'><Image src={trash}/></button>
            </div>
              </div>
              <div className='card_uploads'>
            <div className='left_video_block'>
              <div className='img_block'>
               <Image src={video_card} />
               <span className='available'>Available</span>
              </div>
              <div className='text_block'>
               <h3>Basic: how to ride your skateboard comfortly</h3>
               <p>Andy William <b>Free</b></p>
              </div>
            </div>
            <div className='right_action_icons_block'>
          <button className='action_btn'><Image src={view}/></button>
          <button className='action_btn'><Image src={trash}/></button>
            </div>
              </div>
            </div>
        </Col>
        <Col md={5}>
            <div className='notification_block'>
            <h3 className='title'>Notifications</h3>
            <ul className='notification_list'>
                <li><b>Wade Warren</b> created a new account.</li>
                <li><b>Wade Warren</b> created a new account.</li>
                <li><b>Wade Warren</b> created a new account.</li>
                <li><b>Wade Warren</b> created a new account.</li>
                <li><b>Wade Warren</b> created a new account.</li>
            </ul>
            </div>
        </Col>
    </Row>
   </div>

   <div className='user_section'>
       <h3 className='title'>Recent Users</h3>
       <TableUser/>
   </div>
 </>
  );
}

export default Dashboard;
