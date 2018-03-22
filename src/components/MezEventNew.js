import React, { Component } from "react";
import { DateTime } from "luxon";

class MezEventNew extends Component {
  
  state = {
    form: {
      title: "",
      start: "",
      end: "",
      repeat: "RRULE:FREQ=YEARLY"
    }
  };

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
    const { onSubmitEvent, userId } = this.props;
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
      owner: userId
    };
    onSubmitEvent(details);
  }

  render() {
    const { form } = this.state;
    return (
      <div className="container">
        <h3 className="title">New Event</h3>

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

      </div>
    );
  }
}

export default MezEventNew;
