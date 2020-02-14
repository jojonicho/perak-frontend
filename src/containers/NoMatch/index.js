import React from "react";
import Fade from "react-reveal/Fade";
import Wobble from "react-reveal/Wobble";
import HeaderFooter from "../../components/HeaderFooter";

import { NoMatchContainer } from "./style";

class NoMatch extends React.PureComponent {
  render() {
    return (
      <HeaderFooter color="dark">
        <NoMatchContainer>
          <Fade left duration={2400}>
            Is it functional?
          </Fade>
          <Fade right delay={2400} duration={3000}>
            Is it worth it to use react?
          </Fade>
          <Fade top delay={5400} duration={3000}>
            Is this an error page?
          </Fade>
          <Fade bottom cascade delay={7900} duration={3000}>
            <Wobble duration={6000}>MY EYES</Wobble>
          </Fade>
        </NoMatchContainer>
      </HeaderFooter>
    );
  }
}

export default NoMatch;
