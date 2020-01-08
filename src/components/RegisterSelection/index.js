import React from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { RegisterSelectionContainer } from "./style";
import HeaderFooter from "../HeaderFooter";

class RegisterSelection extends React.Component {
  state = {
    games: [
      "futsal",
      "dota 2",
      "csgo",
      "mobile legend",
      "super smash bros ultimate",
      "mario kart 8 deluxe",
      "fifa 20",
      "catur",
      "codenames"
    ],
    id: [...Array(9).keys()],
    color: ["purple", "yellow", "orange", "green"]
  };

  render() {
    const { state } = this;
    let counter = Math.floor(Math.random() * 4);
    return (
      <HeaderFooter color="blue">
        <RegisterSelectionContainer>
          <h1 className="title">DAFTARKAN DIRIMU SEKARANG</h1>
          <h1 className="choose">PILIH PERMAINANMU</h1>
          <Fade top cascade distance="100px" duration={1250}>
            <div className="game-container">
              {state.id.map(id => {
                if (counter < 3) counter += 1;
                else counter = 0;
                return (
                  <Link
                    to={`/daftar/${state.games[id]}`}
                    className={`games ${state.color[counter]} ${
                      state.games[id].split(" ")[0]
                    }`}
                  >
                    <h1>{state.games[id].toUpperCase()}</h1>
                  </Link>
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

export default RegisterSelection;
