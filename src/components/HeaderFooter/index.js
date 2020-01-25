import React from "react";
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { HeaderFooterContainer } from "./style";
// import logoBaruTerang2 from "../../asset/logoBaruTerang2.png";
import logoBaruTerang from "../../asset/logoBaruTerang.png";

class HeaderFooter extends React.Component {
  render() {
    const { children, color, isShown } = this.props;
    const colors = {
      green: { backgroundColor: "#22B3A5", color: "white" },
      blue: { backgroundColor: "#454FCB", color: "white" },
      yellow: { backgroundColor: "#F1CF33", color: "#454FCB" },
      red: { backgroundColor: "#EA6229", color: "white" },
      dark: { backgroundColor: "#0D2040", color: "white" },
      notShown: {
        backgroundColor: "#0D2040",
        color: "white",
        transform: "translateY(-100px)"
      }
    };
    return (
      <HeaderFooterContainer>
        <div className="header" style={colors[color]}>
          <Link to="/" className="no-decor">
            <img className="logo" src={logoBaruTerang} alt="logo"></img>
          </Link>
          <Link to="/daftar">
            <h2 className="daftar">DAFTAR</h2>
          </Link>
        </div>
        <div
          className="childcontainer"
          style={isShown ? null : { paddingTop: "0px" }}
        >
          {children}
        </div>
        <div className="footer" style={colors[color]}>
          <p>Copyright 2019 Pesta Rakyat Komputer</p>
        </div>
      </HeaderFooterContainer>
    );
  }
}

HeaderFooter.propTypes = {};

export default HeaderFooter;
