import React from "react";
// import PropTypes from "prop-types";

import { Section3Container } from "./style";

class Section3 extends React.Component {
  render() {
    return (
      <Section3Container>
        <div className="section-3">
          <h1 className="title">
            RABU BARU -<span> RABU BAHAGIA</span>
          </h1>
          <p className="desc">
            Rabu Baru – Rabu Bahagia merupakan wadah refreshing seluruh elemen
            Fasilkom yang berupa penampilan-penampilan musik dari elemen
            mahasiswa maupun elemen non-mahasiswa.
          </p>
        </div>
      </Section3Container>
    );
  }
}

Section3.propTypes = {};

export default Section3;
