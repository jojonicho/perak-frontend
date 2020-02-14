import React from "react";
// import PropTypes from "prop-types";

import {
  PersonFormRegistrationContainer,
  Section
} from "../PersonFormRegistration/style";

class BirBintangForm extends React.Component {
  render() {
    const { namaPanggung, jenisPenampilan, contact, setData } = this.props;
    return (
      <PersonFormRegistrationContainer>
        <Section>
          Nama Panggung
          <input
            className="input-long"
            id="nama-panggung"
            value={namaPanggung}
            onChange={setData}
            autoComplete="off"
          />
        </Section>
        <Section>
          Jenis Penampilan
          <input
            className="input-long"
            id="jenis-penampilan"
            value={jenisPenampilan}
            onChange={setData}
            autoComplete="off"
          />
        </Section>
        <Section>
          ID Line / Whatsapp (Contact Person)
          <input
            className="input-long"
            id="id-line"
            value={contact}
            onChange={setData}
            autoComplete="off"
          />
        </Section>
        <Section></Section>
      </PersonFormRegistrationContainer>
    );
  }
}

// BirBintangForm.propTypes = {};

export default BirBintangForm;
