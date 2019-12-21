import React from "react";
// import PropTypes from 'prop-types';

import { TeamFormRegistrationContainer } from "./style";

class TeamFormRegistration extends React.Component {
  render() {
    const { teamImage, setImage, teamName, setName } = this.props;
    return (
      <TeamFormRegistrationContainer>
        <div className="section">
          Nama Tim
          <input className="long" value={teamName} onChange={setName} />
        </div>
        <div className="section">
          Logo Tim
          <div className="logo-preview">
            {teamImage && <img src={URL.createObjectURL(teamImage)} alt="" />}
          </div>
          <input type="file" onChange={setImage} />
        </div>
      </TeamFormRegistrationContainer>
    );
  }
}

TeamFormRegistration.propTypes = {};

export default TeamFormRegistration;
