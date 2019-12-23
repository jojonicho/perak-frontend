import React from "react";

import { MinimizedPersonFormContainer, MinimizePersonButton } from "./style";

class MinimizedPersonForm extends React.Component {
  render() {
    const { namaLengkap, setShowPlayer, deletePlayer } = this.props;

    return (
      <MinimizedPersonFormContainer>
        <MinimizePersonButton onClick={() => setShowPlayer()}>
          + {namaLengkap}
        </MinimizePersonButton>
        <button
          type="button"
          className="x-button"
          onClick={() => deletePlayer()}
        >
          x
        </button>
      </MinimizedPersonFormContainer>
    );
  }
}

MinimizedPersonForm.propTypes = {};

export default MinimizedPersonForm;
