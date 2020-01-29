import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import axios from "axios";
import Fade from "react-reveal/Fade";
import { FutsalScorePageContainer } from "./style";
// import { useFetch } from "./useFetch";
import ScoreCard from "../../components/ScoreCard";
import HeaderFooter from "../../components/HeaderFooter";
// import LoadingScreen from "../../components/LoadingScreen";

class FutsalScorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getHistoryData();
  }

  getHistoryData() {
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const historyUrl = `https://perak.cs.ui.ac.id/backend/api/match_history/futsal`;
    axios
      .get(proxyUrl + historyUrl, {})
      .then(res => {
        const { data } = res;
        this.setState({
          data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  pickColor = index => {
    const i = index % 3;
    console.log(i);
    if (i === 2) {
      return "blue";
    }
    if (i === 1) {
      return "pink";
    }
    return "green";
  };

  renderHistory = () => {
    const { data } = this.state;
    const allHistory = data.map((item, index) => (
      <ScoreCard
        index={this.pickColor(index + 1)}
        stage={item.stage}
        teamAName={item.team_a.name}
        teamBName={item.team_b.name}
        teamALogo={item.team_a.team_logo}
        teamBLogo={item.team_b.team_logo}
        teamAGoal={item.team_a_goal}
        teamBGoal={item.team_b_goal}
        matchDate={item.match_date}
        isAwin={item.is_a_win}
        isBwin={item.is_b_win}
      />
    ));
    return allHistory;
  };

  render() {
    const { data } = this.state;
    return (
      <HeaderFooter color="dark">
        <Fade>
          <FutsalScorePageContainer>
            {/* <ScoreCard
              stage="FINAL"
              teamAName="Tim A FC"
              teamBName="Tim B FC"
              teamALogo="https://gitlab.com/uploads/-/system/user/avatar/3068699/avatar.png"
              teamBLogo="https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg"
              teamAGoal="3"
              teamBGoal="1"
              matchDate="25/01/2020"
            /> */}

            {/* <div>
              {data && this.renderHistory(data)}
            </div> */}

            <div className="flex-container column" id="score-page">
              <span className="title" id="score-title">
                HASIL PERTANDINGAN
              </span>
              <div className="flex-container column" id="body-cont">
                {data && this.renderHistory(data)}
              </div>
            </div>
          </FutsalScorePageContainer>
        </Fade>
      </HeaderFooter>
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
