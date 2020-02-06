/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import Lottie from "react-lottie";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import FadeIn from "react-fade-in";
import { RegisterSelectionContainer, LoadingScreen } from "./style";
import HeaderFooter from "../HeaderFooter";
import SVGIcon from "./SVGIcon";
import logoGede2 from "../../asset/logoGede2.png";
import * as pinwheelData from "../../asset/pinwheelLoading.json";
import dotaCompressed from "../../asset/dotaCompressed.png";
import csgoCompressed from "../../asset/csgoCompressed.png";
import marioKartCompressed from "../../asset/marioKartCompressed.png";
import mobileLegendsCompressed from "../../asset/mobileLegendsCompressed.png";
import smashBrosCompressed from "../../asset/smashBrosCompressed.png";
import fifaCompressed from "../../asset/fifaCompressed.png";
import caturCompressed from "../../asset/caturCompressed.png";
import codenamesCompressed from "../../asset/codenamesCompressed.png";
import futsalCompressed from "../../asset/futsalCompressed.jpg";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: pinwheelData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class RegisterSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      done: undefined,
      games: [
        "futsal",
        "dota 2",
        "csgo",
        "mobile legend",
        "super smash",
        "mario kart",
        "fifa 20",
        "catur",
        "code names"
      ],
      slug: [
        "futsal",
        "dota",
        "csgo",
        "mlbb",
        "ssbu",
        "mariokart",
        "fifa",
        "catur",
        "codenames"
      ],
      decor: [
        "purple-yellow-ball",
        "black-white-rect",
        "purple-rect",
        "orange-ellipse-2",
        "orange-green-ball-rect",
        "orange-green-ball",
        "purple-ball",
        "purple-yellow-ball-2",
        "orange-ellipse"
      ],
      id: [...Array(9).keys()],
      color: ["purple", "yellow", "orange", "green"],
      counter: Math.floor(Math.random() * 4),
      magic: false
    };
    this.letMagicHappens = this.letMagicHappens.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 2000);
  }

  letMagicHappens() {
    this.setState({ magic: true });
  }

  render() {
    const { done, id, games, color, slug, decor, magic } = this.state;
    let { counter } = this.state;
    const { letMagicHappens } = this;
    return !done ? (
      <LoadingScreen>
        <FadeIn>
          <img className="logo-loading" src={logoGede2} alt="logo" />
          <Lottie options={defaultOptions} height={120} width={120} />
          {/* <ReactLoading className="loading-bar" type="bars" color="#F1CF33" /> */}
        </FadeIn>
      </LoadingScreen>
    ) : (
      <HeaderFooter color="dark">
        <RegisterSelectionContainer className={magic ? "magic" : ""}>
          <h1 className="title">DAFTARKAN DIRIMU SEKARANG</h1>
          <h1 className="choose">
            <span className="mauapa" onClick={letMagicHappens}>
              PILIH
            </span>{" "}
            PERMAINANMU
          </h1>
          <Fade top distance="100px" duration={1250}>
            {/* <SVGIcon name="purple-yellow-ball" width={90} height={90} />
            <SVGIcon name="black-white-rect" width={25} height={100} />
            <SVGIcon name="orange-ellipse" width={79} height={79} />
            <SVGIcon name="orange-ellipse-2" width={75} height={75} />
            <SVGIcon name="purple-ball" width={89} height={89} />
            <SVGIcon name="orange-green-ball-rect" width={93} height={61} />
            <SVGIcon name="purple-rect" width={95} height={95} />
            <SVGIcon name="orange-green-ball" width={79} height={79} /> */}
            <img src={dotaCompressed} alt="" className="hide" />
            <img src={csgoCompressed} alt="" className="hide" />
            <img src={marioKartCompressed} alt="" className="hide" />
            <img src={fifaCompressed} alt="" className="hide" />
            <img src={mobileLegendsCompressed} alt="" className="hide" />
            <img src={smashBrosCompressed} alt="" className="hide" />
            <img src={caturCompressed} alt="" className="hide" />
            <img src={codenamesCompressed} alt="" className="hide" />
            <img src={futsalCompressed} alt="" className="hide" />
            <div className="game-container">
              {id.map(currentId => {
                if (counter < 3) counter += 1;
                else counter = 0;

                return slug[currentId] === "futsal" ? null : (
                  <Button
                    to={`/daftar/${slug[currentId]}`}
                    className={`games ${color[counter]} ${
                      games[currentId].split(" ")[0]
                    }`}
                    title={games[currentId].toUpperCase()}
                    decor={decor[currentId]}
                  />
                );
              })}
            </div>
          </Fade>
        </RegisterSelectionContainer>
      </HeaderFooter>
    );
  }
}

RegisterSelection.propTypes = {};

function Button(props) {
  const prop = props;
  return (
    <Link to={prop.to} className={prop.className}>
      <SVGIcon name={prop.decor} />
      <h1>{prop.title}</h1>
    </Link>
  );
}

export default RegisterSelection;
