import React from "react";
import { withRouter } from "react-router-dom";
// import PropTypes from 'prop-types';

class AlwaysTop extends React.Component {
  componentDidUpdate(prevProps) {
    const { props } = this;
    if (props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { props } = this;
    return props.children;
  }
}

// AlwaysTop.propTypes = {

// };

export default withRouter(AlwaysTop);
