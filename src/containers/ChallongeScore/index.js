import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import HeaderFooter from "../../components/HeaderFooter";
import { ChallongeScoreContainer } from "./style";
import { Games } from "./constant";

class ChallongeScore extends React.Component {
  render() {
    const { props } = this;
    const Game = Games[props.gameId];
    return (
      <HeaderFooter color="dark">
        <ChallongeScoreContainer>
          <h1 className="title">{Game.title}</h1>
          <div className="con bracket">{Game.bracket}</div>
        </ChallongeScoreContainer>
      </HeaderFooter>
    );
  }
}

// ChallongeScore.propTypes = {

// };

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(ChallongeScore);
