import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

import HeaderFooter from "../../components/HeaderFooter";
// import logoGede from "../../asset/logoGede.png";

import { LandingPageContainer } from "./style";

class LandingPage extends React.Component {
  render() {
    return (
      <LandingPageContainer>
        <HeaderFooter color="blue">
          <section></section>
        </HeaderFooter>
      </LandingPageContainer>
    );
  }
}

LandingPage.propTypes = {};

// function mapStateToProps(state) {
//   return {};
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
