/* eslint-disable react/destructuring-assignment */
import React from "react";
// import PropTypes from 'prop-types';

import { PersonFormRegistrationContainer, Section } from "./style";

class PersonFormRegistration extends React.Component {
  render() {
    const {
      idCardImage,
      setIdCardImage,
      namaLengkap,
      kontak,
      email,
      nomorTelepon,
      setPersonData
    } = this.props;
    return (
      <PersonFormRegistrationContainer>
        <Section>
          Nama Lengkap
          <input
            className="input-long"
            id="nama-lengkap"
            value={namaLengkap}
            onChange={setPersonData}
          />
        </Section>
        <Section>
          ID Line / Whatsapp
          <input value={kontak} id="kontak" onChange={setPersonData} />
        </Section>
        <Section>
          Email
          <input value={email} id="email" onChange={setPersonData} />
        </Section>
        <Section>
          Nomor Telepon
          <input value={nomorTelepon} id="telepon" onChange={setPersonData} />
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
