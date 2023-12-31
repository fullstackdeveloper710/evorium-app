import React, { useState } from "react";
import {
  Button,
  Container,
  Image,
  Row,
  Col,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {Card} from "../../components/user";
// import {
//   upload,
//   monetization,
//   stream,
//   downarrow,
//   insta,
// } from "../assets/icons/user";
import { cardsData } from "../../utility/data";
// import FooterEvorium from "../components/user/FooterEvorium";
// import { AiOutlineStar } from "react-icons/ai";
// import CustomModal from "../components/user/CustomModal";
import { star } from "../../assets/icons/user";

import "../../styles/user/programs.scss";

function Programs() {
  const [itemsToLoad, setItemsToLoad] = useState(5);
  const [itemsToLoadPro, setItemsToLoadPro] = useState(5);
  const [itemsToLoadTop, setItemsToLoadTop] = useState(5);

  const [showAlert, setShowAlert] = useState(false);
  const [sorted, setSorted] = useState("all");

  // Add default value on page load

  const data = cardsData.filter((item) => {
    return item.subsType === "free";
  });

  const datapro = cardsData.filter((item) => {
    return item.subsType === "pro";
  });

  // console.log(data,"data")

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
  const loadLessTop = () => {
    setItemsToLoadTop(5);
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
                  <Col md={4} className="text-end d-none d-md-block">
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
                  {data
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
                          subsType,
                          amount,
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
                          description={description}
                          subsType={subsType}
                          amount={amount}
                        />
                      )
                    )}
                </Row>
                {/* <div className="text-center pt-5">
            {itemsToLoad < cardsData.length && (

              <button onClick={loadMore} className="load-more-btn">Load more</button>)}
            </div> */}
             <div className="text-end d-block d-md-none pt-5">
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
                  <Col md={4} className="text-end d-none d-md-block">
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
                  {datapro
                    .slice(0, itemsToLoadPro)
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
                          subsType,
                          amount,
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
            </div>

            <div className="text-center pt-5">
            {itemsToLoad > 5 && (
              <button onClick={loadLess} className="load-more-btn">Load Less</button>)}
            </div> */}

          <div className="text-end d-block d-md-none pt-5">
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
            
              </Container>
            </section>
          )}
        </section>
      </main>
    </>
  );
}
export default Programs;
