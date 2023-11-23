import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Card } from "../../components/user";
import { cardsData } from "../../utility/data";
import { star } from "../../assets/icons/user";
import { useDispatch, useSelector } from "react-redux";
import { getUserProgramList } from "../../redux/thunk/user/usrPrograms";
import { ROUTES } from "../../navigation/constants";
import { useNavigate } from "react-router";
import moment from "moment";
import "../../styles/user/programs.scss";

function Programs() {
  const [itemsToLoad, setItemsToLoad] = useState(5);
  const [itemsToLoadPro, setItemsToLoadPro] = useState(5);
  const [itemsToLoadTop, setItemsToLoadTop] = useState(5);
  const [sorted, setSorted] = useState("all");

  //Redux state
  const { userAuthtoken } = useSelector((state) => state.userAuth);
  const { userPaidPrograms, userFreePrograms } = useSelector(
    (state) => state.userPrograms
  );
  const { data: paidData } = userPaidPrograms;
  const { data: freeData } = userFreePrograms;

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Router functions
  const navigate = useNavigate();
  const { usrVideoPlayer } = ROUTES;

  //Methods
  useEffect(() => {
    const data = {
      values: {
        course_type: "Free",
      },
    };
    dispatch(getUserProgramList(data));
    const data_for_Paid = {
      values: {
        course_type: "Paid",
      },
    };

    dispatch(getUserProgramList(data_for_Paid));
  }, [userAuthtoken, dispatch]);

  const onCardClick = (values) => {
    const data = {
      values: {
        ...values,
        videoId: values._id,
      },
    };
    navigate(usrVideoPlayer, {
      state: {
        data2send: { ...data },
      },
    });
  };

  function convertTimeInHour(time) {
    let duration = moment.duration(time, "seconds");

    let formatted_Time = moment.utc(duration.asMilliseconds()).format("HH:mm");
    return formatted_Time;
  }

  const onSortHandler = (val) => {
    setSorted(val);
  };
  const loadMore = () => {
    setItemsToLoad(cardsData.length);
  };
  const loadLess = () => {
    setItemsToLoad(5);
  };
  const loadMorePro = () => {
    setItemsToLoadPro(cardsData.length);
  };
  const loadLessPro = () => {
    setItemsToLoadPro(5);
  };
  const loadMoreTop = () => {
    setItemsToLoadTop(cardsData.length);
  };

  return (
    <>
      <main>
        <section className="platformPage">
          <div className="platformPage__top">
            <Container>
              <div className="title-block">
                <h1>Programs</h1>
                <span>({cardsData.length})</span>
              </div>

              <div className="platformFilter">
                <Row>
                  <Col md={6}>
                    <Nav className="right-nav ">
                      <NavDropdown
                        className="sort"
                        title="sort by"
                        id="collapsible-nav-dropdown"
                      >
                        <NavDropdown.Item
                          href="#action/3.1"
                          onClick={() => {
                            onSortHandler("all");
                          }}
                        >
                          All
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action/3.2"
                          onClick={() => {
                            onSortHandler("free");
                          }}
                        >
                          Free
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action/3.2"
                          onClick={() => {
                            onSortHandler("pro");
                          }}
                        >
                          Pro
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Filter"
                        id="collapsible-nav-dropdown"
                        className="filter"
                      >
                        <NavDropdown.Item
                          href="#action/3.1"
                          onClick={() => {
                            onSortHandler("pro");
                          }}
                        >
                          pro
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action/3.2"
                          onClick={() => {
                            onSortHandler("free");
                          }}
                        >
                          Free
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Col>
                  <Col md={6} className="text-end">
                    {itemsToLoadTop < cardsData.length && (
                      <button onClick={loadMoreTop} className="view-All-btn">
                        View All
                      </button>
                    )}
                    :
                    {itemsToLoadTop > 5 && (
                      <button onClick={loadMoreTop} className="view-All-btn">
                        View Less
                      </button>
                    )}
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          {/* free */}

          {(sorted === "all" || sorted === "free") && (
            <section className=" program-section">
              <Container>
                <Row className="align-items-end">
                  <Col md={8}>
                    <div className="title-block">
                      <h2 className="text-white">Free</h2>
                      <p className="text-white">
                        The Screeno ecosystem is designed to help you generate
                        profit.Setup complete sales and marketing funnels with
                        ease using the Screeno
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="text-end">
                    {itemsToLoad < cardsData.length && (
                      <button onClick={loadMore} className="view-All-btn">
                        View All
                      </button>
                    )}
                    :
                    {itemsToLoad > 5 && (
                      <button onClick={loadLess} className="view-All-btn">
                        View Less
                      </button>
                    )}
                  </Col>
                </Row>

                <Row className="popular-row">
                  {freeData
                    .slice(0, itemsToLoad)
                    .map(
                      (
                        {
                          _id,
                          title,
                          image,
                          view_count,
                          description,
                          watched,
                          subsType,
                          amount,
                          url,
                          thumbnail_url,
                          video_duration,
                          speaker,
                          episodes,
                          price,
                          course_type,
                        },
                        index
                      ) => (
                        <Card
                          course_type={course_type}
                          onClick={(e) =>
                            onCardClick({
                              _id,
                              title,
                              image,
                              view_count,
                              description,
                              watched,
                              subsType,
                              amount,
                              url,
                              thumbnail_url,
                              video_duration,
                              speaker,
                              episodes,
                              price,
                              course_type,
                            })
                          }
                          url={url}
                          key={_id}
                          video_id={_id}
                          title={title}
                          thumbnail_url={thumbnail_url}
                          video_duration={convertTimeInHour(video_duration)}
                          views={view_count}
                          watched={watched}
                          description={description}
                          subsType={subsType}
                          episodes={episodes}
                          speaker={speaker}
                          price={price}
                        />
                      )
                    )}
                </Row>
              </Container>
            </section>
          )}

          {/* pro */}
          {(sorted === "all" || sorted === "pro") && (
            <section className="pro-section py-5">
              <Container>
                <Row className="align-items-end">
                  <Col md={8}>
                    <div className="title-block">
                      <h2 className="text-white">
                        Pro <Image src={star} />
                      </h2>
                      <p className="text-white">
                        The Screeno ecosystem is designed to help you generate
                        profit.Setup complete sales and marketing funnels with
                        ease using the Screeno
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="text-end">
                    {itemsToLoadPro < cardsData.length && (
                      <button onClick={loadMorePro} className="view-All-btn">
                        View All
                      </button>
                    )}
                    :
                    {itemsToLoadPro > 5 && (
                      <button onClick={loadLessPro} className="view-All-btn">
                        View Less
                      </button>
                    )}
                  </Col>
                </Row>
                <Row className="popular-row">
                  {paidData
                    .slice(0, itemsToLoadPro)
                    .map(
                      (
                        {
                          _id,
                          title,
                          image,
                          view_count,
                          description,
                          watched,
                          subsType,
                          amount,
                          url,
                          thumbnail_url,
                          video_duration,
                          speaker,
                          episodes,
                          price,
                          course_type,
                        },
                        index
                      ) => (
                        <Card
                          course_type={course_type}
                          video_id={_id}
                          onClick={() =>
                            onCardClick({
                              _id,
                              title,
                              image,
                              view_count,
                              description,
                              watched,
                              subsType,
                              amount,
                              url,
                              thumbnail_url,
                              video_duration,
                              speaker,
                              episodes,
                              price,
                              course_type,
                            })
                          }
                          url={url}
                          key={_id}
                          title={title}
                          thumbnail_url={thumbnail_url}
                          video_duration={convertTimeInHour(video_duration)}
                          views={view_count}
                          watched={watched}
                          description={description}
                          subsType={subsType}
                          episodes={episodes}
                          speaker={speaker}
                          price={price}
                        />
                      )
                    )}
                </Row>
              </Container>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
export default Programs;
