import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

import HeaderFooter from "../../components/HeaderFooter";
// import logoGede from "../../asset/logoGede.png";
import avatar from "../../asset/avatar.png";
import prayaFerdi from "../../asset/prayaFerdi.png";
import om from "../../asset/om.png";

import {
  LandingPageContainer,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection
} from "./style";

class LandingPage extends React.Component {
  render() {
    return (
      <LandingPageContainer>
        <HeaderFooter color="blue">
          <FirstSection>
            <h1 className="title">SELAMAT DATANG</h1>
            <img className="avatar" src={avatar} alt="avatar" />
            <div className="tema">
              <p className="yellowed">FUN</p>
              <div className="circle yellowedCircle"></div>
              <p>FRESH</p>
              <div className="circle"></div>
              <p>COMPREHENSIVE</p>
            </div>
          </FirstSection>
          <SecondSection>
            <h1 className="apa-itu">APA ITU PERAK?</h1>
            <p className="full-desc">
              Lorem ipsum dolor sit amet et delectus accommodare his consul
              copiosae legendos at vix ad putent delectus delicata usu. Vidit
              dissentiet eos cu eum an brute copiosae hendrerit. Eos erant
              dolorum an. Per facer affert ut. Mei iisque mentitum moderatius
              cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te
              facilisis mnesarchum qui posse omnium mediocritatem est cu. Modus
              argumentum ne qui tation efficiendi in eos. Ei mea falli legere
              efficiantur et tollit aliquip debitis mei. No deserunt
              mediocritatem mel. Lorem
            </p>
            <img className="praya-ferdi" src={prayaFerdi} alt="praya ferdi" />
            <img className="om" src={om} alt="om" />
          </SecondSection>
          <ThirdSection>
            <h1>COUNT DOWN</h1>
          </ThirdSection>
          <FourthSection>
            <h1 className="liga-title">LIGA 2020</h1>
            <div className="daftar-button">
              <h1>DAFTAR SEKARANG</h1>
            </div>
          </FourthSection>
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

export default LandingPage;
// export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
