import React, { Component } from "react";
import { DateTime } from "luxon";

class Email extends Component {
  state = {
    form: {
      to: "",
      subject: "",
      body: "",
      datetime: ""
    }
  };
  componentDidMount() {
    const { fetchEmails } = this.props;
    fetchEmails();
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
    const { dispatch, postEmail } = this.props;
    const { form } = this.state;
    const dt = DateTime.local();
    dt.plus({ minutes: 1 });
    const dt_string = dt.toISO();
    const details = {
      to: {
        email_address: form.to
      },
      body: form.body,
      subject: form.subject,
      dt_scheduled: dt_string,
      owner: 1
    };
    console.log("details:", details);
    dispatch(postEmail(details))
  }

  render() {
    const { form } = this.state;
    const { emails } = this.props;
    return (
      <div className="container">
        <h3>Emails</h3>

        <h2 className="subtitle">New Email</h2>

        <div className="field">
          <label className="label">To</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email input"
              value={form.to}
              onChange={e => this.editField("to", e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email input"
              value={form.subject}
              onChange={e => this.editField("subject", e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Textarea"
              value={form.body}
              onChange={e => this.editField("body", e.target.value)}
            />
          </div>
        </div>

        <button className="button is-primary" onClick={() => this.submitForm()}>
          Schedule Email
        </button>

        <hr />
        {emails.map((email, index) => {
          return (
            <div key={index} className={"box"}>
              <div>{email.to.email_address}</div>
              <div>{email.subject}</div>
              <div>{email.body}</div>
              <div>
                {DateTime.fromISO(email.dt_scheduled).toLocaleString(
                  DateTime.DATETIME_FULL
                )}
              </div>
              <span className={"tag is-primary"}>{email.status}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Email;
