import React, { Component } from "react";
import _ from "lodash";

import { formatDateTime } from "../utils/time";

import style from "./contact.scss";

class Contact extends Component {

  componentDidMount() {
    const { requestContact, match } = this.props;
    const id = _.get(match, "params.id")
    if (id) {
      requestContact({ id })
    }
  }

  render() {
    const { contact } = this.props;
    const datetime = contact.birthday && _.get(contact.birthday, 'start');
    const formattedBirthday = datetime && formatDateTime({ datetime });
    return (
      <div className="container">
        <div className={`box ${style.contact}`}>
          <h2 className="title">{contact.first_name} {contact.last_name}</h2>
          <ul>
            <li className={style.contactItem}>
              <div><strong>EMAIL</strong></div>
              <div>{contact.email_address}</div>
            </li>
            <li className={style.contactItem}>
              <div><strong>BIRTHDAY</strong></div>
              <div>{formattedBirthday}</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;