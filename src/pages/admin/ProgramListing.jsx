import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { program } from "../../assets/images/admin";
import { Pagination } from "../../components/admin";
import { Link } from "react-router-dom";
import "../../styles/admin/programListing.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProgramList } from "../../redux/thunk/admin/adPrograms";
import { getMinutes } from "../../utility/methods";
function ProgramListing() {
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminPrograms } = useSelector((state) => state.adPrograms);
  const { data } = adminPrograms;
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      adminAuthtoken,
      values: {
        pageNo: 1,
        pageSize: 4,
      },
    };
    dispatch(getAdminProgramList(data));
  }, []);
  return (
    <div className="program_listing_section">
      <div className="top_bar">
        <h3 className="title">Videos</h3>
        <div className="search_block">
          <div className="search_input">
            <input type="text" placeholder="Search" />
            <button type="" className="search_btn">
              Search
            </button>
          </div>
          <div className="add_new">
            <button className="add_btn">
              <Link to="add-program">Add New</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="program_cards_section">
        <Row>
          {data?.length > 0 ? (
            data?.map(
              (
                {
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
                  <div className="col5" key={index}>
                    <div className="subs-card free-card">
                      <div className="card-wrapper">
                        <div className="img-wrap">
                          <div className="bg-img">
                            <img src={thumbnail_url} alt="programer" />
                          </div>
                          <span className="free-btn">{course_type}</span>
                          {/* <img src="" className="label-watch"/> */}
                        </div>
                        <div className="bottom-details">
                          <p className="name">{speaker}</p>
                          <Link to="#" className="link-card">
                            {description}
                          </Link>
                          <div className="time-view">
                            <span className="mins">
                              {getMinutes(video_duration)}
                            </span>
                            <span className="views">{view_count}k</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <div>No Record Found</div>
          )}
        </Row>
      </div>

      <Pagination />
    </div>
  );
}

export default ProgramListing;
