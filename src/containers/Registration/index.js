import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import { RegistrationContainer, Title } from "./style";
import PersonFormRegistration from "../../components/PersonFormRegistration";
import TeamFormRegistration from "../../components/TeamFormRegistration";

import {
  setTeamImage,
  addPlayer,
  setIdCardImage,
  setPersonData
} from "./actions";

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
          idCardImage={props.personData[0][4]}
          setIdCardImage={e => props.setIdCardImage(e, 0, props.personData)}
          namaLengkap={props.personData[0][0]}
          kontak={props.personData[0][1]}
          email={props.personData[0][2]}
          nomorTelepon={props.personData[0][3]}
          setPersonData={e => props.setPersonData(e, 0, props.personData)}
        />
        <h3>Player</h3>

        {props.numberPlayer.map(function x(a, index) {
          return (
            <PersonFormRegistration
              id={index + 1}
              idCardImage={props.personData[index + 1][4]}
              setIdCardImage={e =>
                props.setIdCardImage(e, index + 1, props.personData)
              }
              namaLengkap={props.personData[index + 1][0]}
              kontak={props.personData[index + 1][1]}
              email={props.personData[index + 1][2]}
              nomorTelepon={props.personData[index + 1][3]}
              setPersonData={e =>
                props.setPersonData(e, index + 1, props.personData)
              }
            />
          );
        })}

        <button
          type="button"
          onClick={() => props.addPlayer(props.numberPlayer, props.personData)}
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
    personData: state.registration.personData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTeamImage: e => dispatch(setTeamImage(e)),
    setIdCardImage: (e, index, personData) =>
      dispatch(setIdCardImage(e, index, personData)),
    setPersonData: (e, index, personData) =>
      dispatch(setPersonData(e, index, personData)),
    addPlayer: (numberPlayer, idCardImage) =>
      dispatch(addPlayer(numberPlayer, idCardImage))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
