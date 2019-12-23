import React from "react";
// import PropTypes from 'prop-types';

import { LoadingRegisContainer } from "./style";

class LoadingRegis extends React.Component {
  render() {
    const { base, now } = this.props;
    return (
      <LoadingRegisContainer>
        <div className="loadingdiv">
          Loading... ({now}/{base})
          <div className="loadingbarcont">
            <div
              className="loadingbar"
              style={{ width: `calc(100% * ${now / base})` }}
            ></div>
          </div>
        </div>
      </LoadingRegisContainer>
    );
  }
}

LoadingRegis.propTypes = {};

export default LoadingRegis;
