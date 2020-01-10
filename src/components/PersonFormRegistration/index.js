/* eslint-disable react/destructuring-assignment */
import React from "react";
// import PropTypes from 'prop-types';

import { PersonFormRegistrationContainer, Section } from "./style";

class PersonFormRegistration extends React.Component {
  render() {
    const {
      // idCardImage,
      // setIdCardImage,
      namaLengkap,
      kontak,
      email,
      nomorTelepon,
      setPersonData,
      id,
      foto,
      setFoto,
      savePlayer
    } = this.props;
    const idForm = `file-in-player${id}`;
    return (
      <PersonFormRegistrationContainer>
        <Section>
          Nama Lengkap
          <input
            className="input-long"
            id="nama-lengkap"
            value={namaLengkap}
            onChange={setPersonData}
            autoComplete="off"
          />
        </Section>
        <Section className="d-flex flex-wrap half-cont">
          <div className="half">
            ID Line
            <input
              value={kontak}
              id="kontak"
              onChange={setPersonData}
              autoComplete="off"
            />
          </div>
          <div className="half">
            Nomor Telepon
            <input
              value={nomorTelepon}
              id="telepon"
              onChange={setPersonData}
              autoComplete="off"
            />
          </div>
        </Section>
        <Section>
          Email
          <input
            value={email}
            id="email"
            onChange={setPersonData}
            autoComplete="off"
          />
        </Section>
        <Section></Section>
        {setFoto ? (
          <Section>
            Pas Foto
            <div className="d-flex flex-wrap align-items-center">
              <input
                className="foto-preview"
                disabled
                value={foto && foto.name}
              />
              <label htmlFor={`foto-${idForm}`} className="labelfile">
                Unggah
                <input
                  type="file"
                  className="hide-input"
                  id={`foto-${idForm}`}
                  onChange={setFoto}
                  autoComplete="off"
                />
              </label>
            </div>
          </Section>
        ) : null}
        {savePlayer ? (
          <Section>
            <button type="button" className="saveb" onClick={savePlayer}>
              Save
            </button>
          </Section>
        ) : null}
      </PersonFormRegistrationContainer>
    );
  }
}

PersonFormRegistration.propTypes = {};

export default PersonFormRegistration;
