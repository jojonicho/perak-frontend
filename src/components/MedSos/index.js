import React from "react";
// import PropTypes from 'prop-types';

import { MedSosContainer } from "./style";
import instagram from "../../asset/instagram.svg";
import linkedin from "../../asset/linkedin.svg";
import twitter from "../../asset/twitter.svg";
// import facebook from "../../asset/facebook.svg";
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
            <div className="a-container">
              <a
                href="https://www.instagram.com/perakfasilkom/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={instagram} alt="ig" /> Instagram
              </a>
            </div>
            <div className="a-container">
              <a
                href="https://twitter.com/perakfasilkom"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={twitter} alt="twtr" />
                Twitter
              </a>
            </div>
            <div className="a-container">
              <a
                href="https://www.linkedin.com/company/pesta-rakyat-komputer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
                LinkedIn
              </a>
            </div>
            <div className="a-container">
              <a
                href="https://lin.ee/tDlm54t"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={line} alt="line" />
                Line
              </a>
            </div>
            {/* <div className="a-container">
              <a href="#facebook" rel="noopener noreferrer" target="_blank">
                <img src={facebook} alt="fb" />
                Facebook
              </a>
            </div> */}
            <div className="a-container">
              <a
                href="http://www.youtube.com/c/PestaRakyatKomputer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={youtube} alt="yt" />
                Youtube
              </a>
            </div>
          </div>
        </div>
      </MedSosContainer>
    );
  }
}

MedSos.propTypes = {};

export default MedSos;
