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

import { setPersonData } from "./actions";

class GameRegistration extends React.Component {
  render() {
    const { props } = this;
    const Game = Games[props.gameId];
    const data = props[props.gameId];
    console.log(data);
    if (props.done) {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-undef
      // alert("Your Team Registered");
      window.location.reload();
    }
    return (
      <HeaderFooter color="green">
        <Fade left>
          <RegistrationContainer>
            <SweetAlert
              show={props.alert || props.done}
              title={props.done ? "You're registered" : props.alert}
              type={props.done ? "success" : "warning"}
              onConfirm={props.stopAlert}
            />
            <Title>REGISTRASI TIM {Game.title}</Title>
            {Game.teamLogo ? (
              <TeamFormRegistration
                teamImage={props.teamImage}
                setImage={props.setTeamImage}
                setName={e => props.setTeamName(e)}
                teamName={props.teamName}
              />
            ) : null}
            {Game.captain ? <h3>Captain</h3> : null}
            {/* <h3>Member</h3> */}
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
                              data.numberPlayer,
                              data.personData,
                              data.showPlayer
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
                        namaLengkap={data.personData[index][0]}
                        setShowPlayer={() =>
                          props.setShowPlayer(
                            props.gameId,
                            index,
                            data.showPlayer,
                            data.personData
                          )
                        }
                        deletePlayer={() =>
                          props.deletePlayer(
                            props.gameId,
                            index,
                            data.numberPlayer,
                            data.personData
                          )
                        }
                      />
                    </Fade>
                  );
                })}
              <TambahButton
                onClick={
                  data.numberPlayer < Game.fixMember + Game.optionalMember
                    ? () =>
                        props.addPlayer(
                          data.numberPlayer,
                          data.personData,
                          data.showPlayer
                        )
                    : null
                }
              >
                <span className="plus">+</span> Tambah ({data.numberPlayer}/
                {Game.fixMember + Game.optionalMember})
              </TambahButton>

              <SubmitButton
                onClick={() =>
                  props.submit(
                    props.personData,
                    props.teamImage,
                    props.teamName
                  )
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
    mariokart: state.gameRegistration.mariokart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPersonData: (e, gameId, index, personData) =>
      dispatch(setPersonData(e, gameId, index, personData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameRegistration);
