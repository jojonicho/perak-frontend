import React from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import SweetAlert from "sweetalert2-react";

// import { BirBintangRegistrationContainer } from "./style";
import hapus from "../../asset/hapus.svg";
import {
  RegistrationContainer,
  Title,
  Forms,
  TambahButton,
  SubmitButton,
  LeftDiv
} from "../Registration/style";
import HeaderFooter from "../../components/HeaderFooter";
// import PersonFormRegistration from "../../components/PersonFormRegistration";
import BirBintangForm from "../../components/BirBintangForm";
import MinimizedPersonForm from "../../components/MinimizedPersonForm";
import PersonilForm from "../../components/PersonilForm";

class BirBintangRegistration extends React.Component {
  constructor() {
    super();
    this.state = {
      namaPanggung: "",
      jenisPenampilan: "",
      contact: "",
      isShow: true,
      show: 0,
      players: [["", ""]],
      alertMessage: null
    };
    this.setShowPlayer = this.setShowPlayer.bind(this);
    this.setPersonData = this.setPersonData.bind(this);
    this.simpan = this.simpan.bind(this);
    this.tambah = this.tambah.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.setData = this.setData.bind(this);
    this.daftar = this.daftar.bind(this);
    this.alertMessage = this.alertMessage.bind(this);
  }

  setData(e) {
    const { value, id } = e.target;
    switch (id) {
      case "nama-panggung":
        this.setState({ namaPanggung: value });
        break;
      case "jenis-penampilan":
        this.setState({ jenisPenampilan: value });
        break;
      case "id-line":
        this.setState({ contact: value });
        break;
      default:
        break;
    }
  }

  setShowPlayer(id) {
    this.setState({
      show: id,
      isShow: true
    });
  }

  setPersonData(e, idnya) {
    const { value, id } = e.target;
    const { players } = this.state;
    const newPlayers = Array.from(players);
    switch (id) {
      case "nama":
        newPlayers[idnya][0] = value;
        break;
      case "angkatan":
        newPlayers[idnya][1] = value;
        break;
      default:
        break;
    }
    this.setState({ players: newPlayers });
  }

  alertMessage(msg) {
    this.setState({ alertMessage: msg });
  }

  deletePlayer(id) {
    const { players } = this.state;
    const newPlayers = Array.from(players);
    newPlayers.splice(id, 1);
    this.setState({
      players: newPlayers,
      show: newPlayers.length - 1,
      isShow: false
    });
  }

  simpan(id) {
    const { players } = this.state;
    if (players[id][0] !== "" && players[id][1] !== "") {
      this.setState({
        isShow: false
      });
    } else {
      this.alertMessage("Harap Mengisi Nama Personil dan Elemen");
    }
  }

  tambah() {
    const { players, show } = this.state;
    if (
      players[show] === undefined ||
      (players[show][0] !== "" && players[show][1] !== "")
    ) {
      const newPlayers = Array.from(players);
      newPlayers.push(["", ""]);
      this.setState({
        players: newPlayers,
        show: newPlayers.length - 1,
        isShow: true
      });
    } else {
      this.alertMessage("Harap Mengisi Nama Personil dan Elemen");
    }
  }

  daftar() {
    const {
      namaPanggung,
      jenisPenampilan,
      contact,
      players,
      show
    } = this.state;
    if (namaPanggung === "") {
      this.alertMessage("Harap Mengisi Nama Panggung");
    } else if (jenisPenampilan === "") {
      this.alertMessage("Harap Mengisi Jenis Penampilan");
    } else if (contact === "") {
      this.alertMessage("Harap Mengisi Id Line / Whatsapp");
    } else if (players[show][0] === "" || players[show][1] === "") {
      this.alertMessage("Pastikan seluruh form Personil telah terisi");
    } else {
      console.log(this.state);
    }
  }

  render() {
    const {
      setShowPlayer,
      setPersonData,
      tambah,
      simpan,
      deletePlayer,
      setData,
      daftar,
      alertMessage,
      state,
      props
    } = this;
    return (
      <HeaderFooter color="dark">
        <Fade>
          <RegistrationContainer>
            <SweetAlert
              show={state.alertMessage || props.done}
              title={props.done ? "You're registered" : state.alertMessage}
              type={props.done ? "success" : "warning"}
              onConfirm={() => alertMessage(null)}
            />
            <Title>REGISTRASI BIR BINTANG</Title>
            <Forms>
              <BirBintangForm
                namaPanggung={state.namaPanggung}
                jenisPenampilan={state.jenisPenampilan}
                contact={state.contact}
                setData={setData}
              />
              <div className="garisnya" />
              <h3 className="pemain">
                Personil ({state.players.length} Orang)
              </h3>
              {state.players &&
                state.players.map((personil, id) =>
                  state.isShow && state.show === id ? (
                    <LeftDiv>
                      {id === 0 ? null : (
                        <button
                          type="button"
                          className="x-buttona"
                          onClick={() => deletePlayer(id)}
                        >
                          <img className="trash" src={hapus} alt="hapus" />
                          Hapus
                        </button>
                      )}
                      <Fade
                        distance="10%"
                        duration={1000}
                        collapse
                        top
                        className="anjay"
                      >
                        <PersonilForm
                          namaPersonil={personil[0]}
                          angkatan={personil[1]}
                          savePlayer={() => simpan(id)}
                          setPersonData={e => setPersonData(e, id)}
                          deletePlayer={() => deletePlayer(id)}
                        />
                      </Fade>
                    </LeftDiv>
                  ) : (
                    <Fade>
                      <MinimizedPersonForm
                        namaLengkap={personil[0]}
                        angkatan={personil[1]}
                        setShowPlayer={() => setShowPlayer(id)}
                        deletePlayer={id === 0 ? null : () => deletePlayer(id)}
                      />
                    </Fade>
                  )
                )}
              <div className="garisnya" />
              <TambahButton onClick={tambah}>
                <span className="plus">+</span> Personil
              </TambahButton>
              <SubmitButton onClick={daftar}>Daftar</SubmitButton>
            </Forms>
          </RegistrationContainer>
        </Fade>
      </HeaderFooter>
    );
  }
}

// BirBintangRegistration.propTypes = {};

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirBintangRegistration);
