import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import SweetAlert from "sweetalert2-react";
import Fade from "react-reveal/Fade";
import Loader from "react-loader-spinner";
// import hapus from "../../asset/hapus.svg";

import {
  RegistrationContainer,
  Title,
  SubmitButton
} from "../Registration/style";

import HeaderFooter from "../../components/HeaderFooter";
import OpenTenantForm from "../../components/OpenTenantForm";
import { realSubmit, resetAction } from "./actions";
// import { OpenTenantRegistrationContainer } from "./style";

class OpenTenantRegistration extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      kontak: "",
      jenisJualan: "",
      deskripsi: "",
      setuju: false,
      other: "",
      alertMessage: null
    };
    this.setData = this.setData.bind(this);
    this.submit = this.submit.bind(this);
    this.alertMessage = this.alertMessage.bind(this);
    this.reset = this.reset.bind(this);
  }

  setData(e) {
    // console.log(e.target.value)
    if (e.target.id === "nama-pemilik") {
      this.setState({ nama: e.target.value });
    } else if (e.target.id === "kontak-pemilik") {
      this.setState({ kontak: e.target.value });
    } else if (e.target.id === "deskripsi-jualan") {
      this.setState({ deskripsi: e.target.value });
    } else if (e.target.id === "setuju") {
      this.setState({ setuju: e.target.checked });
    } else if (e.target.id === "input-other") {
      this.setState({ other: e.target.value });
    } else {
      this.setState({ jenisJualan: e.target.value });
    }
  }

  alertMessage(msg) {
    this.setState({ alertMessage: msg });
  }

  submit() {
    const { nama, kontak, jenisJualan, deskripsi, setuju, other } = this.state;
    if (
      nama === "" ||
      kontak === "" ||
      jenisJualan === "" ||
      deskripsi === ""
    ) {
      this.setState({
        alertMessage: "Anda harus mengisi semua isi form"
      });
    } else if (jenisJualan === "other" && other === "") {
      this.setState({
        alertMessage: "Anda harus mengisi semua isi form"
      });
    } else if (setuju === false) {
      this.setState({
        alertMessage: "Anda harus menyetujui syarat"
      });
    } else {
      const { props } = this;
      if (jenisJualan === "other") {
        props.realSubmit(nama, kontak, other, deskripsi, setuju);
      } else {
        props.realSubmit(nama, kontak, jenisJualan, deskripsi, setuju);
      }
    }
  }

  reset() {
    const { props } = this;
    props.resetAction();
    this.setState({
      nama: "",
      kontak: "",
      deskripsi: "",
      setuju: false,
      other: "",
      alertMessage: null
    });
  }

  render() {
    const { alertMessage, state, props, reset, setData, submit } = this;

    return (
      <HeaderFooter color="dark">
        <Fade>
          <RegistrationContainer>
            {props.loading ? (
              <div className="loading-cont">
                <Loader type="Bars" color="#ffffff" />
                <h4 className="white">Harap Tunggu...</h4>
              </div>
            ) : null}
            <SweetAlert
              show={state.alertMessage || props.done}
              title={props.done ? "You're registered" : state.alertMessage}
              type={props.done ? "success" : "warning"}
              onConfirm={props.done ? () => reset() : () => alertMessage(null)}
            />
            <Title>REGISTRASI OPEN TENANT</Title>
            <OpenTenantForm
              namaPemilik={state.nama}
              kontak={state.kontak}
              deskripsi={state.deskripsi}
              setuju={state.setuju}
              other={state.other}
              jenisJualan={state.jenisJualan}
              setData={setData}
            />
            <SubmitButton onClick={submit}>Daftar</SubmitButton>
          </RegistrationContainer>
        </Fade>
      </HeaderFooter>
    );
  }
}

OpenTenantRegistration.propTypes = {};

function mapStateToProps(state) {
  return {
    loading: state.openTenantRegistration.loading,
    done: state.openTenantRegistration.done
  };
}

function mapDispatchToProps(dispatch) {
  return {
    realSubmit: (nama, kontak, jenisJualan, deskripsi, setuju) =>
      dispatch(realSubmit(nama, kontak, jenisJualan, deskripsi, setuju)),
    resetAction: () => dispatch(resetAction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenTenantRegistration);
