import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { FutsalScorePageContainer } from "./style";
import ScoreCard from "../../components/ScoreCard";

class FutsalScorePage extends React.Component {
  render() {
    return (
      <FutsalScorePageContainer>
        <ScoreCard
          stage="FINAL"
          teamAName="Tim A FC"
          teamBName="Tim B FC"
          teamALogo="https://gitlab.com/uploads/-/system/user/avatar/3068699/avatar.png"
          teamBLogo="https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg"
          teamAGoal="3"
          teamBGoal="1"
          matchDate="25/01/2020"
        />
      </FutsalScorePageContainer>
    );
  }
}

FutsalScorePage.propTypes = {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FutsalScorePage);
