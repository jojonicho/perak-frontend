/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from "react";
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { HeaderFooterContainer } from "./style";
// import logoBaruTerang2 from "../../asset/logoBaruTerang2.png";
import logoBaruTerang from "../../asset/logoBaruTerang.png";
import mobileMenuBar from "../../asset/mobile-menu.svg";
import downArrow from "../../asset/down-arrow.svg";

class HeaderFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toogleMobileMenu: false,
      toogleKlasemenMobile: false,
      toogleSkorMobile: false,
      overflowMenu: false,
      mobileMenuHeight: "0px"
    };

    this.toogleMenu = this.toogleMenu.bind(this);
    this.toogleKlasemen = this.toogleKlasemen.bind(this);
    this.toogleSkor = this.toogleSkor.bind(this);
    this.toogleOverflow = this.toogleOverflow.bind(this);
  }

  toogleMenu() {
    this.setState(state => ({
      toogleMobileMenu: !state.toogleMobileMenu,
      toogleKlasemenMobile: false,
      toogleSkorMobile: false,
      mobileMenuHeight: "120px"
    }));

    if (!this.state.toogleMobileMenu) {
      const x = this;
      setTimeout(function() {
        x.toogleOverflow();
      }, 800);
    } else if (this.state.toogleKlasemenMobile || this.state.toogleSkorMobile) {
      const x = this;
      setTimeout(function() {
        x.toogleOverflow();
        x.setState(state => ({
          mobileMenuHeight: "0px"
        }));
      }, 700);
    } else {
      this.setState(state => ({
        mobileMenuHeight: "0px"
      }));
      this.toogleOverflow();
    }
  }

  toogleOverflow() {
    this.setState(state => ({
      overflowMenu: !state.overflowMenu
    }));
  }

  toogleKlasemen() {
    this.setState(state => ({
      toogleKlasemenMobile: !state.toogleKlasemenMobile,
      toogleSkorMobile: false
    }));
  }

  toogleSkor() {
    this.setState(state => ({
      toogleSkorMobile: !state.toogleSkorMobile,
      toogleKlasemenMobile: false
    }));
  }

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
        transform: "translateY(-100vh)",
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
                  <Link to="/klasemen/futsal" className="no-decor button-menu">
                    <div className="dropdown-item">FUTSAL</div>
                  </Link>
                  <Link to="/klasemen/dota" className="no-decor button-menu">
                    <div className="dropdown-item">DOTA</div>
                  </Link>
                  <Link to="/klasemen/csgo" className="no-decor button-menu">
                    <div className="dropdown-item">CSGO</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <h2 className="daftar">SKOR</h2>
              <div className="dropdown-menu">
                <div className="dropdown-col dropdown-col-left">
                  <Link to="/result/futsal" className="no-decor button-menu">
                    <div className="dropdown-item">FUTSAL</div>
                  </Link>
                  <Link to="/result/catur" className="no-decor button-menu">
                    <div className="dropdown-item">CATUR</div>
                  </Link>
                  <Link to="/result/fifa" className="no-decor button-menu">
                    <div className="dropdown-item">FIFA 2020</div>
                  </Link>
                  <Link to="/result/ssbu" className="no-decor button-menu">
                    <div className="dropdown-item">SUPER SMASH BROS</div>
                  </Link>
                </div>
                <div className="dropdown-col dropdown-col-right">
                  <Link to="/result/mariokart" className="no-decor button-menu">
                    <div className="dropdown-item">MARIO KART</div>
                  </Link>
                  <Link to="/result/codenames" className="no-decor button-menu">
                    <div className="dropdown-item">CODENAMES</div>
                  </Link>
                  <Link to="/result/mlbb" className="no-decor button-menu">
                    <div className="dropdown-item">MOBILE LEGENDS</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="dropdown-mobile">
              <img
                src={mobileMenuBar}
                alt="mobile-menu"
                className="mobile-menu-button"
                onClick={this.toogleMenu}
              />
              <div
                className="dropdown-mobile-container"
                style={{
                  height: this.state.mobileMenuHeight,
                  overflow: this.state.overflowMenu ? "visible" : "hidden"
                }}
              >
                <div
                  className="dropdown-mobile-submenu"
                  onClick={this.toogleKlasemen}
                >
                  KLASEMEN
                  <img
                    src={downArrow}
                    alt="down-arrow"
                    className="menu-down-arrow"
                  />
                </div>
                <div
                  className="dropdown-mobile-subcontainer"
                  style={{
                    height: this.state.toogleKlasemenMobile ? "150px" : "0px"
                  }}
                >
                  <Link to="/klasemen/futsal" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">FUTSAL</div>
                  </Link>
                  <Link to="/klasemen/dota" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">DOTA</div>
                  </Link>
                  <Link to="/klasemen/csgo" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">CSGO</div>
                  </Link>
                </div>
                <div
                  className="dropdown-mobile-submenu"
                  onClick={this.toogleSkor}
                >
                  SKOR
                  <img
                    src={downArrow}
                    alt="down-arrow"
                    className="menu-down-arrow"
                  />
                </div>
                <div
                  className="dropdown-mobile-subcontainer"
                  style={{
                    height: this.state.toogleSkorMobile ? "355px" : "0px"
                  }}
                >
                  <Link to="/result/futsal" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">FUTSAL</div>
                  </Link>
                  <Link to="/result/catur" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">CATUR</div>
                  </Link>
                  <Link to="/result/fifa" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">FIFA 2020</div>
                  </Link>
                  <Link to="/result/ssbu" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">SUPER SMASH BROS</div>
                  </Link>
                  <Link to="/result/mariokart" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">MARIO KART</div>
                  </Link>
                  <Link to="/result/codenames" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">CODENAMES</div>
                  </Link>
                  <Link to="/result/mlbb" className="no-decor button-menu">
                    <div className="dropdown-mobile-item">MOBILE LEGENDS</div>
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
