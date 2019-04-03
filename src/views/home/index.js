import React, { Component } from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../media/images/Snow-covered-mountain-banner.jpg';
import logosBanner from '../../media/images/logos-banner.png';
import carousel1 from '../../media/images/carousel1.png';
import carousel2 from '../../media/images/carousel2.jpg';
import carousel3 from '../../media/images/carousel3.jpg';

class Home extends Component {

  render() {
    return (
      <div className='container'>
        <div className="banner-img-container">
            <img src={banner} alt="snow covered mountain"/>
        </div> {/* end banner image container */}
        <div className="sponsers-container w-100">
          <img src={logosBanner} alt="Sponsers" className="sponser-banner"/>
        </div> {/* end sponser container */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="First slide"
            />
            {/*
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-item-2 d-block w-100"
              src={carousel2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Home;
