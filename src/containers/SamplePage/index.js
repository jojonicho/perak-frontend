import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SamplePageContainer } from "./style";
import { aksi, ketik } from "./actions";

class SamplePage extends React.Component {
  state = {
    ketiak: ""
  };

  ketikan = e => {
    console.log(e.target.value);
    this.setState({
      ketiak: e.target.value
    });
  };

  render() {
    const { state } = this;
    const { props } = this;
    return (
      <SamplePageContainer>
        <div>
          {state.data}
          <button type="button" onClick={props.aksi}>
            basfbisd
          </button>
          <input onChange={this.ketikan} />
          <button type="button" onClick={() => ketik(state.ketiak)}>
            apalah
          </button>
          <p>
            {state.ketikan && state.ketikan.length}
            {state.ketikan ? state.ketikan.length : ""}
          </p>
        </div>
      </SamplePageContainer>
    );
  }
}

// SamplePage.propTypes = {};

function mapStateToProps(state) {
  return {
    data: state.samplePage.data,
    ketikan: state.samplePage.ketik
  };
}

function mapDispatchToProps(dispatch) {
  return {
    aksi: () => dispatch(aksi()),
    ketik: ketikan => dispatch(ketik(ketikan))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SamplePage);
