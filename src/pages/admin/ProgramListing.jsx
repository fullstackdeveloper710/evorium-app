import React, { useEffect } from "react";
import { Row, DropdownButton, Dropdown } from "react-bootstrap";
import { Pagination } from "../../components/admin";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdminProgram,
  getAdminProgramById,
  getAdminProgramList,
  searchAdminProgram,
} from "../../redux/thunk/admin/adPrograms";
import { getMinutes } from "../../utility/methods";
import { ROUTES } from "../../navigation/constants";
import "../../styles/admin/programListing.scss";
import { Button } from "../../components/common";
import { useSearch } from "../../utility/hooks";
function ProgramListing() {
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);
  const { adminPrograms } = useSelector((state) => state.adPrograms);
  const { data } = adminPrograms;

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Custom hooks
  const { search, onSearchChange, onSearchHandler } = useSearch({
    action: searchAdminProgram,
  });

  //Router functions
  const navigate = useNavigate();

  //Constant routes
  const { adAddprogram, adUpdateProgram } = ROUTES;

  //Methods
  useEffect(() => {
    if (search === "") {
      const data = {
        adminAuthtoken,
        values: {
          pageNo: 1,
          pageSize: 4,
        },
      };
      dispatch(getAdminProgramList(data));
    }
  }, [dispatch, adminAuthtoken, search]);

  const onDeleteProgram = (id) => {
    const data = {
      adminAuthtoken,
      query: {
        id,
      },
      pagination: {
        pageNo: 1,
        pageSize: 4,
      },
    };
    dispatch(deleteAdminProgram(data));
  };

  const onEditProgram = (id) => {
    const data = {
      adminAuthtoken,
      query: {
        id,
      },
    };
    navigate(adUpdateProgram, {
      state: {
        id: id,
      },
    });
  };

  return (
    <div className="program_listing_section">
      <div className="top_bar">
        <h3 className="title">Videos</h3>
        <div className="search_block">
          <div className="search_input">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={onSearchChange}
            />
            <button
              type="button"
              className="search_btn"
              onClick={onSearchHandler}
            >
              Search
            </button>
          </div>
          <Button
            type="button"
            className="add_btn"
            title="Add New"
            onClick={() => navigate(adAddprogram)}
          />
        </div>
      </div>

      <div className="program_cards_section">
        <Row>
          {data?.length > 0 ? (
            data?.map(
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
                          {/* btn drop_dow */}
                          <DropdownButton
                            className="btn_programs"
                            id="dropdown-basic-button"
                            title="..."
                          >
                            <Dropdown.Item onClick={() => onDeleteProgram(_id)}>
                              Delete
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => onEditProgram(_id)}>
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Cancel
                            </Dropdown.Item>
                          </DropdownButton>
                          {/* btn drop_dow */}
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
