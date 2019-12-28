import React from "react";
// import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import { HeaderFooterContainer } from "./style";

class HeaderFooter extends React.Component {
  render() {
    const { children, color } = this.props;
    const colors = {
      green: { backgroundColor: "#22B3A5", color: "white" },
      blue: { backgroundColor: "#454FCB", color: "white" }
    };
    return (
      <HeaderFooterContainer>
        <div className="header" style={colors[color]}>
          <Link to="/" className="no-decor">
            <h2>PERAK</h2>
          </Link>
        </div>
        <div className="childcontainer">{children}</div>
        <div className="footer" style={colors[color]}>
          <p>Copyright 2019 apalah apalah</p>
        </div>
      </HeaderFooterContainer>
    );
  }
}

HeaderFooter.propTypes = {};

export default HeaderFooter;
