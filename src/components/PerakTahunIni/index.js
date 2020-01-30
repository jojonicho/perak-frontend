import React from "react";
// import PropTypes from 'prop-types';

import { PerakTahunIniContainer } from "./style";
import bolabulet from "../../asset/perakTahunIni/balltop.svg";
import mainsectionbg from "../../asset/perakTahunIni/main-bg-2.svg";
import fotokiri from "../../asset/perakTahunIni/foto-kiri.png";
import decorfotokiri from "../../asset/perakTahunIni/foto-kiri-decor.svg";
import fotokanan from "../../asset/perakTahunIni/foto-kanan.png";
import decorfotokanan from "../../asset/perakTahunIni/foto-kanan-decor.svg";
import siapatext from "../../asset/perakTahunIni/siapaini.svg";
import mainsectionbgphone from "../../asset/perakTahunIni/main-bg-2-mobile.svg";
// import bottomsec from "../../asset/perakTahunIni/bottom-section.png";
// import bottomsecmobile from "../../asset/perakTahunIni/bottom-section-mobile.png";
// import kenalin from "../../asset/perakTahunIni/kenalin.svg";
import kenalin3 from "../../asset/perakTahunIni/kenalin3.png";
import kenalin3Mobile from "../../asset/perakTahunIni/kenalin3-mobile.png";
// import kenalin2 from "../../asset/perakTahunIni/kenalin2.png";
// import kenalin2Mobile from "../../asset/perakTahunIni/kenalin2-mobile.png";
import bottomleftdecor from "../../asset/perakTahunIni/bottom-left.png";
import bottomrightdecor from "../../asset/perakTahunIni/bottom-right.png";
// import ceritanyamaskot from "../../asset/perakTahunIni/ceritanya-maskot.svg";

class PerakTahunIni extends React.Component {
  constructor() {
    super();
    this.state = {
      thePosition: 0,
      alreadyRandomized: false
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
    };

    this.randomText = () => {
      this.setState({
        pos: window.pageYOffset
      });
      const { pos } = this.state;
      const { alreadyRandomized } = this.state;
      if (pos > 825 && alreadyRandomized === false) {
        const randomtext = document.getElementsByClassName("text-random");
        for (let i = 0; i < randomtext.length; i += 1) {
          const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const charactersLength = characters.length;
          const circle = randomtext[i];
          const x = setInterval(function random() {
            circle.innerHTML = characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }, 50);
          setTimeout(function stoprandom() {
            clearInterval(x);
          }, 5000);
        }
        const fixedtext = document.getElementsByClassName("text-fixed");
        for (let i = 0; i < fixedtext.length; i += 1) {
          const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const charactersLength = characters.length;
          const circle = fixedtext[i];
          const char = circle.getAttribute("char");
          const x = setInterval(function random() {
            circle.innerHTML = characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }, 50);
          setTimeout(function stoprandom() {
            clearInterval(x);
            circle.innerHTML = char;
            circle.style.color = "black";
          }, 3000 + 100 * i);
        }
        const fixedparent = document.getElementsByClassName("parent-fixed");
        for (let i = 0; i < fixedparent.length; i += 1) {
          const parent = fixedparent[i];
          const color = parent.getAttribute("color");
          setTimeout(function stoprandom() {
            parent.style.backgroundColor = color;
          }, 3000 + 100 * i);
        }
        this.setState({
          alreadyRandomized: true
        });
      }
    };
  }

