import React, { Component } from "react";
import { DateTime } from "luxon";

class MezEvent extends Component {
  
  state = {
    form: {
      title: "",
      start: "",
      end: "",
      repeat: "RRULE:FREQ=YEARLY"
    }
  };

  componentDidMount() {
    const { requestEvents } = this.props;
    requestEvents();
  }

  editField(field, value) {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [field]: value
      }
    });
  }

  submitForm() {
    const { onSubmitEvent } = this.props;
    const { form } = this.state;
    const dt = DateTime.local();
    const dt_string = dt.toISO();
    const send_dt = dt.plus({ years: 3 });
    const send_dt_string = send_dt.toISO();
    const details = {
      occurrence: {
        start: dt_string,
        end: send_dt_string,
        repeat: form.repeat
      },
      title: form.title,
      owner: 1
    };
    onSubmitEvent(details);
  }

  render() {
    const { form } = this.state;
    const { events } = this.props;
    return (
      <div className="container">
        <h3>Events</h3>

        <h2 className="subtitle">New Event</h2>

        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Event title"
              value={form.to}
              onChange={e => this.editField("title", e.target.value)}
            />
          </div>
        </div>

        <button className="button is-primary" onClick={() => this.submitForm()}>
          Create New Event
        </button>

        <hr />
        {events.map((event, index) => {
          return (
            <div key={index} className={"box"}>
              <div>{event.title}</div>
              <div>{event.occurrences.repeat}</div>
              <div>
                {DateTime.fromISO(event.occurrences[0].start).toLocaleString(DateTime.DATETIME_FULL)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MezEvent;
