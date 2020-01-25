import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import HeaderFooter from "../../components/HeaderFooter";

import daun1 from "../../asset/daun1.svg";
import daun2 from "../../asset/daun2.svg";

import { LandingPage2Container, LandingSection } from "./style";

class LandingPage2 extends React.Component {
  render() {
    return (
      <LandingPage2Container>
        <HeaderFooter color="dark">
          <div className="leaf">
            <img src={daun2} alt="daun2" />
          </div>
          <div className="leaf">
            <img src={daun1} alt="daun1" />
          </div>
          <div className="leaf">
            <img src={daun1} alt="daun1" />
          </div>
          <div className="leaf">
            <img src={daun1} alt="daun1" />
          </div>
          <div className="leaf">
            <img src={daun1} alt="daun1" />
          </div>
          <div className="leaf">
            <img src={daun2} alt="daun2" />
          </div>
          <div className="leaf">
            <img src={daun2} alt="daun2" />
          </div>
          <div className="leaf">
            <img src={daun2} alt="daun2" />
          </div>
          <div className="leaf">
            <img src={daun2} alt="daun2" />
          </div>

          <LandingSection className="landing">
            <div className="title">
              <h1>
                PESTA <span>RAKYAT</span>
              </h1>
              <h1>KOMPUTER</h1>
            </div>
            <div className="layer" id="layer1"></div>
            <div className="layer parallax" id="layer2"></div>
            <div className="layer parallax" id="layer3"></div>
            <div className="layer parallax" id="layer4"></div>
            <div className="layer parallax" id="layer5"></div>
          </LandingSection>
        </HeaderFooter>
      </LandingPage2Container>
    );
  }
}

LandingPage2.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(LandingPage2);
