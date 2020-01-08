import React from "react";
// import ReactDOM from 'react-dom';
import posed from "react-pose";
// import SplitText from "react-pose-text";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

import HeaderFooter from "../../components/HeaderFooter";
// import logoGede from "../../asset/logoGede.png";
import avatar from "../../asset/avatar.png";
import ijug from "../../asset/ijug.png";
import prayaFerdi3 from "../../asset/prayaFerdi3.png";
import om2 from "../../asset/om2.png";
// import dekorYellow from "../../asset/dekorYellow.png";
// import dekorBlue from "../../asset/dekorBlue.png";
import csl1 from "../../asset/csl1.JPG";
import csl2 from "../../asset/csl2.JPG";
import csl3 from "../../asset/csl3.JPG";
import csl4 from "../../asset/csl4.JPG";
import selamatDatang from "../../asset/selamatDatang.png";
import * as pinwheelData from "../../asset/pinwheelLoading.json";

import {
  LoadingScreen,
  LandingPageContainer,
  FirstSection,
  FirstSection2,
  FirstSection3,
  SecondSection,
  FourthSection,
  FifthSection
} from "./style";

import logoGede2 from "../../asset/logoGede2.png";

const DaftarButton = posed.button({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  }
});

const ButtonTema = posed.button({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.2
  }
});

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: pinwheelData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

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

// const charPoses = {
//   exit: { y: 20, opacity: 0 },
//   enter: {
//     y: 0,
//     opacity: 1,
//     transition: ({ charInWordIndex }) => ({
//       type: "spring",
//       delay: charInWordIndex * 200,
//       damping: 10 - charInWordIndex * 1
//     })
//   }
// };

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
      tema: "fun",
      ballIsClicked: false,
      daftarButtonIsHovered: false
    };
    this.firstSection = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 0);
  }

  render() {
    const {
      done,
      // stateAvatar,
      ballIsClicked,
      daftarButtonIsHovered,
      tema
    } = this.state;

    const handleClickTema = () => {
      if (tema === "fun") {
        this.setState({ tema: "fresh" });
      } else if (tema === "fresh") {
        this.setState({ tema: "comprehensive" });
      } else {
        this.setState({ tema: "fun" });
      }
    };
    const handleCurrentTema = () => {
      if (tema === "fun") {
        return "FUN";
      }
      if (tema === "fresh") {
        return "FRESH";
      }
      return "COMPREHENSIVE";
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

    // let imgAvatar = avatar;
    // if (stateAvatar === "fresh") imgAvatar = avatarIjug;
    // if (stateAvatar === "comprehensive") imgAvatar = avatarIjug;
    const handleFirstSection = () => {
      if (tema === "fun") {
        return (
          <FirstSection className={handleCurrentTema()} ref={this.firstSection}>
            <img
              src={selamatDatang}
              className="selamat-datang"
              alt="selamat-datang"
            />
            <ButtonTema
              type="button"
              className="tema"
              onClick={() => {
                handleClickTema();
              }}
            >
              FUN
            </ButtonTema>
          </FirstSection>
        );
      }
      if (tema === "fresh") {
        return (
          <FirstSection2>
            <img
              src={avatar}
              style={{ display: "none" }}
              className="avatar"
              alt="avatar"
            />
            <ButtonTema
              type="button"
              className="tema"
              onClick={() => {
                handleClickTema();
              }}
            >
              FRESH
            </ButtonTema>
          </FirstSection2>
        );
      }
      return (
        <FirstSection3>
          <img
            src={ijug}
            style={{ display: "none" }}
            className="ijug"
            alt="ijug"
          />
          <ButtonTema
            type="button"
            className="tema"
            onClick={() => {
              handleClickTema();
            }}
          >
            COMPREHENSIVE
          </ButtonTema>
        </FirstSection3>
      );
    };
    return !done ? (
      <LoadingScreen>
        <FadeIn>
          <img className="logo-loading" src={logoGede2} alt="logo" />
          <Lottie options={defaultOptions} height={120} width={120} />
          {/* <ReactLoading className="loading-bar" type="bars" color="#F1CF33" /> */}
        </FadeIn>
      </LoadingScreen>
    ) : (
      <LandingPageContainer>
        <HeaderFooter color="dark">
          {handleFirstSection()}
          <SecondSection>
            <Ball
              onTouchStart={() => handleClickBall()}
              onClick={() => handleClickBall()}
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
