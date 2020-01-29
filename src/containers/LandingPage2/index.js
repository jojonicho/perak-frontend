import React from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import HeaderFooter from "../../components/HeaderFooter";
import PerakTahunIni from "../../components/PerakTahunIni";
import Section4 from "../../components/Section4";
import Section5 from "../../components/Section5";

import daun1 from "../../asset/daun1.svg";
import daun2 from "../../asset/daun2.svg";

import { LandingPage2Container, LandingSection, ApaItuSection } from "./style";
import MedSos from "../../components/MedSos";
import AdaApaAja from "../../components/AdaApaAja";
import Section1 from "../../components/Section1";
import Section2 from "../../components/Section2";
import Section3 from "../../components/Section3";

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
        parallaxes[i].style.display = "none";
        // document.getElementById(`layer${i + 1}`).style.display = "none";
      }
    };

    this.parallax = () => {
      this.setState({
        thePosition: window.pageYOffset
      });
      const { thePosition } = this.state;
      if (thePosition < 600 || true) {
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
    const { thePosition } = this.state;
    return (
      <LandingPage2Container>
        <HeaderFooter color={thePosition < 50 ? "notShown" : "dark"} notShown>
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
            <div className="daftar-awal-container">
              <Link to="/daftar" className="daftar-awal-link">
                <h2 className="daftar-awal">DAFTAR</h2>
              </Link>
            </div>
            <div className="layer parallax" data-speed={60} id="layer1"></div>
            <div className="layer parallax" data-speed={-20} id="layer2">
              <div className="title">
                <div className="pesta-rakyat">
                  <h1 className="pesta">PESTA</h1>{" "}
                  <h1 className="rakyat">RAKYAT</h1>
                </div>
                <h1 className="komputer">KOMPUTER</h1>
              </div>
            </div>
            <div className="layer parallax" data-speed={-40} id="layer3"></div>
            <div className="layer parallax" data-speed={-80} id="layer4"></div>
            <div className="layer parallax" data-speed={-120} id="layer5"></div>
            <div className="layer parallax" data-speed={-80} id="layer6"></div>
            <div className="mobile-landing">
              <div className="title">
                <div className="pesta-rakyat">
                  <h1 className="pesta">PESTA</h1>{" "}
                  <h1 className="rakyat">RAKYAT</h1>
                </div>
                <h1 className="komputer">KOMPUTER</h1>
              </div>
            </div>
          </LandingSection>
          <ApaItuSection>
            <h1 className="section-title">APA ITU PERAK?</h1>
            <p className="desc">
              Pesta Rakyat Komputer adalah acara internal terbesar di Fasilkom
              UI yang bertujuan untuk menjaga rasa kekeluargaan antar elemen dan
              menjadi tempat untuk “keluar sejenak” dari kegiatan akademis.
              Kegiatan-kegiatan yang dilakukan pada acara ini nantinya akan ada
              unsur musik, permainan, dan kegiatan menyenangkan lainnya yang
              tentunya mengikutsertakan seluruh elemen Fasilkom UI.
            </p>
          </ApaItuSection>
          <PerakTahunIni />
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover
            infiniteLoop
            autoPlay
            interval={5000}
          >
            <AdaApaAja></AdaApaAja>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </Carousel>
          <MedSos></MedSos>
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