  componentDidMount() {
    // const platform = navigator.platform.toLowerCase();
    // if (platform.indexOf("ipad") !== -1 || platform.indexOf("iphone") !== -1) {
    //   this.noParallax();
    // } else {
    //   window.addEventListener("scroll", this.parallax);
    // }
    window.addEventListener("scroll", this.parallax);
    window.addEventListener("scroll", this.randomText);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallax);
  }

  render() {
    return (
      <PerakTahunIniContainer>
        <div className="layer parallax bola-bulet-section" data-speed={5}>
          <img src={bolabulet} className="bola-bulet" alt="bola" />
        </div>
        <div className="main-section">
          <img src={mainsectionbg} className="main-bg" alt="main-bg" />
          <img
            src={mainsectionbgphone}
            className="main-bg-phone"
            alt="main-bg-phone"
          />
          <img src={siapatext} className="siapa-ini" alt="siapa-ini" />
          <img src={fotokiri} className="foto-kiri" alt="foto-kiri" />
          <img
            src={decorfotokiri}
            className="decor-foto-kiri"
            alt="foto-kiri"
          />
          <img src={fotokanan} className="foto-kanan " alt="foto-kiri" />
          <img
            src={decorfotokanan}
            className="decor-foto-kanan"
            alt="foto-kiri"
          />
          <div className="main-content">
            <div className="sec-title layer parallax" data-speed={5}>
              <h1 className="section-title">PERAK TAHUN INI</h1>
            </div>
            <div className="circle-text-section">
              <div className="circle-row">
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item parent-fixed" color="#FD9226">
                  <div className="circle-text text-fixed" char="F">
                    A
                  </div>
                </div>
                <div className="circle-item parent-fixed" color="#86DAF1">
                  <div className="circle-text text-fixed" char="U">
                    A
                  </div>
                </div>
                <div className="circle-item parent-fixed" color="#03AA6F">
                  <div className="circle-text text-fixed" char="N">
                    A
                  </div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
              </div>
              <div className="circle-row">
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item parent-fixed" color="#86DAF1">
                  <div className="circle-text text-fixed" char="F">
                    A
                  </div>
                </div>
                <div className="circle-item parent-fixed" color="#03AA6F">
                  <div className="circle-text text-fixed" char="R">
                    A
                  </div>
                </div>
                <div className="circle-item parent-fixed" color="#FD9226">
                  <div className="circle-text text-fixed" char="E">
                    A
                  </div>
                </div>
                <div className="circle-item parent-fixed" color="#03AA6F">
                  <div className="circle-text text-fixed" char="S">
                    A
                  </div>
                </div>
                <div className="circle-item parent-fixed" color="#FF90B5">
                  <div className="circle-text text-fixed" char="H">
                    A
                  </div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
                <div className="circle-item">
                  <div className="circle-text text-random">A</div>
                </div>
              </div>
              <div className="circle-row circle-break-row">
                <div className="circle-first-row">
                  <div className="circle-item parent-fixed" color="#03AA6F">
                    <div className="circle-text text-fixed" char="C">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#FF90B5">
                    <div className="circle-text text-fixed" char="O">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#86DAF1">
                    <div className="circle-text text-fixed" char="M">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#FF90B5">
                    <div className="circle-text text-fixed" char="P">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#FD9226">
                    <div className="circle-text text-fixed" char="R">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#03AA6F">
                    <div className="circle-text text-fixed" char="E">
                      A
                    </div>
                  </div>
                </div>
                <div className="circle-last-row">
                  <div className="circle-item parent-fixed" color="#FF90B5">
                    <div className="circle-text text-fixed" char="H">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#86DAF1">
                    <div className="circle-text text-fixed" char="E">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#03AA6F">
                    <div className="circle-text text-fixed" char="N">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#FD9226">
                    <div className="circle-text text-fixed" char="S">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#03AA6F">
                    <div className="circle-text text-fixed" char="I">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#86DAF1">
                    <div className="circle-text text-fixed" char="V">
                      A
                    </div>
                  </div>
                  <div className="circle-item parent-fixed" color="#FF90B5">
                    <div className="circle-text text-fixed" char="E">
                      A
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={bottomleftdecor}
            className="bottom-left-decor"
            alt="bottom-left-decor"
          />
          <img
            src={bottomrightdecor}
            className="bottom-right-decor"
            alt="bottom-right-decor"
          />
        </div>
        <img
          src={kenalin3Mobile}
          alt="bottom-section"
          className="bottom-section"
        />
        <img
          src={kenalin3}
          alt="bottom-section"
          className="bottom-section-mobile"
        />
        {/* <img src={kenalin} alt="kenalin-ini-aang" className="kenalin-aang" />
        <img
          src={ceritanyamaskot}
          alt="ceritanya-maskot"
          className="ceritanya-maskot"
        /> */}
      </PerakTahunIniContainer>
    );
  }
}

PerakTahunIni.propTypes = {};

export default PerakTahunIni;
