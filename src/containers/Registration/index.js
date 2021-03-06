import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import SweetAlert from "sweetalert2-react";
import hapus from "../../asset/hapus.svg";

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
import LoadingRegis from "../../components/LoadingRegis";
import HeaderFooter from "../../components/HeaderFooter";

import {
  // setIdCardImage,
  setTeamImage,
  addPlayer,
  setPersonData,
  submit,
  setTeamName,
  setShowPlayer,
  deletePlayer,
  setFoto,
  stopAlert,
  savePlayer
} from "./actions";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      reload: false
    };
    this.setReload = this.setReload.bind(this);
  }

  setReload() {
    this.setState({ reload: true });
  }

  render() {
    const { props, state, setReload } = this;
    if (state.reload) {
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
              onConfirm={props.done ? setReload : props.stopAlert}
            />
            <Title>REGISTRASI TIM FUTSAL</Title>
            <TeamFormRegistration
              teamImage={props.teamImage}
              setImage={props.setTeamImage}
              setName={e => props.setTeamName(e)}
              teamName={props.teamName}
            />
            <div className="garisnya" />

            <h3 className="manager">Manager</h3>
            <p className="kominfo mb-3">*data manager wajib diisi lengkap </p>
            <LeftDiv>
              <PersonFormRegistration
                id="0"
                idCardImage={props.personData[0][4]}
                foto={props.personData[0][5]}
                // setIdCardImage={e =>
                //   props.setIdCardImage(e, 0, props.personData)
                // }
                // setFoto={e => props.setFoto(e, 0, props.personData)}
                namaLengkap={props.personData[0][0]}
                kontak={props.personData[0][1]}
                email={props.personData[0][2]}
                nomorTelepon={props.personData[0][3]}
                setPersonData={e => props.setPersonData(e, 0, props.personData)}
              />
            </LeftDiv>
            <div className="garisnya" />
            <h3 className="pemain">
              Pemain ({props.numberPlayer.length} Orang)
            </h3>
            <p className="kominfo mb-3">
              *minimum pemain 10 orang dan maksimal 15 orang
            </p>
            <Forms>
              {/* <MinimizedPersonForm
              namaLengkap="Bambang Yakobus"
              kontak="bambangYakobus"
              email="bambang@gmail.com"
              nomorTelepon="012d031023"
              setShowPlayer={() =>
                props.setShowPlayer(0 + 1, props.showPlayer, props.personData)
              }
              deletePlayer={() =>
                props.deletePlayer(props.numberPlayer, props.personData, 0 + 1)
              }
            /> */}
              {props.numberPlayer.map(function x(a, index) {
                return props.showForm && index + 1 === props.showPlayer ? (
                  <LeftDiv>
                    <button
                      type="button"
                      className="x-buttona"
                      onClick={() =>
                        props.deletePlayer(
                          props.numberPlayer,
                          props.personData,
                          props.showPlayer
                        )
                      }
                    >
                      <img className="trash" src={hapus} alt="hapus" />
                      Hapus Pemain
                    </button>

                    <Fade
                      distance="10%"
                      duration={1000}
                      collapse
                      top
                      className="anjay"
                    >
                      <PersonFormRegistration
                        id={index + 1}
                        idCardImage={props.personData[index + 1][4]}
                        foto={props.personData[index + 1][5]}
                        // setIdCardImage={e =>
                        //   props.setIdCardImage(e, index + 1, props.personData)
                        // }
                        setFoto={e =>
                          props.setFoto(e, index + 1, props.personData)
                        }
                        namaLengkap={props.personData[index + 1][0]}
                        kontak={props.personData[index + 1][1]}
                        email={props.personData[index + 1][2]}
                        nomorTelepon={props.personData[index + 1][3]}
                        setPersonData={e =>
                          props.setPersonData(e, index + 1, props.personData)
                        }
                        savePlayer={() =>
                          props.savePlayer(props.personData, index + 1)
                        }
                      />
                    </Fade>
                  </LeftDiv>
                ) : (
                  <Fade when cascade>
                    <MinimizedPersonForm
                      namaLengkap={props.personData[index + 1][0]}
                      kontak={props.personData[index + 1][1]}
                      email={props.personData[index + 1][2]}
                      nomorTelepon={props.personData[index + 1][3]}
                      setShowPlayer={() =>
                        props.setShowPlayer(
                          index + 1,
                          props.showPlayer,
                          props.personData
                        )
                      }
                      deletePlayer={() =>
                        props.deletePlayer(
                          props.numberPlayer,
                          props.personData,
                          index + 1
                        )
                      }
                    />
                  </Fade>
                );
              })}
              <div className="garisnya" />
              {props.numberPlayer && props.numberPlayer.length < 15 ? (
                <TambahButton
                  onClick={
                    props.numberPlayer.length < 15
                      ? () =>
                          props.addPlayer(
                            props.numberPlayer,
                            props.personData,
                            props.showPlayer
                          )
                      : null
                  }
                >
                  <span className="plus">+</span> Pemain
                </TambahButton>
              ) : null}

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

Registration.propTypes = {};

function mapStateToProps(state) {
  return {
    teamImage: state.registration.teamImage,
    numberPlayer: state.registration.numberPlayer,
    personData: state.registration.personData,
    showPlayer: state.registration.showPlayer,
    teamName: state.registration.teamName,
    loading: state.registration.loading,
    loadNow: state.registration.loadNow,
    loadBase: state.registration.loadBase,
    done: state.registration.done,
    alert: state.registration.alert,
    showForm: state.registration.showForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTeamImage: e => dispatch(setTeamImage(e)),
    // setIdCardImage: (e, index, personData) =>
    //   dispatch(setIdCardImage(e, index, personData)),
    setFoto: (e, index, personData) => dispatch(setFoto(e, index, personData)),
    setPersonData: (e, index, personData) =>
      dispatch(setPersonData(e, index, personData)),
    addPlayer: (numberPlayer, personData, nowIndex) =>
      dispatch(addPlayer(numberPlayer, personData, nowIndex)),
    submit: (personData, teamImage, teamName) =>
      dispatch(submit(personData, teamImage, teamName)),
    setTeamName: e => dispatch(setTeamName(e)),
    setShowPlayer: (index, nowIndex, personData) =>
      dispatch(setShowPlayer(index, nowIndex, personData)),
    deletePlayer: (numberPlayer, personData, index) =>
      dispatch(deletePlayer(numberPlayer, personData, index)),
    stopAlert: () => dispatch(stopAlert()),
    savePlayer: (personData, nowIndex) =>
      dispatch(savePlayer(personData, nowIndex))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
