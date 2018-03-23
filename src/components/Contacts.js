import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contacts extends Component {

  componentDidMount() {
    const { requestContacts } = this.props;
    requestContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className="container">
        <h3 className="title">Contacts</h3>
        <Link to="/contacts/new">New Contact</Link>
        <hr />
        {contacts.map((contact, index) => {
          return  (
            <Link to={`contacts/${contact.id}`} key={index} className={"box"}>
              <div>{contact.first_name} {contact.last_name}</div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Contacts;
