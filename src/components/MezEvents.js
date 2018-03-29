import React, { Component } from "react";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import _ from "lodash";

import { invertedRules, repeatColors } from "../utils/events";

import style from "./MezEvent.scss";

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
        <Link to="/events/new">New Event</Link>
        <hr />
        {events.map((event, index) => {
          const occurrences = _.get(event, 'occurrences', []);
          const nextEvent = occurrences[0];
          const pattern = _.get(nextEvent, 'repeat', '');
          const repeat = invertedRules[pattern];
          const color = repeatColors[repeat];          
          return (
            <Link to={`events/${event.id}`} key={index} className={"box"}>
              <div>{event.title}</div>
              <span className={`tag is-primary ${style.repeatTag} ${color}`}>{repeat}</span>
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
