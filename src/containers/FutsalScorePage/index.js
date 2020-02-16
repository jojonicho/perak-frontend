import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";
import { FutsalScorePageContainer, LoadingScreen } from "./style";
import ScoreCard from "../../components/ScoreCard";
import HeaderFooter from "../../components/HeaderFooter";
import logoGede2 from "../../asset/logoGede2.png";
import * as pinwheelData from "../../asset/pinwheelLoading.json";

class FutsalScorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      done: undefined
    };
  }

  componentDidMount() {
    this.getHistoryData();
  }

  getHistoryData() {
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    // const proxyUrl = ``;
    const historyUrl = `https://perak.cs.ui.ac.id/backend/api/match_history/futsal`;
    axios
      .get(proxyUrl + historyUrl, {})
      .then(res => {
        const { data } = res;
        this.setState({
          data,
          done: true
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
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: pinwheelData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const { data, done } = this.state;
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
        <Fade>
          <FutsalScorePageContainer>
            <div className="flex-container column" id="score-page">
              <span className="title" id="score-title">
                HASIL PERTANDINGAN FUTSAL
              </span>
              <div className="flex-container column" id="body-cont">
                {data.length > 0 ? (
                  this.renderHistory(data)
                ) : (
                  <h2 className="blm-ada">
                    Belum ada pertandingan yang berlangsung.
                  </h2>
                )}
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
