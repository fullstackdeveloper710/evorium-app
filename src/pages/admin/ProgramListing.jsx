import React from 'react'
import { Row } from 'react-bootstrap'
import {program} from '../../assets/images/admin'
import {Pagination} from '../../components/admin'
import { Link } from 'react-router-dom';
import '../../styles/admin/programListing.scss'
function ProgramListing() {
  return (
    <div className='program_listing_section'>
      <div className='top_bar'>
        <h3 className='title'>Videos</h3>
        <div className='search_block'>
           <div className='search_input'>
         <input type='text' placeholder='Search'/>
         <button type='' className='search_btn'>Search</button>
           </div>
           <div className='add_new'>
             <button className='add_btn'>
              <Link to='add-program'>Add New</Link></button>
           </div>
        </div>
      </div>
   
   <div className='program_cards_section'>
    <Row>
      <div className='col5'>
      <div className="subs-card free-card">
        <div className="card-wrapper">
          <div className="img-wrap">
            <div className="bg-img">
              <img src={program} alt='programer'/>
              </div>
              <span className="free-btn">free</span>
              {/* <img src="" className="label-watch"/> */}
              </div>
              <div className="bottom-details">
                <p className="name">Andy William</p>
                <Link to="#" className="link-card">Basic: how to ride your skateboard comfortly</Link>
                <div className="time-view">
                  <span className="mins">5 </span>
                  <span className="views">500 k</span>
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      <div className='col5'>
      <div className="subs-card free-card">
        <div className="card-wrapper">
          <div className="img-wrap">
            <div className="bg-img">
              <img src={program} alt='programer'/>
              </div>
              <span className="free-btn">free</span>
              {/* <img src="" className="label-watch"/> */}
              </div>
              <div className="bottom-details">
                <p className="name">Andy William</p>
                <Link to="#" className="link-card">Basic: how to ride your skateboard comfortly</Link>
                <div className="time-view">
                  <span className="mins">5 </span>
                  <span className="views">500 k</span>
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      <div className='col5'>
      <div className="subs-card free-card">
        <div className="card-wrapper">
          <div className="img-wrap">
            <div className="bg-img">
              <img src={program} alt='programer'/>
              </div>
              <span className="free-btn">free</span>
              {/* <img src="" className="label-watch"/> */}
              </div>
              <div className="bottom-details">
                <p className="name">Andy William</p>
                <Link to="#" className="link-card">Basic: how to ride your skateboard comfortly</Link>
                <div className="time-view">
                  <span className="mins">5 </span>
                  <span className="views">500 k</span>
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      <div className='col5'>
      <div className="subs-card free-card">
        <div className="card-wrapper">
          <div className="img-wrap">
            <div className="bg-img">
              <img src={program} alt='programer'/>
              </div>
              <span className="free-btn">free</span>
              {/* <img src="" className="label-watch"/> */}
              </div>
              <div className="bottom-details">
                <p className="name">Andy William</p>
                <Link to="#" className="link-card">Basic: how to ride your skateboard comfortly</Link>
                <div className="time-view">
                  <span className="mins">5 </span>
                  <span className="views">500 k</span>
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      <div className='col5'>
      <div className="subs-card free-card">
        <div className="card-wrapper">
          <div className="img-wrap">
            <div className="bg-img">
              <img src={program} alt='programer'/>
              </div>
              <span className="free-btn">free</span>
              {/* <img src="" className="label-watch"/> */}
              </div>
              <div className="bottom-details">
                <p className="name">Andy William</p>
                <Link to="#" className="link-card">Basic: how to ride your skateboard comfortly</Link>
                <div className="time-view">
                  <span className="mins">5 </span>
                  <span className="views">500 k</span>
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      <div className='col5'>
      <div className="subs-card free-card">
        <div className="card-wrapper">
          <div className="img-wrap">
            <div className="bg-img">
              <img src={program} alt='programer'/>
              </div>
              <span className="free-btn">free</span>
              {/* <img src="" className="label-watch"/> */}
              </div>
              <div className="bottom-details">
                <p className="name">Andy William</p>
                <Link to="#" className="link-card">Basic: how to ride your skateboard comfortly</Link>
                <div className="time-view">
                  <span className="mins">5 </span>
                  <span className="views">500 k</span>
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      <div className='col5'>
      <div className="subs-card free-card">
        <div className="card-wrapper">
          <div className="img-wrap">
            <div className="bg-img">
              <img src={program} alt='programer'/>
              </div>
              <span className="free-btn">free</span>
              {/* <img src="" className="label-watch"/> */}
              </div>
              <div className="bottom-details">
                <p className="name">Andy William</p>
                <Link to="#" className="link-card">Basic: how to ride your skateboard comfortly</Link>
                <div className="time-view">
                  <span className="mins">5 </span>
                  <span className="views">500 k</span>
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
      <div className='col5'>
      <div className="subs-card free-card">
        <div className="card-wrapper">
          <div className="img-wrap">
            <div className="bg-img">
              <img src={program} alt='programer'/>
              </div>
              <span className="free-btn">free</span>
              {/* <img src="" className="label-watch"/> */}
              </div>
              <div className="bottom-details">
                <p className="name">Andy William</p>
                <Link to="#" className="link-card">Basic: how to ride your skateboard comfortly</Link>
                <div className="time-view">
                  <span className="mins">5 </span>
                  <span className="views">500 k</span>
                  </div>
                  </div>
                  </div>
                  </div>
      </div>
    </Row>
   </div>

   <Pagination/>

    </div>
  )
}

export default ProgramListing
