import React from 'react'
import { Container, Carousel, Image } from 'react-bootstrap';
import {virtualworld } from "../../assets/images/user" 
import '../../styles/user/slider.scss';

const Slider = () => {
  return (
    <section className="road-map-section">   
   <Container> 
      <div className='title-block'>
         <h2>Roadmap</h2>
        </div>

         {/* slider */}
         <div className='slider_container'>
          <Image className='virtualworld_img' src={virtualworld} />
         <Carousel>
      <Carousel.Item>     
        <Carousel.Caption>
          <h3>Step 1</h3>
         <ul>
          <li>Token creation & smart contract development during 2023</li>
          <li>Website launch</li>
          <li>Community building and marketing campaign</li>
          <li>Token creation and smart contract development</li>
          <li>Website launch</li>
         </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>  
      <Carousel.Caption>
          <h3>Step 2</h3>
         <ul>
          <li>Token creation & smart contract development during 2023</li>
          <li>Website launch</li>
          <li>Community building and marketing campaign</li>
          <li>Token creation and smart contract development</li>
          <li>Website launch</li>
         </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
      <Carousel.Caption>
          <h3>Step 3</h3>
         <ul>
          <li>Token creation & smart contract development during 2023</li>
          <li>Website launch</li>
          <li>Community building and marketing campaign</li>
          <li>Token creation and smart contract development</li>
          <li>Website launch</li>
         </ul>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
      <Carousel.Caption>
          <h3>Step 4</h3>
         <ul>
          <li>Token creation & smart contract development during 2023</li>
          <li>Website launch</li>
          <li>Community building and marketing campaign</li>
          <li>Token creation and smart contract development</li>
          <li>Website launch</li>
         </ul>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
         {/* slider */}


   </Container>
   
   </section>
  )
}

export default Slider;
