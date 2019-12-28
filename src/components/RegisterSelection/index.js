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
          <h1 className="title">REGISTER HERE</h1>
          <h1>CHOOSE YOUR GAME</h1>
          <div className="game-container">
            <Link to="/register/futsal" className="games green">
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
