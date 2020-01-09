import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import SweetAlert from "sweetalert2-react";

// import swal from 'sweetalert2';

import {
  RegistrationContainer,
  Title,
  Forms,
  TambahButton,
  SubmitButton,
  LeftDiv
} from "../Registration/style";
import PersonFormRegistration from "../../components/PersonFormRegistration";
import TeamFormRegistration from "../../components/TeamFormRegistration";
import MinimizedPersonForm from "../../components/MinimizedPersonForm";
import LoadingRegis from "../../components/LoadingRegis";
import HeaderFooter from "../../components/HeaderFooter";
import { Games } from "./constants";

import {
  setPersonData,
  addPlayer,
  stopAlert,
  deletePlayer,
  setShowPlayer,
  setTeamName,
  submit
} from "./actions";

class GameRegistration extends React.Component {
  render() {
    const { props } = this;
    const Game = Games[props.gameId];
    const data = props[props.gameId];
    console.log(props);
    if (props.done) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-undef
      // alert("Your Team Registered");
      window.location.reload();
    }
    return (
      <HeaderFooter color="dark">
        <Fade>
          <RegistrationContainer>
            <SweetAlert
              show={props.alert || props.done}
              title={props.done ? "You're registered" : props.alert}
              type={props.done ? "success" : "warning"}
              onConfirm={props.stopAlert}
            />
            <Title>REGISTRASI TIM {Game.title}</Title>
            {Game.captain ? (
              <TeamFormRegistration
                setName={e => props.setTeamName(e, props.gameId)}
                teamName={Game.namaTim}
              />
            ) : null}
            <h3>Pemain</h3>
            {Game.captain ? <h5>*orang pertama adalah kapten tim</h5> : null}
            <Forms>
              {data.personData &&
                data.personData.map(function x(a, index) {
                  return index === data.showPlayer ? (
                    <LeftDiv>
                      <Fade
                        distance="10%"
                        duration={1000}
                        collapse
                        top
                        className="anjay"
                      >
                        <PersonFormRegistration
                          id={index}
                          namaLengkap={data.personData[index][0]}
                          kontak={data.personData[index][1]}
                          email={data.personData[index][2]}
                          nomorTelepon={data.personData[index][3]}
                          setPersonData={e =>
                            props.setPersonData(
                              e,
                              props.gameId,
                              index,
                              data.personData
                            )
                          }
                        />
                      </Fade>
                      {index === 0 ? null : (
                        <button
                          type="button"
                          className="x-buttona"
                          onClick={() =>
                            props.deletePlayer(
                              props.gameId,
                              data.personData,
                              index
                            )
                          }
                        >
                          X
                        </button>
                      )}
                    </LeftDiv>
                  ) : (
                    <Fade when cascade>
                      <MinimizedPersonForm
                        setShowPlayer={() =>
                          props.setShowPlayer(
                            props.gameId,
                            index,
                            data.showPlayer,
                            data.personData
                          )
                        }
                        namaLengkap={data.personData[index][0]}
                        kontak={data.personData[index][1]}
                        email={data.personData[index][2]}
                        nomorTelepon={data.personData[index][3]}
                        deletePlayer={() =>
                          props.deletePlayer(
                            props.gameId,
                            data.personData,
                            index
                          )
                        }
                      />
                    </Fade>
                  );
                })}
              {data.numberPlayer < Game.fixMember + Game.optionalMember ? (
                <TambahButton
                  onClick={() =>
                    props.addPlayer(
                      props.gameId,
                      data.personData,
                      data.showPlayer
                    )
                  }
                >
                  <span className="plus">+</span> Tambah ({data.numberPlayer}/
                  {Game.fixMember + Game.optionalMember})
                </TambahButton>
              ) : null}
              <SubmitButton
                onClick={() =>
                  props.submit(props.gameId, data.personData, data.namaTim)
                }
              >
                DAFTAR
              </SubmitButton>
            </Forms>
          </RegistrationContainer>
        </Fade>
        {props.loading ? (
          <LoadingRegis now={props.loadNow} base={props.loadBase} />
        ) : null}
      </HeaderFooter>
    );
  }
}

GameRegistration.propTypes = {};

function mapStateToProps(state) {
  return {
    dota: state.gameRegistration.dota,
    csgo: state.gameRegistration.csgo,
    mlbb: state.gameRegistration.mlbb,
    codenames: state.gameRegistration.codenames,
    catur: state.gameRegistration.catur,
    fifa: state.gameRegistration.fifa,
    ssbu: state.gameRegistration.ssbu,
    mariokart: state.gameRegistration.mariokart,
    alert: state.gameRegistration.alert,
    done: state.gameRegistration.done,
    loading: state.gameRegistration.loading,
    loadNow: state.gameRegistration.loadNow,
    loadBase: state.gameRegistration.loadBase
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stopAlert: () => dispatch(stopAlert()),
    setPersonData: (e, gameId, index, personData) =>
      dispatch(setPersonData(e, gameId, index, personData)),
    addPlayer: (gameId, personData, nowIndex) =>
      dispatch(addPlayer(gameId, personData, nowIndex)),
    deletePlayer: (gameId, numberPlayer, personData, index) =>
      dispatch(deletePlayer(gameId, numberPlayer, personData, index)),
    setShowPlayer: (gameId, index, nowIndex, personData) =>
      dispatch(setShowPlayer(gameId, index, nowIndex, personData)),
    setTeamName: (e, teamId) => dispatch(setTeamName(e, teamId)),
    submit: (gameId, personData, teamName) =>
      dispatch(submit(gameId, personData, teamName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameRegistration);
