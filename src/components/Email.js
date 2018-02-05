import React, { Component } from "react";
import { DateTime } from "luxon";

class Email extends Component {
  componentDidMount() {
    const { fetchEmails } = this.props;
    fetchEmails();
  }

  render() {
    const { emails } = this.props;
    return (
      <div className="container">
        <h3>Emails</h3>
        {emails.map((email, index) => {
          return (
            <div
              key={index}
              className={"box"}
            >
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
