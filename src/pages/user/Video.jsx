import React, { useState } from "react";
import "../../styles/user/video.scss";
import ReactPlayer from "react-player";
import { Container, Row, Col, Image } from "react-bootstrap";
import {Card,CheckoutForm} from "../../components/user";
import { cardsData } from "../../utility/data";
import { Play, lockscreen } from "../../assets/icons/user";
// import CheckoutForm from "../../components/user/Stripe";
import {loadStripe} from '@stripe/stripe-js';
import { video_player_thumbnail } from "../../assets/images/user";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const VideoPlayer = () => {
  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  const [IsExpanded, setIsExpanded]= useState(false);
  const toggleExpand = () =>{
    setIsExpanded(!IsExpanded);
  }
  console.log("running");
  const [itemsToLoad, setItemsToLoad] = useState(5);
  const [show,setShow] = useState(false)
  // );
  const loadMore = () => {
    setItemsToLoad(itemsToLoad + 5);
  };
  const loadLess = () => {
    setItemsToLoad(itemsToLoad - 5);
  };
  return (
    <>
<Elements stripe={stripePromise} options={options}>
    <CheckoutForm show={show} />
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
                {/* <ReactPlayer controls={true} url={videoURL} /> */}
                <Image src={video_player_thumbnail}  className="videoImg img-fluid"/>
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
                  <small>Andy William | Interface, Experience</small>
                  <h1>Crypto Staking | Making Money with Staking</h1>
                  <div className="videoWrapper__caption__descp">
                    <h4>Description</h4>
                    <p>
                      {IsExpanded ? "In this video we will learn how to create landing page for  cryptocurrency apps "
                    :
                    "In this video we will learn how to create... "
                    }
                     <a className="read_more" onClick={toggleExpand}>
                      {IsExpanded ? "Read Less":"Read More"}
                    </a>
                    </p>
                   
                  </div>
                  <div className="videoWrapper__caption__midbuttons">
                    <div className="midbuttons__left">
                      <span className="videoLength">1h 46min</span>
                      <span className="videoViews">53k views</span>
                    </div>
                    <div className="midbuttons__right">
                      <button className="mid--btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="me-2">
                        <g opacity="0.5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8332 15.8046L11.1575 15.5544C11.5219 15.2733 12.0452 15.3408 12.3263 15.7052C12.6074 16.0696 12.5399 16.5929 12.1755 16.874L10.523 18.1489C10.4727 18.1894 10.4186 18.2235 10.3617 18.2508C10.3171 18.2733 10.2573 18.2954 10.1948 18.3104C10.1144 18.3292 10.0372 18.336 9.96063 18.3324C9.84314 18.3269 9.73201 18.2972 9.63215 18.248C9.57742 18.2211 9.52523 18.1881 9.47672 18.1489L7.82416 16.874C7.45976 16.5929 7.39224 16.0696 7.67336 15.7052C7.95448 15.3408 8.47778 15.2733 8.84218 15.5544L9.1665 15.8046V7.04755C9.1665 6.58731 9.5396 6.21421 9.99984 6.21421C10.4601 6.21421 10.8332 6.58731 10.8332 7.04755V15.8046ZM10.4165 1.66663C12.5506 1.66663 14.3645 3.13417 14.8639 5.14359C16.8695 5.64459 18.3332 7.46169 18.3332 9.59829C18.3332 11.9438 16.5689 13.9056 14.2583 14.1616C13.8008 14.2122 13.3889 13.8825 13.3382 13.425C13.2876 12.9676 13.6173 12.5557 14.0747 12.505C15.5427 12.3424 16.6665 11.0928 16.6665 9.59829C16.6665 8.0978 15.5339 6.84497 14.0587 6.68982C13.6673 6.64865 13.358 6.33927 13.317 5.94786C13.1621 4.46815 11.9121 3.33329 10.4165 3.33329C8.9196 3.33329 7.66894 4.47008 7.5156 5.95138C7.46779 6.41326 7.05169 6.74696 6.59045 6.69333C6.47812 6.68027 6.36448 6.67368 6.24984 6.67368C4.6394 6.67368 3.33317 7.98268 3.33317 9.59829C3.33317 11.0928 4.45702 12.3424 5.92492 12.505C6.38236 12.5557 6.71211 12.9676 6.66144 13.425C6.61076 13.8825 6.19886 14.2122 5.74142 14.1616C3.4308 13.9056 1.6665 11.9438 1.6665 9.59829C1.6665 7.14577 3.58636 5.14178 6.00346 5.01354C6.54738 3.0713 8.32858 1.66663 10.4165 1.66663Z" fill="#BDB3C7"/>
                        </g>
                        </svg>
                        Download</button>
                      <button className="mid--btn">Share</button>
                    </div>
                  </div>
                  <div className="videoWrapper__caption__timecodec">
                    <h4>Time Codes</h4>
                    <div className="timecodec__list">
                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>
                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>
                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>
                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>
                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>
                      <button className="timecodecBtn">
                        <figure><Play/></figure>
                        <div className="timecodecBtn__caption">
                          <h2>Introduction</h2>
                          <span>02:10</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <button onClick={() => setShow(true)} className="buyBtn">Buy For $1.0</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="video-information"></div>
      </section>
      <section className="popular-section popular-section1 video_wrapper_page">
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
            :
            {itemsToLoad > 5 && (
                <button onClick={loadLess} className="view-All-btn">
                  View Less
                </button>
            )}
          </div>
          </div>
          <Row className="popular-row">
            {cardsData
              .slice(0, itemsToLoad)
              .map(
                (
                  {
                    id,
                    title,
                    image,
                    duration,
                    views,
                    description,
                    watched,
                    subscription,
                    url,
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
                    subscription={subscription}
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
      </Elements>
    </>
  );
};
export default VideoPlayer;