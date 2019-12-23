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
          <input className="long" value={teamName} onChange={setName} />
        </div>
        <div className="section">
          Logo Tim
          <div className="logo-tim">
            <div className="logo-preview">
              {teamImage && <img src={URL.createObjectURL(teamImage)} alt="" />}
            </div>
            <label htmlFor={idForm} className="labelfile">
              Choose File
              <input
                type="file"
                className="hide-input"
                id={idForm}
                onChange={setImage}
              />
            </label>
          </div>
        </div>
      </TeamFormRegistrationContainer>
    );
  }
}

TeamFormRegistration.propTypes = {};

export default TeamFormRegistration;
