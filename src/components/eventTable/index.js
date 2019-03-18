import React, { Component } from 'react';
import './index.css';
import EventItem from '../eventItem';

class EventTable extends Component {
  render() {
    return (
      <table id="eventTable" className="table table-light">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th className="notes">Notes</th>
            <th>Delete Event</th>
          </tr>
        </thead>
        <tbody>
          {this.props.events[0] &&
            this.props.events.map( item =>
              <EventItem event={item} key={item.event_id} removeEvent={this.props.removeEvent}/>
            )
          }
        </tbody>
      </table>
    );
  }
}

export default EventTable;
