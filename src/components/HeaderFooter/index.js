import React from "react";
// import PropTypes from 'prop-types';

import { HeaderFooterContainer } from "./style";

class HeaderFooter extends React.Component {
  render() {
    const { children } = this.props;
    const colors = {
      green: { backgroundColor: "#22B3A5", color: "white" }
    };
    const color = "green";
    return (
      <HeaderFooterContainer>
        <div className="header" style={colors[color]}>
          <h2>PERAK</h2>
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
