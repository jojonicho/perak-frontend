import React from "react";
import posed from "react-pose";
import SplitText from "react-pose-text";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

import HeaderFooter from "../../components/HeaderFooter";
// import logoGede from "../../asset/logoGede.png";
import avatar from "../../asset/avatar.png";
import avatarIjug from "../../asset/avatarIjug.png";
import prayaFerdi3 from "../../asset/prayaFerdi3.png";
import om2 from "../../asset/om2.png";
import dekorYellow from "../../asset/dekorYellow.png";
import dekorBlue from "../../asset/dekorBlue.png";
import csl1 from "../../asset/csl1.JPG";
import csl2 from "../../asset/csl2.JPG";
import csl3 from "../../asset/csl3.JPG";
import csl4 from "../../asset/csl4.JPG";

import {
  LandingPageContainer,
  FirstSection,
  SecondSection,
  FourthSection,
  FifthSection
} from "./style";

const DaftarButton = posed.button({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  },
  rusak: {
    transform: "rotate(45deg)"
  }
});

const Ball = posed.div({
  draggable: true,
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.5
  },
  rotating: {
    animation: "spin 4s linear infinite"
  },
  notRotating: {
    animation: "none"
  }
});

const charPoses = {
  exit: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      delay: charInWordIndex * 200,
      damping: 10 - charInWordIndex * 1
    })
  }
};

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      stateAvatar: "fun",
      ballIsClicked: false,
      daftarButtonIsHovered: false
    };
  }

  render() {
    const { stateAvatar, ballIsClicked, daftarButtonIsHovered } = this.state;

    const handleClickAvatar = event => {
      for (
        let i = 0;
        i < document.getElementsByClassName("avatar-button").length;
        i += 1
      ) {
        document
          .getElementsByClassName("avatar-button")
          [i].classList.remove("yellowed");
      }
      if (!event.target.classList.contains("yellowed")) {
        event.target.classList.add("yellowed");

        if (event.target.classList.contains("fun")) {
          this.setState({ stateAvatar: "fun" });
        } else if (event.target.classList.contains("fresh")) {
          this.setState({ stateAvatar: "fresh" });
        } else if (event.target.classList.contains("comprehensive")) {
          this.setState({ stateAvatar: "comprehensive" });
        }
      }
    };
    const handleClickBall = () => {
      if (!ballIsClicked) {
        this.setState({ ballIsClicked: true });
      }
    };

    const handleHoverDaftarButton = () => {
      if (!daftarButtonIsHovered) {
        this.setState({ daftarButtonIsHovered: true });
      }
    };

    let imgAvatar = avatar;
    if (stateAvatar === "fresh") imgAvatar = avatarIjug;
    if (stateAvatar === "comprehensive") imgAvatar = avatarIjug;
    return (
      <LandingPageContainer>
        <HeaderFooter color="dark">
          <FirstSection>
            <img className="dekorYellow" src={dekorYellow} alt="matahari" />
            <img className="dekorBlue" src={dekorBlue} alt="snowflake" />
            <SplitText
              className="title"
              initialPose="exit"
              pose="enter"
              charPoses={charPoses}
            >
              SELAMAT DATANG
            </SplitText>
            <img className="avatar" id="avatar" src={imgAvatar} alt="avatar" />
            <div className="tema">
              <button
                type="button"
                onClick={e => handleClickAvatar(e)}
                className="avatar-button fun yellowed"
              >
                FUN
              </button>
              <div className="circle"></div>
              <button
                type="button"
                onClick={e => handleClickAvatar(e)}
                className="avatar-button fresh"
              >
                FRESH
              </button>
              <div className="circle"></div>
              <button
                type="button"
                onClick={e => handleClickAvatar(e)}
                className="avatar-button comprehensive"
              >
                COMPREHENSIVE
              </button>
            </div>
          </FirstSection>
          <SecondSection>
            <Ball
              onMouseEnter={() => handleClickBall()}
              className="ball"
              pose={ballIsClicked ? "notRotating" : "rotating"}
            ></Ball>
            <h1 className="apa-itu">APA ITU PERAK?</h1>
            <p className="full-desc">
              Lorem ipsum dolor sit amet et delectus accommodare his consul
              copiosae legendos at vix ad putent delectus delicata usu. Vidit
              dissentiet eos cu eum an brute copiosae hendrerit. Eos erant
              dolorum an. Per facer affert ut. Mei iisque mentitum moderatius
              cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te
              facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus
              argumentum ne qui tation efficiendi in eos. Ei mea falli legere
              efficiantur et tollit aliquip debitis mei. No deserunt
              mediocritatem mel. Lorem
            </p>
            <img className="praya-ferdi" src={prayaFerdi3} alt="praya ferdi" />
            <img className="om" src={om2} alt="om" />
          </SecondSection>

          <FourthSection>
            <h1 className="liga-title">LIGA</h1>
            <Carousel
              className="image-carousel"
              showStatus={false}
              showThumbs={false}
              infiniteLoop
              autoPlay
            >
              <div>
                <img className="csl" src={csl3} alt="csl3" />
              </div>
              <div>
                <img className="csl" src={csl1} alt="csl1" />
              </div>
              <div>
                <img className="csl" src={csl2} alt="csl2" />
              </div>
              <div>
                <img className="csl" src={csl4} alt="csl4" />
              </div>
            </Carousel>
            <p className="desc-liga">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              praesentium ipsa, consectetur eius error, doloribus fuga aliquam,
              odio dolores tempora aspernatur. Impedit delectus, quae rerum
              minima nihil perferendis sint dolor.
            </p>
            <DaftarButton
              onMouseEnter={() => handleHoverDaftarButton()}
              className="daftar-button"
              pose={daftarButtonIsHovered ? "rusak" : null}
            >
              DAFTAR SEKARANG
            </DaftarButton>
          </FourthSection>
          <FifthSection>
            <h1 className="social-media-title">SOCIAL MEDIA</h1>
            <div className="social-medias">
              <div className="row-social-medias">
                <div className="social-media">
                  <div className="dark-circle"></div>
                  <p>Instagram</p>
                </div>
                <div className="social-media">
                  <div className="dark-circle"></div>
                  <p>Twitter</p>
                </div>
                <div className="social-media">
                  <div className="dark-circle"></div>
                  <p>Linkedin</p>
                </div>
              </div>
              <div className="row-social-medias">
                <div className="social-media">
                  <div className="dark-circle"></div>
                  <p>Line</p>
                </div>
                <div className="social-media">
                  <div className="dark-circle"></div>
                  <p>Facebook</p>
                </div>
                <div className="social-media">
                  <div className="dark-circle"></div>
                  <p>Youtube</p>
                </div>
              </div>
            </div>
          </FifthSection>
        </HeaderFooter>
      </LandingPageContainer>
    );
  }
}

LandingPage.propTypes = {};

// function mapStateToProps(state) {
//   return {};
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch
//   };
// }

export default LandingPage;
// export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
