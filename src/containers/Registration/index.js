import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import { RegistrationContainer, Title } from "./style";
import PersonFormRegistration from "../../components/PersonFormRegistration";
import TeamFormRegistration from "../../components/TeamFormRegistration";

import { setTeamImage, addPlayer } from "./actions";

class Registration extends React.Component {
  render() {
    const { props } = this;
    console.log(props.numberPlayer);
    return (
      <RegistrationContainer>
        <Title>FUTSAL REGRISTRATION</Title>
        <TeamFormRegistration
          teamImage={props.teamImage}
          setImage={props.setTeamImage}
        />
        <h3>Manager</h3>
        <PersonFormRegistration />
        <h3>Player</h3>
        {props.numberPlayer.map(() => (
          <PersonFormRegistration />
        ))}
        <button
          type="button"
          onClick={() => props.addPlayer(props.numberPlayer)}
        >
          Tambah
        </button>
      </RegistrationContainer>
    );
  }
}

Registration.propTypes = {};

function mapStateToProps(state) {
  return {
    teamImage: state.registration.teamImage,
    numberPlayer: state.registration.numberPlayer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTeamImage: e => dispatch(setTeamImage(e)),
    addPlayer: numberPlayer => dispatch(addPlayer(numberPlayer))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
