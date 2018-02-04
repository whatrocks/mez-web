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
      <div>
        <h3>Emails</h3>
        {emails.map((email, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid grey",
                margin: "1rem",
                padding: "1rem"
              }}
            >
              <div>{email.to.email_address}</div>
              <div>{email.subject}</div>
              <div>{email.body}</div>
              <div>
                {DateTime.fromISO(email.dt_scheduled).toLocaleString(
                  DateTime.DATETIME_FULL
                )}
              </div>
              <div>{email.status}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Email;
