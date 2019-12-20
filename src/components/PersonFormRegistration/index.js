/* eslint-disable react/destructuring-assignment */
import React from "react";
// import PropTypes from 'prop-types';

import { PersonFormRegistrationContainer, Section } from "./style";

class PersonFormRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  render() {
    return (
      <PersonFormRegistrationContainer>
        <Section>
          Nama Lengkap
          <input className="input-long" />
        </Section>
        <Section>
          ID Line / Whatsapp
          <input />
        </Section>
        <Section>
          Email
          <input />
        </Section>
        <Section>
          Nomor Telepon
          <input />
        </Section>
        <Section>
          Kartu Identitas
          <span className="input-info">KTM / KTP / Paspor</span>
          <div className="idcard-preview">
            <img src={this.state.file} alt="idcard-preview" />
          </div>
          <input type="file" onChange={this.handleChange} />
        </Section>
      </PersonFormRegistrationContainer>
    );
  }
}

PersonFormRegistration.propTypes = {};

export default PersonFormRegistration;
