/* eslint-disable react/destructuring-assignment */
import React from "react";
// import PropTypes from 'prop-types';

import { PersonFormRegistrationContainer, Section } from "./style";

class PersonFormRegistration extends React.Component {
  render() {
    const { idCardImage, setIdCardImage } = this.props;
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
            {idCardImage && (
              <img src={URL.createObjectURL(idCardImage)} alt="" />
            )}
          </div>
          <input type="file" onChange={setIdCardImage} />
        </Section>
      </PersonFormRegistrationContainer>
    );
  }
}

PersonFormRegistration.propTypes = {};

export default PersonFormRegistration;
