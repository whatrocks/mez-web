import React, { Component } from "react";
import { DateTime } from "luxon"; 

class Contact extends Component {

  state = {
    form: {
      first_name: "",
      last_name: "",
      email_address: "",
      year: "",
      month: "",
      day: ""
    }
  };

  componentDidMount() {
    const { requestContacts } = this.props;
    requestContacts();
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
    const { onSubmitContact } = this.props;
    const { form } = this.state;
    const birthday = `${form.year}-${form.month}-${form.day}`;
    const details = {
      first_name: form.first_name,
      last_name: form.last_name,
      email_address: form.email_address,
      dt_birthday: birthday,
      owner: 1
    };
    onSubmitContact(details);
  }

  render() {
    const { contacts } = this.props;
    const { form } = this.state;
    return (
      <div className="container">
        <h3>Contacts</h3>
        <h2 className="subtitle">New Contact</h2>

        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Alex"
              value={form.first_name}
              onChange={e => this.editField("first_name", e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Hamilton"
              value={form.last_name}
              onChange={e => this.editField("last_name", e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email address</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="alex@treasury.gov"
              value={form.email_address}
              onChange={e => this.editField("email_address", e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Year</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="1989"
              value={form.year}
              onChange={e => this.editField("year", e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Month</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="May"
              value={form.month}
              onChange={e => this.editField("month", e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Day</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="27"
              value={form.day}
              onChange={e => this.editField("day", e.target.value)}
            />
          </div>
        </div>

        <button className="button is-primary" onClick={() => this.submitForm()}>
          Add Contact
        </button>
        <hr />
        {contacts.map((contact, index) => {
          return  (
            <div key={index} className={"box"}>
              <div>{contact.first_name}</div>
              <div>{contact.last_name}</div>
              <div>{contact.dt_birthday}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Contact;
