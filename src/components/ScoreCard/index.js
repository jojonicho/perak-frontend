import React from "react";
// import PropTypes from 'prop-types';

import { ScoreCardContainer } from "./style";

class ScoreCard extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     color: ["purple", "pink", "green"]
  //   };
  // }

  render() {
    const {
      stage,
      teamAName,
      teamBName,
      teamALogo,
      teamBLogo,
      // is_a_win,
      // is_b_win,
      teamAGoal,
      teamBGoal,
      matchDate
    } = this.props;
    return (
      <ScoreCardContainer>
        <div className="flex-container column score-card">
          <span className="body-txt">{stage}</span>
          <div className="flex-container row">
            <div className="column teamA img-cont">
              <div className="flex-container">
                <img src={teamALogo} alt="" className="img-box" />
              </div>
              <span className="body-txt">{teamAName}</span>
            </div>
            <span className="score-txt">{teamAGoal}</span>
            <span className="score-txt">-</span>
            <span className="score-txt">{teamBGoal}</span>
            <div className="column teamB img-cont">
              <div className="flex-container">
                <img src={teamBLogo} alt="" className="img-box" />
              </div>
              <span className="body-txt">{teamBName}</span>
            </div>
          </div>
          <span className="match-date">{matchDate}</span>
        </div>
      </ScoreCardContainer>
    );
  }
}

ScoreCard.propTypes = {};

export default ScoreCard;
