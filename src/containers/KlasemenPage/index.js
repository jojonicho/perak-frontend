import React from "react";
import Klasemen from "../../components/Klasemen";
import HeaderFooter from "../../components/HeaderFooter";
import { KlasemenPageContainer } from "./style";

class KlasemenPage extends React.Component {
  render() {
    return (
      <HeaderFooter color="dark">
        <KlasemenPageContainer>
          <h1 className="title">KLASEMEN FASE GROUP</h1>
          <Klasemen id={1} />
          <Klasemen id={2} />
        </KlasemenPageContainer>
      </HeaderFooter>
    );
  }
}

export default KlasemenPage;
