import React from "react";
// import PropTypes from 'prop-types';

import { TeamFormRegistrationContainer } from "./style";

class TeamFormRegistration extends React.Component {
  render() {
    const { teamImage, setImage, teamName, setName } = this.props;
    const idForm = "file-input-logo-team";
    return (
      <TeamFormRegistrationContainer>
        <div className="section">
          Nama Tim
          <input
            className="long"
            value={teamName}
            onChange={setName}
            autoComplete="off"
          />
        </div>
        {setImage ? (
          <div className="section">
            Logo Tim
            <div className="logo-tim d-flex flex-wrap align-items-center">
              <input
                className="logo-preview"
                disabled
                value={teamImage && teamImage.name}
              />
              <label htmlFor={idForm} className="labelfile">
                Unggah
                <input
                  type="file"
                  className="hide-input"
                  id={idForm}
                  onChange={setImage}
                  autoComplete="off"
                />
              </label>
            </div>
          </div>
        ) : null}
      </TeamFormRegistrationContainer>
    );
  }
}

TeamFormRegistration.propTypes = {};

export default TeamFormRegistration;
