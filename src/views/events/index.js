import React, { Component } from 'react';
import './index.css';
import DateForm from '../../components/dateForm';
import EventTable from '../../components/eventTable';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
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
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <h1>Find Events</h1>
            <DateForm getEvents={this.getEvents}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <EventTable events={this.state.events} removeEvent={this.removeEvent}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
