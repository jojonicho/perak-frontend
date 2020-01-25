import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import HeaderFooter from "../../components/HeaderFooter";

import daun1 from "../../asset/daun1.svg";
import daun2 from "../../asset/daun2.svg";

import { LandingPage2Container, LandingSection } from "./style";

class LandingPage2 extends React.Component {
  constructor() {
    super();
    this.state = {
      thePosition: 0
    };

    this.noParallax = () => {
      // $("#nonparallax").css('display','block');
      // $("#parallax").css('display','none');
      const parallaxes = document.getElementsByClassName("parallax");
      for (let i = 0; i < parallaxes.length; i += 1) {
        document.getElementById(`layer${i + 1}`).style.display = "none";
      }
    };

    this.parallax = () => {
      this.setState({
        thePosition: window.pageYOffset
      });
      const { thePosition } = this.state;
      if (thePosition < 600) {
        const layers = document.getElementsByClassName("parallax");
        // console.log(layers[3].getAttribute('data-speed'));
        let { layer, speed, yPos } = 0;
        for (let i = 0; i < layers.length; i += 1) {
          layer = layers[i];
          speed = layer.getAttribute("data-speed");
          yPos = -((thePosition * speed) / 100);
          layer.setAttribute(
            "style",
            `transform: translate3d(0px, ${yPos}px, 0px)`
          );
        }
      }
    };
  }

  componentDidMount() {
    const platform = navigator.platform.toLowerCase();
    if (platform.indexOf("ipad") !== -1 || platform.indexOf("iphone") !== -1) {
      this.noParallax();
    } else {
      window.addEventListener("scroll", this.parallax);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallax);
  }

  render() {
    return (
      <LandingPage2Container>
        <HeaderFooter color="notShown">
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
            <div className="layer parallax" data-speed={60} id="layer1"></div>
            <div className="layer parallax" data-speed={-20} id="layer2">
              <div className="title">
                <h1>
                  PESTA <span>RAKYAT</span>
                </h1>
                <h1>KOMPUTER</h1>
              </div>
            </div>
            <div className="layer parallax" data-speed={-40} id="layer3"></div>
            <div className="layer parallax" data-speed={-80} id="layer4"></div>
            <div className="layer parallax" data-speed={-120} id="layer5"></div>
            <div className="layer parallax" data-speed={-80} id="layer6"></div>
          </LandingSection>
          <section
            style={{
              height: "100vh",
              backgroundColor: "white",
              marginTop: "-1px",
              position: "relative",
              zIndex: 7
            }}
          >
            <h1>TEST</h1>
          </section>
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
