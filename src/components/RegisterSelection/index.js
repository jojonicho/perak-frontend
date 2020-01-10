import React from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { RegisterSelectionContainer } from "./style";
import HeaderFooter from "../HeaderFooter";
import SVGIcon from "./SVGIcon";

class RegisterSelection extends React.Component {
  state = {
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
      "orange-ellipse",
      "orange-green-ball-rect",
      "orange-ellipse-2",
      "purple-ball",
      "purple-yellow-ball-2",
      "orange-green-ball"
    ],
    id: [...Array(9).keys()],
    color: ["purple", "yellow", "orange", "green"],
    counter: Math.floor(Math.random() * 4)
  };

  render() {
    const { id, games, color, slug, decor } = this.state;
    let { counter } = this.state;
    return (
      <HeaderFooter color="dark">
        <RegisterSelectionContainer>
          <h1 className="title">DAFTARKAN DIRIMU SEKARANG</h1>
          <h1 className="choose">PILIH PERMAINANMU</h1>
          <Fade top cascade distance="100px" duration={1250}>
            {/* <SVGIcon name="purple-yellow-ball" width={90} height={90} />
            <SVGIcon name="black-white-rect" width={25} height={100} />
            <SVGIcon name="orange-ellipse" width={79} height={79} />
            <SVGIcon name="orange-ellipse-2" width={75} height={75} />
            <SVGIcon name="purple-ball" width={89} height={89} />
            <SVGIcon name="orange-green-ball-rect" width={93} height={61} />
            <SVGIcon name="purple-rect" width={95} height={95} />
            <SVGIcon name="orange-green-ball" width={79} height={79} /> */}
            <div className="game-container">
              {id.map(currentId => {
                if (counter < 3) counter += 1;
                else counter = 0;
                return (
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
