import React, { Component } from "react";
import _ from "lodash";

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
    return (
      <div className="container">
        <h3>Event</h3>
        <hr />
        <h2>{event.title}</h2>
      </div>
    );
  }
}

export default MezEvent;
