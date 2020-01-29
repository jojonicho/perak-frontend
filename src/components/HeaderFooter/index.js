import React from "react";
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { HeaderFooterContainer } from "./style";
// import logoBaruTerang2 from "../../asset/logoBaruTerang2.png";
import logoBaruTerang from "../../asset/logoBaruTerang.png";

class HeaderFooter extends React.Component {
  render() {
    const { children, color, notShown } = this.props;
    const colors = {
      green: { backgroundColor: "#22B3A5", color: "white" },
      blue: { backgroundColor: "#454FCB", color: "white" },
      yellow: { backgroundColor: "#F1CF33", color: "#454FCB" },
      red: { backgroundColor: "#EA6229", color: "white" },
      dark: { backgroundColor: "#0D2040", color: "white", transition: "0.5s" },
      notShown: {
        backgroundColor: "#0D2040",
        color: "white",
        transform: "translateY(-100px)",
        transition: "0.5s"
      }
    };
    return (
      <HeaderFooterContainer>
        <div className="header" style={colors[color]}>
          <Link to="/" className="no-decor">
            <img className="logo" src={logoBaruTerang} alt="logo"></img>
          </Link>
          <Link to="/daftar" className="no-decor">
            <h2 className="daftar">DAFTAR</h2>
          </Link>
        </div>
        <div className={notShown ? "no-padding-top" : "childcontainer"}>
          {children}
        </div>
        <div className="footer" style={colors.dark}>
          <p>Copyright 2019 Pesta Rakyat Komputer</p>
        </div>
      </HeaderFooterContainer>
    );
  }
}

HeaderFooter.propTypes = {};

export default HeaderFooter;
