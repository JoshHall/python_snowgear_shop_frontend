import React, { Component } from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../media/images/Snow-covered-mountain-banner.jpg'

class Home extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  saveEvent1 = async(e) => {
    e.preventDefault();

    let title = e.target.elements.title.value;
    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;
    let notes = e.target.elements.notes.value;

    // console.log(title, day, month, year, notes);

    let url = 'https://event-sched-backend711.herokuapp.com/api/save';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'day': day,
        'month': month,
        'year': year,
        'title': title,
        'notes': notes
      }
    });

    let data = await response.json();

    if (data.success) {
      alert(`${data.success}`);
    }
    else if (data.error) {
      alert(`${data.error}`);
    }
    else {
      alert('We are sorry, but that did not work. Please try again.');
    }
  }

  saveEvent = async(e) => {
    e.preventDefault();

    let title = e.target.elements.title.value;
    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;
    let notes = e.target.elements.notes.value;

    // console.log(title, day, month, year, notes);

    let url = 'https://event-sched-backend711.herokuapp.com/api/save';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'day': day,
        'month': month,
        'year': year,
        'title': title,
        'notes': notes
      }
    });

    let data = await response.json();

    if (data.success) {
      alert(`${data.success}`);
    }
    else if (data.error) {
      alert(`${data.error}`);
    }
    else {
      alert('We are sorry, but that did not work. Please try again.');
    }
  }


  render() {
    return (
      <div className='container'>
        <div className="banner-img-container">
            <img src={banner} alt="snow covered mountain"/>
        </div> {/* end banner image container */}
        <div className="sponsers-container row w-100">
          <img src="https://via.placeholder.com/2000x100/FFFFFF/000000/?text=Sponser Logos across" alt="Sponsers" className="sponser-banner"/>
        </div> {/* end sponser container */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x200.png?text=First Slide"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x200.png?text=Second Slide"
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
              src="https://via.placeholder.com/800x200.png?text=Third Slide"
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
