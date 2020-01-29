import React from "react";
// import PropTypes from 'prop-types';
import crown from "../../asset/crown.png";
import { ScoreCardContainer } from "./style";

class ScoreCard extends React.Component {
  render() {
    const {
      index,
      stage,
      teamAName,
      teamBName,
      teamALogo,
      teamBLogo,
      isAwin,
      isBwin,
      teamAGoal,
      teamBGoal,
      matchDate
    } = this.props;
    // console.log(index)
    return (
      <ScoreCardContainer>
        <div className={`flex-container column score-card ${index}`}>
          <span className="body-txt">{stage}</span>
          <div className="flex-container row content">
            <div className={`column teamA img-cont ${isAwin && "crown-cont"}`}>
              <div className="flex-container column">
                {isAwin && <img src={crown} alt="" className="crown" />}
                <img src={teamALogo} alt="" className="img-box" />
              </div>
              <span className="body-txt">{teamAName}</span>
            </div>
            <span className="score-txt">{teamAGoal}</span>
            <span className="score-txt">-</span>
            <span className="score-txt">{teamBGoal}</span>
            <div className={`column teamB img-cont ${isBwin && "crown-cont"}`}>
              <div className="flex-container column">
                {isBwin && <img src={crown} alt="" className="crown" />}
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
