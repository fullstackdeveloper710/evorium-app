import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col, Nav, NavDropdown } from "react-bootstrap";
import { Card } from "../../components/user";
import { cardsData } from "../../utility/data";
import { star } from "../../assets/icons/user";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredPrograms,
  getMyProrgamsList,
  getUserProgramList,
  userFilterPrograms,
} from "../../redux/thunk/user/usrPrograms";
import { ROUTES } from "../../navigation/constants";
import { useNavigate } from "react-router";
import moment from "moment";
import "../../styles/user/programs.scss";
import { getProgramCategoriesList } from "../../redux/thunk/user/usrCategories";
import { getProgramSpeakersList } from "../../redux/thunk/user/usrSpeakers";

function Programs() {
  const [itemsToLoad, setItemsToLoad] = useState(5);
  const [itemsToLoadPro, setItemsToLoadPro] = useState(5);
  const [itemsToLoadFree, setItemsToLoadFree] = useState(5);
  const [itemsToLoadResult, setItemsToLoadResult] = useState(5);
  const [sorted, setSorted] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState({
    sort_by: "",
    categories: "",
    price: "",
    speakers: "",
  });

  //Redux state
  const { userAuthtoken } = useSelector((state) => state.userAuth);
  const {
    userPaidPrograms,
    userFreePrograms,
    userAZPrograms,
    userZAPrograms,
    userMyPrograms,
    userFilteredProgram,
  } = useSelector((state) => state.userPrograms);

  const { programsCategories, programsSpeakers } = useSelector(
    (state) => state.userCategoriesSpeakers
  );
  const { data: categoriesList } = programsCategories;
  const { data: speakerList } = programsSpeakers;

  const { data: paidData } = userPaidPrograms;

  const { data: freeData } = userFreePrograms;

  const { data: myPrograms } = userMyPrograms;
  const [combinedPrograms, setCombinedPrograms] = useState([])
  console.log("combinedPrograms",combinedPrograms)

  ;

  const { data: filterResults } = userFilteredProgram;
  console.log("filterResults",filterResults)


  const { data: atoz } = userAZPrograms;
  const { data: ztoa } = userZAPrograms;

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
    console.log("freeee", data);

    dispatch(getUserProgramList(data));
    const data_for_Paid = {
      values: {
        course_type: "Paid",
      },
    };

 
    

    if (userAuthtoken !== null) {
      // dispatch(getMyProrgamsList(data))
      dispatch(getMyProrgamsList({ userAuthtoken: userAuthtoken }));
    }

    dispatch(getUserProgramList(data_for_Paid));
  }, [userAuthtoken, dispatch]);

  useEffect(() => {
    // Combine free and paid programs
    const combined = freeData.concat(paidData);
    setCombinedPrograms(combined);
    console.log("Combined Programs:", combined);

  }, [freeData, paidData]);

  // useEffect(() => {
  //   const data_filter = {
  //     userAuthtoken,
  //     values: {
  //       sort_by: "az",
  //       categories: "new",
  //       speakers: "simpson",
  //     },
  //   };
  //   dispatch(userFilterPrograms(data_filter));

  //   const data_filter2 = {
  //     userAuthtoken,
  //     values: {
  //       sort_by: "za",
  //       categories: "pro",
  //       speakers: "Andy William",
  //     },
  //   };
  //   dispatch(userFilterPrograms(data_filter2));
  // }, [userAuthtoken, dispatch]);

  function getCategories(e) {
    e.stopPropagation();
    onSortHandler("pro");

    dispatch(getProgramCategoriesList());
  }

  function getSpeakers(e) {
    e.stopPropagation();
    onSortHandler("pro");

    dispatch(getProgramSpeakersList());
  }

  const onCardClick = (values) => {
    const data = {
      values: {
        ...values,
        videoId: values._id,
      },
    };

    

    navigate(`${usrVideoPlayer}/${values._id}`, {
      state: {
        data2send: { ...data },
      },
    });
  };
  const updateSortBy = (type, selectedValue) => {
    if (type === "category") {
      console.log("coming in category type");
      setFilter((prevFilter) => ({
        ...prevFilter,
        categories: `${
          prevFilter.categories ? prevFilter.categories + "," : ""
        }${selectedValue}`,
      }));
    } else if (type === "speaker") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        speakers: `${
          prevFilter.speakers ? prevFilter.speakers + "," : ""
        }${selectedValue}`,
      }));
    }
  };

  const removeFromString = (originalString, valueToRemove) => {
    if (!originalString) {
      return "";
    }

    const values = originalString.split(",");
    const updatedValues = values.filter((value) => value !== valueToRemove);
    return updatedValues.join(",");
  };

  const deleteSortBy = (type, selectedValue) => {
    if (type === "category") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        categories: removeFromString(prevFilter.categories, selectedValue),
      }));
    } else if (type === "speaker") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        speakers: removeFromString(prevFilter.speakers, selectedValue),
      }));
    }
  };
  function handleCategoryFilter(e) {
    console.log(e.target.checked, "checked");
    if (e.target.checked) {
      const newCategories = e.target.value;
      updateSortBy("category", newCategories);
    } else if (e.target.checked === false) {
      const newCategories = e.target.value;
      deleteSortBy("category", newCategories);
    }
  }

  const handleSelect = (eventKey) => {
    console.log(eventKey, "eventKey");
    // Do something with the selected value
    // setSelectedItem(eventKey);

    // setFilter((prevFilter) => ({
    //   ...prevFilter,
    //   categories: `${
    //     prevFilter.categories ? prevFilter.categories + "," : ""
    //   }${selectedValue}`,
    // }));

    if (eventKey === "az" || eventKey === "za" || eventKey === "latest") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        sort_by: `${eventKey}`,
        price: "",
      }));
    }

    if (eventKey === "HighToLow" || eventKey === "LowToHigh") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        sort_by: "",
        price: `${eventKey}`,
      }));
    }
  };

  function handleSpeakerFilter(e) {
    console.log(e.target.value, "handle speaker");
    const newSpeaker = e.target.value;
    console.log(newSpeaker, "newsoeajd");
    updateSortBy("speaker", newSpeaker);
  }

  function convertTimeInHour(time) {
    let duration = moment.duration(time, "seconds");

    let formatted_Time = moment.utc(duration.asMilliseconds()).format("HH:mm");
    return formatted_Time;
  }

  const onSortHandler = (val) => {
    setSorted(val);
  };

  // const loadMore = () => {
  //   setItemsToLoad(cardsData.length);
  // };
  // const loadLess = () => {
  //   setItemsToLoad(5);
  // };
  // const loadMorePro = () => {
  //   setItemsToLoadPro(cardsData.length);
  // };
  // const loadLessPro = () => {
  //   setItemsToLoadPro(5);
  // };
  let data = {
    userAuthtoken,
    filter: filter,
  };


  const loadMoreTop = () => {
    console.log(data, "data");
    console.log(filter, "filter state");
    // setItemsToLoadTop(cardsData.length);
    dispatch(getFilteredPrograms(data));
  };
  const filterNotEmpty = Object.values(filter).every((value) => value === "");
  return (
    <>
      <main>
        <section className="platformPage">
          <div className="platformPage__top">
            <Container>
              <div className="title-block">
                <h1>Programs</h1>
                <span>
                  (
                  {filterResults.length > 0
                    ? filterResults.length
                    : freeData.length + paidData.length}
                  )
                </span>
              </div>

              <div className="platformFilter">
                <Row>
                  <Col md={6}>
                    <Nav className="right-nav ">
                      <NavDropdown
                        activeKey={selectedItem}
                        onSelect={handleSelect}
                        className="sort"
                        title="sort by"
                        id="collapsible-nav-dropdown"
                      >
                        <NavDropdown.Item
                          eventKey="az"
                          href="#action/3.1"
                          onClick={() => {
                            onSortHandler("az");
                          }}
                        >
                          A-Z
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          eventKey="za"
                          href="#action/3.2"
                          onClick={() => {
                            onSortHandler("za");
                          }}
                        >
                          Z-A
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          eventKey="HighToLow"
                          href="#action/3.2"
                          onClick={() => {
                            onSortHandler("free");
                          }}
                        >
                          High-Low
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          eventKey="LowToHigh"
                          href="#action/3.2"
                          onClick={() => {
                            onSortHandler("free");
                          }}
                        >
                          Low-High
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          eventKey="latest"
                          href="#action/3.2"
                          onClick={() => {
                            onSortHandler("free");
                          }}
                        >
                          Latest
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Filter"
                        id="collapsible-nav-dropdown"
                        className="filter"
                      >
                        <ul className="filter_ul">
                          <li className="list_item">
                            <NavDropdown.Item
                              href="#action/3.1"
                              onMouseOver={(e) => {
                                getCategories(e);
                              }}
                            >
                              Category
                            </NavDropdown.Item>
                            <div className="drop_item">
                              {categoriesList?.map((i) => (
                                <div className="checkbox_list">
                                  <input
                                    type="checkbox"
                                    id={i._id}
                                    name={i.title}
                                    value={i.title}
                                    onChange={handleCategoryFilter}
                                  />
                                  <label>{i.title}</label>
                                </div>
                              ))}
                            </div>
                          </li>
                          <li className="list_item">
                            <NavDropdown.Item
                              href="#action/3.2"
                              onMouseOver={(e) => {
                                getSpeakers(e);
                              }}
                            >
                              Speaker
                            </NavDropdown.Item>
                            <div className="drop_item">
                              {speakerList?.map((i) => (
                                <div className="checkbox_list">

                                  <input
                                    type="checkbox"
                                    id={i._id}
                                    name={i.name}
                                    value={i.name}
                                    onChange={handleSpeakerFilter}
                                  />


                                   <label>{i.name}</label>
                                  </div>

                            


                                // </div>
                              ))}
                            </div>
                          </li>
                        </ul>
                      </NavDropdown>
                    </Nav>
                  </Col>
                  <Col md={6} className="text-end">
                    {!filterNotEmpty && (
                      <button onClick={loadMoreTop} className="view-All-btn">
                        Apply
                      </button>
                    )}
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          {filterResults.length === 0 ? (
            <>
              {(sorted === "all" ||
                sorted === "free" ||
                sorted === "az" ||
                sorted === "za") && (
                <section className=" program-section">
                  <Container>
                    <Row className="align-items-end">
                      <Col md={8}>
                        <div className="title-block">
                          <h2 className="text-white">Free</h2>
                          <p className="text-white">
                            The Screeno ecosystem is designed to help you
                            generate profit.Setup complete sales and marketing
                            funnels with ease using the Screeno
                          </p>
                        </div>
                      </Col>
                      {/* <Col md={4} className="text-end">
                        {itemsToLoad < freeData.length && (
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
                      </Col> */}
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
                              category,
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
                                  category,
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
                        <Col md={12} className="text-center btn_program2">


                      {itemsToLoadFree < freeData.length && (
                        <div className="btn_program2 col-12">
                        <button
                          onClick={() =>
                            setItemsToLoadFree((prevState) => prevState + 5)
                          }
                          className="view-All-btn"
                        >
                          View More
                        </button>
                        </div>
                      )}
                          
                      {/* <button
                        onClick={() =>
                          setItemsToLoad((prevState) => prevState + 5)
                        }
                        className="view-All-btn"
                      >
                        View More
                      </button> */}
                  
                      </Col>
                    </Row>
                  </Container>
                </section>
              )}
              {/* pro */}
              {(sorted === "all" ||
                sorted === "pro" ||
                sorted === "az" ||
                sorted === "za") && (
                <section className="pro-section py-5">
                  <Container>
                    <Row className="align-items-end">
                      <Col md={8}>
                        <div className="title-block">
                          <h2 className="text-white">
                            Pro <Image src={star} />
                          </h2>
                          <p className="text-white">
                            The Screeno ecosystem is designed to help you
                            generate profit.Setup complete sales and marketing
                            funnels with ease using the Screeno
                          </p>
                        </div>
                      </Col>
                      {/* <Col md={4} className="text-end">
                        {itemsToLoadPro < paidData.length && (
                          <button
                            onClick={loadMorePro}
                            className="view-All-btn"
                          >
                            View All
                          </button>
                        )}
                        :
                        {itemsToLoadPro > 5 && (
                          <button
                            onClick={loadLessPro}
                            className="view-All-btn"
                          >
                            View Less
                          </button>
                        )}
                      </Col> */}
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
                              category,
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
                                  category,
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

                      {itemsToLoadPro < paidData.length && (
                        <div className="btn_program2 col-12">
                        <button
                          onClick={() =>
                            setItemsToLoadPro((prevState) => prevState + 5)
                          }
                          className="view-All-btn"
                        >
                          View More
                        </button>
                        </div>
                      )}
                    </Row>
                  </Container>
                </section>
              )}

              {userAuthtoken !== null && (
                <section className="pro-section py-5">
                  <Container>
                    <Row className="align-items-end">
                      <Col md={8}>
                        <div className="title-block">
                          <h2 className="text-white">
                            My Programs <Image src={star} />
                          </h2>
                          <p className="text-white">
                            The Screeno ecosystem is designed to help you
                            generate profit.Setup complete sales and marketing
                            funnels with ease using the Screeno
                          </p>
                        </div>
                      </Col>
               
                    </Row>
                    <Row className="popular-row">
                      {combinedPrograms
                        .slice(0,itemsToLoad)
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
                              category,
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
                                  category,
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


                      {itemsToLoad < combinedPrograms.length && (
                         <div className="btn_program2 text-center col-12">
                        <button
                          onClick={() =>
                            setItemsToLoad((prevState) => prevState + 5)
                          }
                          className="view-All-btn"
                        >
                          View More
                        </button>
                        </div>
                      )}

{itemsToLoad > 5 && (
    <div className="btn_program2 col-12 text-center">
      <button onClick={() => setItemsToLoad((prev) => prev - 5)} className="view-All-btn">
        View Less
      </button>
    </div>
                  )}


                    </Row>
                  </Container>
                </section>
              )}
            </>
          ) : (
            <section className="pro-section py-5">
              <Container>
                <Row className="align-items-end">
                  <Col md={8}>
                    <div className="title-block">
                      <h2 className="text-white">
                        Results <Image src={star} />
                      </h2>
                      <p className="text-white">
                        The Screeno ecosystem is designed to help you generate
                        profit.Setup complete sales and marketing funnels with
                        ease using the Screeno
                      </p>
                    </div>
                  </Col>
                  {/* <Col md={4} className="text-end">
                    {itemsToLoadResult < filterResults.length && (
                      <button onClick={loadMorePro} className="view-All-btn">
                        View All
                      </button>
                    )}
                    :
                    {itemsToLoadResult > 5 && (
                      <button onClick={loadLessPro} className="view-All-btn">
                        View Less
                      </button>
                    )}
                  </Col> */}
                </Row>
                <Row className="popular-row">
                  {filterResults
                    .slice(0, itemsToLoadResult)
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
                          category,
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
                              category,
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

                  {itemsToLoadResult < filterResults.length && (
                    <div className="btn_program2 col-12 text-center">
                    <button
                      onClick={() =>
                        setItemsToLoadResult((prevState) => prevState + 5)
                      }
                      className="view-All-btn"
                    >
                      View More
                    </button>
                    </div>
                  )}
                </Row>
              </Container>
            </section>
          )}

          {/* free */}
        </section>
      </main>
    </>
  );
}
export default Programs;
