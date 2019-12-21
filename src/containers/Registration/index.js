import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import {
  RegistrationContainer,
  Title,
  Forms,
  TambahButton,
  SubmitButton,
  LeftDiv
} from "./style";
import PersonFormRegistration from "../../components/PersonFormRegistration";
import TeamFormRegistration from "../../components/TeamFormRegistration";
import MinimizedPersonForm from "../../components/MinimizedPersonForm";

import {
  setTeamImage,
  addPlayer,
  setIdCardImage,
  setPersonData,
  submit,
  setTeamName,
  setShowPlayer
} from "./actions";

class Registration extends React.Component {
  render() {
    const { props } = this;
    return (
      <RegistrationContainer>
        <Title>FUTSAL REGISTRATION</Title>
        <TeamFormRegistration
          teamImage={props.teamImage}
          setImage={props.setTeamImage}
          setName={e => props.setTeamName(e)}
          teamName={props.teamName}
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
        <Forms>
          {props.numberPlayer.map(function x(a, index) {
            console.log(props.showPlayer);
            return index + 1 === props.showPlayer ? (
              <LeftDiv>
                <Fade top distance="10%">
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
                </Fade>
              </LeftDiv>
            ) : (
              <Fade when cascade>
                <MinimizedPersonForm
                  namaLengkap={props.personData[index + 1][0]}
                  setShowPlayer={() => props.setShowPlayer(index + 1)}
                />
              </Fade>
            );
          })}
          <TambahButton
            type="button"
            onClick={() =>
              props.addPlayer(props.numberPlayer, props.personData)
            }
          >
            <span className="plus">+</span> Tambah
          </TambahButton>

          <SubmitButton
            type="button"
            onClick={() =>
              props.submit(props.personData, props.teamImage, props.teamName)
            }
          >
            SUBMIT
          </SubmitButton>
        </Forms>
      </RegistrationContainer>
    );
  }
}

Registration.propTypes = {};

function mapStateToProps(state) {
  return {
    teamImage: state.registration.teamImage,
    numberPlayer: state.registration.numberPlayer,
    personData: state.registration.personData,
    showPlayer: state.registration.showPlayer,
    teamName: state.registration.teamName
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
      dispatch(addPlayer(numberPlayer, idCardImage)),
    submit: (personData, teamImage, teamName) =>
      dispatch(submit(personData, teamImage, teamName)),
    setTeamName: e => dispatch(setTeamName(e)),
    setShowPlayer: index => dispatch(setShowPlayer(index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
