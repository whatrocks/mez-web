import React, { Component } from "react";
import _ from "lodash";

import { invertedRules, repeatColors } from "../utils/events";
import { formatDateTime } from "../utils/time";

import style from "./MezEvent.scss";

class MezEvent extends Component {

  componentDidMount() {
    const { requestEvent, match } = this.props;
    const id = _.get(match, "params.id")
    if (id) {
      requestEvent({ id })
    }
  }

  render() {
    const { event } = this.props;
    const occurrences = _.get(event, 'occurrences', []);
    const nextEvent = occurrences[0];
    const pattern = _.get(nextEvent, 'repeat', '');
    const repeat = invertedRules[pattern];
    const color = repeatColors[repeat];
    return (
      <div className="container">
        <div className={`box ${style.event}`}>
          <h2 className="title">{event.title}</h2>
          <span className={`tag is-primary ${style.repeatTag} ${color}`}>{repeat}</span>
          <ul>
            <li className={style.eventItem}>
              <div><strong>START</strong></div>
              <div>{nextEvent && nextEvent.start && formatDateTime({ datetime: nextEvent.start })}</div>
            </li>
            <li className={style.eventItem}>
              <div><strong>END</strong></div>
              <div>{nextEvent && nextEvent.end && formatDateTime({ datetime: nextEvent.end })}</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MezEvent;
