import React from "react";
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { HeaderFooterContainer } from "./style";
// import logoBaruTerang2 from "../../asset/logoBaruTerang2.png";
import logoBaruTerang from "../../asset/logoBaruTerang.png";

class HeaderFooter extends React.Component {
  render() {
    const handleHamburger = () => {
      document.getElementById("links-mobile").classList.toggle("notShown");
    };
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
          <button
            type="button"
            className="hamburger"
            onClick={() => handleHamburger()}
          ></button>

          <div className="links">
            <Link to="/klasemen" className="no-decor link">
              <h2 className="daftar">KLASEMEN</h2>
            </Link>
            <Link to="/result/futsal" className="no-decor link">
              <h2 className="daftar">SKOR</h2>
            </Link>
            <Link to="/daftar" className="no-decor link">
              <h2 className="daftar">DAFTAR</h2>
            </Link>
          </div>
        </div>
        <div className="links-mobile notShown" id="links-mobile">
          <Link to="/klasemen" className="no-decor link-mobile">
            <h2 className="daftar">KLASEMEN</h2>
          </Link>
          <Link to="/result/futsal" className="no-decor link-mobile">
            <h2 className="daftar">SKOR</h2>
          </Link>
          <Link to="/daftar" className="no-decor link-mobile">
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
