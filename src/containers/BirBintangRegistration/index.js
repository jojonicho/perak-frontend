import React from "react";
// import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

// import { BirBintangRegistrationContainer } from "./style";
import {
  RegistrationContainer,
  Title,
  Forms,
  TambahButton,
  SubmitButton
} from "../Registration/style";
import HeaderFooter from "../../components/HeaderFooter";
// import PersonFormRegistration from "../../components/PersonFormRegistration";
import BirBintangForm from "../../components/BirBintangForm";
import MinimizedPersonForm from "../../components/MinimizedPersonForm";
import PersonilForm from "../../components/PersonilForm";

class BirBintangRegistration extends React.Component {
  render() {
    return (
      <HeaderFooter color="dark">
        <Fade>
          <RegistrationContainer>
            <Title>REGISTRASI BIR BINTANG</Title>
            <Forms>
              <BirBintangForm></BirBintangForm>
              <div className="garisnya" />
              <h3 className="pemain">Personil (1 Orang)</h3>
              <MinimizedPersonForm namaLengkap="Ari"></MinimizedPersonForm>
              <PersonilForm
                savePlayer={() => {
                  console.log("hei-hei");
                }}
              ></PersonilForm>
              <div className="garisnya" />
              <TambahButton>
                <span className="plus">+</span> Pemain
              </TambahButton>
              <SubmitButton>Daftar</SubmitButton>
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
