import React from "react";
import Klasemen from "../../components/Klasemen";

import { KlasemenPageContainer } from "./style";

class KlasemenPage extends React.Component {
  render() {
    return (
      <KlasemenPageContainer>
        <h1 className="title">KLASEMEN FASE GROUP</h1>
        <Klasemen id={1} />
        <Klasemen id={2} />
      </KlasemenPageContainer>
    );
  }
}

export default KlasemenPage;
