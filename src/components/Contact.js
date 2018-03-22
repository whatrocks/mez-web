import React, { Component } from "react";
import _ from "lodash";

import s from "./style.scss";

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
    return (
      <div className="container">
        <h3>Contact</h3>
        <h2 className={s.contact}>{contact.first_name} {contact.last_name}</h2>
      </div>
    );
  }
}

export default Contact;