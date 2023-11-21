import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card } from "../../components/user";
import { cardsData } from "../../utility/data";
import { Play } from "../../assets/icons/user";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm, CustomModal } from "../../components/common";
import { useLocation } from "react-router";
import { useModal } from "../../utility/hooks";
import { Elements } from "@stripe/react-stripe-js";
import "../../styles/user/video.scss";
import { useDispatch, useSelector } from "react-redux";
import { userViewCount } from "../../redux/thunk/user/usrCount";

const stripePromise = loadStripe(
  "pk_test_51NsgDPSGZG5DL3XoTSBKwQDGmbwM1ZVynvfuy5gqwnrlzfScPgsXpWHqDhv6ClIUZpJkDlJZBM4Qai0qUlRsCJHU004QV7HMdi"
);

const VideoPlayer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const {
    userAuthtoken,
    userData: { user_id },
  } = useSelector((state) => state.userAuth);
  

  const dispatch = useDispatch();

  const [IsExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!IsExpanded);
  };
  const playerRef = React.useRef();

  const location = useLocation();
  const { state } = location;
  const { data2send } = state;
  const {
    thumbnail_url,
    description,
    title,
    videoId,
    speaker,
    episodes,
    price,
    course_type,
    video_duration,
    views,
  } = data2send.values;
  console.log(data2send,"{data2send")

  const [itemsToLoad, setItemsToLoad] = useState(5);
  const [startTime, setStartTime] = useState(0); // Initial start time in seconds
  const { show, handleClose, handleShow } = useModal();
  // );
  const loadMore = () => {
    setItemsToLoad(itemsToLoad + 5);
  };
  const loadLess = () => {
    setItemsToLoad(itemsToLoad - 5);
  };

  const openModal = () => {
    console.log("toogle workign");
    setShowPaymentModal(!showPaymentModal);

    console.log(showPaymentModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePlayPause = () => {
    const data = {
      userAuthtoken,
      values: {
        videoId: videoId,
        userId: user_id,
      },
    };
    console.log(data,"data")

    dispatch(userViewCount(data)).then(({ payload }) => {
      if (payload) {
        setIsPlaying(!isPlaying);
      }
    });
    // dispatch(userViewCount(data))
  };
  const handleSetStartTime = (timeInSeconds) => {
    setStartTime(timeInSeconds);
    // If the video is playing, seek to the new start time
    if (isPlaying) {
      playerRef.current.seekTo(timeInSeconds);
    }
  };
  return (
    <>
      <CustomModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      >
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </CustomModal>

      <section
        style={{
          borderBottom: 1,
          borderWidth: 1,
          borderColor: "red",
        }}
        className="videoWrapper py-5"
      >
        <Container>
          <Row>
            <Col md={7}>
              <div
                className="videoWrapper__left"
                style={{
                  position: "relative",
                }}
              >
                {course_type === "Paid" ? (
                  <Image src={thumbnail_url} className="videoImg img-fluid" />
                ) : (
                  <ReactPlayer
                    // onPlay={handleClick}
                    // onStart={handlePlayPause}
                    ref={playerRef}
                    playing={isPlaying}
                    controls={true}
                    url={`http://api.evorium.xyz/user/web/video_stream/${videoId}`}
                    onStart={() => playerRef.current.seekTo(startTime)} // Set initial start time

                  />
                )}
                <button onClick={handlePlayPause}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
                {/* {subscriptionType[1] == 'pro' &&  <div
                  style={{
                    backgroundColor: "transparent",
                    height: "100%",
                    width: "100%",
                    color: "white",
                    position: "absolute",
                    top: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                > */}
                {/* <Image
                    src={lockscreen}
                    style={{
                      height: 70,
                      width: 70,
                      color: "red",
                    }}
                  /> */}
              </div>
            </Col>

            <Col md={5}>
              <div className="videoWrapper__right">
                <div className="videoWrapper__caption">
                  <small>{speaker} | Interface, Experience</small>
                  <h1>{title}</h1>

                  <div className="videoWrapper__caption__descp">
                    <h4>Description</h4>
                    <p>
                      {description}
                      {/* {IsExpanded
                          ? "In this video we will learn how to create landing page for  cryptocurrency apps"
                          : "In this video we will learn how to create..."} */}
                    </p>
                    <button onClick={toggleExpand}>
                      {IsExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  <div className="videoWrapper__caption__midbuttons">
                    <div className="midbuttons__left">
                      <span className="videoLength">{video_duration}</span>
                      <span className="videoViews">{views} views</span>
                    </div>
                    <div className="midbuttons__right">
                      <button className="mid--btn">Download</button>
                      <button className="mid--btn">Share</button>
                    </div>
                  </div>

                  <div className="videoWrapper__caption__timecodec">
                    <h4>Time Codes</h4>

                    <div className="timecodec__list">
                    {/* <button onClick={() => handleSetStartTime(50)}>Play from 50s</button> */}
{/* 
                      {episodes?.map((i) => {
                        return ( */}
                          <button className="timecodecBtn" onClick={() => handleSetStartTime(30)}>
                            <figure>
                              <Play />
                            </figure>
                            <div className="timecodecBtn__caption">
                              {/* <h2>{i.title}</h2> */}
                              <h2>introduction 1</h2>

                              <span>30 sec</span>
                            </div>
                          </button>
                        {/* );
                      })} */}
                    </div>
                    <div className="timecodec__list">
                    {/* <button onClick={() => handleSetStartTime(50)}>Play from 50s</button> */}
{/* 
                      {episodes?.map((i) => {
                        return ( */}
                          <button className="timecodecBtn" onClick={() => handleSetStartTime(60)}>
                            <figure>
                              <Play />
                            </figure>
                            <div className="timecodecBtn__caption">
                              {/* <h2>{i.title}</h2> */}
                              <h2>introduction 2</h2>

                              <span>1 ,min</span>
                            </div>
                          </button>
                        {/* );
                      })} */}
                    </div>
                    <div className="timecodec__list">
                 
                          <button className="timecodecBtn" onClick={() => handleSetStartTime(90)}>
                            <figure>
                              <Play />
                            </figure>
                            <div className="timecodecBtn__caption">
                        
                              <h2>introduction 3</h2>

                              <span>1.30 mins</span>
                            </div>
                          </button>
                       
                    </div>
                    {/* <div className="timecodec__list">
                        <button className="timecodecBtn">
                          <figure>
                            <Play />
                          </figure>
                          <div className="timecodecBtn__caption">
                            <h2>Introduction</h2>
                            <span>02:10</span>
                          </div>
                        </button>

                        <button className="timecodecBtn">
                          <figure>
                            <Play />
                          </figure>
                          <div className="timecodecBtn__caption">
                            <h2>Introduction</h2>
                            <span>02:10</span>
                          </div>
                        </button>

                        <button className="timecodecBtn">
                          <figure>
                            <Play />
                          </figure>
                          <div className="timecodecBtn__caption">
                            <h2>Introduction</h2>
                            <span>02:10</span>
                          </div>
                        </button>

                        <button className="timecodecBtn">
                          <figure>
                            <Play />
                          </figure>
                          <div className="timecodecBtn__caption">
                            <h2>Introduction</h2>
                            <span>02:10</span>
                          </div>
                        </button>

                        <button className="timecodecBtn">
                          <figure>
                            <Play />
                          </figure>
                          <div className="timecodecBtn__caption">
                            <h2>Introduction</h2>
                            <span>02:10</span>
                          </div>
                        </button>

                        <button className="timecodecBtn">
                          <figure>
                            <Play />
                          </figure>
                          <div className="timecodecBtn__caption">
                            <h2>Introduction</h2>
                            <span>02:10</span>
                          </div>
                        </button>
                      </div> */}
                  </div>
                  {/* <button onClick={() => setShow(true)} className="buyBtn">Buy For $1.0</button> */}
                  <div>
                    <button className="buyBtn" onClick={handleShow}>
                      Buy For ${parseInt(price) / 100}
                    </button>
                    {/* <CheckoutForm show={showModal} handleClose={closeModal} /> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="video-information"></div>
      </section>

      <section className="popular-section popular-section1">
        <Container>
          <div className="title-block title-block-border">
            <h1 className="text-white">You might also like</h1>

            <div className="d-flex justify-content-between align-items-center">
              <div className="text-block pe-5">
                <p className="text-white mb-0">
                  The Screeno ecosystem is designed to help you generate
                  profit.Setup complete sales and marketing funnels with ease
                  using the Screeno
                </p>
              </div>
              {itemsToLoad < cardsData.length && (
                <button onClick={loadMore} className="view-All-btn">
                  View All
                </button>
              )}

              {itemsToLoad > 5 && (
                <button onClick={loadLess} className="view-All-btn">
                  View Less
                </button>
              )}
            </div>
          </div>
          <Row className="popular-row">
            {cardsData
              ?.slice(0, itemsToLoad)
              ?.map(
                (
                  {
                    id,
                    title,
                    image,
                    duration,
                    views,
                    description,
                    watched,
                    url,
                    subsType,
                    amount,
                  },
                  index
                ) => (
                  <Card
                    url={url}
                    key={id}
                    title={title}
                    img={image}
                    duration={duration}
                    views={views}
                    watched={watched}
                    subsType={subsType}
                    amount={amount}
                    description={description}
                  />
                )
              )}
          </Row>
          {/* <div className="text-center pt-5">
            {itemsToLoad < cardsData.length && (

              <button onClick={loadMore} className="load-more-btn">Load more</button>)}
            </div> */}
        </Container>
      </section>
    </>
  );
};
export default VideoPlayer;
