import React from "react";
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { HeaderFooterContainer } from "./style";
import logo1 from "../../asset/logo1.png";
import logo2 from "../../asset/logo2.png";

class HeaderFooter extends React.Component {
  render() {
    const { children, color } = this.props;
    const colors = {
      green: { backgroundColor: "#22B3A5", color: "white" },
      blue: { backgroundColor: "#454FCB", color: "white" },
      yellow: { backgroundColor: "#F1CF33", color: "#454FCB" },
      red: { backgroundColor: "#EA6229", color: "white" },
      dark: { backgroundColor: "#0D2040", color: "white" }
    };
    return (
      <HeaderFooterContainer>
        <div className="header" style={colors[color]}>
          <Link to="/" className="no-decor">
            {color === "blue" || "green" ? (
              <img className="logo" src={logo1} alt="logo"></img>
            ) : (
              <img className="logo" src={logo2} alt="logo"></img>
            )}
            <h2>PERAK</h2>
          </Link>
          <Link to="/daftar" className="no-decor">
            <h2>DAFTAR</h2>
          </Link>
        </div>
        <div className="childcontainer">{children}</div>
        <div className="footer" style={colors[color]}>
          <p>Copyright 2019 Pesta Rakyat Komputer</p>
        </div>
      </HeaderFooterContainer>
    );
  }
}

HeaderFooter.propTypes = {};

export default HeaderFooter;
