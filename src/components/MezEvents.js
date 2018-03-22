import React, { Component } from "react";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";

class MezEvents extends Component {
  
  componentDidMount() {
    const { requestEvents } = this.props;
    requestEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <div className="container">
        <h3 className="title">Events</h3>
        {events.map((event, index) => {
          return (
            <Link to={`events/${event.id}`} key={index} className={"box"}>
              <div>{event.title}</div>
              <div>{event.occurrences.repeat}</div>
              <div>
                {DateTime.fromISO(event.occurrences[0].start).toLocaleString(DateTime.DATETIME_FULL)}
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default MezEvents;
