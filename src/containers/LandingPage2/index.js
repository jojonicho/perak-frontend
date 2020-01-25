import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import daun1 from "../../asset/daun1.svg";
import daun2 from "../../asset/daun2.svg";

import { LandingPage2Container } from "./style";

class LandingPage2 extends React.Component {
  render() {
    return (
      <LandingPage2Container>
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

        <section className="landing"></section>
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
