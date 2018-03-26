import React, { Component } from "react";
import { DateTime } from "luxon";

import TextInput from "./Form/TextInput";
import SelectInput from "./Form/SelectInput";
import { RRULES } from "../utils/events";

class MezEventNew extends Component {
  state = {
    form: {
      title: "",
      start: "",
      end: "",
      repeat: ""
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
    const repeatValue = RRULES[form.repeat];
    const details = {
      occurrence: {
        start: dt_string,
        end: send_dt_string,
        repeat: repeatValue
      },
      title: form.title,
      owner: userId
    };
    onSubmitEvent(details);
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">New Event</h3>
        <TextInput
          name="title"
          label="Title"
          error=""
          type="text"
          onChange={this.editField.bind(this)}
        />
        <SelectInput
          label="Repeat"
          name="repeat"
          error=""
          options={Object.keys(RRULES)}
          onChange={this.editField.bind(this)}
        />
        <button className="button is-primary" onClick={() => this.submitForm()}>
          Create New Event
        </button>
      </div>
    );
  }
}

export default MezEventNew;
