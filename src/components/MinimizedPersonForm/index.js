import React from "react";

import { MinimizedPersonFormContainer } from "./style";

class MinimizedPersonForm extends React.Component {
  render() {
    const { namaLengkap, setShowPlayer } = this.props;

    return (
      <MinimizedPersonFormContainer onClick={() => setShowPlayer()}>
        + {namaLengkap}
      </MinimizedPersonFormContainer>
    );
  }
}

MinimizedPersonForm.propTypes = {};

export default MinimizedPersonForm;
