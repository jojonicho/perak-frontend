import React from "react";
// import PropTypes from "prop-types";

import { Section2Container } from "./style";

class Section2 extends React.Component {
  render() {
    return (
      <Section2Container>
        <div className="section-2">
          <p className="desc">
            Biru Merah Mencari Bintang adalah sebuah audisi penampil untuk
            seluruh elemen Fasilkom. Seluruh elemen Fasilkom diperbolehkan
            menampilkan hiburan yang dapat berupa penampilan musik band,
            penampilan musik, stand up comedy, dan bakat-bakat lain yang menarik
            untuk bisa ditampilkan kepada para seluruh elemen Fasilkom.
          </p>
        </div>
      </Section2Container>
    );
  }
}

Section2.propTypes = {};

export default Section2;
