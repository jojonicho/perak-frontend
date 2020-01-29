import React from "react";
// import PropTypes from 'prop-types';
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";
import logoGede2 from "../../asset/logoGede2.png";
import * as pinwheelData from "../../asset/pinwheelLoading.json";

import { LoadingScreenContainer } from "./style";

class LoadingScreen extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: pinwheelData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <LoadingScreenContainer>
        <LoadingScreen>
          <FadeIn>
            <img className="logo-loading" src={logoGede2} alt="logo" />
            <Lottie options={defaultOptions} height={120} width={120} />
            {/* <ReactLoading className="loading-bar" type="bars" color="#F1CF33" /> */}
          </FadeIn>
        </LoadingScreen>
      </LoadingScreenContainer>
    );
  }
}

LoadingScreen.propTypes = {};

export default LoadingScreen;
