import React, { Component } from "react";

class Contact extends Component {

  componentDidMount() {
    const { requestContacts } = this.props;
    requestContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <div className="container">
        <h3>Contacts</h3>
        <hr />
        {contacts.map((contact, index) => {
          return (
            <div key={index} className={"box"}>
              <div>{contact.first_name}</div>
              <div>{contact.first_name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Contact;
