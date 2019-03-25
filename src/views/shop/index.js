import React, { Component } from 'react';
import './index.css';

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      products = {
            1001: {
                'title': 'Soap',
                'price': 3.98,
                'desc': 'Very clean soapy soap, descriptive text'
            },
            1002: {
                'title': 'Grapes',
                'price': 4.56,
                'desc': 'Bundle of grapey grapes, yummy'
            },
            1003: {
                'title': 'Pickles',
                'price': 5.67,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1004: {
                'title': 'Juice',
                'price': 2.68,
                'desc': 'Yummy Yumy OJ Babyyyyy'
            },
            1005: {
                'title': 'Title 5',
                'price': 5.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1006: {
                'title': 'Title 6',
                'price': 6.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1007: {
                'title': 'Title 7',
                'price': 7.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1008: {
                'title': 'Title 8',
                'price': 8.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1009: {
                'title': 'Title 9',
                'price': 9.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1010: {
                'title': 'Title 10',
                'price': 10.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1011: {
                'title': 'Title 11',
                'price': 11.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1012: {
                'title': 'Title 12',
                'price': 12.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1013: {
                'title': 'Title 13',
                'price': 13.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1014: {
                'title': 'Title 14',
                'price': 14.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1015: {
                'title': 'Title 15',
                'price': 15.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1016: {
                'title': 'Title 16',
                'price': 16.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1017: {
                'title': 'Title 17',
                'price': 17.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1018: {
                'title': 'Title 18',
                'price': 18.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1019: {
                'title': 'Title 19',
                'price': 19.00,
                'desc': 'A pickle a day keeps the goblins away'
            },
            1020: {
                'title': 'Title 20',
                'price': 20.00,
                'desc': 'A pickle a day keeps the goblins away'
            }
        }
    }
  }

  getEvents = async(e) => {
    e.preventDefault();

    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;

    // console.log(month, day, year);
    let url = 'https://event-sched-backend711.herokuapp.com/api/retrieve';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'day': day,
        'month': month,
        'year': year
      }
    });

    let events = await response.json();

    // sort by month then by Day
    events.sort(function(a,b) {
      return a.month - b.month;
    });

    events.sort(function(a,b) {
      if (a.month === b.month) {
        return a.day - b.day;
      }
    });

    // console.log(data);
    // if the variable you are saving into the state is the same, yu cane just use the code below instead of events: events
    this.setState({ events });
  }

  removeEvent = async(id) => {
    if (!window.confirm('Would you really like to delete this event?')) {
      return;
    }

    // id.preventDefault();
    let url = 'https://event-sched-backend711.herokuapp.com/api/delete';

    let response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'event_id': id
      }
    });

    let message = await response.json();
    console.log(message);
    if(message.success) {
      let events = this.state.events;

      for (let i in events)  {
        if (events[i].event_id === id) {
          events.splice(i, 1);
          break;
        }
      }
      this.setState({ events });
      alert('Event successfully deleted.');

    } else {
      alert('Sorry, but we could not delete the event. Please try again later.');
    }

  }

  render() {
    return (
      <div class="container shop-container">
        <div class="row">
          <h3 class="shop-text">Shop Products</h3>
        </div> {/* end row */}
        {/* begin products being shown */}
        {% for k,v in products.items() %}
          {% if loop.index == 1 or loop.index % 3 == 1 %}
          <div class="row top-margin-lg">
          {% endif %}
            <div class="col-md-4">
              <div class="card">
                <div class="card-img-top">
                  <img src="http://placehold.it/250x250" alt="Placeholder Image" class="product-img">
                </div>
                <div class="card-title">{{ v.title }}</div>
                <div class="card-subtitle">${{ v.price }}</div>
                <div class="card-text">
                  <p>{{ v.desc }}</p>
                </div>
                <button class="btn btn-primary" onclick="console.log({{ k }})">Add to Cart</button>
              </div>{/* end card */}
            </div>{/* end col 12 for card */}
          {% if loop.index % 3 == 0 or loop.length == loop.index %}
          </div>{/* end row for card */}
          {% endif %}
        {% endfor %}
        {/* end products being shown */}
      </div> {/* end end shop container */}
    );
  }
}

export default Shop;
