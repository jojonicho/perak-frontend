import React from "react";
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { RegisterSelectionContainer } from "./style";
import HeaderFooter from "../HeaderFooter";

class RegisterSelection extends React.Component {
  render() {
    return (
      <HeaderFooter color="blue">
        <RegisterSelectionContainer>
          <h1 className="title">DAFTARKAN DIRIMU SEKARANG</h1>
          <h1>PILIH PERMAINANMU</h1>
          <div className="game-container">
            <Link to="/daftar/futsal" className="games green">
              <h1>FUTSAL</h1>
            </Link>
          </div>
        </RegisterSelectionContainer>
      </HeaderFooter>
    );
  }
}

RegisterSelection.propTypes = {};

export default RegisterSelection;
