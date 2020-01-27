import React from "react";
// import PropTypes from 'prop-types';

import { MedSosContainer } from "./style";
import instagram from "../../asset/instagram.svg";
import linkedin from "../../asset/linkedin.svg";
import twitter from "../../asset/twitter.svg";
import facebook from "../../asset/facebook.svg";
import line from "../../asset/line.svg";
import youtube from "../../asset/youtube.svg";

class MedSos extends React.Component {
  render() {
    return (
      <MedSosContainer>
        <div className="medsos-transition"></div>
        <div className="medsos-main-container">
          <h1 className="medsos-title">MEDIA SOSIAL</h1>
          <div className="medsos-container">
            <a href="https://www.instagram.com/perakfasilkom/">
              <img src={instagram} alt="ig" /> Instagram
            </a>
            <a href="https://twitter.com/perakfasilkom">
              <img src={twitter} alt="twtr" />
              Twitter
            </a>
            <a href="https://www.linkedin.com/company/pesta-rakyat-komputer">
              <img src={linkedin} alt="linkedin" />
              LinkedIn
            </a>
            <a href="https://lin.ee/tDlm54t">
              <img src={line} alt="line" />
              Line
            </a>
            <a href="#facebook">
              <img src={facebook} alt="fb" />
              Facebook
            </a>
            <a href="http://www.youtube.com/c/PestaRakyatKomputer">
              <img src={youtube} alt="yt" />
              Youtube
            </a>
          </div>
        </div>
      </MedSosContainer>
    );
  }
}

MedSos.propTypes = {};

export default MedSos;
