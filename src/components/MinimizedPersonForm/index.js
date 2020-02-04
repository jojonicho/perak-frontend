import React from "react";

import { MinimizedPersonFormContainer, MinimizePersonButton } from "./style";
import edit from "../../asset/edit.svg";
import hapus from "../../asset/hapus.svg";

class MinimizedPersonForm extends React.Component {
  render() {
    const {
      namaLengkap,
      kontak,
      email,
      nomorTelepon,
      setShowPlayer,
      deletePlayer
    } = this.props;

    const dotDot = "...";

    return (
      <MinimizedPersonFormContainer>
        <div className="upperMinimized">
          <div className="leftSideUpper">
            <p className="nama">
              {namaLengkap.length > 15
                ? namaLengkap.substring(0, 16) + dotDot
                : namaLengkap}
            </p>
            <MinimizePersonButton onClick={() => setShowPlayer()}>
              <img className="pencil" src={edit} alt="edit" /> Edit
            </MinimizePersonButton>
          </div>
          {deletePlayer ? (
            <button
              type="button"
              className="x-button"
              onClick={() => deletePlayer()}
            >
              <img className="trash" src={hapus} alt="hapus" />
              Hapus Pemain
            </button>
          ) : null}
        </div>
        {kontak ? (
          <div className="garisContainer">
            <div className="garis"></div>
          </div>
        ) : null}
        {kontak ? (
          <div className="bottomMinimized">
            <div className="kontak info">
              <b>ID LINE</b>
              <p>{kontak}</p>
            </div>
            <div className="telepon info">
              <b>No Telepon</b>
              <p>{nomorTelepon}</p>
            </div>
            <div className="email info">
              <b>Email</b>
              <p>{email}</p>
            </div>
          </div>
        ) : null}
      </MinimizedPersonFormContainer>
    );
  }
}

MinimizedPersonForm.propTypes = {};

export default MinimizedPersonForm;
