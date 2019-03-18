import React, { Component } from 'react';
import './index.css';

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
            <img src="../static/images/Snow-covered-mountain-banner.jpg" alt="snow covered mountain"/>
        </div> {/* end banner image container */}
        <div className="sponsers-container row w-100">
          <img src="https://via.placeholder.com/2000x100/FFFFFF/000000/?text=Sponser Logos across" alt="Sponsers" className="sponser-banner"/>
        </div> {/* end sponser container */}
        <div className="image-carousel-container">
          <div id="dealImagesIndicators" className="carousel slide" data-ride="carousel" >
            <ol className="carousel-indicators">
              <li data-target="#dealImagesIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#dealImagesIndicators" data-slide-to="1"></li>
              <li data-target="#dealImagesIndicators" data-slide-to="2"></li>
            </ol> {/* end indicators list */}
            <div className="carousel-inner"> {/* start carousel images  */}
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://via.placeholder.com/800x200.png?text=First Slide" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://via.placeholder.com/800x200.png?text=Second Slide" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://via.placeholder.com/800x200.png?text=Third Slide" alt="Third slide"/>
            </div> {/* end carousel images  */}
            <a className="carousel-control-prev" href="#dealImagesIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a> {/* end previous control */}
            <a className="carousel-control-next" href="#dealImagesIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a> {/* end next control */}
          </div> {/* end image carousel */}
        </div> {/* end image carousel container */}

        <div className="featured-products-container">
          <div className="row featured-products-row">
            <h3 className="featured-text">Featured Products</h3>
            <h6 className="featured-shop-all">SHOP ALL</h6>
          </div> {/* end row */}
          <div id="featuredProductsControls" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner row w-100 mx-auto">
              {/* begin products being shown */}
              
              {/* end products being shown */}
            </div> {/* end featured products item carousel */}
            <a className="carousel-control-prev featured-control-prev" href="#featuredProductsControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a> {/* end featured products prev button */}
            <a className="carousel-control-next featured-control-next" href="#featuredProductsControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a> {/* end featured products next button */}
          </div> {/* end featured products carousel */}
        </div> {/* end featured products container */}


        <div className="contact-carousel-container">
          <div id="carouselContactControls" className="carousel slide" data-ride="carousel" >
            <ol className="carousel-indicators">
              <li data-target="#carouselContactControls" data-slide-to="0" className="active"></li>
              <li data-target="#carouselContactControls" data-slide-to="1"></li>
              <li data-target="#carouselContactControls" data-slide-to="2"></li>
            </ol> {/* end indicators list */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://via.placeholder.com/800x200?text=First Slide" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://via.placeholder.com/800x200.png?text=Second Slide" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://via.placeholder.com/800x200.png?text=Third Slide" alt="Third slide"/>
              </div>
            </div> {/* end carousel images  */}
          </div> {/* end image carousel */}
        </div> {/* end image carousel container */}
      </div>
    );
  }
}

export default Home;
