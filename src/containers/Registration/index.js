import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import { RegistrationContainer, Title } from "./style";
import PersonFormRegistration from "../../components/PersonFormRegistration";
import TeamFormRegistration from "../../components/TeamFormRegistration";

import { setTeamImage, addPlayer, setIdCardImage } from "./actions";

class Registration extends React.Component {
  render() {
    const { props } = this;
    return (
      <RegistrationContainer>
        <Title>FUTSAL REGRISTRATION</Title>
        <TeamFormRegistration
          teamImage={props.teamImage}
          setImage={props.setTeamImage}
        />
        <h3>Manager</h3>
        <PersonFormRegistration
          id="0"
          idCardImage={props.idCardImage[0]}
          setIdCardImage={e => props.setIdCardImage(e, 0, props.idCardImage)}
        />
        <h3>Player</h3>

        {props.numberPlayer.map(function x(a, index) {
          return (
            <PersonFormRegistration
              id={index + 1}
              idCardImage={props.idCardImage[index + 1]}
              setIdCardImage={e =>
                props.setIdCardImage(e, index + 1, props.idCardImage)
              }
            />
          );
        })}

        <button
          type="button"
          onClick={() => props.addPlayer(props.numberPlayer, props.idCardImage)}
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
    numberPlayer: state.registration.numberPlayer,
    idCardImage: state.registration.idCardImage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTeamImage: e => dispatch(setTeamImage(e)),
    setIdCardImage: (e, index, idCardImage) =>
      dispatch(setIdCardImage(e, index, idCardImage)),
    addPlayer: (numberPlayer, idCardImage) =>
      dispatch(addPlayer(numberPlayer, idCardImage))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
