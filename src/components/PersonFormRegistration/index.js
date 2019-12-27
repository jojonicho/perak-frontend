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
      setPersonData,
      id,
      foto,
      setFoto
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
          />
        </Section>
        {setFoto ? (
          <Section>
            Pas Foto
            <div className="foto-preview">
              {foto && <img src={URL.createObjectURL(foto)} alt="" />}
            </div>
            <label htmlFor={`foto-${idForm}`} className="labelfile">
              Choose File
              <input
                type="file"
                className="hide-input"
                id={`foto-${idForm}`}
                onChange={setFoto}
              />
            </label>
          </Section>
        ) : null}
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
          <label htmlFor={idForm} className="labelfile">
            Choose File
            <input
              type="file"
              className="hide-input"
              id={idForm}
              onChange={setIdCardImage}
            />
          </label>
        </Section>
      </PersonFormRegistrationContainer>
    );
  }
}

PersonFormRegistration.propTypes = {};

export default PersonFormRegistration;
