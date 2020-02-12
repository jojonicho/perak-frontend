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
          <div>
            <Link to="/" className="no-decor">
              <img className="logo" src={logoBaruTerang} alt="logo"></img>
            </Link>
          </div>

          <div className="menu-bar">
            <div className="dropdown">
              <h2 className="daftar">KLASEMEN</h2>
              <div className="dropdown-menu dropdown-menu-klasemen">
                <div className="dropdown-col dropdown-col-klasemen">
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>FUTSAL</h3>
                    </div>
                  </Link>
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>DOTA</h3>
                    </div>
                  </Link>
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>CSGO</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <h2 className="daftar">SKOR</h2>
              <div className="dropdown-menu">
                <div className="dropdown-col dropdown-col-left">
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>FUTSAL</h3>
                    </div>
                  </Link>
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>CATUR</h3>
                    </div>
                  </Link>
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>FIFA 2020</h3>
                    </div>
                  </Link>
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>SUPER SMASH BROS</h3>
                    </div>
                  </Link>
                </div>
                <div className="dropdown-col dropdown-col-right">
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>MARIO KART</h3>
                    </div>
                  </Link>
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>CODENAMES</h3>
                    </div>
                  </Link>
                  <Link to="/#" className="no-decor button-menu">
                    <div className="dropdown-item">
                      <h3>MOBILE LEGENDS</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={notShown ? "no-padding-top" : "childcontainer"}>
          {children}
        </div>
        <div className="footer" style={colors.dark}>
          <p>Copyright 2020 Pesta Rakyat Komputer</p>
        </div>
      </HeaderFooterContainer>
    );
  }
}

HeaderFooter.propTypes = {};

export default HeaderFooter;
