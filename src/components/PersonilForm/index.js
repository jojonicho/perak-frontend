import React from "react";
// import PropTypes from "prop-types";

import {
  PersonFormRegistrationContainer,
  Section
} from "../PersonFormRegistration/style";

class PersonilForm extends React.Component {
  render() {
    const { namaPersonil, angkatan, savePlayer, setPersonData } = this.props;
    return (
      <PersonFormRegistrationContainer>
        <Section className="d-flex flex-wrap half-cont">
          <div className="half">
            Nama Personil
            <input
              autoComplete="off"
              id="nama"
              onChange={setPersonData}
              value={namaPersonil}
            />
          </div>
          <div className="half">
            Angkatan
            <input
              autoComplete="off"
              id="angkatan"
              onChange={setPersonData}
              value={angkatan}
            />
          </div>
        </Section>
        <div style={{ height: `${10}px` }}></div>
        {savePlayer ? (
          <Section>
            <button type="button" className="saveb" onClick={savePlayer}>
              Simpan
            </button>
          </Section>
        ) : null}
      </PersonFormRegistrationContainer>
    );
  }
}

// PersonilForm.propTypes = {};

export default PersonilForm;
