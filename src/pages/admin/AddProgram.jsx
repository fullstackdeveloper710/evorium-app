import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import { CommonButtons } from "../../components/admin";
import { upload } from "../../assets/icons/admin";
import { thumbnail, video } from "../../assets/images/admin";
import { Link } from "react-router-dom";
import { ROUTES } from "../../navigation/constants";
import "../../styles/admin/addprogram.scss";
function AddProgram() {
  const { adProgramList } = ROUTES;
  return (
    <div className="add_program_section">
      <h3 className="title mb-4">
        <Link to={adProgramList} className="me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="25"
            viewBox="0 0 35 25"
            fill="none"
          >
            <path
              d="M34.2508 24.9999C33.9504 24.9999 33.6748 24.8084 33.5568 24.4942C33.4702 24.2662 31.3053 18.8573 23.2113 17.786C21.5253 17.5581 19.5061 17.4411 17.0539 17.4207V24.1625C17.0539 24.4737 16.903 24.7558 16.655 24.9049C16.4084 25.0481 16.1132 25.0276 15.8836 24.8566L0.333258 13.197C0.123332 13.0406 0 12.7776 0 12.5014C0 12.2222 0.123332 11.9679 0.333258 11.8042L15.8901 0.14316C16.1197 -0.0336782 16.4123 -0.0453696 16.6616 0.100778C16.9109 0.249848 17.0592 0.531911 17.0592 0.834436V7.10854C20.4416 7.59959 35 10.5138 35 24.1698C35 24.5658 34.7494 24.9122 34.3978 24.9911C34.3492 24.9999 34.2981 24.9999 34.2508 24.9999Z"
              fill="black"
            ></path>
          </svg>
        </Link>
        Add New Program
      </h3>

      <div className="add_program_form">
        <Row>
          <Col md={7}>
            <div className="left_block">
              <div className="input_label_wrap">
                <label>Course Title</label>
                <input type="number" placeholder="0 123 456 7890" />
              </div>

              <div className="input_label_wrap">
                <label>Description</label>
                <input type="email" placeholder="john@gmail.com" />
              </div>

              <div className="input_label_wrap">
                <label>Categories</label>
                <select>
                  <option>Cryptocurrency</option>
                  <option>Cryptocurrency</option>
                  <option>Cryptocurrency</option>
                  <option>Cryptocurrency</option>
                  <option>Cryptocurrency</option>
                </select>
              </div>

              <div className="input_label_wrap">
                <label>Speaker</label>
                <select>
                  <option>Dubai</option>
                  <option>Dubai</option>
                  <option>Dubai</option>
                  <option>Dubai</option>
                  <option>Dubai</option>
                </select>
              </div>

              <div className="input_label_wrap">
                <label>Select number of Episodes</label>
                <select>
                  <option>3</option>
                  <option>3</option>
                  <option>3</option>
                  <option>3</option>
                  <option>3</option>
                </select>
              </div>

              <div className="episode_section">
                <Row className="episodes_wrap">
                  <Col xs lg="4">
                    <div className="input_label_wrap">
                      <label>Episode 1</label>
                      <input type="text" placeholder="Enter Episode Title" />
                    </div>
                  </Col>
                  <Col xs lg="4">
                    <div className="start_input commn_input">
                      <span className="start_end_title">Start</span>
                      <div className="timing_block">
                        <div className="hour">
                          <input type="text" value="20" />
                          <label>Hour</label>
                        </div>
                        <div className="minute">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Minute</label>
                        </div>
                        <div className="seconds">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Seconds</label>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs lg="4">
                    <div className="start_input commn_input">
                      <span className="start_end_title">End</span>
                      <div className="timing_block">
                        <div className="hour">
                          <input type="text" value="20" />
                          <label>Hour</label>
                        </div>
                        <div className="minute">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Minute</label>
                        </div>
                        <div className="seconds">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Seconds</label>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="episodes_wrap">
                  <Col xs lg="4">
                    <div className="input_label_wrap">
                      <label>Episode 1</label>
                      <input type="text" placeholder="Enter Episode Title" />
                    </div>
                  </Col>
                  <Col xs lg="4">
                    <div className="start_input commn_input">
                      <span className="start_end_title">Start</span>
                      <div className="timing_block">
                        <div className="hour">
                          <input type="text" value="20" />
                          <label>Hour</label>
                        </div>
                        <div className="minute">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Minute</label>
                        </div>
                        <div className="seconds">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Seconds</label>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs lg="4">
                    <div className="start_input commn_input">
                      <span className="start_end_title">End</span>
                      <div className="timing_block">
                        <div className="hour">
                          <input type="text" value="20" />
                          <label>Hour</label>
                        </div>
                        <div className="minute">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Minute</label>
                        </div>
                        <div className="seconds">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Seconds</label>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="episodes_wrap">
                  <Col xs lg="4">
                    <div className="input_label_wrap">
                      <label>Episode 1</label>
                      <input type="text" placeholder="Enter Episode Title" />
                    </div>
                  </Col>
                  <Col xs lg="4">
                    <div className="start_input commn_input">
                      <span className="start_end_title">Start</span>
                      <div className="timing_block">
                        <div className="hour">
                          <input type="text" value="20" />
                          <label>Hour</label>
                        </div>
                        <div className="minute">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Minute</label>
                        </div>
                        <div className="seconds">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Seconds</label>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xs lg="4">
                    <div className="start_input commn_input">
                      <span className="start_end_title">End</span>
                      <div className="timing_block">
                        <div className="hour">
                          <input type="text" value="20" />
                          <label>Hour</label>
                        </div>
                        <div className="minute">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Minute</label>
                        </div>
                        <div className="seconds">
                          <span className="dot">:</span>
                          <input type="text" value="0 0" />
                          <label>Seconds</label>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="radio_btns">
                <div className="course_type">
                  <h5>Course Type</h5>
                  <label for="paid">
                    <input type="radio" name="course" id="paid" />
                    Paid
                  </label>
                  <label for="free">
                    <input type="radio" name="course" id="free" />
                    Free
                  </label>
                </div>
                <div className="tags">
                  <h5>Tags</h5>
                  <label for="popular">
                    <input type="radio" name="tags" id="popular" />
                    Popular
                  </label>
                  <label for="recommended">
                    <input type="radio" name="tags" id="recommended" />
                    Recommended
                  </label>
                </div>
              </div>

              <div className="input_label_wrap">
                <label>Price(in $)</label>
                <input type="text" placeholder="$100" />
              </div>

              <div className="pt-5">
                <CommonButtons firstBtn="Save" secondBtn="Cancel" />
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="video_upload_wrap">
              <div className="upload_input">
                <input type="file" id="video" className="d-none" />
                <label for="video">
                  <Image src={upload} />
                  <span className="upload_title">Upload Video</span>
                </label>
              </div>

              <div className="uploaded_videos_wrap d-none">
                <Image src={video} />
                {/* video here */}
                <div className="loader_block">
                  <span className="loader">80%</span>
                </div>
              </div>

              <div className="select_thumbnail">
                <p>Select Thumbnail</p>
                <div className="select_thumbnail_imgs">
                  <button className="thumbnail_link">
                    <Image src={thumbnail} />
                  </button>
                  <button className="thumbnail_link">
                    <Image src={thumbnail} />
                  </button>
                  <button className="thumbnail_link">
                    <Image src={thumbnail} />
                  </button>
                  <button className="thumbnail_link">
                    <Image src={thumbnail} />
                  </button>
                </div>
                <button className="done_btn">Done</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AddProgram;
