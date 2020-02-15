import React from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Lottie from "react-lottie";
import FadeIn from "react-fade-in";
import { BarLoader } from "react-spinners";
import { FutsalScorePageContainer, LoadingScreen } from "./style";
import ScoreCard from "../../components/ScoreCard";
import HeaderFooter from "../../components/HeaderFooter";
import logoGede2 from "../../asset/logoGede2.png";
import * as pinwheelData from "../../asset/pinwheelLoading.json";

class FutsalScorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      scoreData: [],
      done: undefined,
      loadingMore: undefined
    };
  }

  componentDidMount() {
    this.getHistoryData();
  }

  getHistoryData() {
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    const historyUrl = `https://perak.cs.ui.ac.id/backend/api/match_history/futsal/?size=4`;
    axios
      .get(proxyUrl + historyUrl, {})
      .then(res => {
        const { data } = res;
        this.setState({
          allData: data,
          scoreData: data.result,
          done: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getNextData = url => {
    const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
    axios
      .get(proxyUrl + url, {})
      .then(
        this.setState({
          loadingMore: true
        })
      )
      .then(res => {
        const { data } = res;
        const { scoreData } = this.state;
        const tempResult = scoreData;
        data.result.map(item => tempResult.push(item));
        this.setState({
          allData: data,
          scoreData: tempResult,
          loadingMore: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  pickColor = index => {
    const i = index % 3;
    if (i === 2) {
      return "blue";
    }
    if (i === 1) {
      return "pink";
    }
    return "green";
  };

  renderHistory = () => {
    const { scoreData } = this.state;
    console.log(scoreData);
    const allHistory = scoreData.map((item, index) => (
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
    const { allData, scoreData, done, loadingMore } = this.state;
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
                HASIL PERTANDINGAN
              </span>
              <div className="flex-container column" id="body-cont">
                {scoreData.length > 0 ? (
                  this.renderHistory(scoreData)
                ) : (
                  <h2 className="blm-ada">
                    Belum ada pertandingan yang berlangsung.
                  </h2>
                )}
              </div>
              {loadingMore ? (
                <div className="container" id="load">
                  <BarLoader height={15} width={300} color="#31B3A6" />
                </div>
              ) : (
                <div className="container" id="load">
                  {allData.next !== null && (
                    <button
                      type="button"
                      onClick={() => this.getNextData(allData.next)}
                      id="button"
                    >
                      Load More
                    </button>
                  )}
                </div>
              )}
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
